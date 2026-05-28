import { Component } from '@angular/core';

@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [],
  templateUrl: './dasboard.html',
  styleUrl: './dasboard.css',
})
export class Dasboard {
  toggleTheme() {
    document.body.classList.toggle('dark');
  }
}
