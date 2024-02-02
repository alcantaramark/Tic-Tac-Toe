import React, { useRef } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const useTicTacToe = () => {
    const boxes = useRef<Array<React.RefObject<Image>>>(new Array(9));

    
    const Play = (): React.ReactNode => {
        return(
            <View style={styles.gridContainer}>
                <View style={styles.gridRow}>
                    <View style={styles.gridItem}>
                        <Image source={require('./assets/logo.png')} style={styles.image} ref={boxes.current[0]} />
                    </View>
                    <View style={styles.gridItem}>
                        <Image source={require('./assets/logo.png')} style={styles.image} ref={boxes.current[1]}/>
                    </View>
                    <View style={styles.gridItem}>
                        <Image source={require('./assets/logo.png')} style={styles.image} ref={boxes.current[2]}/>
                    </View>
                </View>
                <View style={styles.gridRow}>
                    <View style={styles.gridItem}>
                        <Image source={require('./assets/logo.png')} style={styles.image} ref={boxes.current[3]}/>
                    </View>
                    <View style={styles.gridItem}>
                        <Image source={require('./assets/logo.png')} style={styles.image} ref={boxes.current[4]}/>
                    </View>
                    <View style={styles.gridItem}>
                        <Image source={require('./assets/logo.png')} style={styles.image} ref={boxes.current[5]}/>
                    </View>
                </View>
                <View style={styles.gridRow}>
                    <View style={styles.gridItem}>
                        <Image source={require('./assets/logo.png')} style={styles.image} ref={boxes.current[6]}/>
                    </View>
                    <View style={styles.gridItem}>
                        <Image source={require('./assets/logo.png')} style={styles.image} ref={boxes.current[7]}/>
                    </View>
                    <View style={styles.gridItem}>
                        <Image source={require('./assets/logo.png')} style={styles.image} ref={boxes.current[8]}/>
                    </View>
                </View>
            </View>
        );
    }

    return [Play];
}

const styles = StyleSheet.create({
   gridContainer: {
    flexDirection: 'column',
    alignItems: 'center'
   },
   gridRow: {
    flexDirection: 'row'
   },
   gridItem: {
    width: 150,
    height: 150,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
   },
   image: {
    width: 150,
    height: 150
   }
});

export  { useTicTacToe };