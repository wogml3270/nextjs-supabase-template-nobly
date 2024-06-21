'use client';

import { useFormStatus } from 'react-dom';
import { type ComponentProps } from 'react';

type Props = ComponentProps<'button'> & {
  pendingText?: string;
  formAction?: string | ((e: React.FormEvent<HTMLFormElement>) => void);
};

export function SubmitButton({ children, pendingText, formAction, ...props }: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === formAction;

  return (
    <button {...props} type='submit' aria-disabled={pending}>
      {isPending ? pendingText : children}
    </button>
  );
}
