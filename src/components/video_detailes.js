import React from 'react';

const videoDetails = ({video})=> {
    if (!video) {
        return (<div>loading...</div>);
    }
    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId || 'videoseries?list='+video.id}`;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={videoUrl}/>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default videoDetails;