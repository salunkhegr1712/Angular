import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


// the components which are present inside the bootstrap will get invoked like startup apps 
// it take the the components from the app.module.ts file 

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
