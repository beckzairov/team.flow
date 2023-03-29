import Benefits from "./Benefits"

const BenefitSection = () => {
  return (
    <div className="my-[56px] flex flex-col items-center">
        <h1 className="text-primary font-semibold text-center text-[18px]">Make your work easier</h1>
        <div className="my-[40px]">
          <Benefits/>
          <Benefits/>
          <Benefits/>
        </div>
        <button className="border bg-[#ECE5FF] rounded-lg text-specialPurple hover:bg-specialPurple hover:text-white hover:cursor-pointer hover:duration-300 px-[85px] py-[18px]">
          View more benefits
        </button>
    </div>
  )
}

export default BenefitSection