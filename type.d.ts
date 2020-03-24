declare module '*.json' {
  const module: string;
  const browser: string;
  const main: string;
  export {
    module,
    browser,
    main,
  };
}
