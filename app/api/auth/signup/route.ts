'use server';

import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const supabase = createClient();

  const formData = await req.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const username = formData.get('username') as string;
  const en_name = formData.get('en_name') as string;
  const extension_number = formData.get('extension_number') as string;
  const phone = formData.get('phone') as string;
  const manager_role = formData.get('manager_role') as string;
  const business_card = formData.get('business_card') as string;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${req.nextUrl.origin}/auth/callback`,
      data: {
        email,
        username,
        en_name,
        extension_number,
        phone,
        manager_role,
        business_card,
        role: 'admin',
      },
    },
  });

  if (error) {
    return NextResponse.json({ error: '회원가입에 실패했습니다.' }, { status: 400 });
  }

  return NextResponse.json(
    {
      success: '회원가입에 성공했습니다! 이메일을 확인하여 계정을 활성화하세요.',
    },
    { status: 303 },
  );
}
