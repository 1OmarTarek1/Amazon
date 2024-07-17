import { useState, useEffect, useRef } from 'react';
import { FaList, FaXmark } from 'react-icons/fa6';
import { SidebarContent } from '../../Components';
import './SidebarSec.css';

const SidebarSec = ({setIsLoading}) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const sidebarBtnRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    // const Items = document.querySelectorAll(".sideItem");
    // Items.forEach(item => item.classList.remove('active'));
  };
  const handleCloseSidebar = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      sidebarBtnRef.current &&
      !sidebarBtnRef.current.contains(event.target)
    ) {
      // const Items = document.querySelectorAll(".sideItem");
      // Items.forEach(item => item.classList.remove('active'));
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleCloseSidebar);
    } else {
      document.removeEventListener('mousedown', handleCloseSidebar);
    }

    return () => {
      document.removeEventListener('mousedown', handleCloseSidebar);
    };
  }, [isOpen]);

  return (
    <>
      <div 
      ref={sidebarRef} 
      className={`sidebar ${isOpen ? 'open' : ''}`}>

      <SidebarContent 
      clickEvent={toggleSidebar}
      setIsLoading={setIsLoading}
      />

        <button 
          onClick={toggleSidebar} 
          className="open-sidebar-btn"
          ref={sidebarBtnRef}
        >
          { isOpen
            ? <FaXmark data-aos="fade" data-aos-duration="500"/> 
            : <FaList data-aos="fade" data-aos-duration="500"/>
          }
        </button>
      </div>
    </>
  );
}

export default SidebarSec;
