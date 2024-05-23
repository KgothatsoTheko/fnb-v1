import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { appDeclarations, appBootstrap, appProviders } from './config/declarations';
import { appImportModules } from './config/import-modules';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [...appDeclarations],
  imports: [...appImportModules, Ng2SearchPipeModule],
  providers: [...appProviders],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [...appBootstrap]
})
export class AppModule { }
