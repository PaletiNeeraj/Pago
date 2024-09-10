import React from 'react'

const NavBar = ({filterItem, menuList}) => {
  return (
    <>
      <nav className='navbar'>
        <div className='btn-group'>
            {
                menuList.map((curElemt)=>{
                    return <button className='btn-group__item' onClick={()=>filterItem(curElemt)}>{curElemt}</button>
                })
            }
        </div>
      </nav>
    </>
  )
}

export default NavBar
