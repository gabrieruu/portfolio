export function FORM_POST(body) {
  return {
    url: 'https://script.google.com/macros/s/AKfycby3XteSKFyepEjpWen3nrurE699UvMwJmWsLIT_L-Kt-PmD__2dgmy6Jr47WNfUUvjTzw/exec',
    options: {
      method: 'POST',
      body: body,
    },
  };
}
