import React from 'react';
import { Helmet } from 'react-helmet';

class Photos extends React.Component {
    render () {
        return (
            <div class='content-container'>
                <Helmet>
                <title>Naveen Venkatesan | Photos</title>
                </Helmet>

                <h1 class='section-title'>Photos</h1>
                
                <p class='section-text'>
                    One of my hobbies is amateur photography, so here is a glimpse of the 
                    world through my viewfinder. Clicking on the images will take you to
                    the original link.
                </p>

                <p class='section-text' style={{'marginTop':'20px'}}>
                    If you would like to see more of my work, here is the link to my profile on Unsplash.
                </p>
            </div>
        );
    }
}

export default Photos;