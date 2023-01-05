import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-animated-element',
  template: `
    <div [style.transform]="'scale(' + scale + ')'">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./animated-element.component.css']
})
export class AnimatedElementComponent {
  @Input() scale?: number;
  
  constructor() {
    this.scale = 1;  // Set the default value for the scale property
   
  }
  
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // Calculate the scale based on the scroll position
    this.scale = this.calculateScale(event.target.scrollTop);
  }

  calculateScale(scrollTop: number): number {
    // Return the calculated scale based on the scroll position
    return 1 + scrollTop / 1000;
  }
}
