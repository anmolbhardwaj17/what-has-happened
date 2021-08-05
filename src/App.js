import React,{useState, useEffect} from 'react'
import "./App.css"
import Section from './components/section'
import Footer from './components/Footer'

function App() {

  const [voyager, setVoyager] = useState(0)
  const [creditCard, setCreditCard] = useState(0)
  const [heartPump, setHeartPump] = useState(0)
  const [tree, setTree] = useState(0)
  const [bitcoin, setBitcoin] = useState(0)
  const [cyberAttacks, setCyberAttacks] = useState(0)
  const [coke, setCoke] = useState(0)
  const [seaLevel, setSeaLevel] = useState(0)
  const [time, setTime] = useState(0)

  useEffect(() => {
    const answer = setInterval(() => {
      setTime(time => time +0.1)
      setVoyager(voyager => voyager + 1.7)
      setCreditCard(creditCard => creditCard + 540)
      setHeartPump(heartPump => heartPump + 6.6)
      setTree(tree => tree + 28)
      setBitcoin(bitcoin => bitcoin + 0.001041)
      setCyberAttacks(cyberAttacks => cyberAttacks + 0.09)
      setCoke(coke => coke + 1045)
      setSeaLevel(seaLevel => seaLevel + 0.01127)
    },100)
    return () => { 
      clearInterval(answer) 
    }
  }, [voyager, creditCard, heartPump, tree, bitcoin, coke, seaLevel, cyberAttacks, time])

  const heartans = ()  =>{
    if(heartPump < 1000){
      return (heartPump.toFixed(2) + " ml")
    } else {
      return ((heartPump/1000).toFixed(2) + " ltr")
    }
  }
  const cokeans =() => {
    if(coke < 10000){
      return (coke + " cans")
    } else {
      return ((coke/10000).toFixed(1) + "K cans")
    }
  }
  const cardans =() => {
    if(creditCard < 10000){
      return (creditCard)
    } else {
      return ((creditCard/10000).toFixed(1) + "K")
    }
  }


  return (
    <div className="main">
    <div className="float">
      <p>Time passed: {time.toFixed(0)} secs</p>
    </div>
      <div className="header">
        <h1>Catch up!</h1>
        <p>Website shows what has happened after you opened it</p>
      </div>
    
      <div>
        <Section heading={"Bitcoin mined"} value={bitcoin.toFixed(4) + " bitcoins"}  img={"/images/bitcoin.png"}/>
        <Section heading={"Voyager 1 distance travelled"} value={voyager.toFixed(2) + " kms"}  img={"/images/voyager.png"}/>
        <Section heading={"Credit card transactions"} value={cardans()}  img={"/images/creditcard.png"}/>
        <Section heading={"Sea level rise"} value={seaLevel.toFixed(2) + " nanometers"}  img={"/images/sealevel.png"}/>
        <Section heading={"Coke cans consumed"} value={cokeans()}  img={"/images/coke.png"}/>
        <Section heading={"Blood pump"} value={heartans()}  img={"/images/heart.png"}/>
        <Section heading={"Trees cut"} value={tree + " trees"}  img={"/images/trees.png"}/>
        <Section heading={"Cyber attacks"} value={cyberAttacks.toFixed(0) + " cyber attacks"} img={"/images/cyber.png"}/>
        <Footer/>

      </div>
    </div>
    
  )
}

export default App;


