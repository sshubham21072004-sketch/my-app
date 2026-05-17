import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedcolor=signal('#3498db')

  oncolorchange(newColor:string){
    this.selectedcolor.set(newColor)
  }
   copycolor(){
    navigator.clipboard.writeText(this.selectedcolor())
    alert('color code copied to clipboard'+this.selectedcolor())

   }
}
