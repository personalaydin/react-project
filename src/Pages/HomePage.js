import React from 'react'
import FormInput from '../Components/CustomInput';
import BannerDoubleText from '../Components/CustomBannerDouble';
import BannerSingleText from '../Components/CustomBannerSingle';
import DemoCarousel from '../Components/CustomCarousel';

function HomePage() {
  return (
    <div className="homePage">
      <FormInput/>
      <DemoCarousel/>
      <div className="homeBanner">
        <BannerDoubleText/>
        <BannerSingleText/>
      </div>
    </div>
  );
}

export default HomePage;