import React from 'react';
import logoImg from '../../assets/logooficial.jpg';
import {Link} from 'react-router-dom';
import {FiPower} from 'react-icons/fi';
import Button from '../../components/Button';
import AlertDialog from '../../components/alertdialog';
import {FiArrowLeft} from 'react-icons/fi';
// import api from '../../services/api';
import './styles.css';

export default function SelectRegister(){

	return (


<div className="profile-container">
<header>
	<img src={logoImg} alt="Be the Hero" />
	<span>Bem vinda, Pamela Cabelereira</span> 

	<Link className="button" to="/registerservice">Cadastrar novo serviço</Link>
 	<button  type="button">
<FiPower size={18} color="#E02041"/>
 	</button>
</header>
<Link className="back-link" to="/markedcare">Voltar<FiArrowLeft size={18} className="seta" color="red"/></Link>
<h1>Serviços Cadastrados</h1>
	<ul>
		
        <li ><strong>Caso 1:</strong>
		<p>titulo do incidente</p>

		<strong>DESCRIÇÃO :</strong>
		<p>descricao</p>

		<strong>VALOR:</strong>
		<p> R$ 50,00</p>
		<button type="button">
		<AlertDialog/>
		</button>
		</li>
	</ul>
    <ul>
		
        <li ><strong>Caso 1:</strong>
		<p>titulo do incidente</p>

		<strong>DESCRIÇÃO :</strong>
		<p>descricao</p>

		<strong>VALOR:</strong>
		<p> R$ 50,00</p>
		<button type="button">
           	<AlertDialog/>
		</button>
		</li>
	</ul>
    <ul>
		
        <li ><strong>Caso 1:</strong>
		<p>titulo do incidente</p>

		<strong>DESCRIÇÃO :</strong>
		<p>descricao</p>

		<strong>VALOR:</strong>
		<p> R$ 50,00</p>
		<button type="button">
		<AlertDialog/>
		</button>
		</li>
	</ul>
	<ul>
		
        <li ><strong>Caso 1:</strong>
		<p>titulo do incidente</p>

		<strong>DESCRIÇÃO :</strong>
		<p>descricao</p>

		<strong>VALOR:</strong>
		<p> R$ 50,00</p>
		<button type="button">
		<AlertDialog/>
		</button>
		</li>
	</ul>
	<Button  />
</div>

		);
}