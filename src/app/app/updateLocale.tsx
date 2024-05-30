'use server';

import {setLocale} from '@/db';
import {revalidatePath} from 'next/cache';

export default async function updateLocale(data: FormData) {
  const locale = data.get('locale') as string;

  setLocale(locale);
  revalidatePath('/app');
}
