import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ImageList from './ImageList';

const ImageGallery = () => {
  const [images, setImages] = useState([
    'https://media.pitchfork.com/photos/59f35b4db14dfd49adac08fa/master/pass/timespentawayfromu.jpg',
    'https://f4.bcbits.com/img/a0056601041_65',
    'https://upload.wikimedia.org/wikipedia/en/7/7d/Fishmans_Long_Season.jpg',
    'https://media.pitchfork.com/photos/5ea85f7997cf670008c84ab4/1:1/w_800,h_800,c_limit/Roaches%202012-2019_Dean%20Blunt.jpg'
  ]);

  return (
    <View>
      <Text>Galería</Text>
      <ImageList images={images} />
    </View>
  );
};

export default ImageGallery;