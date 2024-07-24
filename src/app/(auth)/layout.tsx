import { type ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 h-screen md:grid-cols-2">
      <section className="h-full max-w-[350px] mx-auto grid items-center">{children}</section>
      <section className="hidden md:block relative">
        <img src="/images/auth-form.png" alt="auth" className="w-full h-screen" />
      </section>
    </div>
  );
}
