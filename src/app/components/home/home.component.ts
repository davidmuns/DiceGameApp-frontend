import { JuegoService } from './../../services/juego.service';
import { Router } from '@angular/router';
import { JugadorService } from './../../services/jugador.service';
import { IJugador } from './../../models/ijugador';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { IJuego } from 'src/app/models/ijuego';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jugadores!: IJugador[];
  idJugador!: number;
  jugador!: IJugador;
  juego!: IJuego;
  juegos: IJuego[] = [];


  constructor(private jugadorService: JugadorService, private juegoService: JuegoService, private router: Router) {
    this.juego = {
      idJuego: 0,
      idJugador: 0,
      nombreJugador: '',
      dado1: 0,
      dado2: 0,
      resultado: 0,
      victoria: false
    }
  }

  ngOnInit(): void {
    setTimeout(function () {


      console.log("Hola Mundo");
    }, 2000);
    this.getJugadores();
  }

  public setJugador(jugador: IJugador) {
    this.jugador = jugador;
  }

  public setName(name: string) {
    console.log('name ', name);

  }

  public getJugadores() {
    this.jugadorService.getJugadores().subscribe(
      (response: IJugador[]) => {
        this.jugadores = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  };
  public addJugador(name: string) {
    console.log('nombre:', name);

    const jugador: IJugador = {
      idJugador: 0,
      nombre: name,
      ratio: 0
    }
    let thisResponse!: IJugador;
    this.jugadorService.addJugador(jugador).subscribe(
      (response: IJugador) => {
        thisResponse = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    )

  }
  public eliminarJugador() {
    // if (confirm("You sure?")) {
    this.jugadorService.eliminarJugador(this.jugador.idJugador.toString()).subscribe(
      (response: void) => { },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    // }
  }

  public updateJugador(name: string) {
    this.jugadorService.updateJugador(this.jugador, name).subscribe()
  }

  public addJuego(idJugador: number) {

    this.juegoService.addJuego(idJugador).subscribe(
      (response: IJuego) => {
        this.juego = response;
        this.getJuegos(idJugador);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )

  }

  public eliminarJugadas() {
    this.juegoService.eliminarJugadas(this.jugador.idJugador.toString()).subscribe(
      (response: void) => { },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getJuegos(idJugador: number) {
    this.juegoService.getJuegos(idJugador.toString()).subscribe(
      (response: IJuego[]) => {
        this.juegos = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )

  }
}
