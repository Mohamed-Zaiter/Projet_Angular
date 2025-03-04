import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Residence } from 'src/app/core/Models/residence';
@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
addForm=new FormGroup({
  name:new FormControl('',Validators.required),
  address:new FormControl('',[Validators.required, Validators.minLength(5)]),
  image:new FormControl('')
})
onSubmit() {
  if (this.addForm.valid) {
    console.log('Form Submitted', this.addForm.value);
    // Traiter la soumission du formulaire ici (par exemple, envoyer les données à un serveur)
  } else {
    console.log('Form is invalid');
  }


}
}
