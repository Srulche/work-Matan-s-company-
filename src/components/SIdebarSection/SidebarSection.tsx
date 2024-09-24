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
                    <ListItem key={index} sx={{ paddingLeft: 0}}>
                        <Typography variant="body2">{item}</Typography>
                    </ListItem>
                ))
            }
        </List>
    </Box>
  )
}

export default SidebarSection