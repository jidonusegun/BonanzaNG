import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CardList from './CardList';
import { Link } from 'react-router-dom';

function HomeAndOfficeCategory () {

    return(
        <div>
            <Container>
                <h1>Home & Office Category</h1>
                    <div style={{margin: "0px", border: "1px solid grey", padding: "0px 0px 40px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>HOME & KITCHEN</h2>
                            <Link to="/homEANDKITCHEN"><Button style={{margin: "0px 20px", color: "white"}}>See All</Button></Link>
                        </div>
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                    </div>

                    <div style={{margin: "50px 0px", border: "1px solid grey", padding: "0px 0px 40px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>HOME & OFFICE FURNITURE</h2>
                            <Link to="/homEANDKITCHEN"><Button style={{margin: "0px 20px", color: "white"}}>See All</Button></Link>
                        </div>
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                    </div>

                    <div style={{margin: "50px 0px", border: "1px solid grey", padding: "0px 0px 40px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>OFFICE PRODUCTS</h2>
                            <Link to="/homEANDKITCHEN"><Button style={{margin: "0px 20px", color: "white"}}>See All</Button></Link>
                        </div>
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                    </div>

                    <div style={{margin: "50px 0px", border: "1px solid grey", padding: "0px 0px 40px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>SMALL APPLIANCES</h2>
                            <Link to="/homEANDKITCHEN"><Button style={{margin: "0px 20px", color: "white"}}>See All</Button></Link>
                        </div>
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                    </div>

                    <div style={{margin: "50px 0px", border: "1px solid grey", padding: "0px 0px 40px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>LARGE APPLIANCES</h2>
                            <Link to="/homEANDKITCHEN"><Button style={{margin: "0px 20px", color: "white"}}>See All</Button></Link>
                        </div>
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

export default HomeAndOfficeCategory;