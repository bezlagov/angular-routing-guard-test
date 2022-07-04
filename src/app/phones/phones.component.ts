import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from './dataDb';
import { Items } from './Items';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  deviceColor: string = "";
  isPremium: boolean = false
  itemData: Items[] = [];
  ;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itemData = data;
    this.activatedRoute.queryParams.subscribe(res => {
      this.deviceColor = res['deviceColor'];
      this.updateItems();
    })
    this.activatedRoute.fragment.subscribe(res => {
      if (res)
        this.isPremium = true;
      else
        this.isPremium = false;

      this.updateItems();
    })
  }

  updateItems() {
    if (this.deviceColor == ""||this.deviceColor == undefined) {
      this.itemData = data.filter(x => x.isPremium == this.isPremium);
      return;
    }
    this.itemData = data.filter(x => x.color == this.deviceColor && x.isPremium == this.isPremium);
  }
}
