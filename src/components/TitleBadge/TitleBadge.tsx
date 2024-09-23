import React from "react";
import { TitleBadgeProps } from "./interfaces/TitleBadgeInterface";
import { Box, Chip, Typography } from "@mui/material";

const TitleBadge: React.FC<TitleBadgeProps> = ({ title, badge }) => {
    const getBadgeStyles = (badge: string | undefined) => {
        switch (badge) {
            case "Editor's choice":
        return {
          backgroundColor: '#B2E5FF',
          color: '#323338', // Background color for Editor's choice
          padding: '0px 8px',
          fontSize: '14px',
          fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew", sans-serif',
        };
        case "Best seller":
        return {
          backgroundColor: '#BBDBC9', // Background color for Best seller
          color: '#323338',
          padding: '0px 8px',
          fontSize: '14px',
          fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew", sans-serif',
        };
        default: 
            return {}
        }
    };
    return (
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Typography variant="h6" sx={{ fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew", sans-serif' }}>
                {title}
            </Typography>
            {badge && (
                <Chip 
                    label={badge}
                    sx={{ marginLeft: 1, fontSize: '0.75rem', height: 24, ...getBadgeStyles(badge)}}
                />
            )}
        </Box>

    )
}
export default TitleBadge;