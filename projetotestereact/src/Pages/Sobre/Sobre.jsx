import Header from "../../Componentes/Header"
import Footer from "../../Componentes/Footer"
import solardejesus from "../../assets/solardejesus.jpg"


function Sobre (){

    return(

        <div>
          

          <Header/>
  
              
          <img src={solardejesus} alt="" />
          <h1>Aqui é o Sobre</h1>
          <Footer />
          </div>


    )
}


export default Sobre