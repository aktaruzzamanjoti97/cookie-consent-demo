'use client';

import { CookieConsent, CookieConsentContextType } from '@/types';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

export const CookieConsentContext = createContext<
	CookieConsentContextType | undefined
>(undefined);

interface CookieConsentProviderProps {
	children: ReactNode;
}

const CookieConsentProvider: React.FC<CookieConsentProviderProps> = ({
	children,
}) => {
	const [showBanner, setShowBanner] = useState(false);
	const [showPreferences, setShowPreferences] = useState(false);
	const [hasInteracted, setHasInteracted] = useState(false);
	const [consent, setConsent] = useState<CookieConsent>({
		essential: true,
		analytics: false,
		marketing: false,
		preferences: false,
	});

	useEffect(() => {
		// Check if user has already given consent
		const storedConsent = localStorage.getItem('cookieConsent');
		if (storedConsent) {
			setConsent(JSON.parse(storedConsent));
			setHasInteracted(true);
			loadScripts(JSON.parse(storedConsent));
		} else {
			setShowBanner(true);
		}
	}, []);

	const loadScripts = (consentData: CookieConsent) => {
		// Load scripts based on consent
		if (consentData.analytics) {
			console.log('Loading analytics scripts...');
			// Load Google Analytics
			if (typeof window !== 'undefined') {
				// Example: Load GA4
				const script = document.createElement('script');
				script.async = true;
				script.src = `https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`;
				document.head.appendChild(script);
			}
		}
		if (consentData.marketing) {
			console.log('Loading marketing scripts...');
			// Load Facebook Pixel, Google Ads, etc.
		}
	};

	const saveConsent = (newConsent: CookieConsent) => {
		localStorage.setItem('cookieConsent', JSON.stringify(newConsent));
		localStorage.setItem('consentTimestamp', new Date().toISOString());
		setConsent(newConsent);
		setHasInteracted(true);
		loadScripts(newConsent);
	};

	const acceptAll = () => {
		const fullConsent: CookieConsent = {
			essential: true,
			analytics: true,
			marketing: true,
			preferences: true,
		};
		saveConsent(fullConsent);
		setShowBanner(false);
		setShowPreferences(false);
	};

	const rejectAll = () => {
		const minimalConsent: CookieConsent = {
			essential: true,
			analytics: false,
			marketing: false,
			preferences: false,
		};
		saveConsent(minimalConsent);
		setShowBanner(false);
		setShowPreferences(false);
	};

	const savePreferences = () => {
		saveConsent(consent);
		setShowBanner(false);
		setShowPreferences(false);
	};

	const openPreferences = () => {
		setShowPreferences(true);
		setShowBanner(false);
	};

	return (
		<CookieConsentContext.Provider
			value={{
				consent,
				setConsent,
				showBanner,
				showPreferences,
				hasInteracted,
				acceptAll,
				rejectAll,
				savePreferences,
				openPreferences,
				setShowPreferences,
			}}>
			{children}
		</CookieConsentContext.Provider>
	);
};

export default CookieConsentProvider;
