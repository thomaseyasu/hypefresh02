import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,

} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Allstyle from './allstyle';

const BLUE = '#102d66';
const YELLOW = '#ffa600';

const MultipleImagesHandler = ({
    newImages,
    addImage,
}) => {

  const _renderItem = ({item, index}) => {
    return(

        <View key={index}>

            <Image
                style={{width: '88%', borderRadius: 15, height: 200}}
                source={{uri: item.path}}
            />
            <View style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>

            </View>

        </View>
    );
  };

    return(

        <View style={styles.container}>

            {
                newImages?.length > 0 ? (
                    <Carousel
                        data={newImages}
                        renderItem={_renderItem}
                        onSnapToItem={(index) => console.log(index)}
                        sliderWidth={400}
                        itemWidth={400}
                        vertical={false}
                    />
                ) : (
                    <TouchableOpacity
                        onPress={addImage}


                    >
                    <Text style={{textAlign: 'center', backgroundColor: 'grey', margin: 20, padding: 30, fontSize: 20, borderRadius: 20, color: Allstyle.container.backgroundColor, fontWeight: 'bold'}}>Add an Image</Text>
                    </TouchableOpacity>
                )
            }


        </View>


    );


}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     width: '100%',
     height: '100%',

     backgroundColor: Allstyle.container.backgroundColor
    },

})







export default MultipleImagesHandler;