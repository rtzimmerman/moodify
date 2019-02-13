import React, {Component} from 'react';
import MoodSelectionForm from './MoodSelectionForm';
import axios from 'axios';

class MoodSelectionFormContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            genres: ['Loading...'],
            accessToken: '',
        }
    }

    getGenres = () => {
        const baseUrl = 'https://api.spotify.com/v1/recommendations/available-genre-seeds';
        var httpConfig = {
            headers: {
              'Authorization': 'Bearer ' + this.state.accessToken,
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        // Make a request for list of genres
        axios.get(baseUrl, httpConfig)
        .then((response) => {
            this.setState({ genres: response.data.genres});
        })
        .catch((error) => {
            console.log(error);
        });

    }

    getRefreshToken = () => {
        const refreshUrl = 'https://delicat-vin-94241.herokuapp.com/refresh?refresh_token=AQCQuPqcWt3Hbe1WNo8rocuAJzsUmzR5cO7P1TghlQiMGJheNg1BEod8X1Va46_0Ppf8MER5xmLm0x7jECHzfnrnBMqZM8P1rr7CUwiVmg3320If41SZnV-oC6XAPpSdGCI';
        // Make a request for list of genres
        axios.get(refreshUrl)
        .then((response) => {
            this.setState({ accessToken: response.data.access_token});
        }).then(() => {
            this.getGenres();
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    componentWillMount(){
        this.getRefreshToken();
    }

    render(){
        return(
            <MoodSelectionForm accessToken={this.state.accessToken} genres={this.state.genres} refreshToken={this.getRefreshToken}/>
        );
    }
}

export default MoodSelectionFormContainer;
