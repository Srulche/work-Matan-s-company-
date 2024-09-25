
import { Box, Typography } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag'; // Red flag icon
import { ReportAppProps } from './interfaces/ReportAppInterface'; // Create this interface file

const ReportApp = ({ reportLink }: ReportAppProps) => {
  return (
    <Box
      sx={{
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #E0E0E0',
        borderRadius: '8px',
        color: '#D83A52',
        cursor: 'pointer',
        width: '100%',
        maxWidth: '320px',
        margin: '0 auto',
        marginTop: 2,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}
      onClick={() => window.location.href = reportLink} // Redirect when clicked
    >
      <FlagIcon fontSize="small" sx={{ marginRight: 1 }} />
      <Typography variant="body2" sx={{ fontSize: '16px', fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew' }}>
        Report this app
      </Typography>
    </Box>
  );
};

export default ReportApp;
