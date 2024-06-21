import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className='flex flex-col gap-3 my-2'>
      {label && (
        <label htmlFor={props.name} className='text-sm text-foreground'>
          {label}
        </label>
      )}
      <input
        id={props.name}
        className='text-black p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
        {...props}
      />
    </div>
  );
};
