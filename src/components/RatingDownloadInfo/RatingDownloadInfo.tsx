// import { RatingDownloadInfoProps } from "./interfaces/RatingDownloadInfoInterface";
// import { Box, Typography } from "@mui/material";
// import StarIcon from '@mui/icons-material/Star';
// import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';


// const RatingDownloadInfo = ({ rating , showStar, reviews, downloads }: RatingDownloadInfoProps) => {
//     return (
//         <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
            
//             { showStar && <span style={{ display: 'flex'}}>
//                 <StarIcon fontSize="small" sx={{ color:'#fbc02d'}} /> 
//                 <Typography variant="body2" sx={{ marginLeft: 0.5 , fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew"' }}>
//                     {rating} ({reviews})
//                 </Typography>
//             </span>}
//             <FileDownloadOutlinedIcon fontSize="small" sx={{ marginLeft: 2}} />
//             <Typography variant="body2" sx={{ marginLeft: 0.5 , fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew"'}}>
//                 {downloads}
//             </Typography>
//         </Box>
//     )

// }
// export default RatingDownloadInfo; 



import { RatingDownloadInfoProps } from "./interfaces/RatingDownloadInfoInterface";
import { Box, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const RatingDownloadInfo = ({ rating, showStar, reviews, downloads }: RatingDownloadInfoProps) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
            {showStar && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <StarIcon fontSize="small" sx={{ color: '#fbc02d' }} /> 
                    <Typography variant="body2" sx={{ marginLeft: 0.5, fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew"' }}>
                        {rating} ({reviews})
                    </Typography>
                </Box>
            )}
            <FileDownloadOutlinedIcon fontSize="small" sx={{ marginLeft: showStar ? 2 : 0 }} />
            <Typography variant="body2" sx={{ marginLeft: 0.5, fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew"' }}>
                {downloads}
            </Typography>
        </Box>
    );
};

export default RatingDownloadInfo;



