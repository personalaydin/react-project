import React from 'react';
import '../styles.scss'
import Image from '../../src/image.png';
import Button from '../Components/CustomButtons'
import '../styles.scss'

class BannerDoubleText extends React.Component {
  
  render() {
    return (
      <div className="bannerImageDouble">
        <div className="bannerImageDouble__image">
          <img src={Image} className="" alt="Images" />
          <div className="bannerButtons">
            <div className="bannerButtons__left">
              <Button label="İş Ara"/>
            </div>
            <div className="divider"></div>
            <div className="bannerButtons__right">
              <Button label="Profilini Oluştur"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerDoubleText;