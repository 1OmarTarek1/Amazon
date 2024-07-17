import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {ProfileBox} from '../../../Components';
import { FaUser } from 'react-icons/fa6';
import './ProfileLink.css'




const ProfileLink = ({setIsLoading}) => {
    const [profileBx, setProfileBx] = useState(false);
    const location = useLocation();

    const isActive = location.pathname.startsWith("/Profile");

    const handleProBx = () => {
        setProfileBx(!profileBx);
    };

    useEffect(() => { // Close Profile Box when click a (Box-Link) and (outside box)
        const handleClickOutside = (event) => {
            let profileLink  = document.querySelector(".profileLink ");
            const profileBox = document.querySelector('.profileBox');
            if ( profileBx
                && !profileBox.contains(event.target)
                && !profileLink.contains(event.target)
            ) {
                setProfileBx(false); 
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
    
        let BoxLinks = document.querySelectorAll(".clsProBx");
        let clsBx = () => { 
            setProfileBx(false); 
        };
        BoxLinks.forEach(BoxLink => {
            BoxLink.addEventListener('click', clsBx);
        });
        
        return () => {
        BoxLinks.forEach(BoxLink => {
            BoxLink.removeEventListener('click', clsBx);
        });
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [profileBx]);


    return (
        <>
            <div 
            className={isActive ? "profileLink clsLink active" : "profileLink clsLink" } 
            onClick={handleProBx}
            style={{cursor:"pointer"}}
            >
                <span>
                    <FaUser />
                </span>

                {/* Profile Box */}
                <ProfileBox 
                profileBx={profileBx} 
                setProfileBx={setProfileBx}
                setIsLoading={setIsLoading}
                />
            </div>
            
        </>
    )
}

export default ProfileLink

