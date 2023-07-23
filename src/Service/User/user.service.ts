import { Injectable } from '@angular/core';
import {Vertex} from "../../Model/GraphResponseModel";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _users!:Vertex[];
  constructor() { }

  get users(): Vertex[] {
    return this._users;
  }

  set users(value: Vertex[]) {
    this._users = value;
  }
}
