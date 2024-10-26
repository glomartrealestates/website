import Slider from "../special_component/slider";
import SmSlider from "../special_component/SmSlider";

export default function SliderP() {
    return (
        <div className="my-20 ">
            <div className="flex justify-between items-middle"><h1 className='text-2xl font-bold text-gray-900 sm:text-4xl mb-6'> New Launches </h1>
            <h1 className='text-2xl  text-gray-900  mb-6'> show all {'>'}  </h1></div>
            <Slider/>
            <div className="my-20"></div>
            <SmSlider/>
        </div>
    );
}