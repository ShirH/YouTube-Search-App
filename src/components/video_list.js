import React, {Component} from 'react';
import VideoItem from './video_item';

const VideosList = (props) => {

    const videos = props.videos.map((video)=> {
        return <VideoItem
            key={video.etag}
            video={video}
            onVideoSelect={props.onVideoSelect}/>
    });

    return (
        <ul className="col-md-4 list-group list-group-item" >
            {videos}
        </ul>
    );
}

export default VideosList;