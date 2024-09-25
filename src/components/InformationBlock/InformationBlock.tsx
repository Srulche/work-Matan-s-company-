import { Box, Link, Typography } from "@mui/material"
import { InformationBlockProps } from "./interfaces/InformationBlockInterface"


const InformationBlock = ({ title, content ,links } : InformationBlockProps) => {
  return (
    <Box sx={{ marginBottom: 3}}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1}}>
            {title}
        </Typography>
        {
            content.map((paragraph, index) => (
                <Typography key={index} variant="body2" sx={{ marginBottom: 1}}>
                    {paragraph}
                </Typography>
            ))
        }
        {
            links && links.map((link, index) => (
                <Link key={index} href={link.url} sx={{color: '#1F76C2', fontSize: '14px'}} underline="hover">
                    {link.text}
                </Link>
            ))
        }

    </Box>
  )
}

export default InformationBlock;