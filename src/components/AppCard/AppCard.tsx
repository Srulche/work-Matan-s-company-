import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import TitleBadge from '../TitleBadge/TitleBadge';
import RatingDownloadInfo from '../RatingDownloadInfo/RatingDownloadInfo';
import { Link } from 'react-router-dom';
import type { AppCardProps } from './interfaces/AppCardInterface';

const productLogos: { [key: string]: string } = {
  '7pace Timetracker': 'https://dapulse-res.cloudinary.com/image/upload/v1693395963/monday-apps-marketplace/7pace%20Timetracker/App_Icon_Template_1_3.png',
  'Project Portfolio Management - PPM': 'https://dapulse-res.cloudinary.com/image/upload/v1713958513/monday-apps-marketplace/Portfolio%20Project%20Management/ppm_logo.png',
  'General Caster': 'https://dapulse-res.cloudinary.com/image/upload/v1675367407/monday-apps-marketplace/General%20Caster/gc-logo.png',
  'DocuGen': 'https://cdn.monday.com/marketplace/12/12_2024_3_14_9_16_54_o5ut9uc.png',
  'VLOOKUP Auto-link': 'https://dapulse-res.cloudinary.com/image/upload/v1612783271/monday-apps-marketplace/%E2%96%B6%EF%B8%8F%20VLOOKUP%20Auto-link/Group_9.png',
  'Extract AI': 'https://dapulse-res.cloudinary.com/image/upload/v1660579714/monday-apps-marketplace/Extract/icon_4.png',
  'Tracket - Makes Time Work': 'https://dapulse-res.cloudinary.com/image/upload/v1636039198/monday-apps-marketplace/Tracket/Tracket_Appicoon_Donkerblauw.png',
  'SuperForm': 'https://dapulse-res.cloudinary.com/image/upload/v1644925745/monday-apps-marketplace/SuperForm/SuperFrom_Icon.jpg',
};

const AppCard  = ({ app }: AppCardProps) => {
  const logoUrl = productLogos[app.title] || '';

  return (
    <Link to={`/app/${app.id}`} style={{ textDecoration: 'none' }}>
    {/* <Link to={`/app-overview/${app.id}`}>  */}
      <Card
        sx={{
          height: '100%', // Ensure card takes full height within the grid
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: 2,
          borderRadius: 2,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: 4,
          },
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flexGrow: 1, // Ensures content takes up full available space
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
            {logoUrl && <img src={logoUrl} alt={`${app.title} Logo`} style={{ height: '40px', width: '40px' }} />}
          </Box>

          <Box sx={{ mb: 1 }}>
            <TitleBadge title={app.title} badge={app.badge} />
            <Typography variant="body2" sx={{ color: '#676879', mb: 1, fontSize: '0.875rem' }}>
              {app.author}
            </Typography>
            <Typography variant="body1" sx={{ color: '#676879', mb: 2, fontSize: '0.875rem' }}>
              {app.description}
            </Typography>
          </Box>

          <RatingDownloadInfo rating={app.rating} reviews={app.reviews} downloads={app.downloads} />
        </CardContent>
      </Card>
    </Link>
  );
};

export default AppCard;
