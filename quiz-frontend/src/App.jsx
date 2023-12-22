/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../components/Home.jsx"
import Navbar from "../components/layout/NavBar.jsx"
import AddQuestion from "./components/question/AddQuestion"
import Admin from "../components/Admin.jsx"
import UpdateQuestion from "../components/question/UpdateQuestion.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container mt-5 mb-5">
			<Router>
			<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/admin" element={<Admin />} />

					<Route path="/create-quiz" element={<AddQuestion />} />
					<Route path="/update-quiz/:id" element={<UpdateQuestion />} />
				</Routes>
			</Router>
		</main>
    )
}

export default App
