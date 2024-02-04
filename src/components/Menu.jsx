import React, { useState, useEffect } from 'react';
//import { useSpring, animated } from '@react-spring/web';
import {NavLink} from 'react-router-dom'

const pages=[
  {path:'/toursapp',name:'Home'},
  {path:'/toursapp/about',name:'About'},
  {path:'/toursapp/tours',name:'Our Tours'},
  {path:'/toursapp/contact',name:'Contact'}
]

export const Menu = () => {
  
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
       const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {// Ennek a függvénynek a célja az, hogy eltávolítsa az eseményfigyelőt, amikor a komponens megszűnik (unmount). 
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 /* const mobileMenuProps = useSpring({
    height: isMobileMenuOpen ? '180px' : '0px',
    overflow: 'hidden',
    config: { duration: 300 },
  });*/

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          padding: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div >
          <h3 className='gradient-text'>Traveller</h3>
        </div>
        {isMobileView ? (
          <div className='gradient-text' onClick={toggleMobileMenu} style={{ fontSize:'1.5rem',cursor: 'pointer',marginRight:'30px'}}>
            &#9776;
          </div>
        ) : (
          <div>
            <ul style={{ listStyle: 'none',
             margin: 0, padding: 0, display: 'flex' }}>
              {pages.map(page=>
                <NavLink key={page.name} to={page.path} 
              
                className={({ isActive }) => isActive ? "active" : ""}> 
                <li className="gradient-text" 
                style={{ margin: '0 20px' }}>{page.name}</li>
            </NavLink  >
                )}
            </ul>
          </div>
        )}
      </div>

   {isMobileView &&  <div
        style={{
          height:isMobileMenuOpen ? '180px' : '0px',
          overflow: 'hidden',
          position: 'fixed',
          top: '60px',
          left: 0,
          width: '100%',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          backdropFilter: 'blur(10px)',
        }}
      >
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {pages.map(page=>
            <NavLink  key={page.name} to={page.path}>
              <li className="gradient-text" 
              style={{ margin: '10px'}} onClick={toggleMobileMenu}>{page.name}</li>
            </NavLink> 
            )}
        </ul>
      </div>}
    </div>
  );
};


