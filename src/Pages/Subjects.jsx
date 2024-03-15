import React, { useEffect } from 'react';
import '../Styles/Styles4.css'; 

const Subjects = () => {
  useEffect(() => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const title = document.getElementById("questionTitle").value;
      console.log("Question Title:", title);
      document.getElementById("questionTitle").value = "";
    };

    const form = document.getElementById("questionForm");
    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-brand">Solution Hub</div>
        <form className="search-form">
          <input type="text" className="search-bar" placeholder="Search..." />
        </form>
        <div className="navbar-options">
          <a href="Login.html">Home</a>
          <a href="Subjects.html">Subjects</a>
        </div>
        <div className="profile-logo">Profile</div>
      </div>

      <div className="questions">
        <div className="question-card">
          <h2>SUBJECTS</h2>
          <ul>
            <li><a href="Dbms">Database Management System</a></li>
            <li><a href="Daa">Design Analysis Algorithm </a></li>
            <li><a href="Theory of computation"> Theory of computation</a></li>
            <li><a href="Advanced Data Structures">Advanced Data Structures</a></li>
            <li><a href="Universal Human Values"> Universal Human Values</a></li>
            <li><a href="Full Stack Application Development">Full Stack Application Development</a></li>
            <li><a href="Python">Python</a></li>
          </ul>
        </div>

        <div className="question-form">
          <div className="question-card">
            <h2>Add Subject</h2>
            <form id="questionForm">
              <input type="text" id="questionTitle" placeholder="Enter subject name" required /><br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subjects;
