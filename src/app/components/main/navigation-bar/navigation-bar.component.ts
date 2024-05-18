import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(){
    this.items = [
      { label: 'Home', icon: 'pi pi-home'},
      { label: 'Configure', icon: 'pi pi-cog'}
    ]
  }
}
