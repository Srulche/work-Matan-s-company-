import { Box, Link, Typography } from "@mui/material"

const MainDescription = () => {
  return (
    <Box>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2}}>
            Effortlessly record, manage, and report on time tracking
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Ready for more accurate project time tracking without the extra work?
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
            7pace Timetracker offers seamless time tracking on items and subitems, with flexible timesheets and calendar views. Gain valuable insights for better planning and robust project reporting for budget management, status updates, billing, and more.
      </Typography>
      See it in action! <Link href="#" sx={{ fontWeight: 'bold', color: 'primary.main', textDecoration: 'none'}}>
        Schedule a demo
      </Link>
    </Box>
  )
}

export default MainDescription