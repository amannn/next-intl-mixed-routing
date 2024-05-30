import {Link} from '@/navigation.public';
import PublicNavigationLocaleSwitcher from './PublicNavigationLocaleSwitcher';
import {useTranslations} from 'next-intl';
import Login from './Login';

export default function PublicNavigation() {
  const t = useTranslations('PublicNavigation');

  return (
    <div className="flex justify-between py-5">
      <nav className="flex gap-6">
        <Link href="/">{t('home')}</Link>
        <Link href="/about">{t('about')}</Link>
        <Login />
      </nav>
      <PublicNavigationLocaleSwitcher />
    </div>
  );
}
