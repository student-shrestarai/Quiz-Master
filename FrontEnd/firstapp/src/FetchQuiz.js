import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuizGroupDetail({ quizGroupId }) {
    const [quizGroup, setQuizGroup] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuizGroup = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/quizgroups/${quizGroupId}`);
                setQuizGroup(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuizGroup();
    }, [quizGroupId]);

    if (loading) return <p className="text-center mt-4">Loading quiz...</p>;
    if (!quizGroup) return <p className="text-center mt-4">Quiz not found.</p>;

    return (
        <div className="max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-2 text-center">{quizGroup.title}</h2>
            <p className="text-center text-gray-600 mb-4">{quizGroup.category}</p>

            {quizGroup.questions.length === 0 ? (
                <p className="text-center">No questions in this quiz.</p>
            ) : (
                quizGroup.questions.map((q, index) => (
                    <div key={q.id} className="border p-4 mb-2 rounded bg-gray-50">
                        <p className="font-semibold mb-1">{index + 1}. {q.question}</p>
                        <ul className="list-disc pl-5 text-sm">
                            <li>A. {q.option1}</li>
                            <li>B. {q.option2}</li>
                            <li>C. {q.option3}</li>
                            <li>D. {q.option4}</li>
                        </ul>
                        <p className="mt-2 text-green-700 font-medium">Answer: {q.answer}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default QuizGroupDetail;
