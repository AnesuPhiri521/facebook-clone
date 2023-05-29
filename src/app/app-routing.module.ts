import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./facebook/pages/home/home.component";
import {StoriesReelsComponent} from "./facebook/componets/stories-reels/stories-reels.component";

const routes: Routes = [
	{path:'', component:HomeComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
