import { Component, OnInit } from '@angular/core';
import { homeItems, homeBrands } from '../../models/homeItem-models'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homeItems = homeItems
  public homeBrands = homeBrands

  constructor() { }

  ngOnInit() {
  }

}