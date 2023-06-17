import React, {useState,useEffect}  from 'react'
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
const data = [
    { id: 1, name: "Clothing", subMenu:[{id:1,name:"Men"},{id:2,name: "Women"},{id:3,name: "Kids"}],url:'/' },
    { id: 2, name: "Accessories", subMenu:[{id:11,name:"Earphone"},{id:12,name: "Watch"},{id:13,name: "Mobile"},{id:4,name: "Laptop"}],url:'/' },
    { id: 3, name: "Shoes", subMenu:[{id:21,name:"jordan"},{id:22,name: "Sneakers"},{id:23,name:"Running shoes"},{id:24,name: "Football shoes"}], url:'/'},
    { id: 4, name: "Beauty", subMenu:[{id:31,name:"Hair care"},{id:32,name: "Face care"},{id:33,name: "Body care"}], url:'/'},
];

const Menu = ({showCatMenu, setShowCatMenu}) => {
    
    const onMouseMoveHandler = (submenuId)=>{
        setShowCatMenu((showCatMenu)=>{
            console.log(submenuId);
            let arr = [...showCatMenu];
            arr[submenuId] = true;
            return arr;
        })
    }
    
    const onMouseLeaveHandler = (submenuId)=>{
        setShowCatMenu((showCatMenu)=>{
            let arr = [...showCatMenu];
            arr[submenuId] = false;
            return arr;
        })
    }
  return (
   <ul className='hidden md:flex py-2 justify-center items-center gap-[80px] font-medium text-black' >
    {data.map((item,index)=>{
        return (
            <React.Fragment key={index} >
                {
                !!item?.subMenu ? 
                (
                    
                    <div className='cursor-pointer flex items-center gap-2 relative' onMouseOver={()=>onMouseMoveHandler(item.id)}  onMouseOut={()=>onMouseLeaveHandler(item.id)}>
                        <a >{item.name}</a>
                        <BsChevronDown size={14}/>
                        {showCatMenu[item.id] && (
                            <ul className='bg-black absolute top-6 left-0 min-w-[250px] px-1 py-1 text-white shadow-lg '>
                               {item.subMenu.map((subitem,index)=>{
                                    return (
                                        <Link key={index} href='/' onClick={()=>setShowCatMenu(false)}>
                                            <li className='h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md '>{subitem.name}
                                            <span className='opacity-50 text-sm'>45</span>
                                            </li>
                                        </Link>
                                    )
                               })} 
                            </ul>
                        )}
                    </div>
                    
                    
                )
                :(
                    <li className='cursor-pointer relative'>
                        <Link href={item?.url}>
                            {item?.name}
                        </Link>

                    </li>)
                }
            </React.Fragment>
        )
    })}
          <Link href='/sell'><li className='cursor-pointer'>Sell your Product</li></Link>
   </ul>
  )
}

export default Menu