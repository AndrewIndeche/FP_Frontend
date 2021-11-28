import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvanceRequestComponent } from './advance-request/advance-request.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { BenefitComponent } from './benefit/benefit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeductionsComponent } from './deductions/deductions.component';
import { ExpenseOverviewComponent } from './expense-overview/expense-overview.component';
import { OverviewComponent } from './overview/overview.component';
import { P9FormsComponent } from './p9-forms/p9-forms.component';
import { PastComponent } from './past/past.component';
import { PaymentsEComponent } from './payments-e/payments-e.component';
import { PaymentsComponent } from './payments/payments.component';
import { PayoverviewComponent } from './payoverview/payoverview.component';
import { PayrollAproveComponent } from './payroll-aprove/payroll-aprove.component';
import { PayrollNewRunComponent } from './payroll-new-run/payroll-new-run.component';
import { PayrollPaymentsComponent } from './payroll-payments/payroll-payments.component';
import { PayrollReviewComponent } from './payroll-review/payroll-review.component';
import { ReportExpensesComponent } from './report-expenses/report-expenses.component';
import { ReportPayrollComponent } from './report-payroll/report-payroll.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { StaffPayslipsComponent } from './staff-payslips/staff-payslips.component';
import { AccSupportComponent  } from './acc-support/acc-support.component';
import { StaffprocessComponent } from './staffprocess/staffprocess.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent },
  { path: 'payroll/run_payroll/new_run', component: PayrollNewRunComponent },
  { path: 'payroll/run_payroll/review', component: PayrollReviewComponent },
  { path: 'payroll/run_payroll/approve_run', component: PayrollAproveComponent },
  { path: 'payroll/run_payroll/payments', component: PayrollPaymentsComponent },
  { path: 'expense-overview', component: ExpenseOverviewComponent },
  { path: 'staff/payslips', component: StaffPayslipsComponent },
  { path: 'reports/expenses', component: ReportExpensesComponent },
  { path: 'reports/payroll', component: ReportPayrollComponent},
  { path: 'approvals', component: ApprovalsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'Expenses/overview', component: ExpenseOverviewComponent },
  { path: 'payments/pay2', component: PaymentsEComponent },
  { path: 'payoverview', component: PayoverviewComponent },
  { path: 'approve', component: AdvanceRequestComponent },
  { path: 'past', component: PastComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'single-user', component: SingleUserComponent },
  { path: 'deductions', component: DeductionsComponent },
  { path: 'benefit', component: BenefitComponent },
  { path: 'p9-forms', component: P9FormsComponent },
  { path: 'acc-support/acc-support.component', component: AccSupportComponent },
  { path: 'staff/processes', component: StaffprocessComponent },
  {path: 'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
