import React, { useState } from 'react';
import axios from 'axios';
import './CreateQuiz.css';

function CreateQuiz() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [createdById, setCreatedById] = useState('');
    const [questions, setQuestions] = useState([
        { question: '', option1: '', option2: '', option3: '', option4: '', answer: '' }
    ]);
    const [message, setMessage] = useState('');

    const handleQuestionChange = (index, e) => {
        const newQuestions = [...questions];
        newQuestions[index][e.target.name] = e.target.value;
        setQuestions(newQuestions);
    };

    const addQuestion = () => {
        setQuestions([...questions, { question: '', option1: '', option2: '', option3: '', option4: '', answer: '' }]);
    };

    const removeQuestion = (index) => {
        const newQuestions = questions.filter((_, i) => i !== index);
        setQuestions(newQuestions);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                title,
                category,
                createdBy: { id: Number(createdById) },
                questions: questions.map(q => ({ ...q, category }))
            };

            const response = await axios.post('http://localhost:8080/quizGroup', payload);
            setMessage('Quiz Group Created Successfully');
            setTitle('');
            setCategory('');
            setCreatedById('');
            setQuestions([{ question: '', option1: '', option2: '', option3: '', option4: '', answer: '' }]);
        } catch (error) {
            console.error(error);
            setMessage('Failed to create quiz group');
        }
    };

    return (
        <div className="main_class">
        <div className="quiz-main-container">

            <div  className="quiz-left">
        <div className="quiz-containers">
            {message && <div className="quiz-message">{message}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="quiz-input_1"
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="quiz-input"
                />
                <input
                    type="number"
                    placeholder="Creator ID"
                    value={createdById}
                    onChange={(e) => setCreatedById(e.target.value)}
                    required
                    className="quiz-input"
                />

                {questions.map((q, index) => (
                    <div key={index} className="question-box">
                        <input
                            type="text"
                            name="question"
                            placeholder="Question"
                            value={q.question}
                            onChange={(e) => handleQuestionChange(index, e)}
                            required
                            className="quiz-input"
                        />
                        <input
                            type="text"
                            name="option1"
                            placeholder="Option 1"
                            value={q.option1}
                            onChange={(e) => handleQuestionChange(index, e)}
                            required
                            className="quiz-input"
                        />
                        <input
                            type="text"
                            name="option2"
                            placeholder="Option 2"
                            value={q.option2}
                            onChange={(e) => handleQuestionChange(index, e)}
                            required
                            className="quiz-input"
                        />
                        <input
                            type="text"
                            name="option3"
                            placeholder="Option 3"
                            value={q.option3}
                            onChange={(e) => handleQuestionChange(index, e)}
                            required
                            className="quiz-input"
                        />
                        <input
                            type="text"
                            name="option4"
                            placeholder="Option 4"
                            value={q.option4}
                            onChange={(e) => handleQuestionChange(index, e)}
                            required
                            className="quiz-input"
                        />
                        <input
                            type="text"
                            name="answer"
                            placeholder="Answer"
                            value={q.answer}
                            onChange={(e) => handleQuestionChange(index, e)}
                            required
                            className="quiz-input"
                        />
                        <button type="button" onClick={() => removeQuestion(index)} className="remove-btn">Remove Question</button>
                    </div>
                ))}
                <button type="button" onClick={addQuestion} className="add-btn">Add Another Question</button>
                <button type="submit" className="submit-btn">Create Quiz </button>
            </form>
        </div>
        </div>
        </div>
        <div className="right_container">
            <div className="cent_div">
           <p className="text_one">Create</p>
           <p className="text_two" >Exciting Quizzes</p>
            <div className="text_three"><p>Now Make Learning More Exciting and Fun !</p></div>
            <div className="text_four">Space, History or General Knowledge , We have got it all</div>
            
</div>
        </div>
        </div>
    );
}

export default CreateQuiz;
