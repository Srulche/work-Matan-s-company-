import React from "react";
import { AppCardProps } from "./interfaces/AppCardInterface";
import { Box, Card, CardContent, Typography } from "@mui/material";
import TitleBadge from "../TitleBadge/TitleBadge";
import RatingDownloadInfo from "../RatingDownloadInfo/RatingDownloadInfo";

const productLogos: { [key: string]: string } = {
    '7pace Timetracker': 'https://dapulse-res.cloudinary.com/image/upload/v1693395963/monday-apps-marketplace/7pace%20Timetracker/App_Icon_Template_1_3.png',
    'Project Portfolio Management - PPM': 'https://dapulse-res.cloudinary.com/image/upload/v1713958513/monday-apps-marketplace/Portfolio%20Project%20Management/ppm_logo.png',
    'General Caster': 'https://dapulse-res.cloudinary.com/image/upload/v1675367407/monday-apps-marketplace/General%20Caster/gc-logo.png',
    'DocuGen': 'https://cdn.monday.com/marketplace/12/12_2024_3_14_9_16_54_o5ut9uc.png',
    'VLOOKUP Auto-link': 'https://dapulse-res.cloudinary.com/image/upload/v1612783271/monday-apps-marketplace/%E2%96%B6%EF%B8%8F%20VLOOKUP%20Auto-link/Group_9.png',
    'Extract AI': 'https://dapulse-res.cloudinary.com/image/upload/v1660579714/monday-apps-marketplace/Extract/icon_4.png',
    'Tracket - Makes Time Work': 'https://dapulse-res.cloudinary.com/image/upload/v1636039198/monday-apps-marketplace/Tracket/Tracket_Appicoon_Donkerblauw.png',
    'SuperForm': 'https://dapulse-res.cloudinary.com/image/upload/v1644925745/monday-apps-marketplace/SuperForm/SuperFrom_Icon.jpg'

}

const AppCard: React.FC<AppCardProps> = ({ app, onClick}) => {
    const logoUrl = productLogos[app.title] || ''
    return (
        <Card
            onClick = {onClick}
            sx={{
                cursor: 'pointer',
                boxShadow: 3,
                borderRadius: 2,
                transition: 'background-color 0.3s ease',
                '&:hover': {
                    backgroundColor: '#f5f5f5'
                }
            }}>
            <CardContent>
                {
                    logoUrl && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1}}>
                            <img src={logoUrl} alt={`${app.title} Logo`} style={{ height: 40, width: 40}} />
                        </Box>
                    )
                }
                <TitleBadge title={app.title} badge={app.badge} />
                <Typography variant="body2" sx={{ color: '#676879', fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew"', margin: '0px 0px 8px' }}>
                    {app.author}
                </Typography>
                <Typography variant="body1" sx={{ color: '#676879',fontFamily: 'Figtree, Roboto, "Noto Sans Hebrew"', margin: '0px 0px 8px'  }}>
                    {app.description}
                </Typography>
                <RatingDownloadInfo rating={app.rating} reviews={app.reviews} downloads={app.downloads} />
            </CardContent>
        </Card>
    )

}
export default AppCard;