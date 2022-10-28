import { Box } from '@mui/material'
import React from 'react'

const Info = () => {
    return (
        <>
            <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" }, bgcolor: "red" }} className="sidebar" flex={1} pt={2} pl={1}>
                <Box position="fixed">
                    Hello
                </Box>
            </Box>


        </>
    )
}

export default Info
