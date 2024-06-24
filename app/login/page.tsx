'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { SubmitButton } from '@/components/Button';
import { Input } from '@/components/Input';

const Login = ({ searchParams }: { searchParams: { message: string } }) => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (result.error) {
      window.location.href = `/login?message=${result.error}`;
      console.error(result.error);
    } else {
      router.push('/');
    }
  };

  return (
    <div className='flex-1 flex flex-col w-full px-8 sm:max-w-sm justify-center gap-2'>
      <Link
        href='/'
        className='absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1'
        >
          <polyline points='15 18 9 12 15 6' />
        </svg>{' '}
        Back
      </Link>

      <form
        className='flex-1 flex flex-col w-full justify-center gap-1 text-foreground'
        onSubmit={handleSubmit}
      >
        <Input
          type='email'
          name='email'
          label='이메일'
          placeholder='you@example.com'
          required
        />
        <Input
          type='password'
          name='password'
          label='비밀번호'
          placeholder='••••••••'
          required
        />
        <SubmitButton
          formAction={() => handleSubmit}
          className='bg-green-700 rounded-md px-4 py-2 text-foreground my-2'
          pendingText='Signing In...'
        >
          로그인
        </SubmitButton>
        <Link
          href='/signup'
          className='bg-green-700 rounded px-4 py-2 text-foreground my-2 w-full text-center'
        >
          회원가입
        </Link>
        {searchParams?.message && (
          <p className='mt-4 p-4 bg-foreground/10 text-foreground text-center'>
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
