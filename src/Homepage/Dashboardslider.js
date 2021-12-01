import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Hotel from '../Homepage/images/hotel.jpg'
import Parking from '../Homepage/images/parking.jpg'
import Industry from '../Homepage/images/industry.jpg'
import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
const images = [
 Hotel,
  Parking,
  Industry,
];

const Slideshow = () => {
    return (
        <div className="wrapper">
            <ImageGallery items={images} />
        </div>
    );
}
export default Slideshow;