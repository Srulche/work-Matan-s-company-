// import React, { useState } from 'react';
// import { Box, Tabs, Tab, Typography } from '@mui/material';
// import AppDetails from '../AppDetails/AppDetails'; // Import the AppDetails component
// import CustomCarousel from '../CustomCarousel';
// import { TabPanelProps } from './interfaces/TabPanelInterface'; // Import the interface
// import { useParams } from 'react-router-dom'; // Import for accessing route params

// // TabPanel function as before
// const  TabPanel = (props: TabPanelProps) =>  {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
      
//       {/* {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )} */}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// const AppTabs: React.FC = () => {
//   const { id } = useParams<{ id: string }>(); // Get the app ID from the route
//   const appId = parseInt(id || '0', 10); // Convert ID to number

//   const [value, setValue] = useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       {/* AppDetails displayed above the tabs */}
//       <Box sx={{ mb: 2 }}>
//         <AppDetails /> {/* This will always be displayed */}
//       </Box>

//       {/* Tabs for switching between different content */}
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="app tabs">
//           <Tab label="Overview" {...a11yProps(0)} />
//           <Tab label="Pricing" {...a11yProps(1)} />
//           <Tab label="Security & Compliance" {...a11yProps(2)} />
//         </Tabs>
//       </Box>

//       {/* Tab panels for different content */}
//       <TabPanel value={value} index={0}>
//         <CustomCarousel /> {/* Screenshots tab */}
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <Typography variant="body1">
//           This app has a rating of 4.8 based on user reviews!
//         </Typography>
//         {/* You can add more detailed reviews here */}
//       </TabPanel>
//     </Box>
//   );
// };

// export default AppTabs;

import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import AppDetails from '../AppDetails/AppDetails'; // Import the AppDetails component
import { useParams } from 'react-router-dom'; // Import for accessing route params
import MainOverview from '../MainOverview/MainOverview';

const AppTabs = () => {
  const { id } = useParams<{ id: string }>(); // Get the app ID from the route
  const appId = parseInt(id || '0', 10); // Convert ID to number
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <AppDetails />

      {/* Tabs for switching between different content */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: 2,  }}>
        <Tabs value={value} onChange={handleChange} aria-label="app tabs">
          <Tab label="Overview"  />
          <Tab label="Pricing"  />
          <Tab label="Security & Compliance" />
        </Tabs>
      </Box>
      {/* Render the appropriate tab content */}
      <Box sx={{ paddingTop: 2 }}>
        {value === 0 && (
          <MainOverview  /> 
        )}
        {value === 1 && (
          <Typography variant="body1">
            Pricing details will go here.
          </Typography>
        )}
        {value === 2 && (
          <Typography variant="body1">
            Security & Compliance information will go here.
          </Typography>
        )}
      </Box>

      
      
    </Box>
  );
};

export default AppTabs;


