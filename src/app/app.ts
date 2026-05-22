import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./nav-bar/nav-bar";
import { StatusCard } from "./status-card/status-card";
import { SearchBar } from "./search-bar/search-bar";
import { ExpenseRow } from "./expense-row/expense-row";
import { StatusOverview } from "./status-overview/status-overview";
import { ExpenseList } from "./expense-list/expense-list";
import { ExpenseForm } from "./expense-form/expense-form";

@Component({
  selector: 'app-root',
  imports: [NavBar, StatusCard, SearchBar, ExpenseRow, StatusOverview, ExpenseList, ExpenseForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ExpenceTracker');
}
