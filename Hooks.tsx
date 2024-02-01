import React, { useRef } from "react";
import { Image, StyleSheet } from "react-native";

const useTicTacToe = () => {
    const boxes = useRef<Array<Image>>(new Array(9));

    
    const BuildPlayArea = (): React.ReactNode => {
        return(
            <div>
            {
                [...Array(9)].map((_, index) => (
                    <div key={index}>
                        {index + 1}
                    </div>
                ))
            }
            </div>
        );
    }

    return [BuildPlayArea];
}

const styles = StyleSheet.create({
    
});

export  { useTicTacToe };