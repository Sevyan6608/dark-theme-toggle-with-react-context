import React, { useContext, useState } from 'react'

import { ThemeContext } from './ThemeContext'
import { Switch } from '@headlessui/react'

const Toggle = () => {
	const { theme, setTheme } = useContext(ThemeContext)
	const [enabled, setEnabled] = useState(false)

	const setChangedTheme = () => {
		setEnabled(!enabled)
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<div className='rounded-full p-2 transition duration-500 ease-in-out'>
			<Switch.Group>
				<div className='flex items-center'>
					<Switch.Label className='mr-4 transition-colors duration-300 dark:text-white'>
						Toggle dark mode
					</Switch.Label>
					<Switch
						checked={enabled}
						onChange={setChangedTheme}
						className={`${
							enabled ? 'bg-[#4d4d4d]' : 'bg-gray-200'
						} relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none  `}
					>
						<span
							className={`${
								enabled ? 'translate-x-6' : 'translate-x-1'
							} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
						/>
					</Switch>
				</div>
			</Switch.Group>
		</div>
	)
}

export default Toggle
