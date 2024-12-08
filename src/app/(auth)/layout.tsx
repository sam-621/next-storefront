import { type ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 h-screen xl:grid-cols-2">
      <section className="h-full w-full max-w-[420px] mx-auto grid items-center px-4">
        {children}
      </section>
      <section className="hidden xl:block relative">
        <img src="/images/auth-form.png" alt="auth" className="w-full h-screen" />
      </section>
    </div>
  );
}
