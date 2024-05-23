// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { common } from 'app/sd-services/common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
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
      this.sd_45uy5mdWi5EPQeTa(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_45uy5mdWi5EPQeTa(bh) {
    try {
      bh = this.sd_PrG6MjwBVP5tc48y(bh);
      //appendnew_next_sd_45uy5mdWi5EPQeTa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_45uy5mdWi5EPQeTa');
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
      bh = this.sd_cIzhLEz4ftM3kv08(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eOdC9WAzwU51oSrx');
    }
  }

  showPassword(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.toggling(bh);
      //appendnew_next_showPassword
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EPa7o3No15AsfjHE');
    }
  }

  login(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_SG4YS97YQ1V358K7(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_44CrbDcLdLIXeUnr');
    }
  }
  //appendnew_flow_loginComponent_start

  sd_PrG6MjwBVP5tc48y(bh) {
    try {
      this.page.password = this.page.password;
      this.page.show = true;
      this.page.submitted = false;
      this.page.userDetails = { email: '', password: '' };
      this.page.emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
      bh = this.sd_dQ2knbDgryiwbT69(bh);
      //appendnew_next_sd_PrG6MjwBVP5tc48y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PrG6MjwBVP5tc48y');
    }
  }

  sd_dQ2knbDgryiwbT69(bh) {
    try {
      const page = this.page;
      page.password = 'password';
      page.loginForm = page.userDetails;

      //appendnew_next_sd_dQ2knbDgryiwbT69
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dQ2knbDgryiwbT69');
    }
  }

  async sd_cIzhLEz4ftM3kv08(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_cIzhLEz4ftM3kv08
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cIzhLEz4ftM3kv08');
    }
  }

  toggling(bh) {
    try {
      const page = this.page;
      if (page.password === 'password') {
        page.password = 'text';
        // page.show = true;
      } else {
        page.password = 'password';
        // page.show = false;
      }

      //appendnew_next_toggling
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SsYT8hn0WZhQPZwc');
    }
  }

  sd_SG4YS97YQ1V358K7(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_mjHhs3TZbNwVZsQd(bh);
      //appendnew_next_sd_SG4YS97YQ1V358K7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SG4YS97YQ1V358K7');
    }
  }

  sd_mjHhs3TZbNwVZsQd(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      // Need login api
      //appendnew_next_sd_mjHhs3TZbNwVZsQd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mjHhs3TZbNwVZsQd');
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
  //appendnew_flow_loginComponent_Catch
}
