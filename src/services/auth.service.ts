import { CredenciaisDTO } from "../models/credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";
import { Injectable } from "@angular/core";
<<<<<<< HEAD
import { JwtHelper } from "angular2-jwt";
=======
import {JwtHelper} from "angular2-jwt";

>>>>>>> d9482cfe706a22138415b976ea0f93e8e733041d


@Injectable()
export class AuthService {

<<<<<<< HEAD
     jwtHelper: JwtHelper = new JwtHelper();
=======
   jwtHelper: JwtHelper = new JwtHelper();
>>>>>>> d9482cfe706a22138415b976ea0f93e8e733041d

    constructor(
        public http: HttpClient, 
        public storage: StorageService,
        //public cartService: CartService
        ) {
    }

    authenticate(creds : CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`, 
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    refreshToken() {
        return this.http.post(
            `${API_CONFIG.baseUrl}/auth/refresh_token`, 
            {},
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    successfulLogin(authorizationValue : string) {
        let tok = authorizationValue.substring(7);
        let user : LocalUser = {
            token: tok,
<<<<<<< HEAD
            email : this.jwtHelper.decodeToken(tok).sub
=======
            email: this.jwtHelper.decodeToken(tok).sub
           // email: this.jwtHelper.decodeToken(tok).sub
>>>>>>> d9482cfe706a22138415b976ea0f93e8e733041d
        };
        this.storage.setLocalUser(user);
       // this.cartService.createOrClearCart();
    }

    logout() {
        this.storage.setLocalUser(null);
    }
}