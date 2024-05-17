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
  selector: 'bh-pay',
  templateUrl: './pay.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class payComponent {
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
      this.sd_6GhdTfAuBFE9oMiE(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_6GhdTfAuBFE9oMiE(bh) {
    try {
      bh = this.sd_TM2efpdTAp96dBd6(bh);
      //appendnew_next_sd_6GhdTfAuBFE9oMiE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6GhdTfAuBFE9oMiE');
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
      bh = this.sd_1EOLIrXTI0AkSa1Z(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mdqDUC8ULYpYbes1');
    }
  }
  //appendnew_flow_payComponent_start

  sd_TM2efpdTAp96dBd6(bh) {
    try {
      //appendnew_next_sd_TM2efpdTAp96dBd6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TM2efpdTAp96dBd6');
    }
  }

  sd_1EOLIrXTI0AkSa1Z(bh) {
    try {
      this.page.location = this.__page_injector__.get(Location);
      bh = this.sd_bmX0GiQp6NaZ3grS(bh);
      //appendnew_next_sd_1EOLIrXTI0AkSa1Z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1EOLIrXTI0AkSa1Z');
    }
  }

  sd_bmX0GiQp6NaZ3grS(bh) {
    try {
      const page = this.page;
      page.location.back();

      //appendnew_next_sd_bmX0GiQp6NaZ3grS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bmX0GiQp6NaZ3grS');
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
  //appendnew_flow_payComponent_Catch
}
