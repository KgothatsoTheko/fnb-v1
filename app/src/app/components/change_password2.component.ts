// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormControl, FormGroup, Validators } from '@angular/forms'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { common } from 'app/sd-services/common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-change_password2',
  templateUrl: './change_password2.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class change_password2Component {
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
      this.sd_QwcYFtNP1EFjZFj6(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  goBack(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_NJLoRNdTFbFuMuGn(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wt9z5WYo6fgGOUM6');
    }
  }
  sd_QwcYFtNP1EFjZFj6(bh) {
    try {
      bh = this.sd_CMWptT0fhhJepiwG(bh);
      //appendnew_next_sd_QwcYFtNP1EFjZFj6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QwcYFtNP1EFjZFj6');
    }
  }

  sd_mRU5Me3WOJaqeJFO(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      //appendnew_next_sd_mRU5Me3WOJaqeJFO
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mRU5Me3WOJaqeJFO');
    }
  }
  //appendnew_flow_change_password2Component_start

  async sd_NJLoRNdTFbFuMuGn(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_NJLoRNdTFbFuMuGn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NJLoRNdTFbFuMuGn');
    }
  }

  sd_CMWptT0fhhJepiwG(bh) {
    try {
      this.page.userDetails = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_dGzjxXXq1kSNBIQd(bh);
      //appendnew_next_sd_CMWptT0fhhJepiwG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CMWptT0fhhJepiwG');
    }
  }

  sd_dGzjxXXq1kSNBIQd(bh) {
    try {
      bh = this.sd_QMsn55kIMtHvV9Dc(bh);
      //appendnew_next_sd_dGzjxXXq1kSNBIQd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dGzjxXXq1kSNBIQd');
    }
  }

  sd_QMsn55kIMtHvV9Dc(bh) {
    try {
      this.page.changepasswordForm = undefined;
      this.page.passwordPattern =
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@]).{8,30}$/;
      bh = this.sd_NZeG9pkqJCcwcdw5(bh);
      //appendnew_next_sd_QMsn55kIMtHvV9Dc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QMsn55kIMtHvV9Dc');
    }
  }

  sd_NZeG9pkqJCcwcdw5(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);
      this.page.email = commonInstance['email'];
      bh = this.sd_zdtUYVHfIuAWlRoA(bh);
      //appendnew_next_sd_NZeG9pkqJCcwcdw5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NZeG9pkqJCcwcdw5');
    }
  }

  sd_zdtUYVHfIuAWlRoA(bh) {
    try {
      const page = this.page;
      page.changepasswordForm = new FormGroup({
        old: new FormControl('', [Validators.required]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(page.passwordPattern),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.pattern(page.passwordPattern),
        ]),
      });

      console.log('stoargeee:', page.userDetails);
      //appendnew_next_sd_zdtUYVHfIuAWlRoA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zdtUYVHfIuAWlRoA');
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
  //appendnew_flow_change_password2Component_Catch
}
