import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
@Injectable({
    providedIn: "root"
})
export class LoginService implements CanActivate {
    login: string = "";
    password: string = "";


    canActivate(): boolean {
        return this.login == "admin" && this.password == "123";
    }
}