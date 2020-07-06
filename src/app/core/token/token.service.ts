import { Injectable } from '@angular/core';

import * as jwt_decode from 'jwt-decode'

const KEY = 'authToken';

@Injectable({ providedIn: 'root'})
export class TokenService {

    hasToken() {
        return !!this.getToken();
    }

    setToken(token) {
        window.localStorage.setItem(KEY, token);
    }

    getToken() {
        return window.localStorage.getItem(KEY);
    }

    getTokenJwt()
    {
        return jwt_decode(this.getToken());
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }
}