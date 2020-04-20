import React from 'react';
import logoImg from '../../assets/logooficial.jpg';
import {Link} from 'react-router-dom';
import {FiPower} from 'react-icons/fi';
import Button from '../../components/Button';
// import api from '../../services/api';
import './styles.css';
import Select from '../../components/Select';
import TransitionsModal from '../../components/SimpleModalWindow';
import Seach from '../../components/seach';

export default function SelectRegister(){

	return (


<div className="profile-container">

<header>
	<img src={logoImg} alt="Be the Hero" />
	<span>Bem vinda, Pamela Cabelereira</span> 
    <Select/>
	<Link className="button" to="/selectservice">Ver listagem de Serviços</Link>
 	<button  type="button">
<FiPower size={18} color="#E02041"/>
 	</button>
</header>
<Seach/>
<h1> 7 Atendimentos Marcados</h1>
	<ul>
	
		
        <li ><strong>Cliente</strong>
		<p>Nathália Mariane</p>

		<strong>Serviço :</strong>
		<p>Fazer unhas</p>

		<strong>horário:</strong>
		<p> 12/10/2020</p>
		<TransitionsModal/>
		</li>
	</ul>
    <ul>
		
        <li ><strong>Cliente</strong>
		<p>Nathália Mariane</p>

		<strong>Serviço :</strong>
		<p>Fazer unhas</p>

		<strong>horário:</strong>
		<p> 12/10/2020</p>
		<TransitionsModal/>
		</li>
	</ul>
    <ul>
		
        <li ><strong>Cliente</strong>
		<p>Nathália Mariane</p>

		<strong>Serviço :</strong>
		<p>Fazer unhas</p>

		<strong>horário:</strong>
		<p> 12/10/2020</p>
		<TransitionsModal/>
		</li>
	</ul>
	<ul>
		
        <li ><strong>Cliente</strong>
		<p>Nathália Mariane</p>

		<strong>Serviço :</strong>
		<p>Fazer unhas</p>

		<strong>horário:</strong>
		<p> 12/10/2020</p>
		<TransitionsModal/>
		</li>
	</ul>
	<Button  />
</div>

		);
}