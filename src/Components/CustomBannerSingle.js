import React from 'react';
import '../styles.scss'
import ImageSingle from '../../src/image-single.png';
import Button from '../Components/CustomButtons'
import '../styles.scss'

class BannerSingleText extends React.Component {
  
  render() {
    return (
      <div className="bannerImageSingle">
        <div className="bannerImageSingle__image">
          <img src={ImageSingle} className="" alt="Images" />
          <div className="bannerButtons">
            <div className="bannerButtons__left">
              <Button label="İş Ara"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerSingleText;