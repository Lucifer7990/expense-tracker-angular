import { Component } from '@angular/core';
import { StatusCard } from "../status-card/status-card";

@Component({
  selector: 'app-status-overview',
  imports: [StatusCard],
  templateUrl: './status-overview.html',
  styleUrl: './status-overview.css',
})
export class StatusOverview {}
