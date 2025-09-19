'use client';

import { useCookieConsent } from '@/hooks/useCookieConsent';
import { COOKIE_CATEGORIES } from '@/lib/cookieCategories';
import { CookieConsent } from '@/types';
import React, { useState } from 'react';

export const CookiePreferences: React.FC = () => {
	const {
		showPreferences,
		setShowPreferences,
		consent,
		setConsent,
		savePreferences,
		acceptAll,
		rejectAll,
	} = useCookieConsent();

	const [activeTab, setActiveTab] = useState<
		'overview' | 'details' | 'policy'
	>('overview');

	if (!showPreferences) return null;

	const handleToggle = (category: keyof CookieConsent) => {
		if (COOKIE_CATEGORIES[category].required) return;
		setConsent({
			...consent,
			[category]: !consent[category],
		});
	};

	return (
		<div className='fixed inset-0 z-50 overflow-y-auto animate-fade-in'>
			<div className='flex items-center justify-center min-h-screen p-4'>
				<div
					className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm'
					onClick={() => setShowPreferences(false)}
				/>

				<div className='relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden'>
					{/* Header */}
					<div className='bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6'>
						<div className='flex items-center justify-between'>
							<div>
								<h2 className='text-2xl font-bold'>
									Cookie Preferences Center
								</h2>
								<p className='text-blue-100 mt-1'>
									Manage your cookie settings and preferences
								</p>
							</div>
							<button
								onClick={() => setShowPreferences(false)}
								className='text-white hover:text-blue-100 transition-colors'
								aria-label='Close preferences'>
								<svg
									className='w-6 h-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>
					</div>

					{/* Tabs */}
					<div className='border-b border-gray-200'>
						<div className='flex'>
							{(['overview', 'details', 'policy'] as const).map(
								(tab) => (
									<button
										key={tab}
										onClick={() => setActiveTab(tab)}
										className={`px-6 py-3 font-medium transition-colors capitalize ${
											activeTab === tab
												? 'text-blue-600 border-b-2 border-blue-600'
												: 'text-gray-600 hover:text-gray-900'
										}`}>
										{tab === 'policy' ? 'Privacy Policy' : tab}
									</button>
								)
							)}
						</div>
					</div>

					{/* Content */}
					<div
						className='p-6 overflow-y-auto'
						style={{ maxHeight: 'calc(90vh - 280px)' }}>
						{activeTab === 'overview' && (
							<div className='space-y-4'>
								<div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
									<p className='text-sm text-blue-800'>
										When you visit our website, we may store or
										retrieve information on your browser, mostly in
										the form of cookies. This information might be
										about you, your preferences, or your device and is
										mostly used to make the site work as you expect it
										to.
									</p>
								</div>

								<div className='space-y-4'>
									{Object.entries(COOKIE_CATEGORIES).map(
										([key, category]) => (
											<div
												key={key}
												className='border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow'>
												<div className='flex items-start justify-between'>
													<div className='flex-1 pr-4'>
														<h3 className='font-semibold text-gray-900 mb-1'>
															{category.name} Cookies
															{category.required && (
																<span className='ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded'>
																	Always Active
																</span>
															)}
														</h3>
														<p className='text-sm text-gray-600'>
															{category.description}
														</p>
													</div>
													<label className='relative inline-block w-12 h-6'>
														<input
															type='checkbox'
															checked={
																consent[
																	key as keyof CookieConsent
																]
															}
															onChange={() =>
																handleToggle(
																	key as keyof CookieConsent
																)
															}
															disabled={category.required}
															className='sr-only peer'
														/>
														<span className='absolute cursor-pointer inset-0 bg-gray-300 peer-checked:bg-blue-600 peer-disabled:bg-gray-400 peer-disabled:cursor-not-allowed rounded-full transition-colors'></span>
														<span className='absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-6'></span>
													</label>
												</div>
											</div>
										)
									)}
								</div>
							</div>
						)}

						{activeTab === 'details' && (
							<div className='space-y-6'>
								{Object.entries(COOKIE_CATEGORIES).map(
									([key, category]) => (
										<div
											key={key}
											className='border border-gray-200 rounded-lg p-4'>
											<h3 className='font-semibold text-gray-900 mb-3 flex items-center justify-between'>
												{category.name} Cookies
												<span
													className={`text-xs px-2 py-1 rounded ${
														consent[key as keyof CookieConsent]
															? 'bg-green-100 text-green-700'
															: 'bg-gray-100 text-gray-600'
													}`}>
													{consent[key as keyof CookieConsent]
														? 'Enabled'
														: 'Disabled'}
												</span>
											</h3>
											<div className='space-y-2'>
												{category.cookies.map((cookie, index) => (
													<div
														key={index}
														className='bg-gray-50 rounded p-3'>
														<div className='flex justify-between items-start'>
															<div>
																<p className='font-medium text-sm text-gray-900'>
																	{cookie.name}
																</p>
																<p className='text-xs text-gray-600 mt-1'>
																	{cookie.purpose}
																</p>
															</div>
															<span className='text-xs bg-white px-2 py-1 rounded text-gray-500'>
																{cookie.expiry}
															</span>
														</div>
													</div>
												))}
											</div>
										</div>
									)
								)}
							</div>
						)}

						{activeTab === 'policy' && (
							<div className='prose max-w-none'>
								<h3 className='text-lg font-semibold mb-3'>
									Privacy & Cookie Policy
								</h3>
								<div className='space-y-4 text-gray-600'>
									<p>
										This Cookie Policy explains how we use cookies and
										similar technologies to recognize you when you
										visit our website. It explains what these
										technologies are and why we use them, as well as
										your rights to control our use of them.
									</p>

									<h4 className='font-semibold text-gray-900 mt-4'>
										What are cookies?
									</h4>
									<p>
										Cookies are small data files that are placed on
										your computer or mobile device when you visit a
										website. Cookies are widely used by website owners
										in order to make their websites work, or to work
										more efficiently, as well as to provide reporting
										information.
									</p>

									<h4 className='font-semibold text-gray-900 mt-4'>
										How can you control cookies?
									</h4>
									<p>
										You have the right to decide whether to accept or
										reject cookies. You can exercise your cookie
										rights by setting your preferences in the Cookie
										Consent Manager.
									</p>

									<h4 className='font-semibold text-gray-900 mt-4'>
										Contact Us
									</h4>
									<p>
										If you have any questions about our use of cookies
										or other technologies, please email us at
										privacy@example.com.
									</p>
								</div>
							</div>
						)}
					</div>

					{/* Footer */}
					<div className='border-t border-gray-200 p-4 bg-gray-50'>
						<div className='flex flex-col sm:flex-row justify-between gap-3'>
							<button
								onClick={rejectAll}
								className='px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors'>
								Reject All
							</button>
							<div className='flex gap-3'>
								<button
									onClick={() => setShowPreferences(false)}
									className='px-6 py-2 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg font-medium transition-colors'>
									Cancel
								</button>
								<button
									onClick={savePreferences}
									className='px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors'>
									Save Preferences
								</button>
								<button
									onClick={acceptAll}
									className='px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors'>
									Accept All
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CookiePreferences;
