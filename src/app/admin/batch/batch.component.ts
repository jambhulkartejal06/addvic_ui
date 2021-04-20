import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BatchPojo } from 'src/app/Model/batchPojo';
import { BatchService } from 'src/app/Services/batch.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
  batchObj = new BatchPojo();
  public batchForm: NgForm;
 

  constructor(private batchService: BatchService,private toastr: ToastrService) {}

  ngOnInit(): void {}
  addBatch(batchForm:NgForm) {
    // this.toastr.success('Data Submitted Successfully !!!!!', 'Toastr fun!', {
    //   timeOut: 200000
    // });
    console.log("=====>",batchForm.value);
    if(batchForm.valid){
      this.batchObj.batch=this.batchObj.batch;
    }
    this.batchService.addBatchesName(this.batchObj).subscribe(res => {
      
      console.log('response======>', res);
    });
    this.toastr.success('Data Submitted Successfully !!!!!', 'Toastr fun!', {
        timeOut: 200000
      });
    batchForm.reset();
  }
}

