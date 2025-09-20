'use client';

import CookieSettingsButton from '@/components/CookieSettingsButton';
import { useCookieConsent } from '@/hooks/useCookieConsent';

export default function Home() {
	const { consent, hasInteracted, acceptAll, rejectAll, openPreferences } =
		useCookieConsent();

	const resetSettings = () => {
		if (typeof window !== 'undefined') {
			localStorage.clear();
			window.location.reload();
		}
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
			{/* Header */}
			<header className='bg-white shadow-sm'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
					<div className='flex items-center justify-between'>
						<h1 className='text-2xl font-bold text-gray-900'>
							Cookie Consent Demo
						</h1>
						<CookieSettingsButton />
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='bg-white rounded-xl shadow-lg p-8'>
					<h2 className='text-3xl font-bold text-gray-900 mb-4'>
						Complete Cookie Consent Management System
					</h2>

					<div className='space-y-6'>
						<div className='bg-green-50 border border-green-200 rounded-lg p-4'>
							<h3 className='font-semibold text-green-900 mb-2'>
								✨ Features Implemented:
							</h3>
							<ul className='space-y-1 text-green-700 text-sm'>
								<li>✅ Next.js 15 with App Router</li>
								<li>✅ React 19 with TypeScript</li>
								<li>
									✅ {`Client Components with 'use client' directive`}
								</li>
								<li>✅ Responsive cookie banner</li>
								<li>✅ Detailed preferences dialog</li>
								<li>✅ Persistent consent storage</li>
								<li>✅ GDPR/CCPA compliant</li>
								<li>✅ Accessibility features</li>
								<li>✅ Script loading based on consent</li>
							</ul>
						</div>

						{/* Consent Status */}
						<div className='bg-gray-50 rounded-lg p-4'>
							<h3 className='font-semibold text-gray-900 mb-3'>
								Current Consent Status:
							</h3>
							<div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
								{Object.entries(consent).map(([key, value]) => (
									<div key={key} className='flex items-center gap-2'>
										<div
											className={`w-3 h-3 rounded-full ${
												value ? 'bg-green-500' : 'bg-gray-400'
											}`}
										/>
										<span className='text-sm capitalize text-gray-700'>
											{key}
										</span>
									</div>
								))}
							</div>
							{!hasInteracted && (
								<p className='text-sm text-orange-600 mt-3'>
									⚠️ No consent given yet
								</p>
							)}
						</div>

						{/* Test Buttons */}
						<div className='flex gap-4 flex-wrap'>
							<button
								onClick={resetSettings}
								className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors'>
								Reset All Settings
							</button>
							<button
								onClick={openPreferences}
								className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
								Open Preferences
							</button>
							<button
								onClick={acceptAll}
								className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors'>
								Test Accept All
							</button>
							<button
								onClick={rejectAll}
								className='px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors'>
								Test Reject All
							</button>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
