import Header from "../components/header.js"
import Banner from "./home/banner.js"
import Conheca from './home/conheca'
import Quemsomos from './home/quemsomos.js'
import Vantagens from './home/vantagens'

export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Conheca/>
      <Quemsomos/>
      <Vantagens/>
    </div>
  )
}
