import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TechComponent } from './tech/tech.component';
import { VideoComponent } from './video/video.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'tech', component: TechComponent},
    {path: 'video', component: VideoComponent},
    {path: 'single-blog/:blogId', component: SingleBlogComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}