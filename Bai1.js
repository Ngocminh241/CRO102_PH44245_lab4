import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';
import ImagePicker, { CameraOptions, ImagePickerResponse, OptionsCommon, launchCamera } from 'react-native-image-picker';

const Bai1 = () => {
  const [images, setImages] = useState(null);

  const commonOptions: OptionsCommon = {
    mediaType: 'photo',
    maxWidth: 500,
    maxHeight: 500,
  }
  const cameraOptions: CameraOptions = {
    cameraType: 'front',
    saveToPhotos:true,
    ...commonOptions,
  }

  const onOpenCamera = async () => {
    const response: ImagePickerResponse = await launchCamera(cameraOptions);
    if(response?.assets){
      setImages(response.assets);
    } else {
      Alert.alert('Có lỗi xảy ra ', response.errorMessage); 
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Mở camera" onPress={onOpenCamera} />
      <Image source={{ uri: images?.[0]?.uri || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7JSotCRBI9ZqbkfDHO1ISmDo3V-bF_81CA&usqp=CAU' }} style={{ width: 200, height: 200, marginTop: 20 }} />
    </View>
  );
};

export default Bai1;

const styles = StyleSheet.create({});
