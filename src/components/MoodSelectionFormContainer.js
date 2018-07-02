import React, {Component} from 'react';
import MoodSelectionForm from './MoodSelectionForm';
import axios from 'axios';

class MoodSelectionFormContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            genres: ['glam-rock'],
            accessToken: 'BQC0ttTSH52sE5g5TRkAC0VaCIPyuHmfFGKgViSFZl87PBgsaABXz4gt-sfyAXhQQCSDJECudtzKP_mBCpKnw1_Cyui8ZXPHyqAL5bqzb31NxSHC9dSXmgLA71f00qpsyv-7vVFrWrpCQslgP7VVx-xen-490Gv2eXA',
        }
    }

    getRefreshToken = () => {
        const baseUrl = 'https://accounts.spotify.com/api/token';
        var data = JSON.stringify({
            'grant_type': 'refresh_token',
            'refresh_token': 'AQCQuPqcWt3Hbe1WNo8rocuAJzsUmzR5cO7P1TghlQiMGJheNg1BEod8X1Va46_0Ppf8MER5xmLm0x7jECHzfnrnBMqZM8P1rr7CUwiVmg3320If41SZnV-oC6XAPpSdGCI'
        });
        console.log(data );
        var config = {
            headers: {
              'Authorization': 'Basic NjFiMjNjNGQwYWQ1NDFiYWE3MmYxZjRhYmVmNjhlNzE6MDBjYmEyZjg3MjUwNDU1OGJiNTkwZTViYjZhNGNmZTc=',
              'Content-Type': 'application/x-www-form-urlencoded',
            }
        };
        // Make a request for list of genres
        axios.post(baseUrl, data, config)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    componentWillMount(){
        this.getRefreshToken();
        const baseUrl = 'https://api.spotify.com/v1/recommendations/available-genre-seeds';
        var config = {
            headers: {
              'Authorization': 'Bearer ' + this.state.accessToken,
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        // Make a request for list of genres
        axios.get(baseUrl, config)
        .then((response) => {
            this.setState({ genres: response.data.genres});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render(){
        return(
            <MoodSelectionForm genres={this.state.genres}/>
        );
    }
}

export default MoodSelectionFormContainer;
