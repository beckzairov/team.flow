import { useState } from 'react'

const FooterItems = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }
  
  return (
    <div className='my-8'>
            <p className='text-white font-semibold text-[16px] flex justify-between items-center' onClick={handleMouseClick}>
                {props.footerDropdowns.header} 
                <span className={`hover:cursor-pointer transition-all duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8988 1.13526C15.8994 0.87047 15.8071 0.613858 15.6382 0.40997C15.5431 0.295217 15.4262 0.200361 15.2944 0.130833C15.1625 0.0613047 15.0182 0.0184714 14.8698 0.00478626C14.7214 -0.0088989 14.5717 0.00683311 14.4294 0.0510809C14.287 0.0953286 14.1548 0.167222 14.0403 0.262645L7.96599 5.33967L1.88036 0.443969C1.76444 0.349833 1.63106 0.279534 1.48788 0.237114C1.3447 0.194694 1.19456 0.180989 1.04607 0.196785C0.897576 0.212582 0.753672 0.257569 0.622625 0.329162C0.491578 0.400755 0.375972 0.497541 0.282452 0.613958C0.179284 0.731212 0.101465 0.868525 0.0538803 1.01728C0.00629559 1.16604 -0.0100276 1.32302 0.00593429 1.47838C0.0218962 1.63375 0.069799 1.78413 0.146637 1.9201C0.223474 2.05608 0.327587 2.1747 0.452442 2.26853L7.25203 7.7422C7.45481 7.90888 7.70917 8 7.97166 8C8.23415 8 8.4885 7.90888 8.69128 7.7422L15.4909 2.07587C15.628 1.96218 15.7364 1.81777 15.8073 1.65434C15.8782 1.49091 15.9096 1.31308 15.8988 1.13526Z" fill="white"/>
                    </svg>
                </span>
            </p>
            <ul className={`${isOpen ? 'block' : 'hidden'} md:block`}>
                {props.footerDropdowns.items.map((items, index) => (
                    <li className='text-white font-normal text-[16px] ml-4' key={index}>{items}</li>
                ))}
            </ul>
    </div>
  )
}

export default FooterItems