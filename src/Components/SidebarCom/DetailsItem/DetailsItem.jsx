import { NavLink, useLocation } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoManOutline, IoWomanOutline } from 'react-icons/io5';
import './DetailsItem.css';

const DetailsItem = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);
    const itemRef = useRef(null);
    const location = useLocation();

    const links = props.links.map((link, index) => {
        return (
            <li key={index}>
                <NavLink
                    id={index}
                    to={link.path}
                    onClick={props.clickEvent}
                >
                    {link.title}
                </NavLink>
            </li>
        )
    });

    const pathSec = location.pathname.split('/')[2];
    const isActive = pathSec === props.text.replace(/\s/g, '');

    const toggleDetails = () => {
        setIsOpen(!isOpen);
        setHeight(contentRef.current.scrollHeight);
    };

    const handleClickOutside = (event) => {
        if (itemRef.current && !itemRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div
            className={isActive
                ? `sideItem ${isOpen ? 'open' : ''} detailsItem`
                : `sideItem ${isOpen ? 'open' : ''} detailsItem`
            }
            id={props.id}
            ref={itemRef}
        >
            <div
                className={isActive
                    ? `sumTitle active`
                    : `sumTitle `
                }
                onClick={toggleDetails}
            >
                <div className="d-flex gap-2">
                    {props.gender
                        ? <IoManOutline />
                        : <IoWomanOutline />
                    }
                    <div className="name">
                        {props.text}
                    </div>
                </div>
                <span className={isOpen ? "arrow opened" : "arrow"}>
                    <IoIosArrowDown />
                </span>
            </div>
            <ul
                className="content"
                ref={contentRef}
                style={{
                    height: isOpen ? `${ height + 10 }px` : '0px',
                    opacity: isOpen ? 1 : 0,
                }}
            >
                {links}
            </ul>
        </div>
    );
};

export default DetailsItem;




