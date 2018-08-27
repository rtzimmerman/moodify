import React from 'react';

const Playlist = (props) => {
    
    const renderPlaylist = () => {
        console.log(props.videos);
        return props.tracks.map((track, index) =>{
            return( 
            <li style={{border: '1px solid black'}} key={track.id}>
                <a href={track.external_urls.spotify} target="_blank">{`${track.name} by ${track.artists[0].name}`}</a>
                {props.videos ? props.videos[index] : ''}
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