import React, { useRef } from "react";
import { Image, StyleSheet, Text, View } from "react-native";



const useTicTacToe = (boxes:  React.MutableRefObject<React.RefObject<Image>[]>) => {
    class Tree {
        right: Tree | null = null;
        left: Tree | null = null
        value: number

        constructor(value: number) {
            this.value = value;
        }
    }

    const root: Tree = new Tree(1);

    const InitializeTree = () => {
        root.left = new Tree(2);
        root.left.left = new Tree(5);
        root.left.left.left = new Tree(3);
        root.left.left.right = new Tree(7);
        root.left.left.right.left = new Tree(4);
        root.left.left.right.left.left = new Tree(5);
        root.left.left.right.left.right = new Tree(6);
        root.left.left.right.right = new Tree(1);
        root.left.left.right.right.left = new Tree(9);
        root.left.left.right.right.right = new Tree(5);
        root.left.right = new Tree(8);
        root.right = new Tree(3);
        root.right.left = new Tree(6);
        root.right.right = new Tree(9);
        root.right.right.left = new Tree(5);
        root.right.right.right = new Tree(7);

        console.log("Tree" ,root);
    }

    const CurrentGame = new Map([
        [1, ''],
        [2, ''],
        [3, ''],
        [4, ''],
        [5, ''],
        [6, ''],
        [7, ''],
        [8, ''],
        [9, ''],
    ])
    
    
    InitializeTree();
    return [CurrentGame];
};



export  { useTicTacToe };