import { type NextRequest, NextResponse } from 'next/server';

import { getCustomer } from './lib/customer/data';

const AUTH_PATHS = ['/login', '/register'];
const FORBIDDEN_PATHS = ['/account'];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const customer = await getCustomer();

  const isAuth = !!customer;
  const isInForbiddenPaths = FORBIDDEN_PATHS.includes(pathname);
  const isInAuthPaths = AUTH_PATHS.includes(pathname);

  if (!isAuth && isInForbiddenPaths) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isAuth && isInAuthPaths) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|logo.svg).*)']
};
