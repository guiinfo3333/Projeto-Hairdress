import React from 'react';
import './styles.css';
import logoImg from '../../assets/logooficial.jpg';
import {Link} from 'react-router-dom';  
export default function Logon(){
	return(
  <div className ="logon-container">

  	<section className ="form">
		<img src={logoImg} alt="Be The Hero"/>
 		<form >
          	<h1>Faça seu Logon</h1>

          	<input 
             placeholder="Digite seu email"
             value={id}
             onChange={e => setId(e.target.value)}
             />
             <input 
             type="password"
             placeholder="digite sua senha"
             value={id}
             onChange={e => setId(e.target.value)}
             />
          	<button className="button" type="submit">Entrar</button>
          	<Link className="back-link" to="">Não tenho cadastro</Link>
 		</form>

  	</section>

  
  </div>
		
	);
}