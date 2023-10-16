import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    myDate = new Date(1961, 3, 12);
    welcome: string = 'Hello World!';
    persentage: number = 0.14;
    myNewDate = Date.now();
    pi: number = 3.1415;
    money: number = 125.4;
    message: string = 'Hello World!';
    x: number = 15.45;
    users = ['Tom', 'Alice', 'Sam', 'Kate', 'Bob'];
    num: number = 225;
}
