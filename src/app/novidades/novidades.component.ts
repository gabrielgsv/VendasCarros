import { Component, OnInit } from '@angular/core';
import { cars } from '../../models/car-models'

@Component({
  selector: 'app-novidades',
  templateUrl: './novidades.component.html',
  styleUrls: ['./novidades.component.css']
})
export class NovidadesComponent implements OnInit {
  public cars = cars

  ngOnInit() {
  }

}
