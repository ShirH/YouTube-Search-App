import React, {Component} from 'react';

class VideoSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {content: ""};
    }

    render() {
        return (
            <input
                value={this.state.content}
                onChange={(event) => {this.setState({content: event.target.value}); }}/>
        );
    }
}

export default VideoSearch;