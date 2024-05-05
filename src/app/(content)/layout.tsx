import { Header } from '@/ui/components/header';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mb-8 mx-3 md:mx-8 lg:mx-12 xl:mx-32">
      <Header />
      {children}
    </div>
  );
}
