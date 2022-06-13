import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserContact } from 'src/app/core/model/UserContact';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  form: FormGroup = new FormGroup({ 
    fullName: new FormControl('',  [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    contactNo: new FormControl('', [Validators.required, Validators.minLength(1)]),
    bookAMeeting: new FormControl('', [Validators.required, Validators.minLength(1)]),
    preferredDay: new FormControl('', [Validators.required, Validators.minLength(1)]),
    preferredTime: new FormControl('', [Validators.required, Validators.minLength(1)]),
    message: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });

  @Input()
  contactUsList: any; 

  @Output()
  onContactSubmit = new EventEmitter<UserContact>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.form.invalid) {
        alert('Please input all required fields');
        this.form.markAsDirty();
    } else {
      let userContact: UserContact = JSON.parse(JSON.stringify(this.form.value));
      this.onContactSubmit.emit(userContact);
    }
  }
}
