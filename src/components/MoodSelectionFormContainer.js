import React, {Component} from 'react';
import MoodSelectionForm from './MoodSelectionForm';
import axios from 'axios';

class MoodSelectionFormContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            genres: ['glam-rock'],
            accessToken: 'BQDihzTa-dyZitVfirSNN5Vs6meMgpswuvFU6g2rBil93tH98V7VTplprIOAl41P6fkjM3SnPhayqE7HCk49l-CRRMgKEZ8NwrLHm89xkh4LykEm1pCaUb13oEfa93gV4SJF44yQ5PyfJSdgnYhNe7qmXzLlhaqV1HY',
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
