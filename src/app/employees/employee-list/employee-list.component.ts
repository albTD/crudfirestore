import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  list:Employee[];
  arr:any;
  constructor(public service:EmployeeService,public firestore:AngularFirestore,private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...(item.payload.doc.data() as {})
        } as Employee;
      
          
      //  this.arr=item.payload.doc.data();
      //  this.arr.push(item.payload.doc.id)
      //  console.log(this.arr);

      })
    });
  }

  onEdit(emp:Employee){
this.service.formData=Object.assign({},emp);
  }

  onDelete(id:string){
    if(confirm("are you sure to delete this record?")){
this.firestore.doc('employees/'+id).delete();
this.toastr.warning('Deleted successfully','registration');
    }
  }
}
