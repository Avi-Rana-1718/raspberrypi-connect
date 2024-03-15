const http = require("http");
const url = require("url");

const server = http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);

    if ((q.pathname = "/")) {
      res.end(JSON.stringify("Hello raspberrypi!"));
    }

    console.log(req.method);
    if (req.method == "POST") {
      let data = [];

      req.on("data", (chunk) => {
        data.push(chunk);
      });

      req.on("end", () => {
        data = Buffer.concat(data).toString();
        console.log(data);
      });
    }
  })
  .listen(3000, () => {
    console.log("Server started");
  });
