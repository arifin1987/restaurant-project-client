
import SectionTitle from "../../../components/sectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";


const PopularItems = () => {
    const [menu] = useMenu()
    
    const popular = menu.filter(items=> items.category ==='popular')
    console.log(popular);
    return (
        <div>
            <SectionTitle
            subHeading={'checkout'}
            heading={'Popular Items'}
            ></SectionTitle>
            <div className="md:grid grid-cols-2 gap-4">
            {
                popular.map(item => <MenuItems
                key={item._id}
                item={item}
                ></MenuItems>)
            }

            </div>
            
        </div>
    );
};

export default PopularItems;