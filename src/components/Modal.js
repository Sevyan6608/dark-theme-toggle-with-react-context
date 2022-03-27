import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function Modal() {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<Transition
			show={isOpen}
			enter='transition duration-100 ease-out'
			enterFrom='transform scale-95 opacity-0'
			enterTo='transform scale-100 opacity-100'
			leave='transition duration-75 ease-out'
			leaveFrom='transform scale-100 opacity-100'
			leaveTo='transform scale-95 opacity-0'
		>
			<Dialog
				onClose={() => setIsOpen(false)}
				className=' fixed inset-0  overflow-y-auto p-8 pt-[25vh]'
			>
				<Dialog.Overlay className='fixed inset-0 bg-gray-500/5' />
				<div className='relative mx-auto max-w-3xl bg-purple-500 p-8'>
					<Dialog.Title>Deactivate account</Dialog.Title>
					<Dialog.Description>
						This will permanently deactivate your account
					</Dialog.Description>

					<p>
						Are you sure you want to deactivate your account? All of your data
						will be permanently removed. This action cannot be undone.
					</p>
				</div>
			</Dialog>
		</Transition>
	)
}

export default Modal
