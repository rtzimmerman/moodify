import React, {Component} from 'react';
import './MoodSelectionForm.css';
import axios from 'axios';
import Playlist from './Playlist';

class MoodSelectionForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            genre: 'acoustic',
            energy: 0,
            danceability: 0,
            tempo: 0,
            positivity: 0,
            tracks: []
        }
    }

    handleGenreChange = (event) => {

    }

    handleEnergyChange = (event) => {
        const energy = event.target.value / 100;
        this.setState({energy});
    }

    handleDanceabilityChange = (event) => {
        const danceability = event.target.value / 100;

        this.setState({danceability});
    }

    handleTempoChange = (event) => {
        const tempo = event.target.value / 100;
        this.setState({tempo});
    }

    handlePositivityChange = (event) => {
        const positivity = event.target.value / 100;
        this.setState({positivity});
    }

    handleButtonClick = () => {
        console.log(this.state);
        const accessToken = 'BQCiLxbeidrvgN9s7aNhNIiZZX86RJtv5HVj_pF8GJnA1zC2tmjXO-0PyKizt_xTc_eg59lz1CeM0-_ojuN6UdFo4_sRX5IE1SVzaNJaT7PnPiEFCVyBlF30JfvArmZZce4Psb3kAvV2HWirFI2b9IxiaSBiaLLQfCA';

        const baseUrl = 'https://api.spotify.com/v1/recommendations';
        var config = {
            headers: {
              'Authorization': 'Bearer ' + accessToken,
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        // Make a request for list of genres
        axios.get(`${baseUrl}?limit=10&market=US&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=acoustic&seed_tracks=0c6xIDDpzE81m2q797ordA&max_danceability=${this.state.danceability}&max_valence=${this.state.positivity}&energy=${this.state.energy}`, config)
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