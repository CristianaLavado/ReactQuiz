




<RadioAnswers key={`${props.quizEl}${answer}`} answer={answer} quizEl={props.quizEl} handleChange={handleChange} isQuizOver={props.isQuizOver}/>



<div >
                <input 
                    type="radio" 
                    name={props.quizEl.id} 
                    value={props.answer} 
                    id={props.quizEl.id}
                    onChange={props.handleChange}/>
                <label 
                    htmlFor={props.quizEl.id} 
                    className={`input-label 
                                ${props.isQuizOver ? 
                                (props.answer==props.quizEl.correctAnswer && "correct") : ""}
                                ${props.isQuizOver ? 
                                (props.answer == props.quizEl.selectedAnswer && "wrong") : ""}
                                `}>
                {props.answer}
                </label>
            </div>
























    function updateQuiz (value) {
        const newQuiz = []
        props.quiz.map(question => {
            question.id == props.quizEl.id ?
            newQuiz.push({...question, selectedAnswer: value}) :
            newQuiz.push(question)
        })
        return newQuiz
    }
    
    function handleChange(event) {
        const {value} = event.target
        props.setQuiz(updateQuiz (value))
        }
                
    
    const answers = props.quizEl.answers.map(answer=> {
        function checkedAnswer () {
            if (answer==props.quizEl.correctAnswer) {
                return "correct"
            } else if (answer == props.quizEl.selectedAnswer){
                return "wrong"               
            }
        }
        
        return(
            <div>
                <input 
                    type="radio" 
                    name={props.quizEl.id} 
                    value={answer} 
                    id={answer}
                    onChange={handleChange}/>
                <label htmlFor={answer} className={isQuizOver ? checkedAnswer : "answer-label"}>
                {answer}
                </label>
            </div>
        )})
    
    return (
        <div>
            <h3>{props.quizEl.question}</h3>
            {answers}
        </div>
        
    )