import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
    <>
       <nav className="navbar">
      <div className="btn-group">
        {
          menuList.map((curElem)=> {
            return ( <buttom className="btn btn-group__item" onClick={ () => filterItem(curElem)}>{curElem}</buttom>
            );
          })}
      </div>
    </nav>
    </>
  );
};

export default Navbar
