import { Component } from '@angular/core';
import { ResponseCalculator,LastOperations } from './models/calculate.model';
import { WebServiceService } from 'src/web-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Calculator';
  fieldA: string = '';
  fieldB: string = '';
  operation: string = '';
  result: string = '';

  operations: string[] = [];
  response: ResponseCalculator |undefined;

  constructor(private calculatorService: WebServiceService) {} 

  ngOnInit(): void {
    this.calculatorService.getListOperations().subscribe({next:(next)=>{this.operations=next},error:(error)=>{console.log(error)}})
  }

  executeOperation(): void {

    this.calculatorService.executeOperation(this.fieldA,this.fieldB,this.operation).subscribe
    ({next: (nextResponse: ResponseCalculator) => {
    this.response = nextResponse;
    console.log('Response:', this.response);
    this.result = this.response.result
  },
  error: (error) => {
    console.log('Error:', error);
  }
});

}
}
