import * as Sentry from "@sentry/browser";

function init() {
  //   Sentry.init({
  //     dsn: "https://e1d319f342ba4d118227599e244e84dd@sentry.io/1783637"
  //   });
}

function log(err) {
  //   Sentry.captureException(err);
  console.log(err);
}

export default {
  init,
  log
};
