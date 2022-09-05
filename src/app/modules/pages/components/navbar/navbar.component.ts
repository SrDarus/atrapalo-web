import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuList: Menu[] = [
    {
      Id: 1,
      titulo: 'Reportar Vehículo',
      url: 'reportar/vehiculo'
    },
    {
      Id: 2,
      titulo: 'Reportar Persona',
      url: 'reportar/persona'
    },
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  select(url: string) {
    console.log("url", url)
    this.router.navigate([url])
  }

}
