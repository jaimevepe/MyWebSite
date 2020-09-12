import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function About(props) {
    return(
        <div style={{marginBottom: '400px'}}>
            <Hero title={props.title} />
            <Content>
                <p>Hello, my name is Jaime. I'm a full stack developer with experience in ReactJS, Express JS, Node JS, PostgreSQL and Mongo DB</p>

                <p>My Dream is to one day get a job as a Software Engineer (currently working on some projects to build my portfolio even further). </p>
                
                <p>I'm Contantly learning new things. Currently those things include gaining more experience with React, SQL, Mongo DB, Express Js and Node JS.
                   Also getting better at using Google when ever a difficult challenge comes my way. 
                </p>

                <p>LATEST PROJECT PARAGRAPH WILL GO HERE.</p>
                 
                
            </Content>
        </div>
    );
}

export default About;