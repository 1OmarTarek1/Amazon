// 

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ProfileBox } from '../../../Components';
import { FaUser } from 'react-icons/fa6';
import './ProfileLink.css';

const ProfileLink = ({ setIsLoadingSec }) => {
    const [profileBx, setProfileBx] = useState(false);
    const location = useLocation();

    const isActive = location.pathname.startsWith("/Profile");

    const handleProBx = () => {
        setProfileBx(!profileBx);
    };

    useEffect(() => {
        // Close Profile Box when clicking outside
        const handleClickOutside = (event) => {
            const profileLink = document.querySelector(".profileLink");
            const profileBox = document.querySelector('.profileBox');
            if (
                profileBx &&
                profileBox &&
                profileLink &&
                !profileBox.contains(event.target) &&
                !profileLink.contains(event.target)
            ) {
                setProfileBx(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [profileBx]);

    return (
        <div
            className={isActive ? "profileLink clsLink active" : "profileLink clsLink"}
            onClick={handleProBx}
            style={{ cursor: "pointer" }}
        >
            <span>
                <FaUser />
            </span>

            {/* Profile Box */}
            <ProfileBox
                profileBx={profileBx}
                setProfileBx={setProfileBx}
                setIsLoadingSec={setIsLoadingSec}
            />
        </div>
    );
};

export default ProfileLink;
