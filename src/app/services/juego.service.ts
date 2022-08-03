import { environment } from '../../environments/environment';
import { IJugador } from '../models/ijugador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJuego } from '../models/ijuego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  urlApi = environment.baseUrl;
  constructor(private httpClient: HttpClient) {

  }

  public getJuegos(idJugador: string): Observable<IJuego[]> {
    return this.httpClient.get<IJuego[]>(`${this.urlApi}/jugada/all/${idJugador}`)
  }

  public addJuego(idJugador: number): Observable<IJuego> {
    return this.httpClient.post<IJuego>(`${this.urlApi}/jugada/add/${idJugador.toString()}`, {});
  }

  public eliminarJugadas(idJugador: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.urlApi}/jugada/delete/all/${idJugador}`);
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
