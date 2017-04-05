import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import VideoSearch from './components/search_video';
import VideosList from './components/video_list';
import YTSearch from 'youtube-api-search'

const KEY = 'AIzaSyAQAoXWGYFHgnrbxy9F8digGtK9wLeoqOA';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos: []};

        YTSearch({key: KEY, term: "garden city movment"}, (videos)=> {
            this.setState({videos})
        });
    }

    render() {
        return (
            <div>
                <VideoSearch />
                <VideosList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);
