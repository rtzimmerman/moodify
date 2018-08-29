import React from 'react';
import './VideoDetail.css';


const VideoDetail = props => {

    // function videoSearch(term) {
    //     YTSearch({key: API_KEY, term: term}, (videos) => {
    //         this.setState({
    //             videos: videos,
    //             selectedVideo: videos[0],
    //         });
    //     });
    // };
    if(!props.video){
        return <div>Loading...</div>;
    }
    const videoId = props.video.id.videoId;
    const url = `http://www.youtube.com/embed/${videoId}`;


    return(
        <div className="video-detail">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{props.video.snippet.title}</div>
                {/* <div>{props.video.snippet.description}</div> */}
            </div>
        </div>
    );
};

export default VideoDetail;