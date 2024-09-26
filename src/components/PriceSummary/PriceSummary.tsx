import { Box, Divider, Typography } from "@mui/material"
import { PriceSummaryProps } from "./interfaces/PriceSummaryInterface"


const PriceSummary = ({teamSize, seats, pricePerSeat}: PriceSummaryProps) => {

  return (
    <Box
        sx={{
            padding: 2,
            backgroundColor: '#F6F7FB',
            borderRadius: '8px',
            marginTop: 2,
        }}
    >
        <Typography variant="body1">Your team size: {teamSize} Seat</Typography>
        <Divider sx={{ marginY: 1}} />
        <Typography variant="body1">Recommended plan: {seats} Seats</Typography>
        <Divider sx={{ marginY: 1 }} />
        <Typography variant="body1">Price per seat: ${pricePerSeat}</Typography>
    </Box>
  )
}

export default PriceSummary