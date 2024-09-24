import { Box, Button, Divider, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { useParams } from 'react-router-dom';
import CustomCarousel from '../CustomCarousel';

const logoUrls: { [key: number]: string } = {
  0: 'https://dapulse-res.cloudinary.com/image/upload/v1693395963/monday-apps-marketplace/7pace%20Timetracker/App_Icon_Template_1_3.png',
  // Add more mappings here if necessary
};

const getLogoUrl = (appId: number) => {
  return logoUrls[appId] || '/default-logo.png';
};

const AppDetails = () => {
  const { id } = useParams<{ id: string }>(); // Get the app ID from the route
  const appId = parseInt(id || '0', 10); // Parse the app ID to a number

  const apps = [
    {
      id: 0,
      title: '7pace Timetracker',
      author: 'By Appfire',
      description: 'Effortlessly record, manage, and report on time tracking.',
      badge: "Editor's choice",
      rating: 4.8,
      downloads: '2.6K',
      reviews: 9,
      launched: 'Aug 2023',
    },
    {
      id: 1,
      title: 'Project Portfolio Management - PPM',
      author: 'By DevSamurai',
      description: 'Advanced Gantt Chart and portfolio management.',
      badge: '',
      rating: 4.9,
      downloads: '961',
      reviews: 14,
      launched: 'Jul 2022',
    },
  ];

  const app = apps.find((a) => a.id === appId);
  if (!app) {
    return <Typography>App not found!</Typography>;
  }

  return (
    <Box sx={{ padding: 3, backgroundColor: '#F6F7FB' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Box sx={{ flex: 1, paddingRight: '16px' }}>
          {/* Display the badge above the title */}
          {app.badge && (
            <Typography
              variant='body2'
              sx={{
                marginBottom: 1,
                // backgroundColor: '#B2E5FF',
                color: '#323338',
                padding: '0px 8px',
                borderRadius: '4px',
              }}
            >
              {app.badge}
            </Typography>
          )}

          {/* Display the app title and icon */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <img
              src={getLogoUrl(app.id)}
              alt='App Icon'
              style={{ width: '40px', marginRight: '16px' }}
            />
            <Typography
              variant='h4'
              sx={{ fontWeight: 'bold', marginRight: '8px' }}
            >
              {app.title}
            </Typography>
          </Box>

          {/* Author */}
          <Typography
            variant='body2'
            sx={{ color: '#676879', marginBottom: 2 }}
          >
            {app.author}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <AccessTimeIcon sx={{ color: '#676879', marginRight: 1 }} />
            <Typography
            variant='body2'
            sx={{ color: '#676879'}}
            >
            Easier resource management
            </Typography>
          </Box>
          
          {/* App Info */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
            <Box>
              <Typography variant='body2' sx={{ marginRight: 2 }}>
                <strong
                  style={{
                    color: '#676879',
                    margin: '0px 0px 8px 0px',
                  }}
                >
                  Installs:
                </strong>
                <br />
                <span style={{ color: '#323338'}}>{app.downloads}</span>
              </Typography>
            </Box>
            <Divider
               orientation='vertical'
               flexItem
               sx={{
                 backgroundColor: '#D0D4E4',
                 height: '40px',
                 margin: '0px 24px'
               }}
            />
            <Box>
              <Typography variant='body2' sx={{ marginRight: 2 }}>
                <strong
                  style={{
                    color: '#676879',
                    margin: '0px 0px 8px 0px',
                  }}
                >
                  Launched:
                </strong>
                <br />
                <span style={{ color: '#323338'}}>{app.launched}</span>
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                backgroundColor: '#D0D4E4',
                height: '40px',  // Adjust this height as needed
                margin: '0px 24px',
              }}
            />
            <Box>
              <Typography variant='body2'>
                <strong
                  style={{
                    color: '#676879',
                    margin: '0px 0px 8px 0px',
                  }}
                >
                  Rating:
                </strong>
                <br />
                <span style={{ color: '#323338' }}>
                  {app.rating} ({app.reviews} reviews)
                </span>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginTop: 2}}>
            <Button
              variant='contained'
              startIcon={<FileDownloadOutlinedIcon />}
              sx={{
                 textTransform: 'none',
                 fontSize:'16px',
              }}
            >
              Install app
            </Button>
            <Typography sx={{ color: '#323338', marginTop: 1}}>Free plan available</Typography>
          </Box>
        </Box>

        {/* Carousel */}
        <Box sx={{ width: '300px' }}>
          <CustomCarousel />
        </Box>
      </Box>
    </Box>
  );
};

export default AppDetails;
   