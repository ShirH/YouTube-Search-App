import React, {Component} from 'react';

class VideoSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ""};
    }

    render() {
        return (
            <div className="serch-video">
                <input
                    value={this.state.term}
                    onChange={(event) => {
                    this.setState({term: event.target.value});
                    this.props.onSearchBarClick(event.target.value);
                     }}/>
            </div>
        );
    }
}

export default VideoSearch;