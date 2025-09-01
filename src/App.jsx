import { useState } from 'react'
import './App.css'
import Carmy from './assets/notebook-xuxa.jpg'
import Cjoa from './assets/computador.barbie.png'
import Curs from './assets/ben 10.webp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Cjoa} alt="" className="img-card" />
              <h2 className="titulo-card">Computador da Barbie</h2>
              <p className="desc">SSD de 256 GB,1 nucleo,Retina 2.5K</p>
              <p className="preco">R$ 899,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (80)</div>
              <div className="off">- 15%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Carmy} alt="" className="img-card" />
              <h2 className="titulo-card">Computador da xuxa</h2>
              <p className="desc">SSD de 256 GB, 1 nucleo,Retina 2.5K</p>
              <p className="preco">R$ 900,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (99)</div>
              <div className="off">- 20%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Curs} alt="" className="img-card" />
              <h2 className="titulo-card">Computador do Ben 10</h2>
              <p className="desc">SSD de 256 GB, 1 nucleo, Retina 1.5K</p>
              <p className="preco">R$ 850,90</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (302)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

        </section>
        <section className="destaque"></section>
        <footer></footer>
      </main>
    </>
  )
}

export default App
