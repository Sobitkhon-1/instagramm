import "./App.css"
import { useContext, useState } from "react"
import { Routes, Route } from "react-router"



// Import contexts
import { LanguageContext } from "./Contexts/LanguageContext"
import { UserContext } from "./Contexts/UserContext"

// Import pages
import { Home } from "./Pages/Home/Home"
import NotFound from "./Pages/NotFound"
export function App() {

	const [ language, setLanguage ] = useState( "english" )
	const [ username, setUsername ] = useState( null )

	return <>
		<LanguageContext.Provider value={ [ language, setLanguage ] }>
			<UserContext.Provider value={ [ username, setUsername ] }>
				<Routes>
					<Route path="/" element={ <Home /> } end />
					<Route path="*" element={<NotFound />} />

				</Routes>
			</UserContext.Provider>
		</LanguageContext.Provider>
	</>
}
