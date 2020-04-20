import React from 'react';
import './styles.css';
import logoImg from '../../assets/logooficial.jpg';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

export default function RegisterService(){

return(
  <div className="register-container">
    <div className="content">
    <section>
    <img src={logoImg} alt="Be the Hero" className="logologin"/>

    
       
    </section>
<form>
<h1>Cadastro</h1>
<input 
placeholder="Nome do Serviço.."
 />

<input
placeholder="Valor do serviço.."
   />
 <textarea placeholder="Descreva o seu serviço.."
 />

  <button className="button" type="submit">Cadastrar</button>

  <Link className="back-link" to="/markedcare">Voltar<FiArrowLeft size={18} className="seta" color="red"/></Link>
</form>
      
    </div>
  </div>
 

  );

}
