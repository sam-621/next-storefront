'use client';

import Link from 'next/link';

import { Button, Input } from '@/components/ui';

import { useLoginForm } from './use-login-form';

export const LoginForm = () => {
  const { onSubmit, isLoading, ...form } = useLoginForm();

  const { register, formState } = form;
  const { errors } = formState;

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl">Login</h1>
        <p className="font-normal text-gray-500 text-sm">Enter your email and password</p>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Input
            {...register('email')}
            error={errors.email?.message}
            label="Email"
            placeholder="m@example.com"
          />
          <Input
            {...register('password')}
            error={errors.password?.message}
            label="Password"
            type="password"
            placeholder="********"
          />
        </div>

        <div className="flex flex-col gap-4">
          <Button type="submit" isLoading={isLoading}>
            Login
          </Button>
          <div className="w-fit mx-auto">
            <button
              type="button"
              className="text-indigo-600 bg-none border-none font-semibold text-sm w-fit"
            >
              Forgot password?
            </button>
          </div>
        </div>

        <div className="w-full flex items-center gap-6">
          <hr className="h-[1px] w-full border-none bg-gray-200" />
          <span className="text-sm text-nowrap">Does not have an account?</span>
          <hr className="h-[1px] w-full border-none bg-gray-200" />
        </div>

        <Link href="/register" className="w-full">
          <Button variant="outline" className="w-full">
            Register
          </Button>
        </Link>
      </form>
    </div>
  );
};
