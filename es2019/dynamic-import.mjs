// node --experimental-modules .\es2019\dynamic-import.mjs
import { staticImport } from './dynamic-import-module.mjs';

staticImport();

import ('./dynamic-import-module.mjs')
  .then(({ dynamicImport }) => dynamicImport());

/* Lembrar de mudar para async / await */