import { Box } from "@mui/material"
import Grid from '@mui/material/Grid2'
import MainDescription from "../MainDescription/MainDescription"
import FeatureList from "../FeatureList/FeatureList"
import CallToAction from "../CallToAction/CallToAction"
// import SidebarSection from "../SIdebarSection/SidebarSection"
import SidebarWrapper from "../SidebarWrapper/SidebarWrapper"
// import InstallButtonWithIcon from "../InstallButtonWithIcon/InstallButtonWithIcon"

const MainOverview = () => {
  return (
    <Box sx={{ padding: 4}}>
        <Grid container spacing={4}>
            {/* MAIN CONTENT */}
            <Grid item xs= {12} md={8}>
                <MainDescription /> 
                <FeatureList
                  title="Why you’ll love 7pace for time tracking"
                  features={[
                    'Quick installation to get started in minutes.',
                    'Access individual and team time across all boards or workspaces with a single click.',
                    'Flexible tracking options with timesheet or weekly and monthly calendar views.',
                    'Save time with drag-and-drop functionality, copy-paste, and predefined durations.',
                    'Track billable time and other worklog details with configurable toggles and dropdowns.',
                  ]}
                />
                <FeatureList
                  title="Time insights & flexible reporting"
                  features={[
                    'Compare estimated vs. actual time directly in the item view.',
                    'Use integration recipes to track total logged hours and project progress.',
                    'Analyze time data with monday.com attributes like title, group, board, and person.',
                    'Copy time tracking data to monday.com boards for powerful reporting.',
                    'Export data to a spreadsheet with one click for external analysis.',
                  ]}
                />
                <CallToAction />  
            </Grid>
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <SidebarWrapper />
            </Grid>
        </Grid>
        

    </Box>
  )
}

export default MainOverview