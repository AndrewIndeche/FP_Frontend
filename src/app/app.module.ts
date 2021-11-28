import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayrollReviewComponent } from './payroll-review/payroll-review.component';
import { PayrollPaymentsComponent } from './payroll-payments/payroll-payments.component';
import { PayrollNewRunComponent } from './payroll-new-run/payroll-new-run.component';
import { PayrollAproveComponent } from './payroll-aprove/payroll-aprove.component';
import { StaffComponent } from './staff/staff.component';
import { StaffPayslipsComponent } from './staff-payslips/staff-payslips.component';
import { ReportExpensesComponent } from './report-expenses/report-expenses.component';
import { ReportPayrollComponent } from './report-payroll/report-payroll.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas} from '@fortawesome/free-solid-svg-icons';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccSupportComponent } from './acc-support/acc-support.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { ExpenseOverviewComponent } from './expense-overview/expense-overview.component';
import { PaymentsComponent } from './payments/payments.component';
import { AdvanceRequestComponent } from './advance-request/advance-request.component';
import { PastComponent } from './past/past.component';
import { PaymentsEComponent } from './payments-e/payments-e.component';
import { PayoverviewComponent } from './payoverview/payoverview.component';
import { StaffprocessComponent } from './staffprocess/staffprocess.component';
import { FormsModule } from '@angular/forms';
import { BenefitComponent } from './benefit/benefit.component';
import { DeductionsComponent } from './deductions/deductions.component';
import { OverviewComponent } from './overview/overview.component';
import { P9FormsComponent } from './p9-forms/p9-forms.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { HttpClientModule } from '@angular/common/http';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    PayrollReviewComponent,
    PayrollPaymentsComponent,
    PayrollNewRunComponent,
    PayrollAproveComponent,
    StaffComponent,
    StaffPayslipsComponent,
    ReportExpensesComponent,
    ReportPayrollComponent,
    DashboardComponent,
    NavbarComponent,
    SearchFormComponent,
    SidebarComponent,
    AccSupportComponent,
    ApprovalsComponent,
    ExpenseOverviewComponent,
    PaymentsComponent,
    AdvanceRequestComponent,
    PastComponent,
    PaymentsEComponent,
    PayoverviewComponent,
    StaffprocessComponent,
    BenefitComponent,
    DeductionsComponent,
    OverviewComponent,
    P9FormsComponent,
    SingleUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    FullCalendarModule, // register FullCalendar with you app
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas)
  }
}
