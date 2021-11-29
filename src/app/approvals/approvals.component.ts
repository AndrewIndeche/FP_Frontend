import { Component, OnInit } from '@angular/core';
import { ApproveExpenseService } from '../services/approve-expenses.service';
@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.css']
})
export class ApprovalsComponent implements OnInit {
  expense:any
  expenseA:any
  approveAll:any

  
    constructor( private exp:ApproveExpenseService ){
    }
  
    getStaff() {
      this.exp.getExpense1().subscribe((data: any) => {
        this.expense = data;
        console.log(this.expense);
      });
    }
  
    getStaff2() {
      this.exp.getExpense2().subscribe((data: any) => {
        this.expenseA = data;
        console.log(this.expenseA);
      });
    }
    getApprove() {
      this.exp.getAllApprovals().subscribe((data: any) => {
        this.approveAll= data;
        console.log(this.approveAll);
      });
    }
    
    
  
    ngOnInit(){
     this.getStaff()
     this.getStaff2() 
     this.getApprove()
  
      
    }
  }