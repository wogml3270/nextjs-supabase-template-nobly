'use server';

import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const supabase = createClient();

  const formData = await req.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return NextResponse.json(
      { error: '사용자를 인증할 수 없습니다. 이메일 또는 비밀번호를 확인해주세요.' },
      { status: 400 },
    );
  }

  return NextResponse.json({ success: true }, { status: 303 });
}
