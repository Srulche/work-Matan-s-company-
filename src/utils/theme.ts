import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        // OVERRIDE THE DEFAULT FOR TABS: 
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },
});
export default theme;