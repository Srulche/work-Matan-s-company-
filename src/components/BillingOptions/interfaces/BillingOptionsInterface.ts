import React from "react"

export interface BillingOptionsProps {
    value: 'monthly' | 'yearly'
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}