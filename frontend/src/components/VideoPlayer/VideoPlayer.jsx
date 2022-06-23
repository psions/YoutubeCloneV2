import React from 'react';
import RelatedVideos from '../RelatedVideos/RelatedVideos';

const VideoPlayer = (props) => {
    return ( 
        <div>
            <iframe title="main-player" id="ytplayer" type="text/html" width="800" height="360"
            src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`}
            frameBorder="0"></iframe>

            <h1>Title: {props.title}</h1>
            <h2>Description: {props.description}</h2>
            <RelatedVideos videoId = {props.videoId}/>
        </div>
     );
}

export default VideoPlayer;