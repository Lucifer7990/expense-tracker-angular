import { Component } from '@angular/core';
import { ExpenseRow } from "../expense-row/expense-row";

@Component({
  selector: 'app-expense-list',
  imports: [ExpenseRow],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {}
