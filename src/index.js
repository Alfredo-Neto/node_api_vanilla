const http = require('http');
const routes = require('./routes');
const { URL } = require('url');
const bodyParser = require('./bodyParser');
const PORT = process.env.PORT || 3001;
const baseUrl = process.env.baseUrl || `http://localhost:${PORT}`;

const server = http.createServer(async (req, res) => {
	const parsedUrl = new URL(`${baseUrl}${req.url}`);
	const queryParams = Object.fromEntries(parsedUrl.searchParams);
	const splittedUrl = parsedUrl.pathname.split('/').filter(Boolean);
	
	let { pathname } = parsedUrl;
	let id;

	if (splittedUrl.length > 1) {
		pathname = `/${splittedUrl[0]}/:id`;
		id = splittedUrl[1];
	}

	if (pathname === '/' && req.method === 'GET') {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		return res.end(JSON.stringify({ ok: true }));
	}

	const route = routes.find((route) => {
		return route.url === pathname && route.method === req.method;
	});

	res.send = (statusCode, response) => {
		res.writeHead(statusCode, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(response));
	};

	if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
		await bodyParser(req);
	}

	if (route) {
		req.query = queryParams;
		req.params = { id }

		route.handler(req, res);
	} else {
		res.writeHead(404, { 'Content-Type': 'application/json' });
		res.end(`Cannot ${req.method} ${pathname}`);
	}

});

server.listen(PORT, () => {
  `Server started at http://localhost:${PORT}`
})