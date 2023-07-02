import { config } from "./wdio.shared.conf";

config.services = (config.services ? config.services : []).concat([
    'chromedriver'
]);

config.capabilities = [
    {
      browserName: "chrome",
    },
  ];


config.port = 4444;

export default config;
