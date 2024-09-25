import { Box } from "@mui/material"
import DashboardIcon from '@mui/icons-material/Dashboard'
import FolderIcon from '@mui/icons-material/Folder'
import TableChartIcon from '@mui/icons-material/TableChart'
import ViewModuleIcon from '@mui/icons-material/ViewModule'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'

import MainDescription from "../MainDescription/MainDescription"
import FeatureList from "../FeatureList/FeatureList"
import CallToAction from "../CallToAction/CallToAction"
import SidebarWrapper from "../SidebarWrapper/SidebarWrapper"
import DevelopedByAppfire from "../DevelopedByAppfire/DevelopedByAppfire"
import ReportApp from "../ReportApp/ReportApp"
import InformationBlock from "../InformationBlock/InformationBlock"
import AppUseIconsBar from "../AppUseIconsBar/AppUseIconsBar"



const MainOverview = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Flexbox container to manage the main content and sidebar */}
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
        {/* Main content area */}
        <Box sx={{ flex: 2 }}>
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

          {/* Information Blocks */}
          <InformationBlock
            title="Need more details?"
            content={[
              'See our complete app documentation and explore upcoming features via the feature portal.',
              'Visit the Appfire Trust Center for more information on our security, privacy, and compliance standards like ISO 27001, ISO 27017, and SOC 2.',
              'Appfire offers top-performing apps that help teams globally overcome significant challenges.'
            ]}
            links={[
              { text: 'complete app documentation', url: 'https://documentation-url.com' },
              { text: 'feature portal', url: 'https://feature-portal-url.com' }
            ]}
          />

          {/* App Usage Icons Bar */}
          <AppUseIconsBar
            items={[
              { label: 'Templates', icon: <DashboardIcon fontSize="large" /> },
              { label: 'Workspace', icon: <FolderIcon fontSize="large" /> },
              { label: 'Items', icon: <TableChartIcon fontSize="large" /> },
              { label: 'Dashboards', icon: <ViewModuleIcon fontSize="large" /> },
              { label: 'Integrations', icon: <IntegrationInstructionsIcon fontSize="large" /> }
            ]}
          />
        </Box>

        {/* Sidebar area */}
        <Box sx={{ flex: 1 }}>
          <SidebarWrapper />
          <Box sx={{ marginTop: 4 }} />
          <DevelopedByAppfire
            developerName="Appfire"
            partnerInfo="Platinum Marketplace Partners have met enhanced requirements by participating in monday.com Partner Programs."
          />
          <ReportApp reportLink="https://report-app.com" />
        </Box>
      </Box>

      {/* Call to Action section */}
      <Box sx={{ marginTop: 4 }}>
        <CallToAction />
      </Box>
    </Box>
  );
};

export default MainOverview;
