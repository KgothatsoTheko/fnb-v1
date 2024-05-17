// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-buy_airtime',
  templateUrl: './buy_airtime.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class buy_airtimeComponent {
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
      this.sd_ZZCCD4XQxjJfthGg(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ZZCCD4XQxjJfthGg(bh) {
    try {
      bh = this.sd_4NC0TDgF3SEBdfuA(bh);
      //appendnew_next_sd_ZZCCD4XQxjJfthGg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZZCCD4XQxjJfthGg');
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
      bh = this.sd_j55ERgRoolysVKZS(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LTy3CWsnZ9UizG6e');
    }
  }
  //appendnew_flow_buy_airtimeComponent_start

  sd_4NC0TDgF3SEBdfuA(bh) {
    try {
      //appendnew_next_sd_4NC0TDgF3SEBdfuA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4NC0TDgF3SEBdfuA');
    }
  }

  sd_j55ERgRoolysVKZS(bh) {
    try {
      this.page.location = this.__page_injector__.get(Location);
      bh = this.sd_msWMqvIgmEBP5672(bh);
      //appendnew_next_sd_j55ERgRoolysVKZS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j55ERgRoolysVKZS');
    }
  }

  sd_msWMqvIgmEBP5672(bh) {
    try {
      const page = this.page;
      page.location.back();

      //appendnew_next_sd_msWMqvIgmEBP5672
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_msWMqvIgmEBP5672');
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
  //appendnew_flow_buy_airtimeComponent_Catch
}
