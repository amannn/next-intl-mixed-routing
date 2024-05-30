import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import Document from '@/components/Document';
import AppNavigation from './AppNavigation';
import {ReactNode} from 'react';
import {Metadata} from 'next';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'next-intl-mixed-routing (app)'
};

export default async function LocaleLayout({children}: Props) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <Document locale={locale}>
      <NextIntlClientProvider messages={messages}>
        <AppNavigation />
        {children}
      </NextIntlClientProvider>
    </Document>
  );
}
