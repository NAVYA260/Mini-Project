import React, { useEffect, useState } from 'react';
import '../Styles/Styles5.css'

const DBMSSolutionHub = () => {
    const [questionTitle, setQuestionTitle] = useState('');

    useEffect(() => {
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log("Question Title:", questionTitle);
            setQuestionTitle('');
        };

        document.getElementById("questionForm").addEventListener("submit", handleSubmit);

        return () => {
            document.getElementById("questionForm").removeEventListener("submit", handleSubmit);
        };
    }, [questionTitle]);

    return (
        <div>
            <div className="navbar">
                <div className="navbar-brand">Solution Hub</div>
                <form className="search-form">
                    <input type="text" className="search-bar" placeholder="Search..." />
                </form>
                <div className="navbar-options">
                    <a href="Login">Home</a>
                    <a href="Subjects">Subjects</a>
                </div>
                <div className="profile-logo">Profile</div>
            </div>

            <div className="questions">
                <div className="question-card">
                    <h2>DBMS Topics</h2>
                    <ul>
                        <li><a href="ER model">ER model</a></li>
                        <li><a href=" Nested Queries"> Nested Queries</a></li>
                        <li><a href=" Views"> Views</a></li>
                        <li><a href="Answerdbms">Structure of the database</a></li>
                        <li><a href=" DBMS Architecture"> DBMS Architecture</a></li>
                        <li><a href="Schema">Schema</a></li>
                        <li><a href="Triggers">Triggers</a></li>
                    </ul>
                </div>

                <div className="question-form">
                    <div className="question-card">
                        <h2>Post A Question</h2>
                        <form id="questionForm">
                            <input
                                type="text"
                                id="questionTitle"
                                placeholder="Question Title"
                                value={questionTitle}
                                onChange={(e) => setQuestionTitle(e.target.value)}
                                required
                            /><br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DBMSSolutionHub;
