import $ from 'jquery';
import _ from 'lodash';

import React, {Component} from 'react';
import {KEY} from '../index';

class VideoPlaylist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playlist: null,
            selectedVideo: props.selectedVideo
        };
    }

    getPlaylist = () => {
        if (this.state.selectedVideo) {
            let url = `https://www.googleapis.com/youtube/v3/playlists`;
            return $.ajax({
                url: url,
                type: 'GET',
                data: {
                    channelId: this.state.selectedVideo.snippet.channelId,
                    maxResults: '1',
                    key: KEY,
                    part: 'snippet,contentDetails'
                },
                crossDomain: true,
                complete: this.onPlaylistSelected
            });
        }
    };

    onPlaylistSelected = (playlist, status) => {
        if (status === "success") {
            let selectedVideo = this.state.selectedVideo;
            this.setState({
                playlist: playlist.responseJSON.items[0],
                selectedVideo
            });
        }
    };

    componentWillUpdate(nextProps, nextState) {
        if (!_.isEqual(nextState.selectedVideo, nextProps.selectedVideo)) {
            nextState.selectedVideo = nextProps.selectedVideo;
            this.getPlaylist();
        }
    }


    render() {
        if (this.state.playlist) {
            const imageUrl = this.state.playlist.snippet.thumbnails.default.url;

            return (
                <li className="list-group-item video-item"
                    onClick={() => this.props.onVideoSelect(this.state.playlist)}>

                    <div className="media-left">
                        Check this Playlist:
                    </div>
                    <div>
                        <div className="media-left">
                            <img className="media-object" src={imageUrl}/>
                        </div>

                        <div className="media-body">
                            <div className="media-heading">{this.state.playlist.snippet.title}</div>
                        </div>
                    </div>

                </li>
            );
        } else {
            return (<li className="list-group-item video-item">
                loading...
            </li>);
        }
    }
}

export default VideoPlaylist;
