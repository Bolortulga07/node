import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/news") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const news = [{ title: "Utaa" }, { title: "Tugjgrel" }];
    res.write(JSON.stringify(news));
    res.end();
  }
  if (req.url === "/currency") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const currencies = [{ dollar: 3000, jpy: 200 }];
    res.write(JSON.stringify(currencies));
    res.end();
  }
  if (req.url === "/weather") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const weathers = [{ Ulaanbaatar: -15, Murun: -18, Khovd: -13 }];
    res.write(JSON.stringify(weathers));
    res.end();
  }
  if (req.url === "/zurkhai") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const zurkhai = [
      {
        usZasuulbal: "erch_huch_ihsene",
        suudal: "mod",
        barildlaga: "huchin_tugsuh",
      },
    ];
    res.write(JSON.stringify(zurkhai));
    res.end();
  }
  res.writeHead(404, "not found");
  res.end();
});

server.listen(3000);

console.log("ajillaj bn");
