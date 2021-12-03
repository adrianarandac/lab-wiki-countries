import React from 'react';

const Navbar = () => {
  return (
    <div style={{height: "4vh", width: "100vw"}}>
      <nav className="navbar navbar-light bg-light mb-3 position-fixed w-100" style={{height: "auto"}}> 
        <div className="container-fluid" style={{height: "auto"}}>
          <p className="navbar-brand mb-0 h1">Wikicountries</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
