import { formatAmount } from '@/lib/utils'
import React from 'react'
import DoughnutChart from './DoughnutChart'

const TotalBalanceBox = ({
    accounts=[],totalBanks, totalCurrentBalance
}:TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className="total-balance-chart">
            <DoughnutChart accounts={accounts} />
        </div>
        <div className="flex flex-col gap-6">
            {totalBanks} Bank Accounts
        </div>
        <div className="flex flex-col gap-2">
            <p className='total-balance-label'>
                Total Current Balance
            </p>
            <p className='total-balance-amount flex-center gap-2'>
                {formatAmount(totalCurrentBalance)}
            </p>
        </div>
    </section>
  )
}

export default TotalBalanceBox
