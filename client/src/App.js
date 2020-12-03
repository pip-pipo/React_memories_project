import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/posts/Posts'
import From from './components/form/From';
import memories from './images/avatar.1.jpg';
import useStyle from './styles';

const App = () => {

    const classes = useStyle();

    return (

        <div>
            <Container maxidth="lg">
                <AppBar  className={classes.appBar} color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center" >
                        Typography
                     </Typography>
                    <img className={classes.image} src={memories} alt="memories" height="60" />
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing="3">
                            <Grid item xs={12} sm={7}>
                            <Posts />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                            <From />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default App;