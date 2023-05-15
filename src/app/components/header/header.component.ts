import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  persona:persona = new persona("","","","");
  isLogged=false;

  constructor(public personaService:PersonaService, private router:Router,private tokenService:TokenService){}

  ngOnInit(): void{
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged=true;
    }else{
      this,this.isLogged=false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data=>{
      this.persona=data})
  }
}
