import React from 'react';

const DAASolution = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const title = event.target.querySelector("#questionTitle").value;
        console.log("Question Title:", title);
        event.target.querySelector("#questionTitle").value = "";
    };

    return (
        <div>
            <div className="navbar">
        <div className="navbar-brand">Solution Hub</div>
        <form className="search-form">
          <input type="text" className="search-bar" placeholder="Search..." />
        </form>
        <div className="navbar-options">
          <a href="/Subjects">Subjects</a>
          <a href="/Profile">Profile</a>
          <a href="/Login">Log out</a>
        </div>
      </div>

            <div className="questions">
                <div className="question-card">
                    <h2>DAA Topics</h2>
                    <ul>
                        <li><a href="Algorithm">Algorithm</a></li>
                        <li><a href=" Time complexity and space complexity">Time complexity and space complexity </a></li>
                        <li><a href="Knapsack Problem">Knapsack Problem</a></li>
                        <li><a href="Answerdaa">Greedy Algorithm</a></li>
                        <li><a href="Back Tracking">Back Tracking</a></li>
                        <li><a href="Asymptotics Notations">Asymptotics Notations</a></li>
                        <li><a href="Sorting">Sorting</a></li>
                    </ul>
                </div>

                <div className="question-form">
                    <div className="question-card">
                        <h2>Post A Question</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" id="questionTitle" placeholder="Question Title" required /><br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DAASolution;
