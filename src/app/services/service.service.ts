import { createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";

@Injectable()
export class Service{
    public names:string[]=['Matyi','Bence','Timi'];
    constructor(){

    }
}