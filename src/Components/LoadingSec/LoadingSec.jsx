import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import './LoadingSec.css';

const LoadingSec = ({ isLoadingSec, setIsLoadingSec }) => {
    const location = useLocation();
    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }

        setIsLoadingSec(true);
        const timer = setTimeout(() => setIsLoadingSec(false), 1000);
        return () => clearTimeout(timer);
    }, [setIsLoadingSec, location]);

    return (
        <div className={`LoadingSec-screen ${isLoadingSec ? 'active' : ''}`}>
            <div className="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
            </div>
        </div>
    );
};

export default LoadingSec;
