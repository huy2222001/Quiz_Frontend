/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../components/Home.jsx"
import Navbar from "../components/layout/NavBar.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container mt-5 mb-5">
			<Router>
			<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</main>
    )
}

export default App
