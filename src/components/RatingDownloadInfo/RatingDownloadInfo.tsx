import { RatingDownloadInfoProps } from "./interfaces/RatingDownloadInfoInterface";
import { Box, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import DownloadIcon from '@mui/icons-material/Download'

const RatingDownloadInfo = ({ rating, reviews, downloads }: RatingDownloadInfoProps) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
            
            <StarIcon fontSize="small" color="warning" /> 
            <Typography variant="body2" sx={{ marginLeft: 0.5 , fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew"' }}>
                {rating} ({reviews})
            </Typography>
            <DownloadIcon fontSize="small" sx={{ marginLeft: 2}} />
            <Typography variant="body2" sx={{ marginLeft: 0.5 , fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew"'}}>
                {downloads}
            </Typography>
        </Box>
    )

}
export default RatingDownloadInfo; 