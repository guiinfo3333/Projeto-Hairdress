import React from 'react';
import './styles.css';
import logoImg from '../../assets/logooficial.jpg';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';



export default function Registration(){

return(
  
  <div className="register-container">
    
    <div className="content">
    <section>
    <img src={logoImg} alt="Be the Hero" className="logologin"/>

    
       
    </section>
<form>
<h1>Cadastro de Cliente</h1>
<input 
placeholder="Seu Nome .."
 />

<input
type="Seu Email.."
placeholder="E-mail"
   />
<input  
type="Sua senha"
placeholder="Senha.."
 />
 <input  
 type="Confirme sua senha"
placeholder="Senha.."
 />
 <input  
placeholder="Endereço.."
 />
  <div className="input-group">
    <input placeholder="Cidade"
    />
      <input placeholder="UF"
       style={{width:80}}/>
  </div>

  <button className="button" type="submit">Cadastrar</button>

  <Link className="back-link" to="/logonclient">Tenho cadastro<FiArrowLeft size={18} className="seta" color="red"/></Link>
</form>
      
    </div>
   
  </div>

 

  );

}
