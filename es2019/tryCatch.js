// node --experimental-modules .\es2019\tryCatch.js

try {
  JSON.parse('HELLO');
} catch (e) {
  console.log('error', e);
}

/* ---- */

try {
  JSON.parse('HELLO');
} catch {
  console.log('error');
}
