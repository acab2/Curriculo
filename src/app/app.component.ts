import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Augusto César Aragão de Bulhões';
  dateOfBirth = '05/02/1990';
  gender = 'Masculino';
  civilStatus = 'Solteiro';
  
  adress = 'Rua Sessenta e Nove';
  number = 26;
  city = 'Paulista';
  neighborhood = 'Maranguape I';
  postalCode = '53441-280';
  fone = '(81) 979152069';
  email = 'acab2@cin.ufpe.br';
  driversLicense = 'Classes A e B';
  profile = ['Trabalho em equipe', 'Ótimas noções em OO e lógica de programação'];
  academicFormation = '2014.2 - Cursando - Universidade Federal de Pernambuco - Ciência da Computação';
  
  title = 'hello world';
  courses = 
[
	{
		"Curso": "Programação em C/C++",
		"Instituicao": "Universidade Federal de Pernambuco",
		"Local": "Recife",
		"CargaHoraria": "75h"
	},
	{
		"Curso": "Programação em Java",
		"Instituicao": "Universidade Federal de Pernambuco",
		"Local": "Recife",
		"CargaHoraria": "120h"
	},
	{
		"Curso": "JavaScript(D3)",
		"Instituicao": "Universidade Federal de Pernambuco",
		"Local": "Recife",
		"CargaHoraria": "75h"
	},
	{
		"Curso": "Haskell",
		"Instituicao": "Universidade Federal de Pernambuco",
		"Local": "Recife",
		"CargaHoraria": "75h"
	},
	{
		"Curso": "Swift(IOS)",
		"Instituicao": "Universidade Federal de Pernambuco",
		"Local": "Recife",
		"CargaHoraria": "75h"
	},
	{
		"Curso": "HTML",
		"Instituicao": "Internet",
		"Local": "Home office",
		"CargaHoraria": "Indeterminado"
	},
	{
		"Curso": "CSS",
		"Instituicao": "Internet",
		"Local": "Home office",
		"CargaHoraria": "Indeterminado"
	},
	{
		"Curso": "Banco de dados (Oracle)",
		"Instituicao": "Universidade Federal de Pernambuco",
		"Local": "Recife",
		"CargaHoraria": "75h"
	},
	{
		"Curso": "Banco de dados (MySql)",
		"Instituicao": "Faculdade Joaquim Nabuco",
		"Local": "Paulista",
		"CargaHoraria": "60h"
	},
	{
		"Curso": "Introdução a Inteligência Artificial",
		"Instituicao": "Universidade Federal de Pernambuco",
		"Local": "Recife",
		"CargaHoraria": "75h"
	},
	{
		"Curso": "Introdução a Redes Neurais",
		"Instituicao": "Universidade Federal de Pernambuco",
		"Local": "Recife",
		"CargaHoraria": "75h"
	},
	{
		"Curso": "Visualização de Dados",
		"Instituicao": "Universidade Federal de Pernambuco",
		"Local": "Recife",
		"CargaHoraria": "75h"
	},
	{
		"Curso": "Análise de requisitos",
		"Instituicao": "Universidade Federal de Pernambuco",
		"Local": "Recife",
		"CargaHoraria": "75h"
	},
	{
		"Curso": "Inglês",
		"Instituicao": "SENAC",
		"Local": "Recife",
		"CargaHoraria": "360h"
	}
];
  course = "";
  institution = "";
  institutionPlace = "";
  workload = "";
  
  add(){						//this.course
	  this.courses.push({"Curso": this.course, "Instituicao": this.institution, "Local": this.institutionPlace, "CargaHoraria": this.workload});
  }
  
  openModal(){
	  console.log("Modal Here!");
  }
}

