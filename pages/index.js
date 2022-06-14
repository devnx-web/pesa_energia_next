import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/header.js"
import Banner from "./home/banner.js"
import Conheca from './home/conheca'
import Quemsomos from './home/quemsomos.js'

export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Conheca/>
      <Quemsomos/>
    </div>
  )
}
