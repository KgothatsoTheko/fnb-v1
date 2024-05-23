// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class common {
  public random: any;
  public email: any;

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

  async generateRandomNumber(email: any = undefined, ...others) {
    let bh: any = {
      input: {
        email,
      },
      local: {
        random: 0,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_GivSlaUgVKNBuw7X(bh);
      //appendnew_next_generateRandomNumber
      return (
        // formatting output variables
        {
          input: {},
          local: {
            random: bh.local.random,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7URbVYjuQh1rrIFw');
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
      bh.location.back();
      //appendnew_next_sd_41H6JPbAEHahPPfJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_41H6JPbAEHahPPfJ');
    }
  }

  async sd_GivSlaUgVKNBuw7X(bh) {
    try {
      // Generates a random number between 1000 (inclusive) and 10000 (exclusive)
      bh.local.random = Math.floor(1000 + Math.random() * 9000);
      bh = await this.sd_8IfP9fSLeu6m7gEI(bh);
      //appendnew_next_sd_GivSlaUgVKNBuw7X
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GivSlaUgVKNBuw7X');
    }
  }

  async sd_8IfP9fSLeu6m7gEI(bh) {
    try {
      this.random = bh.local.random;
      this.email = bh.input.email;
      //appendnew_next_sd_8IfP9fSLeu6m7gEI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8IfP9fSLeu6m7gEI');
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
