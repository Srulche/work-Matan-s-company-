
import Grid from "@mui/material/Grid2"
import AppCard from "../AppCard/AppCard";
import { Box } from "@mui/material";

  const AppGrid = () => {
    const apps = [
        {
          id: 0,
          title: '7pace Timetracker for monday.com',
          author: 'By Appfire',
          description: 'Effortlessly record, manage, and report on time tracking.',
          rating: 4.8,
          downloads: '2.6K',
          badge: "Editor's choice",
          badgeColor: 'primary',
          reviews: 9, // Reviews added
          showStar: true
          
        },
        {
          id: 1,
          title: 'Project Portfolio Management - PPM',
          author: 'By DevSamurai',
          description: 'Project & Portfolio Management with Advanced Gantt Chart.',
          rating: 4.9,
          downloads: '961',
          badge: '',
          badgeColor: 'secondary',
          reviews: 14, // Reviews added
          showStar: true
        },
        {
          id: 2,
          title: 'General Caster',
          author: 'By Omnidea S.r.l.',
          description: 'Automation recipes performing enhanced calculations without formula column.',
          rating: 4.7,
          downloads: '12.4K',
          badge: 'Best seller',
          badgeColor: 'success',
          reviews: 52, // Reviews added
          showStar: false
        },
        {
          id: 3,
          title: 'DocuGen',
          author: 'By DocuGen, Inc.',
          description: 'Create documents and collect signatures.',
          rating: 4.7,
          downloads: '26.1K',
          badge: "Editor's choice",
          badgeColor: 'primary',
          reviews: 31, // Reviews added
          showStar: true
        },
        {
          id: 4,
          title: 'VLOOKUP Auto-link',
          author: 'By Jetpack Apps',
          description: 'Match and sync data across boards at scale.',
          rating: 4.8,
          downloads: '10.7K',
          badge: 'Best seller',
          badgeColor: 'success',
          reviews: 62, // Reviews added
          showStar: true
        },
        {
          id: 5,
          title: 'Extract AI',
          author: 'By Jetpack Apps',
          description: 'Auto-extract data from emails and updates into board items to streamline your workflows.',
          rating: 4.3,
          downloads: '1.8K',
          badge: '',
          badgeColor: 'secondary',
          reviews: 9, // Reviews added
          showStar: true
        },
        {
          id: 6,
          title: 'Tracket - Makes Time Work',
          author: 'By Avisi Apps',
          description: 'The intuitive time-tracking solution for monday.com.',
          rating: 5.0,
          downloads: '5.8K',
          badge: "Editor's choice",
          badgeColor: 'primary',
          reviews: 17, // Reviews added
          showStar: false
        },
        {
          id: 7,
          title: 'SuperForm',
          author: 'By Spot-nik',
          description: 'Advanced form - updating existing items, subitems, and more.',
          rating: 4.8,
          downloads: '6K',
          badge: 'Best seller',
          badgeColor: 'success',
          reviews: 6, // Reviews added
          showStar: true
        },
    ];
    return (
      
      <Grid container spacing={4} sx={{ padding: '16px'}}>
        {apps.map((app) => (
           <Grid key={app.id} container size ={{xs: 12, md: 6, lg: 3, xl: 3}}

            // key={app.id}
            // xs={12}   // 1 card per row on extra-small screens
            // sm={6}    // 2 cards per row on small screens
            // md={4}    // 3 cards per row on medium screens
            // sx={{
            //    display: 'flex',
            //    justifyContent: 'center',
            //    padding: '16px' 
            // }}
        >
       
          
          <Box
            sx={{
              width: '100%',
              
              //  maxWidth: '350px',
              display: 'flex',
              
            }}
          >
            <AppCard app={app} />


          </Box>
         </Grid>
        
      ))}
    </Grid>
    
    )
  }
  
  export default AppGrid;