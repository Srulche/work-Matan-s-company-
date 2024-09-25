import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./index.css"
import AppTabs from './components/AppTabs/AppTabs';
import { ThemeProvider } from '@mui/material';
import theme from './utils/theme';
import AppGrid from './components/AppGrid/AppGrid';
// import MainOverview from './components/MainOverview/MainOverview';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<AppGrid />} />
        {/* <Route path="/app/:id" element={<AppDetails />} /> */}
        <Route path="/app/:id" element={<AppTabs />} />
        {/* <Route path='/app-overview/:id' element={<MainOverview />} /> */}
      </Routes>
    </Router>

    </ThemeProvider>
   
  );
};

export default App;
