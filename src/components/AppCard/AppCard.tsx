import { Box, Card, CardContent, Typography } from '@mui/material';
import TitleBadge from '../TitleBadge/TitleBadge';
import RatingDownloadInfo from '../RatingDownloadInfo/RatingDownloadInfo';
import { Link } from 'react-router-dom';
import type { AppCardProps } from './interfaces/AppCardInterface';

const productLogos: { [key: string]: string } = {
  '7pace Timetracker for monday.com': 'https://dapulse-res.cloudinary.com/image/upload/v1693395963/monday-apps-marketplace/7pace%20Timetracker/App_Icon_Template_1_3.png',
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
      <Link to={`/app/${app.id}`} style={{ textDecoration: 'none', width: '100%' }}>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: 2,
            boxShadow: 'none',
            width: '100%',
            height: '100%',
            position: 'relative',
            // height: '150px', // Set a fixed height for the card
            '&:hover': {
              backgroundColor: '#f5f5f5', // Your hover background color
            },
          }}
        >
          {logoUrl && (
            <Box sx={{ marginRight: 2 }}>
              <img src={logoUrl} alt={`${app.title} Logo`} style={{ height: '40px', width: '40px' }} />
            </Box>
          )}
  
          <CardContent sx={{ flex: 1, padding: 0, width: "100%"  }}>
            <Box sx={{ marginBottom: 1 }}>
              {/* <Box sx={{ display: 'flex', justifyContent: 'space-between'}}> */}
                <TitleBadge title={app.title} badge={app.badge} />
                
              {/* </Box> */}
              <Typography variant="body2" sx={{ color: '#676879', fontSize: '14px', fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew', mb: 1 }}>
                  {app.author}
                </Typography>
              <Typography variant="body1" sx={{ color: '#676879', fontSize: '14px', fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew',  mb: 2 }} >
                {app.description}
              </Typography>

            </Box>

            <RatingDownloadInfo showStar={app.showStar} rating={app.rating} reviews={app.reviews} downloads={app.downloads} />
          </CardContent>
        </Card>
      </Link>
    )
}
export default AppCard;