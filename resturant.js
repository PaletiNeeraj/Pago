import React, {useState} from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './menuCard'
import NavBar from './navBar'
const menuListItem=[...new Set(Menu.map((curElem)=>{return curElem.category})),"All"] 
const Resturant = () => {
  const [menuData, setMenuData]=useState(Menu)
  const [menuList, setMenuList]=useState(menuListItem)
  const filterItem=(categorys)=>{
    if(categorys==="All")
      {
        setMenuData(Menu)
        return
      }
    const updatedList=Menu.filter((curElem)=>{
      return curElem.category===categorys
    })
   setMenuData(updatedList) 
  }
  return (
    <>
      <NavBar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant
