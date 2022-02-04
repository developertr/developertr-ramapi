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
                <small>React Learning & Demo Project</small>
                <h1>@developertr</h1>
                { this.state.seconds > 0 ?
                    <h2>{ this.state.seconds }</h2>
                :
                    <div>
                        <NavLink to="/home">
                            <Button variant="contained" color="success" style={{marginTop: '33px'}}>Infinite Scroll Demo</Button>
                        </NavLink>
                        <NavLink to="/pagination-home">
                            <Button variant="contained" color="primary" style={{marginTop: '33px',marginLeft:'15px'}}>Pagination Demo</Button>
                        </NavLink>
                    </div>
                }
            </div>
        )
    }
}

export default Welcome
