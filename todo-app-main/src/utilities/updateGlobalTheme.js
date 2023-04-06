export const updateGlobalTheme = (mode) => {
  const $body = document.querySelector('body');
  $body.setAttribute('data-theme', mode);
};
