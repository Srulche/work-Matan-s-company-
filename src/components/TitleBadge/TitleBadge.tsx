// import { TitleBadgeProps } from "./interfaces/TitleBadgeInterface";
// import { Box, Chip, Typography } from "@mui/material";

// const TitleBadge = ({ title, badge }: TitleBadgeProps) => {
//     const getBadgeStyles = (badge: string | undefined) => {
//         switch (badge) {
//             case "Editor's choice":
//         return {
//           backgroundColor: '#B2E5FF',
//           color: '#323338', // Background color for Editor's choice
//           padding: '0px 8px',
//           fontSize: '14px',
//           fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew", sans-serif',
//         };
//         case "Best seller":
//         return {
//           backgroundColor: '#BBDBC9', // Background color for Best seller
//           color: '#323338',
//           padding: '0px 8px',
//           fontSize: '14px',
//           fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew", sans-serif',
//         };
//         default: 
//             return {}
//         }
//     };
//     return (
//         <Box sx={{ display: 'flex', alignItems: 'center',  width: '100%' }}>
//             <Typography variant="h6" sx={{ fontFamily: 'Poppins, Roboto, "Noto Sans Hebrew", sans-serif', fontSize: '16px', maxWidth: '150px'}}>
//                 {title}
//             </Typography>
//             {badge && (
//                 <Chip 
//                     label={badge}
//                     sx={{ marginLeft: 1, fontSize: '0.75rem', height: 24, ...getBadgeStyles(badge)}}
//                 />
//             )}
//         </Box>

//     )
// }
// export default TitleBadge;

import { TitleBadgeProps } from "./interfaces/TitleBadgeInterface";
import { Box, Chip, Typography } from "@mui/material";

const TitleBadge = ({ title, badge }: TitleBadgeProps) => {
    const getBadgeStyles = (badge: string | undefined) => {
      switch (badge) {
        case "Editor's choice":
          return {
            backgroundColor: '#B2E5FF',
            color: '#323338',
            padding: '0px 8px',
            fontSize: '14px',
            fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew", sans-serif',
          };
        case 'Best seller':
          return {
            backgroundColor: '#BBDBC9',
            color: '#323338',
            padding: '0px 8px',
            fontSize: '14px',
            fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew", sans-serif',
          };
        default:
          return {};
      }
    };
  
    return (
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
        {/* Title */}
        <Typography variant="h6" sx={{ fontFamily: 'Poppins, Roboto, "Noto Sans Hebrew", sans-serif', fontSize: '16px', maxWidth: '150px' }}>
          {title}
        </Typography>
  
        {/* Badge */}
        {badge && (
          <Box sx={{ position: 'absolute', top: 0, right: 0 }}> {/* Position the badge in the top-right corner */}
            <Chip
              label={badge}
              sx={{ marginLeft: 1, fontSize: '0.75rem', height: 24, borderRadius: 0, ...getBadgeStyles(badge) }}
            />
          </Box>
        )}
      </Box>
    );
  };
export default TitleBadge;  