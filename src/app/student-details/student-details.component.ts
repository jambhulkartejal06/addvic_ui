import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../admin/generate-student/view-student/view-student.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  studData:any;
 
  constructor(public dialogRef: MatDialogRef<StudentDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData )  {
    }

  ngOnInit(): void {
    this.studData=this.data;
    console.log("student======>",this.studData);
    
  }

  printPage() {
    window.print();
  }
  @ViewChild('content', {static: false}) content: ElementRef;


//   public downloadPDF() {
//     const doc = new jspdf();
// console.log("doc===>",doc)
//     const specialElementHandlers = {
//       '#editor': function (element,renderer) {
//         return true;
//       }
//     };

//     // const content = this.content.nativeElement;
//     const content=this.studData;
// console.log("content====>",content);
//     doc.fromHTML(content.innerHTML, 15, 15, {
//       width: 200,
//       'elementHandlers': specialElementHandlers
//     });

//     doc.save('test.pdf');
//   }

  close() {
    this.dialogRef.close();
  }

  originalOrder = (studData): number => {
    return 0;
}

}

