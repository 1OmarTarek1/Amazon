import { NavLink } from 'react-router-dom'
import './SectionWrapper.css'






const SectionWrapper = ( props ) => {
    return (
        <>    
        <div className="MainSection">
            {props.secTitle && (
                <div className="SectionTitle">
                    <NavLink to={props.path} >
                        {props.secTitle}
                    </NavLink>
                </div>
            )}
            <div className='SectionWrapper'>
                {props.children}
            </div>
        </div>
        </>
    )
}

export default SectionWrapper