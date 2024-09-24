import { Box, List, ListItem, Typography } from "@mui/material"
import { FeatureListProps } from "./interfaces/FeatureListInterface"

const FeatureList = ({ title, features} : FeatureListProps) => {
  return (
    <Box sx={{ marginBottom: 4}}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2}}>
            {title}
        </Typography>
        <List>
            {
                features.map((feature, index) => (
                    <ListItem key={index} sx={{ paddingLeft: 0}}>
                        <Typography variant="body1">{feature}</Typography>
                    </ListItem>
                ))
            }
        </List>

    </Box>
  )
}

export default FeatureList