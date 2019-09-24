import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../../../config.json';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/user/getall`);
    }

    getById(id: number) {
        return this.http.get(`${config.apiUrl}/user/${id}`);
    }

    register(user: User) {
        return this.http.post(`${config.apiUrl}/user/register`, user);
    }

    update(user: User) {
        return this.http.put(`${config.apiUrl}/user/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/user/${id}`);
    }
}
