import React from 'react';
import Container from './Container.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [],
            uploading: false,
        }

        this.addToState = this.addToState.bind(this);
        this.submit = this.submit.bind(this); 
    }

    addToState(image) {
        const img = this.state.images.slice();
        const holder = URL.createObjectURL(image);
        img.push(holder);
        this.setState({images: img});
    }

    submit(){
        let reqBody = new FormData();

        for (let i = this.state.images.length-1; i > -1; i--) {
            reqBody.append(`${i}`, this.state.images[i]);
        }

        const reqObj = {
            method: 'POST',
            body: reqBody
        }

        this.setState({uploading: true});
 
        fetch('http://localhost:3000/', reqObj)
        .then(result => {
            console.log(result);
            this.setState({
                uploading: false,
                images:[]
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <Container images={this.state.images} addToState={this.addToState} submit={this.submit}/>
        )
    }
}

export default App;