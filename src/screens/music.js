// Play Music / Sound in React Native App for Android and iOS
// https://aboutreact.com/react-native-play-music-sound/

// import React in our code
import React,{ Component } from 'react';
import { useState, useEffect, useContext } from 'react';

//import React, {useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

// import Sound Component
import Sound from 'react-native-sound';
import {EventRegister} from 'react-native-event-listeners';
import * as Animatable from 'react-native-animatable';

const App = () => {
  let sound1, sound2, sound3, sound4, sound5, sound6;
  const [hmode, setHmode] = useState(false);
    const [offset, setOffset] = useState({});

  useEffect(() => {
    Sound.setCategory('Playback', true); // true = mixWithOthers
    return () => {
      if (sound1) sound1.release();
      if (sound2) sound2.release();
      if (sound3) sound3.release();
      if (sound4) sound4.release();
      if (sound5) sound5.release();
      if (sound6) sound6.release();
    };
  }, []);

  //List of the dummy sound track
  const audioList = [
    {
      title: 'Play mp3 sound from Local',
      isRequire: true,
      url: require('./resources/TemesgenGebregziabherKebad.mp3'),
    },
    {
      title: 'Play mp3 sound from remote URL',
      url:
        'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
    },
    {
      title: 'Play aac sound from Local',
      isRequire: true,
      url: require('./resources/TemesgenGebregziabherKebad.mp3'),
    },
    {
      title: 'Play aac sound from remote URL',
      url:
        'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/pew2.aac',
    },
    {
      title: 'Play wav sound from Local',
      isRequire: true,
      url: require('./resources/TemesgenGebregziabherKebad.mp3'),
    },
    {
      title: 'Play wav sound from remote URL',
      url:
        'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav',
    },

    {
      title: 'Play wav sound from Local',
      isRequire: true,
      url: require('./resources/TemesgenGebregziabherKebad.mp3'),
    },
    {
      title: 'Play wav sound from remote URL',
      url:
        'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav',
    },

    {
      title: 'Play wav sound from Local',
      isRequire: true,
      url: require('./resources/TemesgenGebregziabherKebad.mp3'),
    },
    {
      title: 'Play wav sound from remote URL',
      url:
        'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav',
    },
  ];

  const playSound = (item, index) => {
    if (index == 0) {
      //sound2.stop();
      //sound3.stop(() =>{})
      sound1 = new Sound(item.url, (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    } else if (index == 1) {
      sound2 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound2.play(() => {
          sound2.release();
        });
      });
    } else if (index == 2) {
      sound3 = new Sound(item.url, (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound3.play(() => {
          sound3.release();
        });
      });
    } else if (index == 3) {
      sound4 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound4.play(() => {
          sound4.release();
        });
      });
    } else if (index == 4) {
      sound5 = new Sound(item.url, (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound5.play(() => {
          sound5.release();
        });
      });
    } else if (index == 5) {
      sound6 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound6.play(() => {
          sound6.release();
        });
      });
    }
  };

  const stopSound = (_item, index) => {
    if (index == 0 && sound1) {
      sound1.stop(() => {
        console.log('Stop');
      });
    } else if (index == 1 && sound2) {
      sound2.stop(() => {
        console.log('Stop');
      });
    } else if (index == 2 && sound3) {
      sound3.stop(() => {
        console.log('Stop');
      });
    } else if (index == 3 && sound4) {
      sound4.stop(() => {
        console.log('Stop');
      });
    } else if (index == 4 && sound5) {
      sound5.stop(() => {
        console.log('Stop');
      });
    } else if (index == 5 && sound6) {
      sound6.stop(() => {
        console.log('Stop');
      });
    }
  };

  const ItemView = (item, index) => {
    return (
      <View style={styles.feature} key={index}>
        <Text style={styles.textStyle}>{item.title}</Text>
        <TouchableOpacity onPress={() => playSound(item, index)}>
          <Text style={styles.buttonPlay}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => stopSound(item, index)}>
          <Text style={styles.buttonStop}>Stop</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>

        <ScrollView style={{flex: 1}}
            onScroll={(e)=>{
                    //setHmode(!hmode);
                    //alert(alert);
                    //EventRegister.emit("ChangeHeader", hmode);
                    //alert(hmode);
                    var currentOffset = e.nativeEvent.contentOffset.y;
                    var direction = currentOffset > offset ? 'down' : 'up';
                    setOffset(currentOffset);
                    //console.log(currentOffset);
                    //console.log(hmode);
                    if(direction === 'down'){
                        setHmode(true);
                        EventRegister.emit("ChangeHeader", true);
                    } else if(direction === 'up' && currentOffset === 0){
                        setHmode(false);
                        EventRegister.emit("ChangeHeader", false);
                    } else {

                    }
                    }}
        >
            <Text style={styles.titleText}>
              Play Music / Sound in React Native App for Android and iOS
            </Text>
            {audioList.map(ItemView)}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    flex: 1,
    padding: 5,
  },
  buttonPlay: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(00,80,00,1)',
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  buttonStop: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(80,00,00,1)',
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  feature: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 7,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(180,180,180)',
  },
});