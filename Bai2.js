import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';
import ImagePicker, { ImagePickerResponse, OptionsCommon, launchImageLibrary } from 'react-native-image-picker';

const defaultImageUrl = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuyBq8QJ86pn6_OPvXiIdu-5w6uFN1ahWEa5Wgi_UHIGAycoW0';

const Bai2 = () => {
  const [imageUri, setImageUri] = useState(null);

  const commonOptions: OptionsCommon = {
    mediaType: 'photo',
    maxWidth: 500,
    maxHeight: 500,
  };
  const libraryOptions: ImageLibraryOptions ={
    selectionLimit:10,
    ...commonOptions,
  }
  
  const handleImagePicker = async () => {
    try {
      const response: ImagePickerResponse = await launchImageLibrary(libraryOptions);
      if(response?.assets){
        setImageUri(response.assets[0].uri);
      } else {
        Alert.alert('Có lỗi xảy ra', response.errorMessage);
      }
    } catch (error) {
      console.log('Error while picking image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Chọn ảnh từ thư viện" onPress={handleImagePicker} />
      <Image source={{ uri: imageUri || defaultImageUrl }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 20,
  },
});

export default Bai2;
