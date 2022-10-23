import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PreviewIcon from '@mui/icons-material/Preview';
import AddIcon from '@mui/icons-material/Add';

function Sidebar() {




    
    return (
        <>
            <Box sx={{ display: { xs: "none", sm: "block" } }} className="sidebar" flex={1} p={2} >
                <Box position="fixed">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="/home">
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#">
                                <ListItemIcon>
                                    <PreviewIcon />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="/aDashboard">
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#">
                                <ListItemIcon>
                                    <EditIcon />
                                </ListItemIcon>
                                <ListItemText primary="Edit Profile" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="/EventForm">
                                <ListItemIcon>
                                    <AddIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add Event" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none", md: "none" }, width: '1rem' }} className="sidebar" flex={0.5} p={2}>
                <List>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="/home">
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <PreviewIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="/aDashboard">
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <EditIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <AddIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </>
    )
}

export default Sidebar