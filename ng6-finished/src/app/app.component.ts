import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  menuCollapsed = false

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    const x = this.store.select('menu').subscribe(
      data => {
        this.menuCollapsed = data.collapse
      }
    )

    firebase.initializeApp({
      apiKey: "AIzaSyBrkKleAX_8jHpPmTchVBmDD7Hkj8TT1VE",
      authDomain: "ng-recipe-book-3adbb.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
