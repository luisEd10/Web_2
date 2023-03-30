import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{
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
