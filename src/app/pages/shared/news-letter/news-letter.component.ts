import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss']
})
export class NewsLetterComponent implements OnInit {

  
  @Output()
  submitNewsLetter = new EventEmitter<any>();

  form: FormGroup = new FormGroup({ 
    fullName: new FormControl('',  [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])
    
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitNewsLetter.emit(this.form);
  }

}
