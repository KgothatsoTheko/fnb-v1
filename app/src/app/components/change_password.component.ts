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
  selector: 'bh-change_password',
  templateUrl: './change_password.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class change_passwordComponent {
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
      this.sd_Qa3gEQ8XuawZxvmf(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Qa3gEQ8XuawZxvmf(bh) {
    try {
      bh = this.sd_4QTWai7UHhI5IGma(bh);
      //appendnew_next_sd_Qa3gEQ8XuawZxvmf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qa3gEQ8XuawZxvmf');
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
      bh = this.sd_PSAf9tcJS5NXhVBp(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EKizbmhhiynIcaPQ');
    }
  }
  //appendnew_flow_change_passwordComponent_start

  sd_4QTWai7UHhI5IGma(bh) {
    try {
      //appendnew_next_sd_4QTWai7UHhI5IGma
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4QTWai7UHhI5IGma');
    }
  }

  async sd_PSAf9tcJS5NXhVBp(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_PSAf9tcJS5NXhVBp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PSAf9tcJS5NXhVBp');
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
  //appendnew_flow_change_passwordComponent_Catch
}
