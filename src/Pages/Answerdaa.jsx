import React, { useState } from 'react';
import '../Styles/Styles8.css'

const GreedyAlgorithm = () => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div>
            <div className="navbar">
                <div className="navbar-brand">Solution Hub</div>
                <a href="index.html" className="back-button">&#8592;</a>
                <div className="navbar-options">
                    <a href="Login">Home</a>
                    <a href="Subjects">Subjects</a>
                </div>
                <div className="profile-logo">Profile</div>
            </div>

            <div className="topic-heading">Greedy Algorithm</div>
            <div className="answer-box">
                <div className="answer">
                    <div className="user-name">Olivia</div><br />
                    <p>A greedy algorithm is an approach for solving problems by making the locally optimal choice at each stage with the hope of finding a global optimum.</p>
                    <p>Here's a simple example of a greedy algorithm:</p>
                    <ol>
                        <li>Start with an empty set.</li>
                        <li>At each step, pick the most favorable item and add it to the set.</li>
                        <li>Continue until no more items can be added without violating constraints.</li>
                    </ol>
                    <p>Greedy algorithms are often used in optimization problems, such as finding the shortest path in a graph, scheduling tasks, or minimizing the cost of a solution.</p>
                    <div className="card-buttons">
                        <button className="like-button" onClick={handleLike}>
                            <span className="heart-icon">&#10084;</span> <span className="like-count">{likes}</span>
                        </button>
                        <a href="share-page.html" className="share-button">Share</a>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="answer">
                    <div className="user-name">Elizabeth</div><br />
                    <p>A greedy algorithm is an approach for solving a problem by selecting the best option available at the moment. It doesn't worry whether the current best result will bring the overall optimal result.</p>
                    <p>The algorithm never reverses the earlier decision even if the choice is wrong. It works in a top-down approach.</p>
                    <p>This algorithm may not produce the best result for all the problems. It's because it always goes for the local best choice to produce the global best result.</p>
                    <p>However, we can determine if the algorithm can be used with any problem if the problem has the following properties:</p>
                    <b>1. Greedy Choice Property</b>
                    <p>If an optimal solution to the problem can be found by choosing the best choice at each step without reconsidering the previous steps once chosen, the problem can be solved using a greedy approach. This property is called greedy choice property.</p>
                    <b>2. Optimal Substructure</b>
                    <p>If the optimal overall solution to the problem corresponds to the optimal solution to its subproblems, then the problem can be solved using a greedy approach. This property is called optimal substructure.</p>
                    <b>Advantages of Greedy Approach</b>
                    <ul>
                        <li>The algorithm is easier to describe.</li>
                        <li>This algorithm can perform better than other algorithms (but, not in all cases).</li>
                        <li>A greedy algorithm works by making the locally optimal choice at each stage in the hope of finding a global optimum. It's simple and efficient for many problems, but it may not always produce the best solution.</li>
                    </ul>
                </div>
                <div className="card-buttons">
                    <button className="like-button" onClick={handleLike}>
                        <span className="heart-icon">&#10084;</span> <span className="like-count">{likes}</span>
                    </button>
                    <a href="share-page.html" className="share-button">Share</a>
                </div>
            </div>
        </div>
    );
}

export default GreedyAlgorithm;
