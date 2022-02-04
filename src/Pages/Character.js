import React from 'react';
import { Container } from "@mui/material"
import { useNavigate, useParams, Link } from "react-router-dom";
import { FormControl, InputLabel, Select, MenuItem , Grid , Typography, Button , List , ListItem , ListItemText  } from "@mui/material";
import '../styles/pages/characters.scss'

function withNavigation(Component) {
  return props => <Component {...props} navigate={useNavigate()} />;
}

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class Character extends React.Component {
    
    constructor(props) {
        super(props);       
        let { id } = this.props.params;
        let { page } = this.props.params;
        this.state = { 
            id : id,
            characterPage : page,
            character: {},
            episodes: [],
            episodeLimit: 5
        }
    }

    componentDidMount() {      
        // let { id } = useParams();
        // const id = this.props.match.params.id;  
        // console.debug(id)
        this.fetchData()
    }

    fetchData = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`);
        const json = await response.json();
        this.setState({ character: json });


        if (this.state.character.episode) {
            let episodes = this.state.character.episode;
            episodes.slice(0, 5).map(episode => {
                this.getEpisode(episode)
            });
        }

    }

    getEpisode = async (url) => {
        const response = await fetch(url);
        const json = await response.json();
        this.setState({ episodes: this.state.episodes.concat(json) });
    }

    render() {        
        let backLink = `/home`;
        
        if (this.state.characterPage > 0) {      
            console.log('sezgin')
            backLink = `/pagination-home/${this.state.characterPage}`    
        }

        return (
            <Container className="characterDetail">
                { this.state.character &&
                    <>
                    <Link to={backLink}>
                        <Button variant="text" style={{ color: '#fff' }}>{ `< Back` }</Button>
                    </Link>
                    <Grid container spacing={2}>                        
                        <Grid item md={3}>
                            <img
                                src={this.state.character.image}
                                alt={this.state.character.name}
                                loading="lazy"
                                className="avatar"
                            />
                        </Grid>     
                        <Grid item md={5}>
                            <Grid container spacing={2}>     
                                <Grid item xs={12}>
                                    <Typography variant="h1" component="h1">{this.state.character.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={{ fontSize: 12 }} color="'#fff'">Status</Typography>
                                    <Typography sx={{ fontSize: 14 }}>{this.state.character.status}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={{ fontSize: 12 }} color="'#fff'">Species</Typography>
                                    <Typography sx={{ fontSize: 14 }}>{this.state.character.species}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={{ fontSize: 12 }} color="'#fff'">Gender</Typography>
                                    <Typography sx={{ fontSize: 14 }}>{this.state.character.gender}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={{ fontSize: 12 }} color="'#fff'">Location</Typography>
                                    { this.state.character.location &&
                                        <Typography sx={{ fontSize: 14 }}>{this.state.character.location.name}</Typography>
                                    }
                                </Grid>
                            </Grid>                            
                        </Grid>                   
                        <Grid item md={4}>
                            <Grid container spacing={2} className="latestEpisodes">                                
                                <Grid item xs={12}>
                                    <List sx={{ width: '100%', bgcolor: 'background.dark', padding: 0 }}>
                                    { this.state.episodes.map((episode) => (
                                        <ListItem key={episode.id}>
                                            <ListItemText primary={`Episode Name: ${episode.name}`} secondary={ episode.air_date } />
                                        </ListItem>
                                    ))}
                                    </List>
                                </Grid>                  
                            </Grid>
                        </Grid>                        
                    </Grid>                        
                    </>    
                }
            </Container>        
        )
    }    
}

export default withParams(Character);