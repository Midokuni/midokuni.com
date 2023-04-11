export async function onRequest(context) {
	try {
		let res = await context.next();
		res.headers.set('Access-Control-Allow-Origin', '*');
		return res;
	} catch (err) {
	  return new Response(`${err.message}\n${err.stack}`, { status: 500 });
	}
  }
  
  