import { Box, List, ListItem, Typography } from "@mui/material"
import { SidebarSectionProps } from "./interfaces/SidebarSectionInterface"


const SidebarSection = ({ title, items} : SidebarSectionProps ) => {
  return (
    <Box sx={{ marginBottom: 4}}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2}}>
            {title}
        </Typography>
        <List>
            {
                items.map((item, index) => (
                    <ListItem key={index} sx={{ padding: 0, marginBottom: 1}}>
                        <Typography variant="body2" sx={{ color: '#676879', backgroundColor: '#E1E1E1', margin: '4px 8px 4px 0px', padding: '0px 8px'}}>{item}</Typography>
                    </ListItem>
                ))
            }
        </List>
    </Box>
  )
}

export default SidebarSection