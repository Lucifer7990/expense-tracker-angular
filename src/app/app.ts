import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./nav-bar/nav-bar";
import { StatusCard } from "./status-card/status-card";
import { SearchBar } from "./search-bar/search-bar";
import { ExpenseRow } from "./expense-row/expense-row";

@Component({
  selector: 'app-root',
  imports: [NavBar, StatusCard, SearchBar, ExpenseRow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ExpenceTracker');
}
