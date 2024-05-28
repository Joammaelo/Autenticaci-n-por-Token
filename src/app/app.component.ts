import { Component, OnInit, effect, signal, Injector, untracked, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'autho';
  /*
  //Esto
  public actividad = signal(true);
  private time:any;

  @HostListener('mousemove', ['$event'])
  public enviarmouse(btn:any){
    this.actividad.set(true);
  }

  constructor(private injector: Injector) { }

  ngOnInit(): void {
    this.metodoInactividad();
  }

  private metodoInactividad(){
    effect(() => {
      if(this.actividad()){
        if(this.time){
          clearTimeout(this.time);
        }
        this.time = setTimeout(() => {
          alert("Se va a cerrar la ventana por inactividad");
          window.close();
        }, 10000);

        untracked(() => {
          this.actividad.set(false);
        });
      }
    }, {injector:this.injector});
  }
*/
  //Hasta aqui
  
}
