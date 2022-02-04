import React from 'react';
import { Container, Button , Pagination , PaginationItem } from '@mui/material'
import { useNavigate, useParams, Link } from "react-router-dom";
import CharacterList from "../Components/CharacterList"
import '../styles/pages/characters.scss'

function withNavigation(Component) {
  return props => <Component {...props} navigate={useNavigate()} />;
}

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class PaginationHome extends React.Component {
    constructor(props) {    
        super(props);
        let { page } = this.props.params;
        this.state = {      
            characters: [],
            jsonInfo: [],
            currentPage: Number(page),
            loadUrl: 'https://rickandmortyapi.com/api/character?page='+Number(page)
        };  
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        if (this.state.loadUrl !== null) {
            const response = await fetch(this.state.loadUrl);
            const json = await response.json();
            this.setState({ characters: json.results, jsonInfo: json.info , loadUrl: json.info.next });
        }        
    }

    handleChange = (event, value) => {
        if (this.state.currentPage !== value) {
            this.setState({ currentPage: value , loadUrl: 'https://rickandmortyapi.com/api/character?page='+value })
            this.fetchData();
        }
    };

    render() {
        return (
            <Container>
                <Link to="/">
                    <Button variant="text" style={{ color: '#fff' }}>{ `< Back` }</Button>
                </Link>  
                <h1 style={{ color: '#fff' }}>Total Characters: {this.state.jsonInfo.count}</h1>
                { this.state.characters &&
                    <div>
                        <div className="characterList">
                            {this.state.characters.map(character => (                            
                                <CharacterList key={character.id} character={character} characterPage={this.state.currentPage} onClick={ () => this.showDetail(character) } />
                            ))}
                        </div>
                        <div className="pagination">
                        <Pagination
                        page={this.state.currentPage}
                        count={this.state.jsonInfo.pages}
                        onChange={this.handleChange}
                        renderItem={(item) => (
                            <PaginationItem
                            component={Link}
                            to={`/pagination-home/${item.page}`}
                            {...item}
                            />
                        )}
                        />
                        </div>
                    </div>
                }                
            </Container>            
        )
    }
}

export default withParams(PaginationHome);
