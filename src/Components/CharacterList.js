import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

class CharacterList extends React.Component {
    constructor(props) {    
        super(props);    
        this.state = {
            charactersData: [],
        };  
    }

    render() {
        return (
            <>
                <Card className="characterCard">
                    <Link to={`/character/${this.props.character.id}`}>
                        <CardMedia
                            className="image"
                            component="img"
                            image={this.props.character.image}
                            alt={this.props.character.name} />
                    </Link>
                    <CardContent className="title">
                        <Typography gutterBottom variant="h6" component="div">
                            {this.props.character.name}
                        </Typography>
                    </CardContent>
                </Card>
            </>
        )
    }
}

export default CharacterList