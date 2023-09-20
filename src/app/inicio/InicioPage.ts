import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nombreuser = localStorage.getItem("nombreuser");
  htmlNombre = this.nombreuser;
  isModalOpen = false;
  qrCodeString = "Asistencia registrada satisfactoriamente";


  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.nombreuser);
  }



  public alertaBotones = [
    {
      text: 'OK',
      role: 'confirm',
    }
  ];

  logOut() {
    this.router.navigateByUrl("home");
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


}
