import React from 'react';


// IMAGES
import pic from '../assets/line-img.JPG';
import Content from '../components/Content';


function HomePage() {

    return(
        <div>
            <div className="d-flex bd-highlight example-parent">
            <div className="p-2 flex-fill bd-highlight col-example"><h1>Rachel Gundy</h1></div>
            <div className="p-2 flex-fill bd-highlight col-example"><h3>Software Engineer in Seattle</h3></div>
            <div className="p-2 flex-fill bd-highlight col-example"><img src={ pic } alt="profile" padding="0"/></div>
        </div>
            
            <Content>
                    <p>Hello, my name is Rachel. I'm a full stack engineer leveraging a background in Product Managment to build a more intuitive user experience on the web. </p>

                    <p>I'm driven by working on products that delight users, solves complex customer problems with simple solutions, while driving significant business outcomes.</p>

                    <p>While my experience is with MongoDB, JavaScript, React.js and Node.js, I am always striving to learn new things. </p>
                    
                
            </Content>

        </div>
    );
}

export default HomePage;