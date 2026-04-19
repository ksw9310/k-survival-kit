'use client';

/**
 * Design reminder for this file:
 * Pro identity here is intentionally lightweight and calm.
 * The goal is not enterprise authentication, but a trustworthy local profile layer
 * that makes the workspace feel personal, persistent, and continuous across Pro pages.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type StoredWorkspaceState = {
  checked: string[];
  note: string;
  updatedAt: string | null;
};

export type ProProfile = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type WorkspaceCollection = Record<string, StoredWorkspaceState>;
type WorkspaceStore = Record<string, WorkspaceCollection>;

type ProSessionContextValue = {
  hydrated: boolean;
  profile: ProProfile | null;
  activeUserId: string;
  getWorkspace: (slug: string) => StoredWorkspaceState | null;
  saveWorkspace: (slug: string, draft: StoredWorkspaceState) => void;
  resetWorkspace: (slug: string) => void;
  signIn: (payload: { name: string; email: string }) => { ok: boolean; message?: string };
  signOut: () => void;
};

const profileStorageKey = 'k-survival-kit-pro-profile';
const workspaceStorageKey = 'k-survival-kit-pro-workspaces';
const guestUserId = 'guest';

const ProSessionContext = createContext<ProSessionContextValue | null>(null);

function sanitizeWorkspace(input: unknown): StoredWorkspaceState {
  if (!input || typeof input !== 'object') {
    return { checked: [], note: '', updatedAt: null };
  }

  const raw = input as Partial<StoredWorkspaceState>;

  return {
    checked: Array.isArray(raw.checked)
      ? raw.checked.filter((entry): entry is string => typeof entry === 'string')
      : [],
    note: typeof raw.note === 'string' ? raw.note : '',
    updatedAt: typeof raw.updatedAt === 'string' ? raw.updatedAt : null,
  };
}

function sanitizeWorkspaceStore(input: unknown): WorkspaceStore {
  if (!input || typeof input !== 'object') {
    return { [guestUserId]: {} };
  }

  const store = input as Record<string, unknown>;
  const result: WorkspaceStore = {};

  for (const [userId, value] of Object.entries(store)) {
    if (!value || typeof value !== 'object') {
      continue;
    }

    const collection: WorkspaceCollection = {};

    for (const [slug, draft] of Object.entries(value as Record<string, unknown>)) {
      collection[slug] = sanitizeWorkspace(draft);
    }

    result[userId] = collection;
  }

  if (!result[guestUserId]) {
    result[guestUserId] = {};
  }

  return result;
}

function sanitizeProfile(input: unknown): ProProfile | null {
  if (!input || typeof input !== 'object') {
    return null;
  }

  const raw = input as Partial<ProProfile>;

  if (typeof raw.id !== 'string' || typeof raw.name !== 'string' || typeof raw.email !== 'string') {
    return null;
  }

  return {
    id: raw.id,
    name: raw.name,
    email: raw.email,
    createdAt: typeof raw.createdAt === 'string' ? raw.createdAt : new Date().toISOString(),
  };
}

function createProfileId(email: string) {
  return `profile:${email.trim().toLowerCase()}`;
}

function pickNewerDraft(
  current: StoredWorkspaceState | undefined,
  incoming: StoredWorkspaceState | undefined,
) {
  if (!current) {
    return incoming;
  }

  if (!incoming) {
    return current;
  }

  const currentTime = current.updatedAt ? new Date(current.updatedAt).getTime() : 0;
  const incomingTime = incoming.updatedAt ? new Date(incoming.updatedAt).getTime() : 0;

  return incomingTime >= currentTime ? incoming : current;
}

export default function ProSessionProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [profile, setProfile] = useState<ProProfile | null>(null);
  const [workspaceStore, setWorkspaceStore] = useState<WorkspaceStore>({ [guestUserId]: {} });

  useEffect(() => {
    try {
      const rawProfile = window.localStorage.getItem(profileStorageKey);
      const rawWorkspaces = window.localStorage.getItem(workspaceStorageKey);

      if (rawProfile) {
        setProfile(sanitizeProfile(JSON.parse(rawProfile)));
      }

      if (rawWorkspaces) {
        setWorkspaceStore(sanitizeWorkspaceStore(JSON.parse(rawWorkspaces)));
      }
    } catch {
      window.localStorage.removeItem(profileStorageKey);
      window.localStorage.removeItem(workspaceStorageKey);
      setProfile(null);
      setWorkspaceStore({ [guestUserId]: {} });
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    if (profile) {
      window.localStorage.setItem(profileStorageKey, JSON.stringify(profile));
    } else {
      window.localStorage.removeItem(profileStorageKey);
    }
  }, [hydrated, profile]);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(workspaceStorageKey, JSON.stringify(workspaceStore));
  }, [hydrated, workspaceStore]);

  const activeUserId = profile?.id ?? guestUserId;

  const getWorkspace = useCallback(
    (slug: string) => {
      const activeCollection = workspaceStore[activeUserId] ?? {};
      return activeCollection[slug] ?? null;
    },
    [activeUserId, workspaceStore],
  );

  const saveWorkspace = useCallback(
    (slug: string, draft: StoredWorkspaceState) => {
      setWorkspaceStore((current) => ({
        ...current,
        [activeUserId]: {
          ...(current[activeUserId] ?? {}),
          [slug]: draft,
        },
      }));
    },
    [activeUserId],
  );

  const resetWorkspace = useCallback(
    (slug: string) => {
      setWorkspaceStore((current) => {
        const nextCollection = { ...(current[activeUserId] ?? {}) };
        delete nextCollection[slug];

        return {
          ...current,
          [activeUserId]: nextCollection,
        };
      });
    },
    [activeUserId],
  );

  const signIn = useCallback(
    ({ name, email }: { name: string; email: string }) => {
      const normalizedName = name.trim();
      const normalizedEmail = email.trim().toLowerCase();

      if (!normalizedName || !normalizedEmail) {
        return { ok: false, message: 'Enter both your name and email to continue.' };
      }

      const nextProfile: ProProfile = {
        id: createProfileId(normalizedEmail),
        name: normalizedName,
        email: normalizedEmail,
        createdAt: new Date().toISOString(),
      };

      setWorkspaceStore((current) => {
        const guestCollection = current[guestUserId] ?? {};
        const profileCollection = current[nextProfile.id] ?? {};
        const mergedCollection: WorkspaceCollection = { ...profileCollection };

        for (const slug of new Set([...Object.keys(guestCollection), ...Object.keys(profileCollection)])) {
          const winner = pickNewerDraft(profileCollection[slug], guestCollection[slug]);
          if (winner) {
            mergedCollection[slug] = winner;
          }
        }

        return {
          ...current,
          [nextProfile.id]: mergedCollection,
        };
      });

      setProfile(nextProfile);
      return { ok: true };
    },
    [],
  );

  const signOut = useCallback(() => {
    setProfile(null);
  }, []);

  const value = useMemo<ProSessionContextValue>(
    () => ({
      hydrated,
      profile,
      activeUserId,
      getWorkspace,
      saveWorkspace,
      resetWorkspace,
      signIn,
      signOut,
    }),
    [activeUserId, getWorkspace, hydrated, profile, resetWorkspace, saveWorkspace, signIn, signOut],
  );

  return <ProSessionContext.Provider value={value}>{children}</ProSessionContext.Provider>;
}

export function useProSession() {
  const context = useContext(ProSessionContext);

  if (!context) {
    throw new Error('useProSession must be used within ProSessionProvider');
  }

  return context;
}
