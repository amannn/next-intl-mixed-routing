'use client';

import {useRouter} from 'next/navigation';
import updateLocale from './updateLocale';

export default function AppNavigationLocaleSwitcher() {
  const router = useRouter();

  async function action(data: FormData) {
    await updateLocale(data);
    router.refresh();
  }
  return (
    <form className="flex gap-3" action={action}>
      <button name="locale" value="en">
        EN
      </button>
      <button name="locale" value="de">
        DE
      </button>
    </form>
  );
}
