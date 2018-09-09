import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: 'event.component.html',
  styleUrls: ['./app.component.css']
})
export class EventComponent {
  public s1:string = "";
  public s2:string = "";
  public s3:number = 0;

  public students:any[] = [
      
    {sname:"Scott", course:"Angular", age:24},
    {sname:"Smith", course:"JS", age:23},
    {sname:"Sandy", course:"HTML", age:26},
    {sname:"Sonu", course:"CSS", age:25},
  ];
  public fn_addStudent(){
      var obj:any = {};
      obj.sname = this.s1;
      obj.course = this.s2;
      obj.age = this.s3;
      this.students.push(obj);
  }
  public fn_removeStudent(i:number){
      this.students.splice(i, 1);
  }
}