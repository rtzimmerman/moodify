import React from 'react';
import VideosContainer from './VideosContainer'

const Playlist = (props) => {
    
    const renderPlaylist = () => {
        return props.tracks.map((track) =>{
            return( 
            <li key={track.id}>
                <i className="fa fa-spotify"></i>
                <a href={track.external_urls.spotify} target="_blank">{`${track.name} by ${track.artists[0].name}`}</a>
                <VideosContainer track={track} />
            </li>
            );
        });
    }

    return(
        <div>
            <p>{props.tracks.length > 0 ? 'Your moody playlist: ': ''}</p>
            <ul>
                {props.tracks ? renderPlaylist() : undefined}
            </ul>
        </div>
    );
} 

export default Playlist;