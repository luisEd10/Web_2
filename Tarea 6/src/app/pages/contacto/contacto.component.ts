import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit{
  cargando: boolean = true;

  constructor(){  }

  ngOnInit(): void{
    this.getInfo();
  }

  getInfo(): void {
    setTimeout(() => {
      this.cargando = false;
    }, 1000);
  }
}
