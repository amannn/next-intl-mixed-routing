'use client';

import {Link, usePathname} from '@/navigation.public';

export default function PublicNavigationLocaleSwitcher() {
  const pathname = usePathname();

  return (
    <div className="flex gap-3">
      <Link href={pathname} locale="en">
        EN
      </Link>
      <Link href={pathname} locale="de">
        DE
      </Link>
    </div>
  );
}
