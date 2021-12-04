import { Input, NgModule } from "@angular/core";
import { AuthComponent } from './auth.component';
import { AuthRouting } from './auth.routing';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from './../../utils/utils.module';

@NgModule({
    declarations:[
        AuthComponent,
    ],
    imports: [
        AuthRouting,
        CardModule,
        InputTextModule,
        PasswordModule,
        ButtonModule,
        ReactiveFormsModule,
        UtilsModule
    ]
})

export class AuthModule{ 

}