import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { IoManOutline, IoWomanOutline } from 'react-icons/io5';
import { MiniNestedBx } from '../../../Components';
import CategoryTitlesData  from '../../../Data/CategoryTitlesData'
import './NestedLinkBox.css'






const NestedLinkBox = ({ nestedLinkBox }) => {
    const { t } = useTranslation();
    const Data = CategoryTitlesData(t);
    const Li_Main = Data.map(( item, index ) => {
        return (
            <li className="linkItem bxLink" key={index} id={index}>
            <NavLink className="itemLink clsLink" to={item.catPath}>
                { item.gender 
                ? <IoManOutline /> 
                : <IoWomanOutline />    
                }
                <span>{item.category}</span>
            </NavLink>
            <MiniNestedBx 
            links ={item.items}
            />
        </li>
        )
    })

    return (
        <div className={nestedLinkBox ? "nestedLinkBox opened" : "nestedLinkBox"}>
            <ul className="linkBoxContainer">
                {Li_Main}
            </ul>
        </div>
    )
}

export default NestedLinkBox