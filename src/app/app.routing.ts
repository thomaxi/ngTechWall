import { RouterModule, Routes } from "@angular/router";
import { ColorComponent } from './color/color.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { UpdateCvComponent } from "./cvTech/update-cv/update-cv.component";
import { ErrorComponent } from './error/error.component';
import { LoginGuard } from "./guard/login.guard";
import { LogoutGuard } from "./guard/logout.guard";
import { LoginComponent } from "./login/login.component";


const APP_ROUTING: Routes = [
    /*{path: 'cv', component: CvComponent, children: [*/
    {path: 'cv', children: [
        {path: '', component: CvComponent},
        {path: 'updateCv/:id', component: UpdateCvComponent},
        {path: 'delete/:id', component: DeleteCvComponent, canActivate: [LoginGuard]},
        {path: 'add', component: AddCvComponent, canActivate: [LoginGuard]},
        {path: ':id', component: DetailComponent},
    ]},
/*    {path: 'cv/:id', component: DetailComponent},
    {path: 'cv', redirectTo: '/', pathMatch: 'full'}, 
    {path: '', component: CvComponent},*/
    {path: '', component: CvComponent},
    {path: 'color/:default', component: ColorComponent},
    {path: 'login', component: LoginComponent, canActivate: [LogoutGuard]},
    {path: '**', component: ErrorComponent}

];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
