import CookieBanner from '@/components/CookieBanner';
import CookiePreferences from '@/components/CookiePreferences';
import CookieConsentProvider from '@/contexts/CookieConsentProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Cookie Consent Management System',
	description: 'GDPR compliant cookie consent management',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<CookieConsentProvider>
					{children}
					<CookieBanner />
					<CookiePreferences />
				</CookieConsentProvider>
			</body>
		</html>
	);
}
