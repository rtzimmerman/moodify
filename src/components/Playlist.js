import React from 'react';

const Playlist = (props) => {
    
    const renderPlaylist = () => {
        return props.tracks.map((track) =>{
            return( 
            <li key={track.id}>
                <a href={track.external_urls.spotify} target="_blank">{`${track.name} by ${track.artists[0].name}`}</a>
            </li>
            );
        });
    }

    return(
        <div>
            <p>My Playlist</p>
            <ul>
                {props.tracks ? renderPlaylist() : undefined}
            </ul>
        </div>
    );
} 

export default Playlist;