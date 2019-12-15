import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  // declarations...
  providers: [
    AuthGuard,
    AuthService,
    RandomGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
  // imports...
})
export class AuthModule { }
