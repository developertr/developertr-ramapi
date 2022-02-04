import React from 'react';

class About extends React.Component {
    constructor(props) {    
        super(props);    
        this.state = {      
            title: 'Bu da 2. baslik',
        };  
    }

    render() {
        return (
            <div>{this.props.title} HomePage</div>
        )
    }
}

export default About
