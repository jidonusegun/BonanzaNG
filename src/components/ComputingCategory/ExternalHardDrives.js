import React from 'react';
import Container from '@material-ui/core/Container';
import CardList from '../CardList';

function ExternalHardDrives () {
  
    return(
        <div>
            <Container>
                    <div style={{margin: "50px 0px", padding: "0px 0px 0px", width: "100%"}}>
                        <div style={{backgroundColor: "#3f51b5", margin: "0px", padding: "2px", display: "flex",
                        justifyContent: "space-between"}} >
                            <h2 color="inherit" style={{margin: "0px", color: "white"}}>External Hard Drives</h2>
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

export default ExternalHardDrives;