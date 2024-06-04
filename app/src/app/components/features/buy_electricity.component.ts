// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { common } from 'app/sd-services/common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-buy_electricity',
  templateUrl: './buy_electricity.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class buy_electricityComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_ZwPp3oGDVg1iIWd4(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ZwPp3oGDVg1iIWd4(bh) {
    try {
      bh = this.sd_WflFAq94qqVyQOV6(bh);
      //appendnew_next_sd_ZwPp3oGDVg1iIWd4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZwPp3oGDVg1iIWd4');
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
      bh = this.sd_PWsTbDR05jXbzKTy(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wTwI5KXp8W9baa6R');
    }
  }

  submit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_eXX8BsfxhmCCZceN(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QJljhIzH0nQatkB8');
    }
  }
  //appendnew_flow_buy_electricityComponent_start

  sd_WflFAq94qqVyQOV6(bh) {
    try {
      this.page.quote = undefined;
      //appendnew_next_sd_WflFAq94qqVyQOV6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WflFAq94qqVyQOV6');
    }
  }

  sd_PWsTbDR05jXbzKTy(bh) {
    try {
      this.page.location = this.__page_injector__.get(Location);
      bh = this.sd_YWfVfFZvLk9wAyQu(bh);
      //appendnew_next_sd_PWsTbDR05jXbzKTy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PWsTbDR05jXbzKTy');
    }
  }

  sd_YWfVfFZvLk9wAyQu(bh) {
    try {
      const page = this.page;
      page.location.back();

      //appendnew_next_sd_YWfVfFZvLk9wAyQu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YWfVfFZvLk9wAyQu');
    }
  }

  async sd_eXX8BsfxhmCCZceN(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.update(this.page.quote);

      //appendnew_next_sd_eXX8BsfxhmCCZceN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eXX8BsfxhmCCZceN');
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
  //appendnew_flow_buy_electricityComponent_Catch
}
