import React from "react";
import Start from "./components/Start"
import Question from "./components/Question"
import Loading from "./components/Loading"
import {nanoid} from "nanoid"

export default function App() {
    
    const [startQuiz, setStartQuiz] = React.useState(false)
    const [quiz, setQuiz] = React.useState([])
    const [isQuizOver, setIsQuizOver] = React.useState(false)
    const [loading, setLoading]=React.useState(false)
    
    function toggleStart() {
        setStartQuiz(prevState => !prevState)
    }
    
    function toggleOver() {
        setIsQuizOver(prevState => !prevState)   
    }
    
    function cleanQuiz (data) {
        const quizAPI = data.results
        const newQuiz = []
        quizAPI.map(quizObj => {
            const answers = [...quizObj.incorrect_answers, quizObj.correct_answer].sort()
            newQuiz.push({
                    question: quizObj.question,
                    answers: answers,
                    correctAnswer: quizObj.correct_answer,
                    selectedAnswer: "",
                    id: nanoid()
                    })
            })
            setLoading(false)
        return newQuiz
        }
    
    React.useEffect(function() {
        if(!isQuizOver){
            setLoading(true)
            fetch("https://opentdb.com/api.php?amount=5")
                .then(res => res.json())
                .then(data => cleanQuiz(data))
                .then(newQuiz => setQuiz(newQuiz))           
        }
    }, [isQuizOver])
    
    
    const questionComponents = quiz.map(quizEl => 
        <Question key={quizEl.id} quiz={quiz} quizEl={quizEl} setQuiz={setQuiz} isQuizOver={isQuizOver}/>)
    
    
    function isCorrectAnswer () {
        let count = 0
        quiz.map(quizEl => {
            if (quizEl.correctAnswer == quizEl.selectedAnswer){
                count = count+1
            }
        })
        return count
    }
    
    const correctAnswersCount = isCorrectAnswer()
    
    return (
        <main>
            {!(startQuiz) ? 
            <Start toggleStart={toggleStart}/> :
            (loading ? 
                <Loading /> :
                (<div className="quiz"> 
                    {questionComponents}   
                    <div className="quiz--buttongroup">
                        {isQuizOver && 
                        <p className="quiz--score">You scored {correctAnswersCount}/{quiz.length} correct answers</p>}
                        <button onClick={toggleOver} className="quiz--button" >
                            {isQuizOver ? "Play Again" : "Check answers"}
                        </button>
                    </div>
                </div>)
            )}
        </main>
    )
}

