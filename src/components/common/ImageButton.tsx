import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'

export default function ImageButton(props: any){
    const styles = StyleSheet.create({
        view: {
          position: 'absolute',
          backgroundColor: props.color,
          borderRadius: 4
        },
        image: {
            opacity:0.4,
        },
        touchable: {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: props.image
        },
        text: {
          color: '#FBF8F4',
          fontSize: 18,
          textAlign: 'center'
        }
      })
    return (
      <TouchableOpacity style={styles.touchable}>
        <View style={styles.view}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
        <Image
          source={props.image}
          style={styles.image} />
      </TouchableOpacity>
    );
}

