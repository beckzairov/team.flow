import timeline from '../assets/images/timeline.png'
import Card from './Card'


const Body = () => {
  return (
    <div className="border-y border-[#F0EBFA] bg-[#FBFAFE] py-8 flex flex-col md:flex-row md:justify-evenly items-center">
        <img  src={timeline} alt="timeline_overview md:h-full" />
        <div className='my-8'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Body