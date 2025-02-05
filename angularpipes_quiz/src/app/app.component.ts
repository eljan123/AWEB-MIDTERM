import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of, delay } from 'rxjs';
import { map } from 'rxjs/operators'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularpipes_quiz';

  currentDate =  new Date('2024-01-26T15:30:45');
  price = 42.42424242;

  //Async Properties
  arrayStream$ = of([1,2,3,4,5]).pipe(delay(1000));
  transformedData$ = of ({ key: 'value', num: 42 }).pipe(
    delay(1500), 
    map(data => `Processed ${data.key}-${data.num}`)) 
  combinedAsync$ = of ({ status: 'Active' }).pipe(
    delay(2000),
    map(data => `Status: ${data.status}`)
  );

  //JSON Properties
  nestedArrays = {
    data: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    metadata: { type: 'matrix' } 
  };

  complexData = {
    id: 1,
    details: {
      name: 'Complex Object',
      properties: {
        color: 'blue',
        size: 'large',
        features: ['a', 'b', 'c']
      }
    }
  };

  mixedTypes = {
    string: 'Text',
    number: 42,
    boolean: true,
    array: [1, 'two', false],
    nested: { key: 'value' }
  };

  //Slice Properties  
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  longString = 'Hello World!';
  objectArray = [
    { id: 1, name: 'First' },
    { id: 2, name: 'Second' },
    { id: 3, name: 'Third' },
    { id: 4, name: 'Fourth' }
  ]
}
