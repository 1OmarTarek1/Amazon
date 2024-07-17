import { NavLink } from 'react-router-dom';
import { FaCircle } from 'react-icons/fa';
import './MiniNestedBx.css'





const MiniNestedBx = (props) => {
    const links = props.links.map((link, index) => {
        return (
            <li className="miniItem" key={index} id={index}>
                <FaCircle size={6}/>
                <NavLink to={link.path}>
                    <span>{link.title}</span>
                </NavLink>
            </li>
        )
    })
    return (
        <ul className="miniNestedBx" id={props.id}>
            {links}
        </ul>
    )
}

export default MiniNestedBx