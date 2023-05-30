import { Component } from '@angular/core';
import {faUsers,faClockRotateLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home-left',
  templateUrl: './home-left.component.html',
  styleUrls: ['./home-left.component.css']
})
export class HomeLeftComponent {
	faUsers=faUsers;
	faClockRotateLeft=faClockRotateLeft;
}
