import {Link} from '@/navigation.public';
import {useTranslations} from 'next-intl';
import Login from './Login';

export default function PublicNavigation() {
  const t = useTranslations('PublicNavigation');

  return (
    <nav className="flex gap-6 py-5">
      <Link href="/">{t('home')}</Link>
      <Link href="/about">{t('about')}</Link>
      <div className="ml-auto">
        <Login />
      </div>
    </nav>
  );
}
