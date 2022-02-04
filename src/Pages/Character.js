import React from 'react';
import { Container } from "@mui/material"
import { useHistory, useParams } from 'react-router-dom'

class Character extends React.Component {
    
    constructor(props) {
        super(props);        
        this.state = { character: [] }
    }

    componentDidMount() {
        const { id } = useParams()
        console.debug(this.props.id)
    }

    fetchData = async (id) => {
        console.log(id)
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const json = await response.json();
        this.setState({ character: json.results });
    }

    render() {        
        return (
            <Container>
                Sezgin
            </Container>        
        )
    }    
}

export default Character