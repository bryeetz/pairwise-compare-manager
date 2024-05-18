import { Component } from '@angular/core';

@Component({
  selector: 'app-static-text',
  templateUrl: './static-text.component.html',
  styleUrl: './static-text.component.css'
})
export class StaticTextComponent {
  content: string | undefined;

  ngOnInit(){
    this.content = `The verdant meadow stretched endlessly 
                    under the azure sky, a tranquil scene 
                    untouched by time. Birds chirped melodies, 
                    weaving through the gentle breeze that 
                    carried the scent of wildflowers.`
    }
  }