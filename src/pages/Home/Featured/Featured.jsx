import SectionTitle from "../../../components/sectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item">
            <SectionTitle
            subHeading={'checkout'}
            heading={'Featured'}
            
            ></SectionTitle>
            <div className=" md:flex gap-8 m-4">
                <div>
                <img  src={featured} alt="" />
                </div>
            
            <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quisquam reiciendis in numquam repudiandae atque quae doloribus qui aperiam nobis!</p>
            <button className="btn btn-secondary">Order now</button>

            </div>
           
            </div>
           
            
        </div>
    );
};

export default Featured;