import React, {Component} from 'react';
import VideoDetail from './VideoDetail'
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyAD6mJp0fz8vUPx1beF7tYsHK6e4d3g-Ig';

class VideosContainer extends Component {
    
    constructor(props){
        super(props);
        console.log();
        this.state = {
            video: null,
        }
    }

    componentWillMount(){
        this.videoSearch(`${this.props.track.name} ${this.props.track.artists[0].name}`)
    }

    getVideoSearchQuery() {

    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                video: videos[0],
            });
        });
    };
    
    render() {
        return(
            <div>
                <VideoDetail video={this.state.video}/>
            </div>
        )
    }
}

export default VideosContainer;