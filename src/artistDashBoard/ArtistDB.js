import { Box, Divider, Stack } from '@mui/material'
import React from 'react'
import Info from './Info'
import ProfileHeader from './ProfileHeader'
import Activity from './Activity'
import PerdonalFeed from './PerdonalFeed'

const ArtistDB = () => {
    return (
        <Box mt={1} ml={10} mr={10}>
            {/* <ProfileHeader /> */}
            {/* <Divider /> */}
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Info />
                <PerdonalFeed />
                <Activity />
            </Stack>
        </Box>
    )
}

export default ArtistDB
