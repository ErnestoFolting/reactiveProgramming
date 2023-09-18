import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `<p>Ім'я: {{ name }}</p>
    <p>Вік: {{ age }}</p>`,
})
export class AppComponent {
  name = "Tom";
  age = 25;
}
