import React from 'react';
import { Container, Button } from '@mui/material'
import { Link } from "react-router-dom";
import CharacterList from "../Components/CharacterList"
import '../styles/pages/characters.scss'
import InfiniteScroll from 'react-infinite-scroll-component';

class Home extends React.Component {
    constructor(props) {    
        super(props);    
        this.state = {      
            characters: [],
            totalCount: 0,
            loadUrl: 'https://rickandmortyapi.com/api/character'
        };  
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        if (this.state.loadUrl !== null) {
            const response = await fetch(this.state.loadUrl);
            const json = await response.json();
            this.setState({ characters: this.state.characters.concat(json.results), totalCount: json.info.count , loadUrl: json.info.next });
        }        
    }

    showDetail(character) {
        console.log(character)
    }

    render() {
        return (
            <Container>
                <Link to="/">
                    <Button variant="text" style={{ color: '#fff' }}>{ `< Back` }</Button>
                </Link>  
                <h1 style={{ color: '#fff' }}>Total Characters: {this.state.totalCount}</h1>
                { this.state.characters &&
                    <InfiniteScroll
                    className="characterList"
                    dataLength={this.state.characters.length} //This is important field to render the next data
                    next={this.fetchData}
                    hasMore={true}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                        </p>
                    }                    
                    >
                        {this.state.characters.map(character => (                            
                            <CharacterList key={character.id} character={character} onClick={ () => this.showDetail(character) } />
                        ))}
                    </InfiniteScroll>
                }
            </Container>            
        )
    }
}

export default Home
