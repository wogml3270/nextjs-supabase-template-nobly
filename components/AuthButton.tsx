'use client';

import { createClient } from '@/utils/supabase/client';
import axios from 'axios';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const handleSignOut = async () => {
    try {
      const response = await axios.post('/api/auth/signout');
      if (response.status === 200) {
        redirect('/');
      }
    } catch (error) {
      console.error('로그아웃 실패', error);
    }
  };

  return user ? (
    <div className='flex items-center gap-5'>
      환영합니다, {user.user_metadata.username}님
      <button
        onClick={handleSignOut}
        className='py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover'
      >
        로그아웃
      </button>
    </div>
  ) : (
    <Link
      href='/login'
      className='py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover'
    >
      로그인
    </Link>
  );
}
