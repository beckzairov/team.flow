import img from '../assets/images/ellipse.png'

const Feedback = () => {
  return (
    <div className='flex flex-col items-center'>
        <p className="text-secondary text-center font-normal my-4 text-[16px]">
            “It's amazing what has helped me learn about my team. I don't worry about blindspots anymore, and 1-on-1s have never been more productive. The team loves it.”
        </p>
        <img src={img} alt="" className="bg-slate-500 rounded-full mt-10" width={48} height={48}/>
        <p className='font-semibold text-[13px] text-primary my-1'>Jorge Robertson</p>
        <p className='font-normal text-[13px] text-secondary'>CS at Google</p>
    </div>
  )
}

export default Feedback