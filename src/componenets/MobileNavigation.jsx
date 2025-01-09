import { NavLink } from 'react-router-dom';
import {mobileNavigation} from '../contants/navigation';
import { IoSearch } from "react-icons/io5";


const MobileNavigation = () => {
  return (
    <div className="lg:hidden h-14 bg-neutral-600 bg-opacity-40 fixed bottom-0 w-full">
        <div className='flex items-center justify-between h-full text-neutral-400'> 
            {mobileNavigation.map((nav, index)=>{
                return(<NavLink to={nav.href} key={nav.label + "mobilenavigation"}
                className={({isActive})=>`px-7 flex h-full items-center flex-col justify-center ${isActive && 'text-white'}`}>
                         <div className='text-2xl'>
                            {nav.icon}
                         </div>
                            <p className='text-sm'>{nav.label}</p>
                </NavLink>)
            })}
        </div>
    </div>
  );
};

export default MobileNavigation;
