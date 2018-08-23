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
  courses = [];
  course = "";
  
  add(){
	  this.courses.push(this.course);
  }
}
