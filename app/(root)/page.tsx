import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

    const loggedIn = {firstName:'Unnati', lastName:'Srivastava', email:'unnatisrivastava0603@gmail.com'};
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
            <HeaderBox 
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'guest'}
            subtext='Access and manage your transactions efficiently'
            />
            <TotalBalanceBox accounts={[]}
            totalBanks= {1}
            totalCurrentBalance={1250}
            />
        </header>

        RECENT TRANSACTIONS
      </div>
        <RightSidebar user={loggedIn} transactions={[]} banks = {[{currentBalance : 123.50},{currentBalance : 553.80}]} />
    </section>
  )
}

export default Home
