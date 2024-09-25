import { Box } from '@mui/material';
import SidebarSection from "../SIdebarSection/SidebarSection"

const SidebarWrapper = () => {
  return (
    <Box
      sx={{
        // padding: 3,
        padding: '16px',
        backgroundColor: '#F6F7FB',
        alignItems: 'center',
        border: '1px solid #E0E0E0',
        borderRadius: '8px',
        cursor: 'pointer',
        width: '100%',
        maxWidth: '320px',
        //  margin: '0 auto',
        marginTop: 2,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* First Section */}
      <SidebarSection
        title="Resources"
        items={['Support', 'Developer website']}
      />

      {/* Second Section */}
      <SidebarSection
        title="Privacy & Security"
        items={['Privacy Policy', 'Terms of Service']}
      />

      {/* Third Section */}
      <SidebarSection
        title="Categories"
        items={['Editor\'s choice', 'Featured', 'Team management', 'Productivity & efficiency', 'Reporting & analytics' , 'Trending this week', 'Recommended for you']}
      />
    </Box>
    
  );
};

export default SidebarWrapper;
