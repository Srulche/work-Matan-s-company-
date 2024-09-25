import { Box, Typography } from "@mui/material"
import { AppUseIconsBarProps } from "./interfaces/AppUseIconsBarInterface"



const AppUseIconsBar = ({ items} : AppUseIconsBarProps) => {
    return (
        <Box sx={{
          display: 'flex', 
          justifyContent: 'space-around', 
          padding: 2,
          border: '1px solid #E0E0E0',
          borderRadius: '8px',
          marginTop: 4,
          marginBottom: 2
        }}>
          {items.map((item, index) => (
            <Box key={index} sx={{ textAlign: 'center' }}>
              {item.icon}
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
    );
};

export default AppUseIconsBar