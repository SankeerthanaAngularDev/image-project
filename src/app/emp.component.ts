import { Component } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: 'emp.component.html',
  styleUrls: ['./app.component.css']
})
export class EmpComponent {
  public emps:any[] = [
      {empno:1236, ename:"Scott", deptno:30},
      {empno:1237, ename:"Smith", deptno:40},
      {empno:1238, ename:"Sandy", deptno:10},
      {empno:1239, ename:"Sam", deptno:20},
      {empno:1240, ename:"Sonu", deptno:50}
  ]
}
