import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
const App = () => {
    return (
        <div>
            <h3>hello i am App Component</h3>
            <Container maxidth="lg">
                <AppBar color="inherit">
                    <Typography variant="h2" align="center" >
                        Typography
        </Typography>
                </AppBar>
            </Container>
        </div>
    )
}

export default App;