// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormControl, FormGroup, Validators } from '@angular/forms'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { common } from 'app/sd-services/common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-deposit_own',
  templateUrl: './deposit_own.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class deposit_ownComponent {
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
      this.sd_PMpMIhgg9rZOFHsZ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_PMpMIhgg9rZOFHsZ(bh) {
    try {
      bh = this.sd_5NgDZOqMsOt1s1BB(bh);
      //appendnew_next_sd_PMpMIhgg9rZOFHsZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PMpMIhgg9rZOFHsZ');
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
      bh = this.sd_MLnhXBVfvMFFaZrD(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rLCUea0xKXL16k0c');
    }
  }

  deposit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_B1W8fHGFHUOh5dHk(bh);
      //appendnew_next_deposit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ikOFeqKZlwzi1OiY');
    }
  }
  //appendnew_flow_deposit_ownComponent_start

  sd_5NgDZOqMsOt1s1BB(bh) {
    try {
      bh = this.sd_UkU136FdQ26F6C1i(bh);
      //appendnew_next_sd_5NgDZOqMsOt1s1BB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5NgDZOqMsOt1s1BB');
    }
  }

  sd_UkU136FdQ26F6C1i(bh) {
    try {
      this.page.depositForm = undefined;
      bh = this.sd_n1swxNd5XPSBN52k(bh);
      //appendnew_next_sd_UkU136FdQ26F6C1i
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UkU136FdQ26F6C1i');
    }
  }

  sd_n1swxNd5XPSBN52k(bh) {
    try {
      const page = this.page;
      page.depositForm = new FormGroup({
        depositAmount: new FormControl('', Validators.required),
      });

      console.log('page', page);
      //appendnew_next_sd_n1swxNd5XPSBN52k
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n1swxNd5XPSBN52k');
    }
  }

  async sd_MLnhXBVfvMFFaZrD(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_MLnhXBVfvMFFaZrD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MLnhXBVfvMFFaZrD');
    }
  }

  sd_B1W8fHGFHUOh5dHk(bh) {
    try {
      const page = this.page;
      console.log(page.depositForm.value);
      bh = this.sd_F4KXyA8KsxeWXj4H(bh);
      //appendnew_next_sd_B1W8fHGFHUOh5dHk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B1W8fHGFHUOh5dHk');
    }
  }

  async sd_F4KXyA8KsxeWXj4H(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/bank');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_F4KXyA8KsxeWXj4H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F4KXyA8KsxeWXj4H');
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
  //appendnew_flow_deposit_ownComponent_Catch
}
