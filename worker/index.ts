import handler from 'vinext/server/app-router-entry';

interface Env {
  ASSETS: Fetcher;
  STACKWISE: Fetcher;
}

// Stackwise runs as its own Worker with basePath /stackwise; this entry hands
// those requests to it through a service binding and serves everything else.
const STACKWISE_PATH = '/stackwise';

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === STACKWISE_PATH || pathname.startsWith(`${STACKWISE_PATH}/`)) {
      return env.STACKWISE.fetch(request);
    }
    return handler.fetch(request, env, ctx);
  },
};
