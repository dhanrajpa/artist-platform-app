import { Box } from '@mui/material'
import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notify = (props) => {

    const {open, setOpen} = props;

    return (
        <Box>
            <Snackbar
                open={open.isOpen}
                autoHideDuration={1000}
            >
                <Alert severity={open.type}>{open.message}</Alert>
            </Snackbar>
        </Box>
    )
}

export default Notify;