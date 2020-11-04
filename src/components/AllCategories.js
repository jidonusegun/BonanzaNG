import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CardList from './CardList';
import { Link } from 'react-router-dom';

function AllCategories () {

    return(
        <div>
            <Container>
                <h1>All Categories</h1>
                    <div style={{margin: "0px", border: "1px solid grey", padding: "0px 0px 40px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Fashion</h2>
                            <Link to="/fashionCategory"><Button style={{margin: "0px 20px", color: "white"}}>See All</Button></Link>
                        </div>
                            <CardList />
                    </div>

                    <div style={{margin: "50px 0px", border: "1px solid grey", padding: "0px 0px 40px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Computing</h2>
                            <Link to="/computingCategory"><Button style={{margin: "0px 20px", color: "white"}}>See All</Button></Link>
                        </div>
                            <CardList />
                    </div>

                    <div style={{margin: "50px 0px", border: "1px solid grey", padding: "0px 0px 40px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Electronics</h2>
                            <Link to="/electronicsCategory"><Button style={{margin: "0px 20px", color: "white"}}>See All</Button></Link>
                        </div>
                            <CardList />
                    </div>     

                    <div style={{margin: "50px 0px", border: "1px solid grey", padding: "0px 0px 40px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Gaming</h2>
                            <Link to="/gamingCategory"><Button style={{margin: "0px 20px", color: "white"}}>See All</Button></Link>
                        </div>
                            <CardList />
                    </div>

                    <div style={{margin: "50px 0px", border: "1px solid grey", padding: "0px 0px 40px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Baby Products</h2>
                            <Link to="/babyProductsCategory"><Button style={{margin: "0px 20px", color: "white"}}>See All</Button></Link>
                        </div>
                            <CardList />
                    </div>

                    <div style={{margin: "50px 0px", border: "1px solid grey", padding: "0px 0px 40px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Phone & Tablets</h2>
                            <Link to="/phonesAndTabletsCategory"><Button style={{margin: "0px 20px", color: "white"}}>See All</Button></Link>
                        </div>
                            <CardList />
                    </div>

                    <div style={{margin: "50px 0px", border: "1px solid grey", padding: "0px 0px 40px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Supermarket</h2>
                            <Link to="/supermarketCategory"><Button style={{margin: "0px 20px", color: "white"}}>See All</Button></Link>
                        </div>
                            <CardList />
                    </div>

                    <div style={{margin: "50px 0px", border: "1px solid grey", padding: "0px 0px 40px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Health & Beauty</h2>
                            <Link to="/healthAndBeautyCategory"><Button style={{margin: "0px 20px", color: "white"}}>See All</Button></Link>
                        </div>
                            <CardList />
                    </div>

                    <div style={{margin: "50px 0px", border: "1px solid grey", padding: "0px 0px 40px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Home & Office</h2>
                            <Link to="/homeAndOfficeCategory"><Button style={{margin: "0px 20px", color: "white"}}>See All</Button></Link>
                        </div>
                            <CardList />
                    </div>                 

                    <div style={{margin: "50px 0px", border: "1px solid grey", padding: "0px 0px 40px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Automobile</h2>
                            <Link to="/automobileCategory"><Button style={{margin: "0px 20px", color: "white"}}>See All</Button></Link>
                        </div>
                            <CardList />
                    </div>

                    <div style={{margin: "50px 0px", border: "1px solid grey", padding: "0px 0px 40px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Sporting Goods</h2>
                            <Link to="/sportingGoodsCategory"><Button style={{margin: "0px 20px", color: "white"}}>See All</Button></Link>
                        </div>
                            <CardList />
                    </div>

                    <div style={{margin: "50px 0px", border: "1px solid grey", padding: "0px 0px 40px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>Other Categories</h2>
                            <Link to="/otherCategories"><Button style={{margin: "0px 20px", color: "white"}}>See All</Button></Link>
                        </div>
                            <CardList />
                    </div>
            </Container>
        </div>
    )
}

export default AllCategories;