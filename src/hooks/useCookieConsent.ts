import { CookieConsentContext } from '@/contexts/CookieConsentProvider';
import { useContext } from 'react';

export const useCookieConsent = () => {
	const context = useContext(CookieConsentContext);
	if (!context) {
		throw new Error(
			'useCookieConsent must be used within a CookieConsentProvider'
		);
	}
	return context;
};
