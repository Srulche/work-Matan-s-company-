import { Box, Divider, Link, Typography } from "@mui/material"
import VerifiedIcon from '@mui/icons-material/Verified'; 
import StarIcon from "@mui/icons-material/Star"
import { DevelopedByAppfireProps } from "./interfaces/DevelopedByAppfireInterface"

const DevelopedByAppfire = ({ developerName, partnerInfo} : DevelopedByAppfireProps) => {
  return (
    <Box
        sx={{
            padding: '16px',
            border: '1px solid #E0E0E0',
            borderRadius: '8px',
            marginBottom: 3,
            width: '100%',
            maxWidth: '320px',
            margin: '0 auto',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
    >
        <Box sx={{display: 'flex' , alignItems: 'center', marginBottom: 1}}>
            <StarIcon fontSize="large" sx={{ marginRight: 1}} />
            <Box>
                <Typography variant="body1" sx={{ fontSize: '14px' , color: '#323338', fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew'}}>
                    Developed by 
                </Typography>
                <Typography variant="body1" sx={{  fontSize: '18px' , fontWeight: 'bold',  color: '#323338', fontFamily: 'Poppins, Roboto, "Noto Sans Hebrew', marginTop: '-4px'}}>
                   {developerName}
                </Typography>
            </Box>
        </Box>
        <Divider sx={{ marginY: 1}} />
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1}}>
            <VerifiedIcon fontSize="small" sx={{ marginRight: 1, color: '#4CAF50'}} />
            <Typography variant="body2" sx={{ fontWeight: 'bold'}}>
                Platinum partner
            </Typography>
        </Box>
        <Typography variant="body2" sx={{ marginBottom: 1 , fontSize: '14px' , fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew'}}>
            {partnerInfo}
        </Typography>
        <Link sx={{ color: '#1F76C2', fontSize: '14px' , fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew'}} href = "#" underline="hover">
            Learn more about Marketplace Partner Programs
        </Link>
    </Box>
  )
}

export default DevelopedByAppfire