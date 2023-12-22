/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../components/Home.jsx"
import Navbar from "../components/layout/NavBar.jsx"
import AddQuestion from "./components/question/AddQuestion"
import Admin from "../components/Admin.jsx"
import UpdateQuestion from "../components/question/UpdateQuestion.jsx"
import QuizResult from "../components/quiz/QuizResult.jsx"
import GetAllQuiz from "../components/quiz/GetAllQuiz.jsx"
import Quiz from "../components/quiz/Quiz.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container mt-5 mb-5">
			<Router>
			<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/take-quiz" element={<Quiz />} />
					<Route path="/admin" element={<Admin />} />

					<Route path="/create-quiz" element={<AddQuestion />} />
					<Route path="/update-quiz/:id" element={<UpdateQuestion />} />
					<Route path="/all-quizzes" element={<GetAllQuiz />} />
					<Route path="/quiz-result" element={<QuizResult />} />
				</Routes>
			</Router>
		</main>
    )
}

export default App
