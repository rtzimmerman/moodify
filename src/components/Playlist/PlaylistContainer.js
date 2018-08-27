import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import axios from 'axios';
import VideoSearchContainer from './VideoSearchContainer';
import Playlist from './Playlist';
import VideoDetail from './VideoDetail'
const API_KEY = 'AIzaSyAD6mJp0fz8vUPx1beF7tYsHK6e4d3g-Ig';
var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

class PlaylistContainer extends Component {
    constructor(props){
        super(props);
        this.stuff = [];
        this.state = {
            videos: null
        }
    }

    renderVideos() {
        this.stuff = [];
        if(this.state.videos){
            return this.state.videos.map((video, index) => {
                return(
                    <VideoDetail key={index} video={video} />
                );
            });
        }
    }

    videoSearch(searchTerms) {
        this.stuff = [];
        const buildSearch = searchTerms.map((term, index) => {
            let params = {
                part: 'snippet',
                key: API_KEY,
                q: term,
                type: 'video'
              };
            return axios.get(ROOT_URL, { params: params }).then((video)=>{
                this.stuff.push(video.data.items[0]);
                console.log(video);
            });
        });
        
        
        
        axios.all(
            [...buildSearch]).then(() => {
                console.log(this.stuff);
               this.setState({videos: this.stuff});
            })
    }

    componentWillReceiveProps(nextProps){
        if(this.props !== nextProps){
        if(nextProps.tracks.length > 0){
            let searchTerms = [];
            const videos = nextProps.tracks.map((track, index) => {
                console.log(track.artists[0].name);
                const searchTerm = `${track.name} ${track.artists[0].name}`
                searchTerms.push(searchTerm);
            });
            console.log(searchTerms);
            this.videoSearch(searchTerms);  
        }
    }
}

   render() {
       return(
       <div>
           <Playlist tracks={this.props.tracks} videos={this.renderVideos()}/>
           {/* <VideoSearchContainer videos={this.state.videos} /> */}
           {/* {this.renderVideos()} */}
       </div>
       )
   }
}

export default PlaylistContainer;