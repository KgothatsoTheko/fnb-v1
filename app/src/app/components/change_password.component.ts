// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormControl, FormGroup, Validators } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { common } from 'app/sd-services/common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-change_password',
  templateUrl: './change_password.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class change_passwordComponent {
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
      this.sd_Qa3gEQ8XuawZxvmf(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Qa3gEQ8XuawZxvmf(bh) {
    try {
      bh = this.sd_T6K84FQUvcDX1YSo(bh);
      //appendnew_next_sd_Qa3gEQ8XuawZxvmf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qa3gEQ8XuawZxvmf');
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
      bh = this.sd_PSAf9tcJS5NXhVBp(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EKizbmhhiynIcaPQ');
    }
  }

  changePassword(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_wZeVxC9zxbz99etD(bh);
      //appendnew_next_changePassword
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bXl36kavUNfxNOZt');
    }
  }
  //appendnew_flow_change_passwordComponent_start

  sd_T6K84FQUvcDX1YSo(bh) {
    try {
      this.page.loggedInUser = JSON.parse(
        sessionStorage.getItem('loggedInUser')
      );
      bh = this.sd_JSAMA1ZV6YjMOc7j(bh);
      //appendnew_next_sd_T6K84FQUvcDX1YSo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T6K84FQUvcDX1YSo');
    }
  }

  sd_JSAMA1ZV6YjMOc7j(bh) {
    try {
      bh = this.sd_4QTWai7UHhI5IGma(bh);
      //appendnew_next_sd_JSAMA1ZV6YjMOc7j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JSAMA1ZV6YjMOc7j');
    }
  }

  sd_4QTWai7UHhI5IGma(bh) {
    try {
      this.page.changepasswordForm = undefined;
      this.page.passwordPattern =
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@]).{8,30}$/;
      bh = this.sd_gCGmtS3KI3uFKwe4(bh);
      //appendnew_next_sd_4QTWai7UHhI5IGma
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4QTWai7UHhI5IGma');
    }
  }

  sd_gCGmtS3KI3uFKwe4(bh) {
    try {
      const page = this.page;
      page.changepasswordForm = new FormGroup({
        old: new FormControl('', [Validators.required]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(page.passwordPattern),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.pattern(page.passwordPattern),
        ]),
      });

      console.log(page.changepasswordForm.value);
      console.log(page.changepasswordForm.controls);

      //appendnew_next_sd_gCGmtS3KI3uFKwe4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gCGmtS3KI3uFKwe4');
    }
  }

  async sd_PSAf9tcJS5NXhVBp(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_PSAf9tcJS5NXhVBp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PSAf9tcJS5NXhVBp');
    }
  }

  sd_wZeVxC9zxbz99etD(bh) {
    try {
      const page = this.page;
      console.log(bh.input.form.value);
      bh = this.sd_0rpSxeoMAgfhyj4O(bh);
      //appendnew_next_sd_wZeVxC9zxbz99etD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wZeVxC9zxbz99etD');
    }
  }

  async sd_0rpSxeoMAgfhyj4O(bh) {
    try {
      if (
        this.sdService.operators['se'](
          bh.input.form.password,
          bh.input.form.confirmPassword,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_zINmjn5NqMGljPrc(bh);
      } else {
        bh = await this.sd_CIwyaWdJ4VNO8be2(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0rpSxeoMAgfhyj4O');
    }
  }

  sd_zINmjn5NqMGljPrc(bh) {
    try {
      const page = this.page;
      console.log('is vaar');
      //appendnew_next_sd_zINmjn5NqMGljPrc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zINmjn5NqMGljPrc');
    }
  }

  sd_CIwyaWdJ4VNO8be2(bh) {
    try {
      const page = this.page;
      console.log('is not vaar');
      bh = this.sd_oJ9MgN1Vhm8TrRHM(bh);
      //appendnew_next_sd_CIwyaWdJ4VNO8be2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CIwyaWdJ4VNO8be2');
    }
  }

  sd_oJ9MgN1Vhm8TrRHM(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open("Passwords don't match", 'OK', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_oJ9MgN1Vhm8TrRHM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oJ9MgN1Vhm8TrRHM');
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
  //appendnew_flow_change_passwordComponent_Catch
}
