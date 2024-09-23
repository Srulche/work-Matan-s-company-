

import { Box, IconButton,  Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useState } from "react";

const media = [
    'https://dapulse-res.cloudinary.com/image/upload/v1693395963/monday-apps-marketplace/7pace%20Timetracker/App_Icon_Template_1_3.png',
    'https://example.com/path-to-image2.jpg',

]; 

const CustomCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? media.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === media.length - 1 ? 0 : prevIndex + 1  
        );
    };
    return (
        <Box
            sx={{
                position: "relative",
                 width: '100%',
                 height: 'auto',
                 textAlign: "center",
                 marginTop: 2,
                }}
        >
            <IconButton
                onClick={handlePrev}
                sx={{
                    position: 'absolute',
                    left: 0,
                    top: "50%",
                    transform: 'translateY(-50%)',
                    zIndex: 1,


                }}
            >
                <ArrowBackIosNewIcon />


            </IconButton>
            <Box sx={{ display: 'inline-block'}}>
                <img
                    src={media[currentIndex]}
                    alt={`Media ${currentIndex + 1 }`}
                    style={{ maxWidth: '100%', height: 'auto',borderRadius: '8px'}}
                />
            </Box>
            <IconButton
                onClick={handleNext}
                sx={{ 
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 1,
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>
            <Typography
                variant="caption"
                sx={{ position: "absolute", bottom: 10, right: 10, color: "#fff" }}
            >
                {currentIndex + 1 } / {media.length}
            </Typography>
        </Box>
    );
};
export default CustomCarousel;