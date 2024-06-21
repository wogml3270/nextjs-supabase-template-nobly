'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { SubmitButton } from '@/components/Button';
import { Input } from '@/components/Input';

const Signup = ({ searchParams }: { searchParams: { message: string } }) => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (result.error) {
      console.error(result.error);
    } else {
      window.location.href = `/login?message=${result.success}`;
    }
  };

  return (
    <div className='flex-1 flex flex-col w-full px-8 sm:max-w-sm justify-center gap-2'>
      <button
        onClick={() => router.back()}
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
      </button>
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
        <Input
          type='text'
          name='username'
          label='이름'
          placeholder='이름 입력'
          required
        />
        <Input
          type='text'
          name='en_name'
          label='영어 이름'
          placeholder='영어 이름 입력'
          required
        />
        <Input
          type='text'
          name='manager_role'
          label='매니저 타입'
          placeholder='매니저 타입'
        />
        <Input
          type='text'
          name='phone'
          label='휴대폰 번호'
          placeholder='휴대폰 번호 입력'
        />
        <Input
          type='text'
          name='extension_number'
          label='내선 번호'
          placeholder='내선 번호 입력'
        />
        <Input type='file' name='business_card' label='명함' placeholder='명함 url' />
        <SubmitButton
          formAction={() => handleSubmit}
          className='bg-green-700 rounded-md px-4 py-2 text-foreground my-2'
          pendingText='회원가입 중...'
        >
          회원가입
        </SubmitButton>
        {searchParams?.message && (
          <p className='mt-4 p-4 bg-foreground/10 text-foreground text-center'>
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Signup;
