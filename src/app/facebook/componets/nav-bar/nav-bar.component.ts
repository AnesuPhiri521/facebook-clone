import { Component } from '@angular/core';
import {faHome,faVideo} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
	faHome=faHome
	faVideo=faVideo
}
