import graph  from '../assets/images/graph.png'
import SponsorSvg from './SponsorSvg'

const Sponsors = () => {
  return (
    <div className='my-8'>
        <img src={graph} alt="" className='mb-[56px]'/>
        <div className='mx-[48px]'>
            <p className='text-secondary text-[11px] text-center mb-5'>
                TRUSTED BY OVER 10.000+ WORLD’S BEST TEAMS
            </p>
            <SponsorSvg/>
        </div>
    </div>
  )
}

export default Sponsors