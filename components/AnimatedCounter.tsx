'use client'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div>
        <CountUp className='w-full'
        start={0}
        duration={1.5}
        decimals={2}
        decimal='.'
        prefix='₹ '
        end={amount}/>
    </div>
  )
}

export default AnimatedCounter