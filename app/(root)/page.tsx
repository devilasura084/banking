import Headerbox from '@/components/Headerbox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedin={firstName:'Subhoraj',lastName:'Das',
      email:'Suhorajdas084@gmail.com'
    };
  return (
    <section className="home ">
        <div className="home-content">
            <header className='home-header'>
                <Headerbox
                type="greeting"
                title="Welcome"
                user={loggedin?.firstName||'Guest'}
                subtext="Access and manage your account transactions efficiently"
                />
                <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
                />
            </header>
            RECENT TRANSACTIONS
        </div>
        <RightSideBar user={loggedin}
        transactions={[]}
        banks={[{currentBalance:1235.40},{currentBalance:4458.1}]}/>
    </section>
  )
}

export default Home