import { Box, Divider, List, ListItem, ListItemIcon, Typography } from "@mui/material"
import { PricingPlanProps } from "./interfaces/PricingPlanInterface"

import CheckIcon from '@mui/icons-material/Check';
const PricingPlan = ({seats, price, description, features, recommended } : PricingPlanProps) => {
  return (
    <Box
        sx={{
            border: '1px solid #E0E0E0',
            borderRadius: '8px',
            padding: 3,
            position: "relative",
            marginTop: 2
        }}
    >
        {
            recommended && (
                <Box
                    sx={{ 
                        position: 'absolute',
                        top: -10,
                        left: 10,
                        backgroundColor: '#323338',
                        color: '#fff',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontSize: '12px'
                    }}
                >
                    Recommended 
                </Box>
            )
        }
        <Typography variant="h6">Up to {seats} Seats </Typography>
        <Typography variant="h3" sx={{ fontWeight: 'bold'}}>${price}</Typography>
        <Typography variant="body2" sx={{ color: '#676879' }}>/ month (billed yearly)</Typography>
        <Divider sx={{ my: 2}} />
        <Typography variant="body2" sx={{ marginBottom: 1}}>{description}</Typography>
        <List>
            {
                features.map((feature, index) => (
                    <ListItem key={index}>
                        <ListItemIcon>
                            <CheckIcon color="success" />
                        </ListItemIcon>
                        <Typography variant="body2">{feature}</Typography>
                    </ListItem>
                ))
            }
        </List>
    </Box>
  )
}

export default PricingPlan