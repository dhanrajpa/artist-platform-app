import { Box } from '@mui/material'
import React from 'react'
import img from '../images/NOORAN-SISTERS.jpg'
import PostA from './PostA'

const PerdonalFeed = () => {
    return (
        <>
            <Box p={2} flexDirection="column" flex={2} id="card" sx={{ display: 'flex', justifyContent: 'center', bgcolor: "pink" }} >
                <PostA imgs={img} />
                <PostA imgs={img} />
                <PostA imgs={img} />

            </Box>
        </>
    )
}

export default PerdonalFeed
