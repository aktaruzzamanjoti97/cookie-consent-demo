'use client';

import { useCookieConsent } from '@/hooks/useCookieConsent';
import React from 'react';

const CookieBanner: React.FC = () => {
	const { showBanner, acceptAll, rejectAll, openPreferences } =
		useCookieConsent();

	if (!showBanner) return null;

	return (
		<div className='fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up'>
			<div className='mx-auto max-w-7xl'>
				<div className='bg-white rounded-lg shadow-2xl border border-gray-200 p-6 md:p-8'>
					<div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
						<div className='flex-1'>
							<div className='flex items-center gap-2 mb-2'>
								<svg
									className='w-6 h-6 text-blue-600'
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
								<h2 className='text-xl font-semibold text-gray-900'>
									Cookie Settings
								</h2>
							</div>
							<p className='text-gray-600 text-sm md:text-base'>
								{`We use cookies to enhance your browsing experience,
								serve personalized content, and analyze our traffic. By
								clicking "Accept All", you consent to our use of
								cookies.`}
							</p>
							<button
								onClick={openPreferences}
								className='text-blue-600 hover:text-blue-700 text-sm font-medium mt-2 underline'>
								Customize preferences
							</button>
						</div>
						<div className='flex flex-col sm:flex-row gap-3'>
							<button
								onClick={rejectAll}
								className='px-6 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors'>
								Reject All
							</button>
							<button
								onClick={openPreferences}
								className='px-6 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors'>
								Manage Preferences
							</button>
							<button
								onClick={acceptAll}
								className='px-6 py-2.5 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors'>
								Accept All
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CookieBanner;
