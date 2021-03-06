import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import {MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,MatInputModule,  MatNativeDateModule,  MatOptionModule,  MatRadioModule,  MatSelect,  MatSelectModule } from '@angular/material';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeService } from './shared/employee.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,BrowserAnimationsModule,
    ToastrModule.forRoot()
    ,MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,MatInputModule,  MatNativeDateModule,  MatOptionModule,  MatRadioModule,  MatSelect,  MatSelectModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
