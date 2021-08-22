import axios from 'axios';
import React from 'react';
import { ReactMic } from 'react-mic';
import './Voice.css';

class VoiceSearchButton extends React.Component {
    state = {
        listening: false,
        loaded: false,
        result_url: '',
    }
    audio = new Audio(this.state.result_url)

    recordingFinish = (blob) => {
        console.log(blob);

        var bodyFormData = new FormData();
        bodyFormData.append('file', blob.blob);

        axios({
            method: 'post',
            url: 'https://yathavanparamesh.ca/api/hack/getAudio',
            data: bodyFormData,
            headers: {
                "Content-Type": "multipart/form-data"
            },
        }).then((response) => {
            console.log(response);
            this.setState({
                loaded: true,
                result_url: ("https://yathavanparamesh.ca/static/audios/" + response.data),
            });
            console.log(this.state.result_url);
            // this.audio.play();
        }).catch((err) => {
            console.error(err);
        });
    }

    render() {
        return (
            <div id={this.state.listening ? 'positive' : 'negative'} className={'button'} onClick={() => { this.setState({ listening: !this.state.listening }) }}>
                <ReactMic className={'button'} record={this.state.listening} onStop={this.recordingFinish} />
            </div>
        )
    }
}

export default VoiceSearchButton;