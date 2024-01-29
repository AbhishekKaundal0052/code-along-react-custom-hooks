import React from 'react'
import { useState,useEffect } from 'react'
 
function saveValue(key,value){
    let save =JSON.parse(localStorage.getItem(key)) || JSON.parse(sessionStorage.getItem(key))
    return save?save: value;
}
export default function UseStorage(key, value) {
    const [state, setState] = useState(()=>{
        return saveValue(key, value)});
    useEffect (()=>{
        localStorage.setItem(key, JSON.stringify(state)),
        sessionStorage.setItem(key, JSON.stringify(state))
   
},[key, state]);
  return [state, setState];
}
