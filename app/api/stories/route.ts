import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET — approved stories (최신 20개)
export async function GET() {
  const { data, error } = await supabase
    .from('stories')
    .select('id, name, country, country_emoji, content, lang, created_at')
    .eq('approved', true)
    .order('created_at', { ascending: false })
    .limit(20);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ stories: data });
}

// POST — 새 경험담 제출
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, country, country_emoji, content, lang } = body;

  // 유효성 검사
  if (!name || !content || !lang) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  if (content.length > 500) {
    return NextResponse.json({ error: 'Content too long' }, { status: 400 });
  }
  if (name.length > 50) {
    return NextResponse.json({ error: 'Name too long' }, { status: 400 });
  }

  const { error } = await supabase.from('stories').insert([
    {
      name: name.trim(),
      country: country?.trim() ?? '',
      country_emoji: country_emoji ?? '',
      content: content.trim(),
      lang,
      approved: false, // 관리자 승인 후 표시
    },
  ]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
