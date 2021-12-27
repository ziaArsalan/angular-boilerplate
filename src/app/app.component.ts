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

  constructor(public mainService: MainService) {
    console.log(this.mainService);
    
  }

  loginSchema = login


  async handleSubmit(form:any): Promise<ServiceResponse> {

    const result = await this.mainService.CallService({
      method  : ReqMethods.POST,
      path    : this.mainService.getAPIs().auth.login,
      payload : form,
      token   : false
    })

    return {response: {}}
  }

}