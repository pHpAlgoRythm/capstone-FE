import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
const AdminHeader = () => {

    return (
        <header className='flex justify-evenly w-screen flex-wrap items-center h-16 border text-white bg-black'>
                <h1>Dashboard</h1>
            <Box sx={{ width: 300, maxWidth: '100%' }}>
                <TextField
                 fullWidth 
                 label="Search"
                 id="Search" 
                 size='small'
                 sx={{
                    "& .MuiInputBase-root": {
                      color: "white", // Changes text color
                    },
                    "& .MuiInputLabel-root": {
                      color: "white", // Changes label color
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "lightgray", // Hover border color
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "blue", // Focused border color
                      },
                    },
                    "& .MuiInputAdornment-root": {
                      color: "white", // Changes icon color
                    },
                  }}/>
            </Box>
        <Typography>Logout</Typography>

        </header>
    )
};

export default AdminHeader;
