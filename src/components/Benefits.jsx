import collaborative from '../assets/icons/collaborative.png'

const Benefits = () => {
  return (
    <div className="text-center mx-8 flex flex-col items-center content-between my-[48px]">
        <img src={collaborative} alt="" width={48}/>
        <h1 className="text-primary font-semibold text-[18px]">
            Team Surveys & Reports
        </h1>
        <p className="text-secondary font-normal text-[16px]">
            Short, anonymous surveys track your team’s needs weekly so you can focus.
        </p>
    </div>
  )
}

export default Benefits