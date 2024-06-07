import {useTranslations} from 'next-intl';
import Link from 'next/link';
import Logout from './Logout';

export default function AppNavigation() {
  const t = useTranslations('AppNavigation');

  return (
    <nav className="flex gap-6 py-5">
      <Link href="/app">{t('home')}</Link>
      <Link href="/app/profile">{t('profile')}</Link>
      <div className="ml-auto">
        <Logout />
      </div>
    </nav>
  );
}
