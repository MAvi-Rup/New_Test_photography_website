import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-3'>
            <div className='row g-2'>
                <div className='col-md-4 p-2 me-1 col-12 border border-primary border-3'>
                    <h1>Difference between authorization and authentication?</h1>
                    <p>Answer : Authentication is a method where we can see that the user is valid or not. User who uses the email id is valid or not. ANd authorization is that what featurs users can user used. In a application there are diffeent type of features for different level of users. So the authorixartion fixed that which users can used the which technology.</p>

                </div>
                <div className='col-md-4 p-2 col-12 border border-primary border-3'>
                    <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <p>Answer: We can use firebase for different purpose. We can use firebase for hosting, Authenticaton, Authorization or many more. The reason we use firebase because its easy to use and its a relaiable and secured service. In a application we have worry about our application security . So by using firebase we can easily handle it and makes our life easier and tesnion free.</p>

                </div>
                <div className='col-md-3 p-2 ms-1 col-12 border border-primary border-3'>
                    <h1>What other services does firebase provide other than authentication</h1>
                    <p>Answer: Firebase provide us many more services. Without authentication there are many popular service taht we can use through firebase. Some of them are - Firebase Hosting, Storage, Database, Realtime database and many more. And its also provide service for the webapps, android and ios also. </p>

                </div>

            </div>
            
        </div>
    );
};

export default Blogs;