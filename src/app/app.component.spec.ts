import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    component.value = '';

  }));

  it('should return 0 for an empty string', async(() => {
    expect(component.sum).toBe(0);
  }));

  it('should return a single number correctly', async(() => {
    component.add('1');
    expect(component.sum).toBe(1);
  }));

  it('should calculate the sum of two numbers separated by a comma correctly', async(() => {
    component.add('1, 2');
    expect(component.sum).toBe(3);
  }));

  it('should calculate the sum of three numbers separated by a comma correctly', async(() => {
    component.add('1, 2, 3');
    expect(component.sum).toBe(6);
  }));

  it('should support various delimeters of: , ; \n space |', async(() => {
    component.add('1\n2;3|4 5');
    expect(component.sum).toBe(15);
  }));

  it('should throw an error for negative numbers', async(() => {
    component.add('1, 2, -7');
    expect(component.error).toBe('negatives not allowed');
  }));

  it('should throw an error for negative numbers and list if multiple negative numbers', async(() => {
    component.add('1, -2, -7, 5');
    expect(component.error).toBe('negatives not allowed : -2,-7');
  }));

});
