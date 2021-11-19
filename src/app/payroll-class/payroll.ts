export class Payroll {
    constructor(public pay_id: string, public month: string, public debit_amount: number, public gross_pay: number, public net_pay: number, public deduction: number, public staff_paid: number, public payroll_status : string) { }
}
