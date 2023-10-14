

const MenuItems = ({item}) => {
    const{image,price,name,recipe}= item;
    return (
        <div className="flex gap-4 my-8">
            <img style={{borderRadius:'0 200px 200px 200px '}} className="w-[120px]" src={image} alt="" />
            <div>
            <h1>{name}</h1>
            <p>{recipe}</p>
            </div>
            
            <p>${price}</p>
        </div>
    );
};

export default MenuItems;