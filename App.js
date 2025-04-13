import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="resume">
      <h1>Kakarla Medha Reddy</h1>
      <p>Email: <a href="mailto:medhareddykakarla@gmail.com">medhareddykakarla@gmail.com</a></p>
      <p>Mobile: +91-8309353469</p>
      <p>
        <a href="https://www.linkedin.com/in/medha-reddy-kakarla-b339a928a/" target="_blank" rel="noreferrer">
          LinkedIn
        </a> |{' '}
        <a href="https://github.com/MedhaReddyKakarla" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>

      <h2>Education</h2>
      <ul>
        <li><strong>BVRIT HYDERABAD</strong> - B.Tech in IT (2023-2027)</li>
        <li>Sri Chaitanya College (2021-2023)</li>
        <li>Bhashyam High School (2011-2021)</li>
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>Programming: Java, C, HTML, CSS, Python, SQL</li>
        <li>Operating Systems: Windows, Ubuntu</li>
        <li>Tools: GitHub, VS Code, Eclipse</li>
        <li>Soft Skills: Leadership, Creative Thinking, Teamwork, Adaptability, Time Management</li>
      </ul>

      <h2>Projects</h2>
      <ul>
        <li><strong>Pick n Pack (Nov 2024):</strong> Console-based grocery app in Java with user/cart system.</li>
        <li><strong>Car Race Simulation (Oct 2023):</strong> GUI game using Python Tkinter, PIL, Pygame.</li>
      </ul>

      <h2>Hackathons</h2>
      <ul>
        <li><strong>DEMUX 2k24:</strong> Smart Irrigation System using Python GUI.</li>
        <li><strong>Great AppSec Hackathon 2024:</strong> Secure web app using Java, MySQL.</li>
      </ul>

      <h2>Certifications</h2>
      <ul>
        <li>SkillUP - 101 MS Excel (May 2024)</li>
        <li>Flipkart Grid 6.0 (Aug 2024)</li>
        <li>Great AppSec Hackathon (Aug-Sep 2024)</li>
        <li>NPTEL - Joy of Computing using Python (Jan-Apr 2024)</li>
      </ul>

      <h2>Publications</h2>
      <p>
        <strong>7th Pure Earth Environment Conference (Nov 2023):</strong> Published article on E-Waste Management Strategies.
      </p>
    </div>
  );
}

export default App;
