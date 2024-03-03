import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import { MobileNav } from '@/components/MobileNav';

const Navbar = () => {
  // Replace with your auth of choice, e.g. Clerk: const { userId } = auth();
  const isUserSignedIn = false;

  return (
    <nav
      className={cn(
        'sticky inset-x-0 top-0 z-30 h-14 border-b border-gray-200  bg-white/40 backdrop-blur-lg transition-all',
      )}
    >
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link
            href="/"
            className="z-40 flex items-center justify-center gap-1"
          >
            <Image
              src="/icon.svg"
              alt="win dieting logo"
              width={70}
              height={70}
              quality={100}
              className="h-12 w-12"
            />
            <span className="text-2xl font-semibold">Win Dieting</span>
          </Link>
          <div className="flex items-center gap-1 sm:gap-4">
            {!isUserSignedIn ? (
              <MobileNav />
            ) : (
              <Link
                className={buttonVariants({
                  size: 'sm',
                  className: 'mr-3 sm:hidden',
                })}
                href="/dashboard"
              >
                Dashboard
              </Link>
            )}

            <div className="hidden items-center space-x-4 sm:flex">
              {!isUserSignedIn ? (
                <>{/* Add buttons here when we have a reason to */}</>
              ) : (
                <>
                  <Link
                    className={buttonVariants({
                      size: 'sm',
                    })}
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                </>
              )}
            </div>

            {/* User profile mockup below, e.g using Clerk: <UserButton afterSignOutUrl="/" /> */}
            {isUserSignedIn && (
              <div className="h-10 w-10 rounded-full border-2 border-black bg-emerald-600 shadow-lg"></div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
