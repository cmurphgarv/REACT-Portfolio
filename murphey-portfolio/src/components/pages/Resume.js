import React from 'react';
import '../../styles/Resume.css';
const resumeFile = require('../../MurpheyResume2023.pdf');

export default function Resume() {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(resumeFile).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = resumeFile;
                alink.click();
            })
        })
    }
    return(
        <div className='resumeContainer'>

            <h3>Proficiencies</h3>
            <ul>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>MERN Stack</li>
                <li>JQuery</li>
                
            </ul>

            <button onClick={onButtonClick}>
                    Download Resume PDF
                </button>
        </div>
    )
}