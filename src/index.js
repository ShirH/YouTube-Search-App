import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import VideoSearch from './components/search_video';
import VideosList from './components/video_list';
import VideoDetails from './components/video_detailes';
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

export const KEY = 'AIzaSyAQAoXWGYFHgnrbxy9F8digGtK9wLeoqOA';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            searchVideo: "garden city movment"
        };
        this.videoSearch(this.state.searchVideo);
    }

    videoSearch(term) {
        YTSearch({key: KEY, term: term}, (videos)=> {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
                searchVideo: this.state.searchVideo
            });
        });

    }

    render() {

        const videoSerch = _.debounce((term) => {
            this.videoSearch({term})
        }, 300);
        return (
            <div>
                <VideoSearch onSearchBarClick={videoSerch}/>
                <VideoDetails video={this.state.selectedVideo}/>
                <VideosList videos={this.state.videos} selectedVideo={this.state.selectedVideo} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);
