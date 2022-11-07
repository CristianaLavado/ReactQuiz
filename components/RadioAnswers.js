import React from "react"

export default function RadioAnswers (props) {
        return(
            <div className="question--radioanswer">
                <input 
                    type="radio" 
                    name={props.quizEl.id} 
                    value={props.answer} 
                    id={`${props.quizEl.id}${props.answer}`}
                    onChange={props.handleChange}/>
                <label 
                    htmlFor={`${props.quizEl.id}${props.answer}`}
                    className={`answers--label
                                ${props.isQuizOver ? 
                                "answers--checked" : ""}
                                ${props.isQuizOver ? 
                                (props.answer==props.quizEl.correctAnswer && "answers--correct") : ""}
                                ${props.isQuizOver ? 
                                (props.answer == props.quizEl.selectedAnswer && "answers--wrong") : (props.answer == props.quizEl.selectedAnswer && "answers--selected")}
                                `}
                    dangerouslySetInnerHTML={{__html: `${props.answer}`}}/>
            </div>
        ) 
}