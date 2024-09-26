export interface PricingPlanProps {
    seats: number;
    price: number;
    description: string;
    features: string[];
    recommended?: boolean;
}