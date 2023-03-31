import { useState } from "react"
import MenuLogo from "./MenuLogo"


const Nav = () => {
  const [closeNav, setCloseNav] = useState(false)

  const handleCloseNav = () => {
    setCloseNav(!closeNav);
  }

  return (
    <div className="flex justify-between items-center mt-[32px] mx-[15px] md:mx-auto md:max-w-screen-xl">
      <h1 className="font-josefin text-[20px]">team.flow</h1>
      <div className={`md:hidden flex flex-col items-center ${closeNav ? 'hidden' : ''}`} onClick={handleCloseNav}>
        <MenuLogo />
        <p className="text-[8px]">MENU</p>
      </div>
      <div className={`flex justify-between fixed md:relative top-0 right-0 bg-slate-500 opacity-80 h-screen md:h-auto w-3/4 transition-transform duration-500 transform ${closeNav ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:bg-transparent md:opacity-100`}>
        <ul className="text-white md:text-secondary md:flex md:justify-evenly md:w-full md:items-center mx-4 my-2">
          <li className="transition-transform duration-200 transform hover:translate-x-5 hover:underline md:hover:translate-x-0 md:hover:text-primary"><a href="">How it works</a></li>
          <li className="transition-transform duration-200 transform hover:translate-x-5 hover:underline md:hover:translate-x-0 md:hover:text-primary"><a href="">Products</a></li>
          <li className="transition-transform duration-200 transform hover:translate-x-5 hover:underline md:hover:translate-x-0 md:hover:text-primary"><a href="">Pricing</a></li>
          <li className="transition-transform duration-200 transform hover:translate-x-5 hover:underline md:hover:translate-x-0 md:hover:text-primary"><a href="">Resources</a></li>
        </ul>
        <svg className="text-white mx-4 my-2 hover:cursor-pointer" onClick={handleCloseNav} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.6468 1.46759L1.46757 16.6468C0.972904 17.1415 0.972904 17.9435 1.46757 18.4381L1.56185 18.5324C2.05651 19.0271 2.85852 19.0271 3.35319 18.5324L18.5324 3.3532C19.0271 2.85854 19.0271 2.05653 18.5324 1.56187L18.4381 1.46759C17.9435 0.972922 17.1415 0.972923 16.6468 1.46759Z" fill="white"/>
          <path d="M1.46759 3.35321L16.6468 18.5324C17.1415 19.0271 17.9435 19.0271 18.4381 18.5324L18.5324 18.4382C19.0271 17.9435 19.0271 17.1415 18.5324 16.6468L3.3532 1.46759C2.85854 0.972925 2.05653 0.972924 1.56187 1.46759L1.46759 1.56187C0.972922 2.05653 0.972923 2.85854 1.46759 3.35321Z" fill="white"/>
        </svg>
      </div>
      <div className="hidden md:block">
        <ul className="md:flex items-center justify-between">
          <li className="text-primary mx-4">Log in</li>
          <li className="bg-[#ECE5FF] text-specialPurple py-4 px-6 rounded-md">Get started free</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
