import { Box, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material"
import { BillingOptionsProps } from "./interfaces/BillingOptionsInterface"

const BillingOptions = ({ value, onChange} : BillingOptionsProps) => {
   
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
        <RadioGroup row value={value} onChange={onChange}>
            <FormControlLabel value = "monthly" control={<Radio />} label = "monthly" />
            <FormControlLabel value="yearly" control={<Radio />} label="Yearly" />
        </RadioGroup>
        {value === 'yearly' && (
            <Typography
                sx={{
                    backgroundColor: '#4CAF50',
                    color: '#fff',
                    borderRadius: '4px',
                    padding: '2px 6px',
                    marginLeft: 1,
                    fontSize: '12px',
                 }}
            >
                Save 16%
            </Typography>
        )}
    </Box>
  )
}

export default BillingOptions