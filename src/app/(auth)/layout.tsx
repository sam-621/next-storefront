import { type ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Auth Layout</h1>
      {children}
    </div>
  );
}
