import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import { App } from "./components"
import { store } from "./redux"

import "./scss/index.scss"

const rootElem = document.getElementById("root")

if (rootElem) {
	const root = ReactDOM.createRoot(rootElem)
	root.render(
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	)
}
