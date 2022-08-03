import { environment } from './../../environments/environment';
import { IJugador } from './../models/ijugador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  urlApi = environment.baseUrl;
  constructor(private httpClient: HttpClient) {

  }

  public getJugadores(): Observable<IJugador[]> {
    return this.httpClient.get<IJugador[]>(`${this.urlApi}/jugador/all`)
  }

  public addJugador(jugador: IJugador): Observable<any> {
    return this.httpClient.post<IJugador>(`${this.urlApi}/jugador/add`, jugador);
  }

  public eliminarJugador(idJugador: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.urlApi}/jugador/delete/${idJugador}`);
  }

  public updateJugador(jugador: IJugador, name: string): Observable<void> {
    const jugadorModificado: IJugador = {
      idJugador: 0,
      nombre: name,
      ratio: 0
    }
    return this.httpClient.put<void>(`${this.urlApi}/jugador/update/${jugador.idJugador}`, jugadorModificado);
  }


}
