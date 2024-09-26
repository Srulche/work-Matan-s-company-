import { Box, Typography } from "@mui/material";
import { useState } from "react"
import BillingOptions from "../BillingOptions/BillingOptions";
import PlanSelector from "../PlanSelector/PlanSelector";
import PricingPlan from "../PricingPlan/PricingPlan";
import PriceSummary from "../PriceSummary/PriceSummary";

const PricingPage = () => {
    const [seats, setSeats] = useState(2);
    const [billingCycle, setBillingCycle ] = useState<'monthly' | 'yearly'>('yearly');

    const handleSeatsChange = (event: any) => {
        setSeats(Number(event.target.value));
    }

  const handleBillingCycleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBillingCycle(event.target.value as 'monthly' | 'yearly');
  };

  const pricePerSeat = 0;
  return (
    <Box sx={{ padding: 4 }}>
      {/* Header */}
      <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Start free. <Typography variant="h3" component="span" sx={{ fontWeight: '300' }}>Choose a plan later.</Typography>
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: 4 }}>
        Get started with a 14-day free trial, upgrade anytime to a plan that works for your team.
      </Typography>

      {/* Billing Options */}
      <BillingOptions value={billingCycle} onChange={handleBillingCycleChange} />

      {/* Seat Selector and Plan */}
      <PlanSelector value={seats} onChange={handleSeatsChange} />
      
      {/* Pricing Plan */}
      <PricingPlan
        seats={seats}
        price={pricePerSeat}
        description="Full use of this app for up to 2 team members."
        features={[
          'Record and manage time for items and subitems',
          'Track time across clients, projects, or items simultaneously',
          'Manage time with monthly, weekly, and timesheet views',
          'Connect time data with monday.com boards for enhanced reporting',
        ]}
        recommended={true}
      />

      {/* Price Summary */}
      <PriceSummary teamSize={1} seats={seats} pricePerSeat={pricePerSeat} />
    </Box>
  );
}

export default PricingPage