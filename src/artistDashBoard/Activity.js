import { Box, Typography } from '@mui/material'
import React from 'react'

const Activity = () => {
    return (
        <>
            <Box bgcolor="white" sx={{ display: { sm: "none", md: "block", xs: "none" }, bgcolor: "green" }} flex={1} flexDirection="row" p={2} >
                <Box bgcolor="white" position="fixed">
                    <Typography gutterBottom variant="h5" component="div">
                        Upcomming Events
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default Activity
