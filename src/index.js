import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeProvider } from './utilities/ThemeContext'
import Background from './components/Background'

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
			<Background>
				<App />
			</Background>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
