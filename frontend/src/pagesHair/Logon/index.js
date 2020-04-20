import React from 'react';
import './styles.css';
import logoImg from '../../assets/logooficial.jpg';
import {Link} from 'react-router-dom';  
import {FiArrowLeft} from 'react-icons/fi';

// import TransitionsModal from '../../components/janelamodal';
// import Alertdialog from '../../components/alertdialog';

export default function Logon(){
	return(
  <div className ="logon-container">

  	<section className ="form">
		<img className ="logologin" src={logoImg} alt="Be The Hero"/>
 		<form >
          	<h1>Faça seu Logon</h1>

          	<input 
             placeholder="Digite seu email"
             />
            
             <input 
             type="password"
             placeholder="digite sua senha"
             />
          	<button className="button" type="submit">Entrar</button>
          	<Link className="back-link" to="/">Voltar<FiArrowLeft size={18} className="seta" color="red"/></Link>
		
 		</form>

  	</section>

  
  </div>
		
	);
}