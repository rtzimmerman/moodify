import React, {Component} from 'react';
import MoodSelectionForm from './MoodSelectionForm';
import axios from 'axios';

class MoodSelectionFormContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            genres: ['glam-rock'],
            accessToken: 'BQCiLxbeidrvgN9s7aNhNIiZZX86RJtv5HVj_pF8GJnA1zC2tmjXO-0PyKizt_xTc_eg59lz1CeM0-_ojuN6UdFo4_sRX5IE1SVzaNJaT7PnPiEFCVyBlF30JfvArmZZce4Psb3kAvV2HWirFI2b9IxiaSBiaLLQfCA',
        }
    }
    
    componentWillMount(){
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
