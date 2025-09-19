'use client';

import { useCookieConsent } from '@/hooks/useCookieConsent';
import React from 'react';

const CookieSettingsButton: React.FC = () => {
	const { openPreferences, hasInteracted } = useCookieConsent();

	if (!hasInteracted) return null;

	return (
		<button
			onClick={openPreferences}
			className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors'
			aria-label='Cookie Settings'>
			<svg
				className='w-4 h-4'
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
				/>
			</svg>
			Cookie Settings
		</button>
	);
};

export default CookieSettingsButton;
