import { Component } from '@angular/core';
import { ReqMethods } from './_enums/enums';
import { ServiceResponse } from './_interface';
import { MainService } from './_services';
import { login } from './_validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  loginSchema = login

  async handleSubmit(form:any): Promise<ServiceResponse> {

    const result = await MainService.CallService({
      method  : ReqMethods.POST,
      path    : MainService.APIs.auth.login,
      payload : form,
      token   : false
    })

    return {response: {}}
  }

}