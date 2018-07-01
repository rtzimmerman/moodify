import React, {Component} from 'react';
import './MoodSelectionForm.css';
import axios from 'axios';
import Playlist from './Playlist';

class MoodSelectionForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            energy: 0,
            danceability: 0,
            tempo: 0,
            positivity: 0,
            tracks: []
        }
    }

    handleEnergyChange = (event) => {
        console.log(event.target.value);

        this.setState({energy: event.target.value});
    }

    handleDanceabilityChange = (event) => {
        console.log(event.target.value);

        this.setState({danceability: event.target.value});
    }

    handleTempoChange = (event) => {
        console.log(event.target.value);
        this.setState({tempo: event.target.value});
    }

    handlePositivityChange = (event) => {
        console.log(event.target.value);
        this.setState({positivity: event.target.value});
    }

    handleButtonClick = () => {
        console.log(this.state);
        const accessToken = 'BQDihzTa-dyZitVfirSNN5Vs6meMgpswuvFU6g2rBil93tH98V7VTplprIOAl41P6fkjM3SnPhayqE7HCk49l-CRRMgKEZ8NwrLHm89xkh4LykEm1pCaUb13oEfa93gV4SJF44yQ5PyfJSdgnYhNe7qmXzLlhaqV1HY';

        const baseUrl = 'https://api.spotify.com/v1/recommendations';
        var config = {
            headers: {
              'Authorization': 'Bearer ' + accessToken,
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        // Make a request for list of genres
        axios.get(`${baseUrl}?limit=10&market=US&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=acoustic&seed_tracks=0c6xIDDpzE81m2q797ordA&max_danceability=0.3&min_valence=0&max_valence=0.5&target_valence=0.1`, config)
        .then((response) => {
            console.log(response.data.tracks);
            this.setState({tracks: response.data.tracks})
        })
        .catch((error) => {
            console.log(error);
        });
    }

    renderGenres = () => {
        return this.props.genres.map((genre) => {
            return <option key={genre}>{genre}</option>
        });
    }

    render(){
        return(
            <div className="mood-selection-form">
                <h1>How are you feeling?</h1>
                <select id="genrePicklist">
                    {this.renderGenres()}
                </select>
                <label>Energy</label>
                <input id="energy" type="range" name="energy" min="0" max="100" onInput={this.handleEnergyChange}/>
                <label>Danceability</label>
                <input id="danceability" type="range" name="danceability" min="0" max="100" onInput={this.handleDanceabilityChange}/>
                <label>Tempo</label>
                <input id="tempo" type="range" name="tempo" min="0" max="100" onInput={this.handleTempoChange}/>
                <label>Positivity</label>
                <input id="positivity" type="range" name="positivity" min="0" max="100" onInput={this.handlePositivityChange}/>
                <button onClick={this.handleButtonClick}>Generate Playlist</button> 
                <Playlist tracks={this.state.tracks}/>   
            </div>
        );
    }
}

export default MoodSelectionForm;