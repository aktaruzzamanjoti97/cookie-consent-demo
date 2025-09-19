// ============================================
// File: types/cookie-consent.ts
// ============================================

export interface CookieCategory {
	name: string;
	description: string;
	required: boolean;
	cookies: Cookie[];
}

export interface Cookie {
	name: string;
	purpose: string;
	expiry: string;
}

export interface CookieConsent {
	essential: boolean;
	analytics: boolean;
	marketing: boolean;
	preferences: boolean;
}

export interface CookieConsentContextType {
	consent: CookieConsent;
	setConsent: (consent: CookieConsent) => void;
	showBanner: boolean;
	showPreferences: boolean;
	hasInteracted: boolean;
	acceptAll: () => void;
	rejectAll: () => void;
	savePreferences: () => void;
	openPreferences: () => void;
	setShowPreferences: (show: boolean) => void;
}
