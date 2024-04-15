import React from 'react'
import { Introduce,Items,Course,ItemDog,ItemCat,Knowledge } from '../../components'
import { UseSelector, useSelector } from "react-redux";

const Home = () => {
  return (
    <>
    <Introduce/>
    <Items/>
    <ItemDog/>
    <ItemCat/>
    <Course/>
    <Knowledge/>

    </>
  )
}

export default Home
