// import { Box } from "@mui/material";
// import Grid from "@mui/material/Grid2"
// import AppCard from "../AppCard/AppCard";

//   const AppGrid = () => {
//     const apps = [
//         {
//           id: 0,
//           title: '7pace Timetracker',
//           author: 'By Appfire',
//           description: 'Effortlessly record, manage, and report on time tracking.',
//           rating: 4.8,
//           downloads: '2.6K',
//           badge: "Editor's choice",
//           badgeColor: 'primary',
//           reviews: 9, // Reviews added
//         },
//         {
//           id: 1,
//           title: 'Project Portfolio Management - PPM',
//           author: 'By DevSamurai',
//           description: 'Project & Portfolio Management with Advanced Gantt Chart.',
//           rating: 4.9,
//           downloads: '961',
//           badge: '',
//           badgeColor: 'secondary',
//           reviews: 14, // Reviews added
//         },
//         {
//           id: 2,
//           title: 'General Caster',
//           author: 'By Omnidea S.r.l.',
//           description: 'Automation recipes performing enhanced calculations without formula column.',
//           rating: 4.7,
//           downloads: '12.4K',
//           badge: 'Best seller',
//           badgeColor: 'success',
//           reviews: 52, // Reviews added
//         },
//         {
//           id: 3,
//           title: 'DocuGen',
//           author: 'By DocuGen, Inc.',
//           description: 'Create documents and collect signatures.',
//           rating: 4.7,
//           downloads: '26.1K',
//           badge: "Editor's choice",
//           badgeColor: 'primary',
//           reviews: 31, // Reviews added
//         },
//         {
//           id: 4,
//           title: 'VLOOKUP Auto-link',
//           author: 'By Jetpack Apps',
//           description: 'Match and sync data across boards at scale.',
//           rating: 4.8,
//           downloads: '10.7K',
//           badge: 'Best seller',
//           badgeColor: 'success',
//           reviews: 62, // Reviews added
//         },
//         {
//           id: 5,
//           title: 'Extract AI',
//           author: 'By Jetpack Apps',
//           description: 'Auto-extract data from emails and updates into board items to streamline your workflows.',
//           rating: 4.3,
//           downloads: '1.8K',
//           badge: '',
//           badgeColor: 'secondary',
//           reviews: 9, // Reviews added
//         },
//         {
//           id: 6,
//           title: 'Tracket - Makes Time Work',
//           author: 'By Avisi Apps',
//           description: 'The intuitive time-tracking solution for monday.com.',
//           rating: 5.0,
//           downloads: '5.8K',
//           badge: "Editor's choice",
//           badgeColor: 'primary',
//           reviews: 17, // Reviews added
//         },
//         {
//           id: 7,
//           title: 'SuperForm',
//           author: 'By Spot-nik',
//           description: 'Advanced form - updating existing items, subitems, and more.',
//           rating: 4.8,
//           downloads: '6K',
//           badge: 'Best seller',
//           badgeColor: 'success',
//           reviews: 6, // Reviews added
//         },
//     ];
//     return (
//       <Grid container spacing={4} sx={{ marginTop: 3, padding: '0 24px'}}>

//         {
//             apps.map((app) => (
//                 <Grid key={app.id} item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'flex-start'}}> 
//                     <Box
//                          sx={{
//                             width: '100%',
//                             maxWidth: '350px',
//                             height: '100%',
//                          }}>
//                         <AppCard app={app} />
//                     </Box>
//                 </Grid>
//             ))
//         }
//       </Grid>
//     )
//   }
  
//   export default AppGrid


import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2"
import AppCard from "../AppCard/AppCard";

  const AppGrid = () => {
    const apps = [
        {
          id: 0,
          title: '7pace Timetracker',
          author: 'By Appfire',
          description: 'Effortlessly record, manage, and report on time tracking.',
          rating: 4.8,
          downloads: '2.6K',
          badge: "Editor's choice",
          badgeColor: 'primary',
          reviews: 9, // Reviews added
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
        },
    ];
    return (
      <Grid container spacing={2} sx={{ marginTop: 3, padding: '0 24px'}}>

        {
            apps.map((app) => (
                <Grid key={app.id} item xs={12} sm={6} md={4}> 
                    <Box
                         sx={{
                            width: '100%',
                            maxWidth: '350px',
                         }}>
                        <AppCard app={app} />
                    </Box>
                </Grid>
            ))
        }
      </Grid>
    )
  }
  
  export default AppGrid