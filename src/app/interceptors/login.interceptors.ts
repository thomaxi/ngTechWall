import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";

export class LoginInterceptors implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem('token');
        if (token) {
            const keys = req.params.keys();
            
            let params = new HttpParams;
            for(let index =0; index<keys.length; index++){
                params = params.append(keys[index],req.params.get(keys[index]));
            }
            params = params.append('access_token',token);
            const cloneRep = req.clone(
                {params}
            ); 
            return next.handle(cloneRep);
        }
        else {
            return next.handle(req);
        }
    };
}

export const LoginInterceptorProvider = {
    provide : HTTP_INTERCEPTORS,
    useClass : LoginInterceptors,
    multi: true
}