import { Box, Button, Typography } from "@mui/material"
//  import DownloadIcon from "@mui/icons-material/Download"
 import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const CallToAction = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#F6F7FB',
        padding: 2,
        textAlign: 'center',
        marginTop: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}  

    >
      <Typography variant="h4" sx={{ marginRight: 2}}> Start with a free plan now</Typography>
      
        <Button
            variant="contained"
            size="large"
            sx={{ textTransform: 'none'}}
            startIcon = {<FileDownloadOutlinedIcon />}
        >
            Install app 
        </Button>
    </Box>
  )
}

export default CallToAction