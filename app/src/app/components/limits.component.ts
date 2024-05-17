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
  selector: 'bh-limits',
  templateUrl: './limits.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class limitsComponent {
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
      this.sd_bk9iYnDDXkqipMt5(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_bk9iYnDDXkqipMt5(bh) {
    try {
      bh = this.sd_Duho4YkOqFfHpKvB(bh);
      //appendnew_next_sd_bk9iYnDDXkqipMt5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bk9iYnDDXkqipMt5');
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
      bh = this.sd_b0Qu37P5ojbtrECl(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bZCvoXOCXM7qEgPz');
    }
  }
  //appendnew_flow_limitsComponent_start

  sd_Duho4YkOqFfHpKvB(bh) {
    try {
      //appendnew_next_sd_Duho4YkOqFfHpKvB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Duho4YkOqFfHpKvB');
    }
  }

  async sd_b0Qu37P5ojbtrECl(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_b0Qu37P5ojbtrECl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b0Qu37P5ojbtrECl');
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
  //appendnew_flow_limitsComponent_Catch
}
