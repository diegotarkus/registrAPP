import { Component, ElementRef, ViewChild } from '@angular/core';
import type { Animation } from '@ionic/angular'
import { AnimationController, IonCard, IonCardContent } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  usuario: string = "";
  contrasena: string = "";
  loading: boolean = true;
  formularioLogin: FormGroup;

  private animation!: Animation;


  constructor(public fb: FormBuilder, private router:Router, private animationCtrl: AnimationController)  {
    this.formularioLogin = this.fb.group({
      'usuario': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
      'contrasena': new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(4)])
    })
  }
  
  login(){
    var u = this.formularioLogin.value; 
    
    var usuario = {
      user: u.usuario,
      pass: u.contrasena
    }

    if (this.usuario == " ") {
      alert("Debe ingresar un nombre de usuario.");
      return;
    }

    if (this.contrasena == " ") {
      alert("Debe ingresar una contraseña.")
      return;
    }

    if (this.formularioLogin.valid) {
      console.log("Login correcto.")
      console.log(usuario.user)
      this.router.navigateByUrl("inicio");
    }else{
      alert("Credenciales no validas.")
      return;
    }
    
    localStorage.setItem("nombreuser", u.usuario);
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll(".cardTwo"))
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }
}
