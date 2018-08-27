import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
//import VideoList from './video_list';
import VideoDetail from './VideoDetail';


class VideoSearchContainer extends Component {
    constructor(props){
        super(props);

        this.state =  {
            videos: null,
            selectedVideo: null,
        };
    }

    componentDidMount(){
        console.log('hello');
    }
    renderVideos() {
        console.log(this.props.videos);
        if(this.props.videos){
            const videos = this.props.videos.map((video, index) => {
                console.log(video);
                return(
                    <VideoDetail key={index} video={video} />
                );
            });
        }
    }

    render(){
        return (
            <div>
                {this.renderVideos()}
            </div>
            );
        }
    }
    export default VideoSearchContainer;