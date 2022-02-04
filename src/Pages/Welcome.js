import React from 'react';
import '../styles/pages/welcome.scss'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom';

class Welcome extends React.Component {
    constructor(props) {    
        super(props);    
        this.state = {      
            seconds : 5
        };  
    }

    componentDidMount() {
        setInterval(() => {
            this.Timer()
        }, 1000);
    }

    Timer() {
        if (this.state.seconds > 0) {
            let newSecond = this.state.seconds - 1;
            this.setState({ seconds : newSecond })
        }        
    }

    render() {
        return (
            <div className="welcomeContainer">
                <small>React Demo Project for <b>hypernetlabs</b></small>
                <h1>@developertr</h1>
                { this.state.seconds > 0 ?
                    <h2>{ this.state.seconds }</h2>
                :
                    <NavLink to="/home">
                        <Button variant="contained" color="success" style={{marginTop: '33px'}}>Start</Button>
                    </NavLink>
                }
            </div>
        )
    }
}

export default Welcome
