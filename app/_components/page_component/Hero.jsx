import SearchInput from '../special_component/Search_components';

function Hero() {
  return ( <>
    <div>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
  className="w-[full] h-[400px]  bg-[url(https://realestate.eg/ckfinder/userfiles/images/Mivida/Mivida-Emaar%20Misr.jpg)] bg-cover bg-center bg-no-repeat items-center justify-center"
>
  {/* <div
    className="  bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div> */}
<div className='max-w-[1350px] items-center mx-auto'>
  <div
    className="   py-32  lg:flex lg:h-screen flex flex-col items-start "
  >
    <div className="w-full">
      <h1 className=" text-3xl font-extrabold text-white sm:text-5xl">
      Find Your New Home

        {/* <strong className="block font-extrabold text-rose-500"> Forever Home. </strong> */}
      </h1>

      <p className=" w-full mt-4  text-white sm:text-xl/relaxed">Search & compare among 5000+ properties and 500+ compounds or list your property for sale
      </p>

      </div>
      
      <SearchInput />
      
      

      {/* <div className="mt-8 flex flex-wrap gap-4 text-center">
        
      </div> */}
    {/* </div> */}
  </div>
  </div>
</section>

    </div>
    </>
  )
}

export default Hero
