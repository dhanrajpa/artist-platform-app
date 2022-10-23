import Sidebar from './Sidebar'
import Rightbar from './Rightbar'
import Navbar from './Navbar'
import Feed from './Feed'
import { Box, Stack } from '@mui/material'
import Addpost from './Addpost'
import EventForm from './EventForm'
// import Notify from '../Component/Notify'

function ADashboard() {


    return (

        <Box >
            {/* <Navbar /> */}
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar />
                <Feed />
                <Rightbar />
            </Stack>
            <Addpost />
            <EventForm />
            {/* <Notify  isOpen={open} type={type} message={message}  /> */}
        </Box>

    )
}

export default ADashboard
