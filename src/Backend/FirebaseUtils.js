import { collection, getDocs, getFirestore, query, QuerySnapshot, doc, getDoc, onSnapshot, addDoc, setDoc, Timestamp, serverTimestamp, deleteDoc, where, updateDoc } from "firebase/firestore";

import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { dataBase, storage } from './firebase_config'
import {useState, useEffect } from "react"

//Check ref
export const recipeRef = collection(dataBase, 'recipes')
export const ingredientsRef = collection(dataBase, 'ingredients')
console.log(recipeRef)
console.log(ingredientsRef)

//Get query snapshot
export const recipeQuerySnapShot = () =>{
    getDocs(recipeRef).then((QuerySnapshot) =>{
        QuerySnapshot.docs.forEach((doc) => console.log(doc.data()))
    })
}

export const dataBaseService = {
    add: async (newRecipe) =>{
        const {userId,id, image, imageType, title} = newRecipe;
        const res = await addDoc(recipeRef, newRecipe);
        console.log(res)
        return res
    },
    get: async (userId) =>{
        console.log('userId', userId);
        const res = await getDocs(recipeRef);
        console.log('getting',res);
        if(!userId){
            return res;
        };
        const recipesFilteredByUserId = query(recipeRef, where('userId', '==', userId));
        return await getDocs(recipesFilteredByUserId);
    },
    delete: async (name) =>{
        console.log(name)
        const docRef = collection(dataBase, 'recipes');
        const deleteQuery = query(docRef, where('title', '==', name));
        console.log(deleteQuery);
        const querySnapshot = await getDocs(deleteQuery);
        console.log(querySnapshot);
        querySnapshot.forEach(async(document) =>{
            const deleteTarget = doc(dataBase, 'recipes', document.id);
            console.log('Target', document)
            await deleteDoc(deleteTarget)
        })
    }
}