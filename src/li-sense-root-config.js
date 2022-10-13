import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@li-sense/li-sense-app",
  app: () => System.import("@li-sense/li-sense-app"),
  activeWhen: ['/']
});


// registerApplication({
//   name: "@kinergy/navbar",
//   app: () => System.import("@kinergy/navbar"),
//   activeWhen: ["/"]ss
// });

start({
  urlRerouteOnly: true,
});
