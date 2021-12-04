import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";

const routes:Routes = [
    {path:'auth/login',component:AuthComponent},
    {path:'',redirectTo:'auth/login',pathMatch:'full'}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AuthRouting{
    
}