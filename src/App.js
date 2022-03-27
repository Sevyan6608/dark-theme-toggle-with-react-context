import Toggle from './utilities/ThemeToggle'

function App() {
	return (
		<>
			<div className='absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6'>
				<Toggle />
			</div>
			<h1 className='dark:text-white'>Hello world</h1>
		</>
	)
}

export default App
