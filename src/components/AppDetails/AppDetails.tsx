import React from 'react';
import { Box, Typography } from '@mui/material';
import InstallButton from '../InstallButton/InstallButton';
import { useParams } from 'react-router-dom';
import CustomCarousel from '../CustomCarousel';

const logoUrls: { [key: number]: string } = {
  0: 'https://dapulse-res.cloudinary.com/image/upload/v1693395963/monday-apps-marketplace/7pace%20Timetracker/App_Icon_Template_1_3.png',
  //1: 'https://dapulse-res.cloudinary.com/image/upload/v1693395963/monday-apps-marketplace/another-app/another-logo.png',
  // Add more mappings here
};

const getLogoUrl = (appId: number) => {
    // return `https://dapulse-res.cloudinary.com/image/upload/v1693395963/monday-apps-marketplace/7pace%20Timetracker/App_Icon_Template_1_3${appId}.png`;
    return logoUrls[appId] || '/default-logo.png'
}; 

const AppDetails: React.FC = () => {
    const { id } = useParams<{ id: string}>(); //GET THE APP ID FROM THE ROUTE
    const appId = parseInt(id || '0', 10) // PARSE THE APP ID TO A NUMBER

    const apps =[
        { id: 0, title: '7pace Timetracker', author: 'By Appfire', description: 'Effortlessly record, manage, and report on time tracking.', badge: "Editor's choice", rating: 4.8, downloads: '2.6K', reviews: 9, launched: 'Aug 2023' },
        { id: 1, title: 'Project Portfolio Management - PPM', author: 'By DevSamurai', description: 'Advanced Gantt Chart and portfolio management.', badge: '', rating: 4.9, downloads: '961', reviews: 14, launched: 'Jul 2022' },
    ]
  // Sample app data
  const app = apps.find(a => a.id === appId)
  if(!app) {
    return <Typography>App not found!</Typography>
  }
  return (
    <Box sx={{ padding: 3 , backgroundColor: '#F6F7FB' }}>
      <Box
        sx={{
           display: 'flex',
           justifyContent:'space-between',
           alignItems: 'flex-start'
          
          }}
        >
          <Box
            sx={{ flex: 1, paddingRight: '16px',  }}>
              <Box sx= {{ display: 'flex', alignItems: 'center', marginBottom: 2}}>
                <img
                    src={getLogoUrl(app.id)}
                    alt='App Icon'
                    style={{ width: '40px', marginRight: '16px' }}
                />
                <Typography variant='h4' sx={{ fontWeight: 'bold', marginRight: '8px'}}>
                  {app.title}
                </Typography>
                {app.badge && (
                  <Typography
                       variant='body2'
                       sx={{ backgroundColor: "#B2E5FF", color: '#323338', padding: '0px 8px', borderRadius: '4px'}}
                  >
                    {app.badge}
                  </Typography>
                )}

              </Box>
              <Typography variant='body2' sx={{ color: '#676879', marginBottom: 2 }} >
                  {app.author}
              </Typography>
              <InstallButton />
              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                  <Typography variant="body2" sx={{ marginRight: 2 }}>
                      <strong>Installs:</strong> {app.downloads}
                  </Typography>
                  <Typography variant="body2" sx={{ marginRight: 2 }}>
                      <strong>Launched:</strong> {app.launched}
                  </Typography>
                  <Typography variant="body2">
                      <strong>Rating:</strong> {app.rating} ({app.reviews} reviews)
                  </Typography>
             </Box>
             <Typography variant="body1" sx={{ color: '#676879', marginTop: 2 }}>
                  {app.description}
              </Typography>
          </Box>
          <Box sx={{ width: "300px"}}>
            <CustomCarousel />

          </Box>
      </Box>
    </Box>
  );
};

export default AppDetails;

   
   