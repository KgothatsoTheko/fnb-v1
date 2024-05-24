// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { common } from 'app/sd-services/common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-bank',
  templateUrl: './bank.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class bankComponent {
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
      this.sd_mEliQLOZp4jIw1lX(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_mEliQLOZp4jIw1lX(bh) {
    try {
      bh = this.sd_yzNTTPPwdiMjtXgw(bh);
      //appendnew_next_sd_mEliQLOZp4jIw1lX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mEliQLOZp4jIw1lX');
    }
  }

  goToTransactions(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_lzbhoAkaARC0iBfx(bh);
      //appendnew_next_goToTransactions
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EgdyPsf05vhDko23');
    }
  }

  openScanner(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_oGYWxWUU8emMzYxX(bh);
      //appendnew_next_openScanner
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FiIUdNr6qFB4fMbg');
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
      bh = this.sd_yGgH5FkjrZJOiZ8Q(bh);
      //appendnew_next_goToSearch
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wRGirzdWOtJZPnPH');
    }
  }

  goToAirtime(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_kGLL3bXWMEQMJJhl(bh);
      //appendnew_next_goToAirtime
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z29Tapg2rpzkM1mJ');
    }
  }

  goToElectricity(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_xpqupbZrQoVdJQAu(bh);
      //appendnew_next_goToElectricity
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6jIFi34pkIioCrQV');
    }
  }

  goToEwallet(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_SgsNGx1cZnLcpg5l(bh);
      //appendnew_next_goToEwallet
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aVvo7DBqeWCgk6Oy');
    }
  }

  goToPay(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_tDYSVNbUXDNJl3OU(bh);
      //appendnew_next_goToPay
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Yo8FSaXAR6ou4ZLB');
    }
  }

  goToCard(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_4gY2NKIDRROAm3qN(bh);
      //appendnew_next_goToCard
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wX3DmtKIglUiskZF');
    }
  }

  sd_Sny7AQBI4zahxtmm(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      //appendnew_next_sd_Sny7AQBI4zahxtmm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Sny7AQBI4zahxtmm');
    }
  }
  //appendnew_flow_bankComponent_start

  sd_yzNTTPPwdiMjtXgw(bh) {
    try {
      this.page.currentQuote = "''";
      bh = this.sd_5hwHpF27cnLFp0eP(bh);
      //appendnew_next_sd_yzNTTPPwdiMjtXgw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yzNTTPPwdiMjtXgw');
    }
  }

  async sd_5hwHpF27cnLFp0eP(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.amount();

      bh = this.sd_AZGO8I8Cn77iGbQU(bh);
      //appendnew_next_sd_5hwHpF27cnLFp0eP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5hwHpF27cnLFp0eP');
    }
  }

  sd_AZGO8I8Cn77iGbQU(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);
      bh.quote = commonInstance['quote'];
      bh.currentQuote = commonInstance['currentQuote'];
      this.sd_krAMr93Zmrmf1xzb(bh);
      bh = this.sd_w5cpEroO58nEOohN(bh);
      //appendnew_next_sd_AZGO8I8Cn77iGbQU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AZGO8I8Cn77iGbQU');
    }
  }

  sd_krAMr93Zmrmf1xzb(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh);
      //appendnew_next_sd_krAMr93Zmrmf1xzb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_krAMr93Zmrmf1xzb');
    }
  }

  sd_w5cpEroO58nEOohN(bh) {
    try {
      const page = this.page;
      page.currentQuote = bh.currentQuote.currentQuote.source.value;

      console.log('page', page);
      console.log('bh', bh);
      //appendnew_next_sd_w5cpEroO58nEOohN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w5cpEroO58nEOohN');
    }
  }

  async sd_lzbhoAkaARC0iBfx(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/view-transactions');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_lzbhoAkaARC0iBfx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lzbhoAkaARC0iBfx');
    }
  }

  async sd_oGYWxWUU8emMzYxX(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/qr-code-reader');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_oGYWxWUU8emMzYxX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oGYWxWUU8emMzYxX');
    }
  }

  async sd_yGgH5FkjrZJOiZ8Q(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/search');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_yGgH5FkjrZJOiZ8Q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yGgH5FkjrZJOiZ8Q');
    }
  }

  async sd_kGLL3bXWMEQMJJhl(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/airtime');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_kGLL3bXWMEQMJJhl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kGLL3bXWMEQMJJhl');
    }
  }

  async sd_xpqupbZrQoVdJQAu(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/electricity');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_xpqupbZrQoVdJQAu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xpqupbZrQoVdJQAu');
    }
  }

  async sd_SgsNGx1cZnLcpg5l(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/eWallet');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_SgsNGx1cZnLcpg5l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SgsNGx1cZnLcpg5l');
    }
  }

  async sd_tDYSVNbUXDNJl3OU(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/pay');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_tDYSVNbUXDNJl3OU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tDYSVNbUXDNJl3OU');
    }
  }

  async sd_4gY2NKIDRROAm3qN(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/cards');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_4gY2NKIDRROAm3qN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4gY2NKIDRROAm3qN');
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
  //appendnew_flow_bankComponent_Catch
}
