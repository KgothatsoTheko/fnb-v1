// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-view_transactions',
  templateUrl: './view_transactions.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class view_transactionsComponent {
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
      this.sd_K5NHmbmLJZLJQmKr(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_K5NHmbmLJZLJQmKr(bh) {
    try {
      bh = this.sd_3oH2r6rOuBE5VSlL(bh);
      //appendnew_next_sd_K5NHmbmLJZLJQmKr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K5NHmbmLJZLJQmKr');
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
      bh = this.sd_3WsT5cgxjILzgAEg(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Sr7vn4Z7hXrVNx77');
    }
  }

  goToSearch(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_OiIEySJfDIqsnu5f(bh);
      //appendnew_next_goToSearch
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qgs1V0XSdLd3smGC');
    }
  }
  //appendnew_flow_view_transactionsComponent_start

  sd_3oH2r6rOuBE5VSlL(bh) {
    try {
      //appendnew_next_sd_3oH2r6rOuBE5VSlL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3oH2r6rOuBE5VSlL');
    }
  }

  sd_3WsT5cgxjILzgAEg(bh) {
    try {
      this.page.location = this.__page_injector__.get(Location);
      bh = this.sd_DnMTqbMgscweVaTf(bh);
      //appendnew_next_sd_3WsT5cgxjILzgAEg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3WsT5cgxjILzgAEg');
    }
  }

  sd_DnMTqbMgscweVaTf(bh) {
    try {
      const page = this.page;
      page.location.back();
      //appendnew_next_sd_DnMTqbMgscweVaTf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DnMTqbMgscweVaTf');
    }
  }

  async sd_OiIEySJfDIqsnu5f(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/search');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_OiIEySJfDIqsnu5f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OiIEySJfDIqsnu5f');
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
  //appendnew_flow_view_transactionsComponent_Catch
}
