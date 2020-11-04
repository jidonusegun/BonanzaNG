import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CardList from '../CardList';

function FOODCUPBOARD () {

    return(
        <div>
            <Container>
                    <div style={{margin: "50px 0px", padding: "0px 0px 0px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Breakfast Foods</h2>
                            <Button style={{margin: "0px 20px", color: "white"}}>See All</Button>
                        </div>
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                    </div>

                    <div style={{margin: "50px 0px", padding: "0px 0px 0px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Noodles</h2>
                            <Button style={{margin: "0px 20px", color: "white"}}>See All</Button>
                        </div>
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                    </div>

                    <div style={{margin: "50px 0px", padding: "0px 0px 0px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Pasta</h2>
                            <Button style={{margin: "0px 20px", color: "white"}}>See All</Button>
                        </div>
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                    </div>

                    <div style={{margin: "50px 0px", padding: "0px 0px 0px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Grains & Rice</h2>
                            <Button style={{margin: "0px 20px", color: "white"}}>See All</Button>
                        </div>
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                    </div>                    
            </Container>
        </div>
    )
}

export default FOODCUPBOARD;