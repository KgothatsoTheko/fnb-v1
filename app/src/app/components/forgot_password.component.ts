// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { common } from 'app/sd-services/common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-forgot_password',
  templateUrl: './forgot_password.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class forgot_passwordComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_4pxV0wPLRVKGHsKt(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_4pxV0wPLRVKGHsKt(bh) {
    try {
      bh = this.sd_tccPHs4fcoYfU5Zd(bh);
      //appendnew_next_sd_4pxV0wPLRVKGHsKt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4pxV0wPLRVKGHsKt');
    }
  }

  goBack(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_wlYZC1PPM455h8mN(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WG47W2INBwfKPERH');
    }
  }

  submit(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_nAnCruwWwmT2U6S6(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sKJ4EVPTNuClAKte');
    }
  }
  //appendnew_flow_forgot_passwordComponent_start

  sd_tccPHs4fcoYfU5Zd(bh) {
    try {
      this.page.userDetails = { email: '' };
      this.page.emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
      this.page.submitted = false;
      bh = this.sd_GTWLLiw6tkF425qr(bh);
      //appendnew_next_sd_tccPHs4fcoYfU5Zd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tccPHs4fcoYfU5Zd');
    }
  }

  sd_GTWLLiw6tkF425qr(bh) {
    try {
      const page = this.page;
      page.forgotPassword = page.userDetails;
      //appendnew_next_sd_GTWLLiw6tkF425qr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GTWLLiw6tkF425qr');
    }
  }

  async sd_wlYZC1PPM455h8mN(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_wlYZC1PPM455h8mN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wlYZC1PPM455h8mN');
    }
  }

  sd_nAnCruwWwmT2U6S6(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_CMEjWYscrjevbYPX(bh);
      } else {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nAnCruwWwmT2U6S6');
    }
  }

  async sd_CMEjWYscrjevbYPX(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.generateRandomNumber(
        this.page.userDetails.email
      );
      this.page.random = outputVariables.local.random;

      bh = this.sd_l8TMBTNL3K4xZtdP(bh);
      //appendnew_next_sd_CMEjWYscrjevbYPX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CMEjWYscrjevbYPX');
    }
  }

  sd_l8TMBTNL3K4xZtdP(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_LSh7NpWWTjA7NlY6(bh);
      //appendnew_next_sd_l8TMBTNL3K4xZtdP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l8TMBTNL3K4xZtdP');
    }
  }

  sd_LSh7NpWWTjA7NlY6(bh) {
    try {
      const page = this.page;
      bh.body = {
        email: page.userDetails.email,
        code: page.random,
      };

      bh.url = page.ssdUrl + 'forgot-password';

      console.log('form:', page.forgotPassword);
      bh = this.sd_8vELHlSQYJthK1VQ(bh);
      //appendnew_next_sd_LSh7NpWWTjA7NlY6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LSh7NpWWTjA7NlY6');
    }
  }

  async sd_8vELHlSQYJthK1VQ(bh) {
    try {
      let requestOptions = {
        url: this.page.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_rT7Iv9cm3h7pEb8y(bh);
      //appendnew_next_sd_8vELHlSQYJthK1VQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8vELHlSQYJthK1VQ');
    }
  }

  async sd_rT7Iv9cm3h7pEb8y(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/verify-code');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_rT7Iv9cm3h7pEb8y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rT7Iv9cm3h7pEb8y');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_forgot_passwordComponent_Catch
}
