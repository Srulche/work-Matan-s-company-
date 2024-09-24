import { Box } from '@mui/material';
import SidebarSection from "../SIdebarSection/SidebarSection"

const SidebarWrapper = () => {
  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: '#F6F7FB',  // Soft background color
        borderRadius: '8px',  // Rounded corners for a clean look
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Gentle shadow for depth
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

      {/* Fourth Section */}
      {/* <SidebarSection
        title="Developed by Appfire"
        items={['Platinum partner', 'Top-performing apps']}
      /> */}
    </Box>
  );
};

export default SidebarWrapper;
