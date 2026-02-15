import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { MODULES_CODE_EXAMPLES, MODULE_TYPES, WHEN_TO_USE_MODULES, MODULES_VS_STANDALONE, MODULES_BEST_PRACTICES } from './constants/modules-constants';

@Component({
  selector: 'app-modules-notes',
  templateUrl: './modules-notes.component.html'
})
export class ModulesNotesComponent implements OnInit {
  readonly appModuleExample = MODULES_CODE_EXAMPLES.appModule;
  readonly featureModuleExample = MODULES_CODE_EXAMPLES.featureModule;
  readonly sharedModuleExample = MODULES_CODE_EXAMPLES.sharedModule;
  readonly coreModuleExample = MODULES_CODE_EXAMPLES.coreModule;
  readonly lazyLoadingExample = MODULES_CODE_EXAMPLES.lazyLoading;
  readonly lazyModuleExample = MODULES_CODE_EXAMPLES.lazyModule;
  readonly forRootPatternExample = MODULES_CODE_EXAMPLES.forRootPattern;
  readonly preloadingExample = MODULES_CODE_EXAMPLES.preloading;
  readonly moduleTypes = MODULE_TYPES;
  readonly whenToUse = WHEN_TO_USE_MODULES;
  readonly modulesVsStandalone = MODULES_VS_STANDALONE;
  readonly bestPractices = MODULES_BEST_PRACTICES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('NgModules - Angular');
  }
}
