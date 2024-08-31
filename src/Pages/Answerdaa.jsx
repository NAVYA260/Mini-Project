import React from 'react';
import '../Styles/Styles6.css'

const DBMSSolution = () => {
    const handleLikeClick = (event) => {
        const likeCount = event.target.querySelector('.like-count');
        const currentLikes = parseInt(likeCount.textContent);

        if (event.target.classList.contains('liked')) {
            likeCount.textContent = currentLikes - 1;
            event.target.classList.remove('liked');
        } else {
            likeCount.textContent = currentLikes + 1;
            event.target.classList.add('liked');
        }
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
            <div className="topic-heading">Greedy Algorithm</div>
            <div className="answer-box">
                <div className="answer">
                    <div className="user-name" style={{ float: 'right' }}>Elizabeth</div><br />
                    <p>Greedy algorithms typically (but not always) fail to find the globally optimal solution because they usually do not operate exhaustively on all the data.</p> 
                    <p>They can make commitments to certain choices too early, preventing them from finding the best overall solution later.</p>
                    <p>For example, all known greedy coloring algorithms for the graph coloring problem and all other NP-complete problems do not consistently find optimum solutions.</p> 
                    <p>Nevertheless, they are useful because they are quick to think up and often give good approximations to the optimum.</p>
                    <p>If a greedy algorithm can be proven to yield the global optimum for a given problem class, it typically becomes the method of choice because it is faster than other optimization methods like dynamic programming.</p>
                    <p> Examples of such greedy algorithms are Kruskal's algorithm and Prim's algorithm for finding minimum spanning trees and the algorithm for finding optimum Huffman trees.</p>

                    <div className="card-buttons">
                        <div className="like-button" onClick={handleLikeClick}>
                            <span className="heart-icon">&#10084;</span> <span className="like-count">0</span>
                        </div>
                        <a href="share-page.html" className="share-button">Share</a>
                    </div>
                    <div className="question-form">
          <div className="question-card">
          <h2 className="left-align">Submit a new solution</h2>
            <form id="questionForm">
              <input type="text" id="questionTitle" placeholder="Enter your solution" required />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
                </div>
            </div>

        </div>
    );
}

export default DBMSSolution;
