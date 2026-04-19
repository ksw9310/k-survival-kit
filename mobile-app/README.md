# K-Survival Kit — Mobile App

React Native / Expo app for K-Survival Kit.

## Quick Start

### 1. Install dependencies
```bash
cd mobile-app
npm install
```

### 2. Start the dev server
```bash
npx expo start
```

### 3. Run on your phone
- **iPhone/Android**: Download **Expo Go** from the App Store or Google Play
- Scan the QR code shown in terminal → app opens instantly on your phone
- No cable needed

---

## Screens

| Tab | Description |
|-----|-------------|
| 🏠 Home | Quick guide cards + emergency number shortcuts |
| 📖 Guides | All guides by category (ARC, Bank, SIM, etc.) |
| 🆘 Emergency | One-tap call buttons + Korean emergency phrases |
| 📍 Nearby | Google Maps shortcuts for hospitals, ATM, pharmacy, etc. |

---

## Publishing to App Store / Google Play

### iOS (App Store)
1. Apple Developer account required ($99/year)
2. `npx expo build:ios` or use EAS Build
3. Submit via Xcode or Transporter

### Android (Google Play)
1. Google Play Console account ($25 one-time)
2. `npx expo build:android`
3. Upload AAB file to Play Console

### Easiest Option: Expo EAS
```bash
npm install -g eas-cli
eas login
eas build --platform all
```
EAS handles signing, building, and submission automatically.

---

## Project Structure

```
mobile-app/
├── app/
│   ├── _layout.tsx          # Root layout
│   ├── (tabs)/
│   │   ├── _layout.tsx      # Tab bar setup
│   │   ├── index.tsx        # Home screen
│   │   ├── guides.tsx       # Guides list
│   │   ├── emergency.tsx    # Emergency screen
│   │   └── nearby.tsx       # Find nearby screen
│   └── guide/
│       └── [slug].tsx       # Guide detail screen
├── assets/images/           # App icon, splash screen
├── app.json                 # Expo config
└── package.json
```
