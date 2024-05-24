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

  goBack2(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_rnwzf7GG4GtwMenu(bh);
      //appendnew_next_goBack2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UPPt3rtyuEHaLwqM');
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

  async sd_rnwzf7GG4GtwMenu(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_rnwzf7GG4GtwMenu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rnwzf7GG4GtwMenu');
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
