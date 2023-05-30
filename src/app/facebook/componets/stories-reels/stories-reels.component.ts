import { Component } from '@angular/core';
import {faBookOpen} from "@fortawesome/free-solid-svg-icons";
import {faVideo} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-stories-reels',
  templateUrl: './stories-reels.component.html',
  styleUrls: ['./stories-reels.component.css']
})
export class StoriesReelsComponent {
	faBook=faBookOpen;
	faReels=faVideo;
}
