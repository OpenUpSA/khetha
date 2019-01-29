// import React, { Component } from 'react';
// import withStyles from '@material-ui/core/styles/withStyles';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Toolbar from '@material-ui/core/Toolbar';
// import AppBar from '@material-ui/core/AppBar';
// import MenuIcon from '@material-ui/icons/Menu';
// import IconButton from '@material-ui/core/IconButton';
// import MainHeading from './MainHeading';


// const logo = require('../images/logo.svg');

// const styles = theme => ({
//     appBar: {
//         position: 'relative',

//         height: '58.79px',
//         left: '4.17 %',
//         right: '80.23 %',
//         top: '23.35px',


//     },
//     inline: {
//         display: 'inline'
//     },
//     flex: {
//         display: 'flex',
//         [theme.breakpoints.down('sm')]: {
//             display: 'flex',
//             justifyContent: 'space-evenly',
//             alignItems: 'center'
//         }
//     },

//     productLogo: {
//         display: 'inline-block',
//         borderLeft: `1px solid ${theme.palette.grey['A100']}`,
//         marginLeft: 32,
//         paddingLeft: 24
//     },
//     tagline: {
//         display: 'inline-block',
//         marginLeft: 10
//     },
//     iconContainer: {
//         display: 'none',
//         [theme.breakpoints.down('sm')]: {
//             display: 'block'
//         }
//     },
//     iconButton: {
//         float: 'right'
//     },


// })


// const Topbar = props => {
//     const { classes } = props;



//     return (
//         <AppBar position="absolute" color="default" className={classes.appBar}>
//             <Toolbar>
//                 <Grid container spacing={24} alignItems="baseline">
//                     <Grid item xs={12} alignItems='baseline' className={classes.flex}>
//                         <div className={classes.inline}>
//                             <Typography variant="h6" color="inherit" noWrap>
//                                 <img width={20} src={logo} />
//                                 {/* <span className={classes.tagline}>Material Sense</span> */}
//                                 <MainHeading className={classes.tagline} title="Honey Bee Level" />

//                             </Typography>
//                         </div>
//                     </Grid>
//                 </Grid>
//             </Toolbar>
//         </AppBar>
//     )
// }


// export default (withStyles(styles)(Topbar))


import React from 'react';
import styled from 'styled-components';
import MainHeading from './MainHeading';
import Grid from '@material-ui/core/Grid';

const MenuBar = styled.div`
    brand-logo {
      grid-column: 1;
      grid-row: 1/3;
    }
    mainHeading {
      grid-column: 2/4;
      grid-row: 1/3;
    }
`;



const logo = require('../images/logo.svg');


// position: relative;
// text-align: center;
// font-size: 26px;
// line-height: 32px;
// font-weight: bold;
// margin: 0 0 15px 0;
// const Topbar = styled.h2`
//   color: ${props => props.color || '#000000'};


//   position: absolute;
//   left: 38.13%;
//   right: 6.75%;
//   top: 4.57%;
//   bottom: 90.63%;

//   font-weight: bold;
//   line-height: 32px;
//   font-size: 26px;
//   text-align: right;

//   color: #5f5f5f;

//   opacity: 0.8;
// `;

const Topbar = props => {
    const { title, color, logo } = props;
    return <div>
        <MenuBar>
            {/* <div className={brand-logo}></div> */}
            <Grid className="logo">
                <img width={100} height={100} src={logo} />
            </Grid>

            <MainHeading title="Honey Bee Level"></MainHeading>



        </MenuBar>


        {/* color={color}>{title} */}

    </div>;
};

export default Topbar;




