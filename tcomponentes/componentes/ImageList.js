import React from 'react';
import { View, Image } from 'react-native';

const ImageList = ({ images }) => {
  return (
    <View>
      {images.map((url, index) => (
        <Image
          key={index}
          source={{ uri: url }}
          style={{ width: 100, height: 100, marginBottom: 10 }}
        />
      ))}
    </View>
  );
};

export default ImageList;