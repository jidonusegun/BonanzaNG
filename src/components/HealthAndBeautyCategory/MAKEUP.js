import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CardList from '../CardList';

function MAKEUP () {

    return(
        <div>
            <Container>
                    <div style={{margin: "50px 0px", padding: "0px 0px 0px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Concealers & Color Correctors</h2>
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
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Foundation</h2>
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
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Lip Gloss</h2>
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
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Powder</h2>
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

export default MAKEUP;