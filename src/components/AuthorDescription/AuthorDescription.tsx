

import React from "react";
import { AuthorDescriptionProps } from "./interfaces/AuthorDescriptionInterface";
import { Box, Typography } from "@mui/material";

const AuthorDescription: React.FC<AuthorDescriptionProps> = ({ author, description}) => {
    return (
        <Box sx={{ marginTop: 1}}> 
            <Typography variant="body2" sx={{color: '#676879', fontSize: '14px', marginBottom: '4px'}}>
                {author}
            </Typography>
            <Typography variant="body1" sx={{ color: '#676879', fontSize: '14px', marginBottom: '8px '}}>
                {description}
            </Typography>
        </Box>
    )
}
export default AuthorDescription;





