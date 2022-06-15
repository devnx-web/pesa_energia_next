import Header from "../components/header.js"
import Banner from "./home/banner.js"
import Conheca from './home/conheca'
import Quemsomos from './home/quemsomos.js'
import Vantagens from './home/vantagens.js'
import Frase from './home/frase.js'
import Produtos from './home/produtos.js'
import Diferenciais from "./home/diferenciais.js"
import Contador from './home/contador.js'

export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Conheca/>
      <Quemsomos/>
      <Vantagens/>
      <Frase/>
      <Produtos/>
      <Diferenciais/>
      <Contador/>
    </div>
  )
}
