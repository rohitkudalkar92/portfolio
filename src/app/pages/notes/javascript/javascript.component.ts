import { Component } from '@angular/core';
import { JAVASCRIPT_CODE_EXAMPLES } from './javascript.constants';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html'
})
export class JavascriptComponent {
  variablesCode = JAVASCRIPT_CODE_EXAMPLES.variables;
  dataTypesCode = JAVASCRIPT_CODE_EXAMPLES.dataTypes;
  functionsCode = JAVASCRIPT_CODE_EXAMPLES.functions;
  closuresCode = JAVASCRIPT_CODE_EXAMPLES.closures;
  asyncCode = JAVASCRIPT_CODE_EXAMPLES.async;
  arrayMethodsCode = JAVASCRIPT_CODE_EXAMPLES.arrayMethods;
  destructuringCode = JAVASCRIPT_CODE_EXAMPLES.destructuring;
  spreadRestCode = JAVASCRIPT_CODE_EXAMPLES.spreadRest;
  thisKeywordCode = JAVASCRIPT_CODE_EXAMPLES.thisKeyword;
  prototypesCode = JAVASCRIPT_CODE_EXAMPLES.prototypes;
  eventLoopCode = JAVASCRIPT_CODE_EXAMPLES.eventLoop;
  modulesCode = JAVASCRIPT_CODE_EXAMPLES.modules;
  hoistingCode = JAVASCRIPT_CODE_EXAMPLES.hoisting;
  objectMethodsCode = JAVASCRIPT_CODE_EXAMPLES.objectMethods;
  errorHandlingCode = JAVASCRIPT_CODE_EXAMPLES.errorHandling;
  jsonCode = JAVASCRIPT_CODE_EXAMPLES.json;
  setTimeoutIntervalCode = JAVASCRIPT_CODE_EXAMPLES.setTimeoutInterval;
  domManipulationCode = JAVASCRIPT_CODE_EXAMPLES.domManipulation;
  eventHandlingCode = JAVASCRIPT_CODE_EXAMPLES.eventHandling;
  localStorageCode = JAVASCRIPT_CODE_EXAMPLES.localStorage;
  regularExpressionsCode = JAVASCRIPT_CODE_EXAMPLES.regularExpressions;
  higherOrderFunctionsCode = JAVASCRIPT_CODE_EXAMPLES.higherOrderFunctions;

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
