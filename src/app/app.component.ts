import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>{{ title }}</h1>

      <textarea placeholder="Enter number(s) - separated by: ; , | space or new line or literally \n" #numbers></textarea>

      <button type="button" (click)="add(numbers.value)">Get Sum</button>

      <div *ngIf="!error" class="sum">
        Sum: {{ sum }}
      </div>

      <div *ngIf="error" class="error">
        {{ error }}
      </div>

    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'String Calculator';
  error;
  value;
  sum = 0;

  /**
   * Calculate sum of string
   * @param event
   */
  add(event: string) {

    this.error = '';

    let nums: any[] = [];
    let errors: any[] = [];

    // display 0 for empty stirng
    if (event.length === 0) {

      this.sum = 0;

    } else {

      // put string into array
      nums = event.split(/[\\n,;\s|]+/);

      // trim each number in array
      nums = nums.map(num => num.trim());

      // remove empty string elements from array
      nums = nums.filter(num => num !== '');

      // filter out numbers containing negative and put them in own array
      errors = nums.filter(num => num < 0);

      // check for negative numbers, if so, throw error
      if (errors.length) {

        // list each negative if multiple
        if (errors.length > 1) {
          this.error = 'negatives not allowed : ' + errors.toString();
        } else {
          this.error = 'negatives not allowed';
        }

      }

      // if no errors, calculate sum
      const result = nums.map(num => parseInt(num, 10))
      .reduce((a, b) => a + b, 0);

      // display sum
      this.sum = result;

    }

  }

}
