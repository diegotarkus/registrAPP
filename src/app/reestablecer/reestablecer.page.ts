import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],
})
export class ReestablecerPage implements OnInit {

  usuario:string='';
  password:string='';

  constructor(private alertController : AlertController, private router:Router) { }

  ngOnInit() {
  }

  changePass = ' ';
  errorPass = ' ';

  public alertaBotones = [
    {
      text: 'OK',
      role: 'confirm',
      handler: () => this.router.navigateByUrl("home")
    }
    
  ]; 


}
