import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
//objeto que observara cada cambio para llevarlo a la base de datos.
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

user:  FirebaseListObservable<any>;

constructor(public navCtrl: NavController,
        public alertController: AlertController,
        public database: AngularFireDatabase) {

 this.user = this.database.list('/agenda');

}


createUser(){
 let newUserModal = this.alertController.create({
   title: "Nuevo Contácto",
   message: "Agrega un nuevo contácto",
   inputs: [
     {
       name: "nombre",
       placeholder: "Nombre"
     },
     {
       name:"telefono",
       placeholder: "Teléfono"
     }
   ],
   buttons:[
     {
       text: "Cancelar",
       handler: data => {
         console.log('Cancel Clic');
       }
     },
     {
       text: "Guardar",
       handler: data => {
         this.user.push({
           name: data.nombre,
           phone: data.telefono
         });
       }
     }
   ]
 });
 newUserModal.present(newUserModal);
}

updateUser(u){
 let updateUserModal = this.alertController.create({
   title: "Actualizar Contácto",
   message: "Edita la información de " + u.name,
   inputs: [
     {
       name: "nombre",
       placeholder: "Nombre",
       value: u.name
     },
     {
       name:"telefono",
       placeholder: "Teléfono",
       value: u.phone
     }
   ],
   buttons:[
     {
       text: "Cancelar",
       handler: data => {
         console.log('Cancel Clic');
       }
     },
     {
       text: "Guardar",
       handler: data => {
         this.user.update( u.$key, {//es el key de la base de datos (numeros random arriba en firebase.)
           name: data.nombre,
           phone: data.telefono
         });
       }
     }
   ]
 });
 updateUserModal.present(updateUserModal);
}

removeUser(user){//para eliminar el usuario que se le pasa
  this.user.remove(user);
}

}
