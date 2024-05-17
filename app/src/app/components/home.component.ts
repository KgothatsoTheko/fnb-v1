// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
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
      this.sd_gH5WfDthUdGcHb7c(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_gH5WfDthUdGcHb7c(bh) {
    try {
      bh = this.sd_RN0Fcj9LXAhFI8bC(bh);
      //appendnew_next_sd_gH5WfDthUdGcHb7c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gH5WfDthUdGcHb7c');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_RN0Fcj9LXAhFI8bC(bh) {
    try {
      const page = this.page;
      bh.landingOptions = [
        { label: 'Login', image: '/Web/Images/login2.PNG', route: '/login' },
        { label: 'Message', image: '/Web/Images/message.PNG', route: '/login' },
        {
          label: 'Contact Us',
          image: '/Web/Images/contact-us.PNG',
          route: '/login',
        },
        {
          label: 'My Offers',
          image: '/Web/Images/my-offers.PNG',
          route: '/login',
        },
        {
          label: 'Product Shop',
          image: '/Web/Images/product-shop.PNG',
          route: '/login',
        },
        { label: 'Pay', image: '/Web/Images/pay.PNG', route: '/login' },
        { label: 'Buy', image: '/Web/Images/buy.PNG', route: '/login' },
        {
          label: 'Transfer',
          image: '/Web/Images/transfer.PNG',
          route: '/login',
        },
        { label: 'Forex', image: '/Web/Images/forex.PNG', route: '/login' },
        { label: 'Insure', image: '/Web/Images/insure.PNG', route: '/login' },
        { label: 'Invest', image: '/Web/Images/invest.PNG', route: '/login' },
        {
          label: 'nav>>Energy',
          image: '/Web/Images/nav-energy.PNG',
          route: '/login',
        },
        {
          label: 'nav-igate life',
          image: '/Web/Images/navigate.PNG',
          route: '/login',
        },
        { label: 'eBucks', image: '/Web/Images/ebucks.PNG', route: '/login' },
        {
          label: 'Secure chat',
          image: '/Web/Images/secure.PNG',
          route: '/login',
        },
        { label: 'Cards', image: '/Web/Images/cards.PNG', route: '/login' },
        { label: 'GuardMe', image: '/Web/Images/guard.PNG', route: '/login' },
        {
          label: 'Security centre',
          image: '/Web/Images/security.PNG',
          route: '/login',
        },
        {
          label: 'Manage my debt',
          image: '/Web/Images/manage-debt.PNG',
          route: '/login',
        },
        { label: 'Hiiiiiiii', image: '/Web/Images/add.PNG', route: '/login' },
      ];
      bh = this.sd_pF2ZSp3hIF8bjLzf(bh);
      //appendnew_next_sd_RN0Fcj9LXAhFI8bC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RN0Fcj9LXAhFI8bC');
    }
  }

  sd_pF2ZSp3hIF8bjLzf(bh) {
    try {
      this.page.landingOptions = bh.landingOptions;
      //appendnew_next_sd_pF2ZSp3hIF8bjLzf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pF2ZSp3hIF8bjLzf');
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
  //appendnew_flow_homeComponent_Catch
}
