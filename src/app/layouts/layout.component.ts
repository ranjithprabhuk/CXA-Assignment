import { Component, OnInit } from '@angular/core';
import { navigationSettings } from './navigation.settings';

@Component({
  selector: 'app-dashboard',
  templateUrl: './layout.component.html',
  styleUrls : ['./layout.component.css']
})
export class LayoutComponent {

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};
  public navigationContent: any[] = navigationSettings;

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
}
