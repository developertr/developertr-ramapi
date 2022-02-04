import React from 'react';
import { Container } from '@mui/material'

class Header extends React.Component {
    constructor(props) {    
        super(props);    
        this.state = {      
            title: 'Bu da 2. baslik',
        };  
    }

    render() {
        return (
            <header>
                <Container className="navigationContainer">
                    <img src="https://hypernetlabs.io/wp-content/uploads/2021/10/hypernet_logo_white.svg" alt="" />
                    <a href="https://www.linkedin.com/in/sezgin-altinoz/" target="_blank" rel="noreferrer">LinkedIn</a>
                </Container>
            </header>
        )
    }
}

export default Header
