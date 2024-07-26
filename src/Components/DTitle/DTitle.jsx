import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DTitle = () => {
    const location = useLocation();
    useEffect(() => {
        // Extract the last part of the path as the title
        let title = location.pathname;
        // Remove the leading slash
        title = title.startsWith('/') ? title.substring(1) : title;
        // Replace dashes with spaces
        const formattedTitle = title.replace(/-/g, ' ');
        // Capitalize the first letter of each word
        const capitalizedTitle = formattedTitle.replace(/\b\w/g, (match) => match.toUpperCase());
        // Set the title
        document.title = title ? `${capitalizedTitle} - Amazon` : 'Home - Amazon';
    }, [location.pathname]);

    return null;
};

export default DTitle;



// .split('/').pop()