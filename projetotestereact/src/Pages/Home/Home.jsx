
import Footer from "../../Componentes/Footer"
import Header from "../../Componentes/Header"
import solardejesus from "../../assets/solardejesus.jpg"

// const urlimg = "logo-footer-solardejesus.jpg";

function Home (){

    return(


        <div>

            <Header/>
         
            <img src={solardejesus} alt="" />
            <h1>Aqui é Home</h1>
            <Footer/>
        </div>


    )
}


export default Home