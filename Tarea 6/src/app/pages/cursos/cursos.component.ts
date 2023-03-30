import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit{
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
