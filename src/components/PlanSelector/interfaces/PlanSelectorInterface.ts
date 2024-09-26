import { SelectChangeEvent } from "@mui/material";

export interface PlanSelectorProps {
    value: number;
    onChange: (event: SelectChangeEvent) => void
}