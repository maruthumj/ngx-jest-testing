import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import './jestGlobals';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import { runCLI } from 'jest';
import ProjectConfig = jest.ProjectConfig;


const projectRootPath = './';

// Add any Jest configuration options here
const jestConfig = {
 roots: [projectRootPath + 'app/'],
 testRegex: '\\.spec\\.ts$'
};

bootstrap().then( (result:any) => console.log(result));

async function bootstrap () {
  if (window['jest']) {
    location.reload();
    return;
  } else {
    // Run the Jest asynchronously
    const result = await runCLI(jestConfig as any, [projectRootPath]);

    // Analyze the results
    // (see typings for result format)
    if (result.results.success) {
      console.log(`Tests completed`);
    } else {
      console.error(`Tests failed`);
    }
  }

  // First, initialize the Angular testing environment.
  /*getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );*/
}