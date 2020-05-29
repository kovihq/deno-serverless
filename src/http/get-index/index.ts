export async function handler(req:object) {
  const returnObj = {
    denoVersion: Deno.version.deno,
    typescriptVersion: Deno.version.typescript,
    v8Version: Deno.version.v8,
    build: Deno.build,
    startTime: `${performance.now()}ms since start`,
  }
  return {
    statusCode: 200,
    headers: {'content-type': 'text/html; charset=utf8'},
    body: JSON.stringify(returnObj, null, 2),
  };
}