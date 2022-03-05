import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  registryForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registryForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      userName: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)

    });


  }

}
