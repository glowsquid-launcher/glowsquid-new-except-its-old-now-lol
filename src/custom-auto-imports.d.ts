export {};
declare global {
  const $LL: import('./i18n/i18n-types').TranslationFunctions;
  const $authState: import('./lib/auth').AuthState;
  const $internalAuthState: import('./lib/auth').InternalAuthState;
}
