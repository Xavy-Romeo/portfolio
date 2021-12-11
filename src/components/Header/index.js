import { useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import useStyles from './styles';
import Nav from '../Nav';

const Header = () => {
    const classes = useStyles();

    const [ headerScroll, setHeaderScroll ] = useState(false);
    
    const changeHeader = () => {
        if (window.scrollY > 50) {
            setHeaderScroll(true);
        }
        else {
            setHeaderScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeHeader)
    }, []);

    return (
        <AppBar className={!headerScroll ? classes.header_Header : `${classes.headerScroll_Header} main-header`}>
            <Container maxWidth='xl'>
                <Grid container justifyContent='space-between' alignItems='center'> 
                    <Grid item xs={8} sm={5} lg={3}>
                        <a href='#home' className={classes.titleLink_Header}>
                            <Typography className={`${classes.headerTitle_Header} text-theme`} variant='h1'>
                                Xavy Romeo
                            </Typography>
                        </a>
                    </Grid>
                    <Grid item className={classes.navContainer_Header} xs={2} lg={7}>
                        <Nav />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item className={classes.hireMeBtnContainer_Header} xs={2}>
                            <a href='#contact' className={classes.hireMeBtnLink_Header}>
                                <Button className={classes.hireMeBtn_Header}>
                                    Hire Me                                
                                </Button>
                            </a>
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </AppBar>
    );
};

export default Header;
