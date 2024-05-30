import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import PublicNavigation from './PublicNavigation';
import Document from '@/components/Document';
import {ReactNode} from 'react';
import {Metadata} from 'next';

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export const metadata: Metadata = {
  title: 'next-intl-mixed-routing (public)'
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <Document locale={locale}>
      <NextIntlClientProvider messages={messages}>
        <PublicNavigation />
        {children}
      </NextIntlClientProvider>
    </Document>
  );
}
