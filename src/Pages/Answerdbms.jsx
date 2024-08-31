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
            <div className="topic-heading">Structure of Database</div>
            <div className="answer-box">
                <div className="answer">
                    <div className="user-name" style={{ float: 'right' }}>John Doe</div><br />
                    <p>The structure of a database refers to the way data is organized and stored within the database management system (DBMS).</p>
                    <p>There are several components that make up the structure of a database:</p>
                    <ul>
                        <li><strong>Tables:</strong> These are the primary storage units in a database, where data is stored in rows and columns.</li>
                        <li><strong>Columns:</strong> Also known as fields or attributes, columns represent the different types of data that can be stored in a table.</li>
                        <li><strong>Rows:</strong> Also known as records or tuples, rows contain the actual data stored in the database.</li>
                        <li><strong>Indexes:</strong> Indexes are used to improve the performance of database queries by providing quick access to specific data.</li>
                        <li><strong>Constraints:</strong> Constraints are rules that enforce data integrity, such as ensuring that certain columns cannot contain null values or enforcing referential integrity between tables.</li>
                    </ul>

                    <div className="card-buttons">
                        <div className="like-button" onClick={handleLikeClick}>
                            <span className="heart-icon">&#10084;</span> <span className="like-count">0</span>
                        </div>
                        <a href="share-page.html" className="share-button">Share</a>
                    </div>
                </div>
            </div>
            <div className="question-form">
          <div className="question-card">
            <h2 style={{alignItems:"left"}}>Submit a new solution</h2>
            <form id="questionForm">
              <input type="text" id="questionTitle" placeholder="Enter your solution" required />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>

        </div>
    );
}

export default DBMSSolution;
