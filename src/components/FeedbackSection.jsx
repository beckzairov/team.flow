import Feedback from "./Feedback"

const FeedbackSection = () => {
  return (
    <div className="flex flex-col items-center my-[56px]">
        <div className="w-3/4">
          <h1 className="text-primary font-semibold text-center text-[18px] mb-[40px] px-10">Why customers love working with us</h1>
          <Feedback/>
        </div>
    </div>
  )
}

export default FeedbackSection