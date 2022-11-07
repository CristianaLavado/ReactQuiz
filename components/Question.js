import React from "react";
import RadioAnswers from "./RadioAnswers"

export default function Question(props) {
    function updateQuiz (value) {
        const newQuiz = []
        props.quiz.map(question => {
            question.id == props.quizEl.id ?
            newQuiz.push({
                ...question, 
                selectedAnswer: value}) :
            newQuiz.push(question)
        })
        return newQuiz
    }
    
    function handleChange() {
        if (!props.isQuizOver){
            const {value} = event.target
            props.setQuiz(updateQuiz (value))
            }
        }
    
    const answers = props.quizEl.answers.map(answer=> {
        return(
            <RadioAnswers key={`${props.quizEl}${answer}`} answer={answer} quizEl={props.quizEl} handleChange={handleChange} isQuizOver={props.isQuizOver}/>
        )})    
    
     return (
        <div className="question--group">
            <h3 className="question--title" dangerouslySetInnerHTML={{__html: `${props.quizEl.question}`}} />
            <div className="question--answers">
                {answers}
            </div>
            <hr />
        </div>   
    )
}


