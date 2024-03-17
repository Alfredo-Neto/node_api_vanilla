const bodyParser = async (req, res) => {
  let buffer = [];

	for await (chunk of req) {
		buffer.push(chunk);
	}

	try {
		req.body = JSON.parse(Buffer.concat(buffer).toString());
	} catch (e) {
		req.body = null;
	}
};

module.exports = bodyParser;