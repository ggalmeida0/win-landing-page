'use client';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export const SideNav = () => {
  const router = useRouter();
  const routes = [
    {
      href: '/pricing',
      label: 'Pricing',
    },
    {
      href: '/sign-in',
      label: 'Sign In',
    },
    {
      href: '/sign-up',
      label: 'Sign Up',
    },
  ];

  const onNavigate = (url: string) => {
    return router.push(url);
  };

  return (
    <div className="flex h-full flex-col space-y-4 bg-secondary text-primary">
      <div className="flex flex-1 justify-center p-3">
        <div className="space-y-2">
          {routes.map(route => (
            <div
              onClick={() => onNavigate(route.href)}
              key={route.href}
              className={cn(
                'group flex w-full cursor-pointer justify-start rounded-lg border border-input p-2 text-center text-base font-normal text-foreground transition hover:bg-primary/10 hover:text-primary',
                route.href == '/sign-up' &&
                  'bg-primary/80 text-slate-100 hover:bg-primary hover:text-slate-100',
              )}
            >
              <div className="flex flex-1 flex-col items-center gap-y-2">
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
