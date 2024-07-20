
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Loading.css';




const Loading = ({ isLoading, setIsLoading }) => {
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, [ setIsLoading, location ]);


//   useEffect(() => { 
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.example.com/data'); // Replace with your actual API endpoint
//         const data = response.data;
//         // Process your data here
//         console.log(data); 
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error loading data', error);
//         setIsLoading(false); 
//       }
//     };

//     fetchData();
//   }, []);

    return (
        <div className={`Loading-screen ${isLoading ? 'active' : ''}`}>
            <div className="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
            </div>
        </div>
    )
}

export default Loading