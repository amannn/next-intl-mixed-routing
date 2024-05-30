import {useTranslations} from 'next-intl';
import Link from 'next/link';
import AppNavigationLocaleSwitcher from './AppNavigationLocaleSwitcher';

export default function AppNavigation() {
  const t = useTranslations('AppNavigation');

  return (
    <div className="flex justify-between py-5">
      <nav className="flex gap-6">
        <Link href="/app">{t('home')}</Link>
        <Link href="/app/profile">{t('profile')}</Link>
      </nav>
      <AppNavigationLocaleSwitcher />
    </div>
  );
}
