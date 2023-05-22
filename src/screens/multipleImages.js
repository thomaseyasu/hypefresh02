import React, {useState} from 'react';
import MultipleImagesHandler from './multipleImagesHandler';

import ImagePicker from 'react-native-image-crop-picker';
import Allstyle from './allstyle';

const MultipleImage = () => {

    const [images, setImages] = useState([]);

    const openImagePicker = () => {
        let imageList = [];

        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            includeExif: true,
            forceJpg: true,
            compressImageQuality: 0.8,
            maxFiles: 10,
            mediaType: 'any',
            //includeBase64: true,
        })
        .then(response => {
            console.log('Response: ', response);
            //console.log(response.filename);
            response.map(image => {
                imageList.push({
                    filename: image.filename,
                    path: image.path,
                    data: image.data,
                });
            });
            setImages(imageList);

        })
        .catch(e => console.log('Error: ',e.message));
    };

    return(

        <MultipleImagesHandler

            newImage={images}
            addImage={openImagePicker}

        />


    );

};

export default MultipleImage;