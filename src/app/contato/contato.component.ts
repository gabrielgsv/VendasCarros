import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person-models'

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  public form: FormGroup
  public person: Person[] = []

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  ngOnInit() {

  }

  submit() {
    console.log(this.form.controls.value)
  }
}
