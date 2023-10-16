import SectionTitle from "../../../components/sectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed pt-8 my-20">
            <SectionTitle
            subHeading={'checkout'}
            heading={'Featured'}
            
            ></SectionTitle>
            <div className=" md:flex gap-8 m-4 bg-slate-500 bg-opacity-40 justify-center items-center px-36 pt-12 pb-20">
                <div>
                <img  src={featured} alt="" />
                </div>
            
            <div>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quisquam reiciendis in numquam repudiandae atque quae doloribus qui aperiam nobis!</p>
            <button className="btn btn-outline border-0 border-b-4">Order now</button>

            </div>
           
            </div>
           
            
        </div>
    );
};

export default Featured;