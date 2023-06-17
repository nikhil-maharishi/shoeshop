import React from 'react'
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
const data = [
    { id: 1, name: "Clothing", subMenu:[{id:1,name:"Men"},{id:2,name: "Women"},{id:3,name: "Kids"}],url:'/' },
    { id: 2, name: "Accessories", subMenu:[{id:11,name:"Earphone"},{id:12,name: "Watch"},{id:13,name: "Mobile"},{id:4,name: "Laptop"}],url:'/' },
    { id: 3, name: "Shoes", subMenu:[{id:21,name:"jordan"},{id:22,name: "Sneakers"},{id:23,name:"Running shoes"},{id:24,name: "Football shoes"}], url:'/'},
    { id: 4, name: "Beauty", subMenu:[{id:31,name:"Hair care"},{id:32,name: "Face care"},{id:33,name: "Body care"}], url:'/'},
];

const MenuMobile = ({showCatMenu, setShowCatMenu, setMobileMenu}) => {

    const onClickHandler = (submenuId)=>{
        setShowCatMenu((showCatMenu)=>{
            let arr = [...showCatMenu];
            arr[submenuId] = true;
            return arr;
        })
    }
    
  return (
   <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black'>
    {data.map((item,index)=>{
        return (
            <React.Fragment key={index}>
                {!!item?.subMenu ? 
                (
                    <li className='cursor-pointer py-4 px-5 border-b flex flex-col relative' onClick={()=>onClickHandler(item.id)} >

                        <div className="flex justify-between items-center">
                        {item.name}
                        <BsChevronDown size={14}/>
                        </div>
                        
                        {showCatMenu[item.id] && (
                            <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4'>
                               {item.subMenu.map((submenu)=>{
                                    return (
                                        <Link key={submenu.id} href='/' onClick={()=>{setShowCatMenu(false); setMobileMenu(false)}}>
                                            <li className='py-4 px-8 border-t flex justify-between '>{submenu.name}
                                            <span className='opacity-50 text-sm'>45</span>
                                            </li>
                                        </Link>
                                    )
                               })} 
                            </ul>
                        )}
                    </li>
                )
                :(
                    <li className='py-4 px-5 border-b'>
                        <Link href={item?.url} onClick={()=>setMobileMenu(false)}>
                            {item.name}
                        </Link>

                    </li>
                )}
            </React.Fragment>
        )
    })}

   </ul>
  )
}

export default MenuMobile