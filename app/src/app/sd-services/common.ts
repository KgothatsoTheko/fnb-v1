// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { BehaviorSubject } from 'rxjs'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class common {
  public currentQuote: any;
  public quote: any;

  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_common

  async goBack(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_ZMlcqDyLVVUnwQuz(bh);
      //appendnew_next_goBack
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jJRXnjTcMQmcijs6');
    }
  }

  async update(newQuote = '', ...others) {
    let bh: any = {
      input: {
        newQuote,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_DbXIiXM0h0l5FP71(bh);
      //appendnew_next_update
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vO7ZpSwQ0nvvbLo3');
    }
  }

  async amount(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_SSD3DKzpFoOLZnwq(bh);
      //appendnew_next_amount
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gDxgBOtWEwBlKd2e');
    }
  }
  //appendnew_flow_common_start

  async sd_ZMlcqDyLVVUnwQuz(bh) {
    try {
      bh.location = this.__service_injector__.get(Location);
      bh = await this.sd_41H6JPbAEHahPPfJ(bh);
      //appendnew_next_sd_ZMlcqDyLVVUnwQuz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZMlcqDyLVVUnwQuz');
    }
  }

  async sd_41H6JPbAEHahPPfJ(bh) {
    try {
      console.log(bh.location);

      bh.location.back();
      //appendnew_next_sd_41H6JPbAEHahPPfJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_41H6JPbAEHahPPfJ');
    }
  }

  async sd_DbXIiXM0h0l5FP71(bh) {
    try {
      bh = await this.sd_e0YkvY1IoU1EKOEY(bh);
      //appendnew_next_sd_DbXIiXM0h0l5FP71
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DbXIiXM0h0l5FP71');
    }
  }

  async sd_e0YkvY1IoU1EKOEY(bh) {
    try {
      bh.quote.next(bh.input.newQuote);
      //appendnew_next_sd_e0YkvY1IoU1EKOEY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e0YkvY1IoU1EKOEY');
    }
  }

  async sd_SSD3DKzpFoOLZnwq(bh) {
    try {
      bh = await this.sd_iShVV0N6PNcKApKr(bh);
      //appendnew_next_sd_SSD3DKzpFoOLZnwq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SSD3DKzpFoOLZnwq');
    }
  }

  async sd_iShVV0N6PNcKApKr(bh) {
    try {
      // Declaring a quote
      bh.quote = new BehaviorSubject<string>('hello');

      // expose as an observable
      bh.currentQuote = bh.quote.asObservable();

      bh = await this.sd_CVmrA6zXyhKsGY3H(bh);
      //appendnew_next_sd_iShVV0N6PNcKApKr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iShVV0N6PNcKApKr');
    }
  }

  async sd_CVmrA6zXyhKsGY3H(bh) {
    try {
      this.currentQuote = bh;
      this.quote = bh.quote;
      //appendnew_next_sd_CVmrA6zXyhKsGY3H
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CVmrA6zXyhKsGY3H');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_common_Catch
}
