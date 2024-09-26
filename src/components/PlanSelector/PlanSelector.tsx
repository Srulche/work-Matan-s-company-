import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { PlanSelectorProps } from "./interfaces/PlanSelectorInterface"


const PlanSelector = ({ value, onChange}: PlanSelectorProps) => {
  return (
    <Box sx={{ marginBottom: 2}}>
        <FormControl fullWidth>
            <InputLabel>Seats</InputLabel>
            <Select value={value.toString()} onChange={onChange} label="Seats" >
                {
                    [2,3,4,5].map((seat, index) => (
                        <MenuItem key={index} value={seat}>
                            {seat} Seats
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    </Box>
  )
}

export default PlanSelector