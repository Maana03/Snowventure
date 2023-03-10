import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Skiing', cols: 1, rows: 1 },
          { title: 'Snowboarding', cols: 1, rows: 2 },
          { title: 'Snowmobiling', cols: 2, rows: 1 },
          { title: 'Ice-Fishing', cols: 2, rows: 2 }
        ];
      }

      return [
          { title: 'Skiing', cols: 1, rows: 1 },
          { title: 'Snowboarding', cols: 2, rows: 1 },
          { title: 'Snowmobiling', cols: 1, rows: 2 },
          { title: 'Ice-Fishing', cols: 2, rows: 2 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
