import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const PopularItems = () => {
    const[menu,setMenu]= useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=> {
            const popularItems = data.filter(item=>item.category === 'popular')
            setMenu(popularItems)
        })
    },[])
    return (
        <div>
            <SectionTitle
            subHeading={'checkout'}
            heading={'Popular Items'}
            ></SectionTitle>
            <div className="md:grid grid-cols-2 gap-4">
            {
                menu.map(item => <MenuItems
                key={item._id}
                item={item}
                ></MenuItems>)
            }

            </div>
            
        </div>
    );
};

export default PopularItems;