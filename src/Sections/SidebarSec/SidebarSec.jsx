import { useEffect, useRef } from 'react';
import { SidebarContent } from '../../Components';
import './SidebarSec.css';

const SidebarSec = ({ setIsLoading, toggleSidebar, isOpen, setIsOpen }) => {
  const sidebarRef = useRef(null);

  const handleCloseSidebar = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target)
    ) {
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

      </div>
    </>
  );
}

export default SidebarSec;
