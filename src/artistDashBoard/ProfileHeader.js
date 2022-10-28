import { Avatar, Box, IconButton, Paper, ThemeProvider, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react'
import image from '../images/dbz.jpg'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ProfilePicGoku from '../images/ProfilePicGoku.jpg'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const styles = {
    paperContainer: {
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        height: '20rem',
        backgroundPosition: "center center",
        backgroundSize: "cover",
    },

    avatarHolder: {
        border: "4px solid #f5f5f5",
    }

};

const ProfileHeader = () => {
    return (

        <Box >
            <Box sx={{ flexGrow: 1, boxShadow: 1, position: 'relative', }} >
                <Grid container >
                    <Grid xs={12} md={12} lg={12} sx={{ position: 'relative' }}>
                        <Paper style={styles.paperContainer} >
                            <IconButton aria-label="edit" sx={{ AlignItems: 'center' }} className="hover-button">
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="edit">
                                <DeleteIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: '38%', left: '15%' }}>
                <Avatar alt="Goku" src={ProfilePicGoku} sx={{ width: 204, height: 204 }} style={styles.avatarHolder} />
                {/* <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                        </IconButton> */}
                <ThemeProvider theme={theme}>
                    <Typography variant="h3" pl={2} pt={18}>   Dragon Ball Z</Typography>
                </ThemeProvider>
            </Box>
        </Box>


    )
}

export default ProfileHeader
