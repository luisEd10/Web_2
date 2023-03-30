import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit{
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
