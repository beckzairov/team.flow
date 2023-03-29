import graph2 from '../assets/images/graph2.png'
import Button from './Button'

const Work = () => {
  return (
    <div className='border-y border-[#F0EBFA] bg-[#FBFAFE] py-8 flex flex-col items-center'>
        <img src={graph2} alt=""/>
        <div className='w-3/4 flex flex-col items-center'>
            <h1 className='text-center font-semibold mt-8 text-primary text-[18px] w-2/4'>
                We work how you work everyday
            </h1>
            <p className='text-center font-normal text-secondary my-4 text-[16px]'>
                Since the easiest things to use actually get used, we adapts to the way your team works – not the other way around.
            </p>
            <Button/>
        </div>
    </div>
  )
}

export default Work