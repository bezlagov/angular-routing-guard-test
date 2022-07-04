import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
  export class FilterService{
    isPremium: boolean = false;
    deviceColor: string = "";
  }
