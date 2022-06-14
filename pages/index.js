import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/header.js"
import Banner from "../pages/home/banner.js"

export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
    </div>
  )
}
