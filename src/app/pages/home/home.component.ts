import {Component, OnInit} from '@angular/core';
import {dataFake} from "../../data/dataFake";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  mainTitle:string = "";
  mainDescription: string = "";
  mainPhoto:string = "";
  content: ({ description: string; photo: string; id: string; title: string } )[] = [];

  ngOnInit(): void {
    this.mainTitle = dataFake[0].title;
    this.mainDescription = `${dataFake[0].description.substring(0,100)}...`;
    this.mainPhoto = dataFake[0].photo;

    this.content = dataFake.slice(1);
  }
}
