import { Outlet } from 'react-router-dom';
import './CategoryLayout.css';


const CategoryLayout = () => {
    return (
        <div className='categoryPage'>
            <Outlet />
        </div>
    );
};

export default CategoryLayout;
