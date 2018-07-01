import React from 'react';

const Playlist = (props) => {
    
    const renderPlaylist = () => {
        return props.tracks.map((track) =>{
            return <li key={track.id}>{track.name}</li>
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