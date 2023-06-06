import Imagem from './assets/logo-footer-solardejesus.jpg'
import {Props} from './types';
function Titulo ({ casa }: Props){

  

    const soma = 10 + 10;

    const urlimg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"

    return (
      <div>
   
          <h1>Olá ! Eu sou um título {casa}</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolores illo molestiae distinctio saepe provident unde, dignissimos error repellendus facilis ut at deserunt officia nostrum inventore? Fugit eius reiciendis nobis {soma}.</p>
          <img width={100} src={urlimg} alt="" />

          <div>
      <img src={Imagem} alt="Minha Imagem" />
      </div>
      </div>
    )
}

export default Titulo