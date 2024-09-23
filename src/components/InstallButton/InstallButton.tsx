import { Box, Button, Typography } from "@mui/material";
import React from "react";
import DownloadIcon from '@mui/icons-material/Download'

const InstallButton: React.FC = () => {
    return (
        <Box>
            <Button
                 variant="contained"
                 sx={{ backgroundColor: '#0073EA', color: '#FFFFFF', padding: '8px 16px'}}
                 startIcon={<DownloadIcon />}
            >
                Install App 
            </Button>
            <Typography variant="caption" sx={{ display: 'block', marginTop: 1}}>
                Free plan available
            </Typography>
        </Box>
    )

}
export default InstallButton;