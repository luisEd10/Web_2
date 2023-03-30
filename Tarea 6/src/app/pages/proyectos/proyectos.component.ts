import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit{
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
