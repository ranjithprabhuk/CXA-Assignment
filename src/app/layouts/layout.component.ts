import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './layout.component.html',
  styleUrls : ['./layout.component.css']
})
export class LayoutComponent {

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};
  public navigationContent: any[] = [
    {
      title: 'Spotify',
      url: '[/case-assignment/spotify]',
      icon: 'search'
    },
    {
      title: 'Carousel',
      url: '[/case-assignment/carousel]',
      icon: 'image'
    }
  ];

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
}
