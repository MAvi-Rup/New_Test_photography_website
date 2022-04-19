import React from 'react';

const AboutMe = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-7 col-12 me-2 jusify-content-center">
                    <h1 className='text-center'>About Me</h1>
                    <p>Hello, I am Avirup Mondol. I am a frontend Developer.</p>
                    <p><b>Goal and Objective:</b> My career goal is want to be a professional react developer. I want to start my carrer as a frontend developer. I love to do coding and gives me much pleasure. I will work haed as much posible as i can to achive my goal. This is a short brief about myself. Here given some technology that I know.</p>
                    <ul className="list-group">
                        <li className="list-group-item">JavaScript</li>
                        <li className="list-group-item">React</li>
                        <li className="list-group-item">Firebase</li>
                        <li className="list-group-item">API</li>
                        <li className="list-group-item">JSON</li>
                    </ul>

                </div>
                <div className="col-md-4 col-12">
                    <img className='img-fluid text-center' src="./images/Avirup.jpg" alt="" srcset="" />
                </div>
            </div>

        </div>
    );
};

export default AboutMe;