import http from "http";
import fs from "fs";
import url from "url";

const server = http.createServer((req, res) => {
  console.log(req.url, typeof req.url);

  // localhost:3000/news?type=hot&createtAt=thisweek
  if (req.url.startsWith("/news")) {
    const parsedUrl = url.parse(req.url, true);

    console.log(parsedUrl.query.type, parsedUrl.query.createdAt);

    if (parsedUrl.query.type === "hot") {
    }

    const searchValue = "Utaa";
    const news = [{ title: "Utaa" }, { title: "Tugjgrel" }];

    const result = news.filter((value) => value.title === searchValue);

    for (let i = 0; i < news.length; i++) {
      if (news[i].title === searchValue) {
        result.push(news[i]);
      }
    }

    res.write(JSON.stringify(result));
    res.end();
  }

  if (req.url === "/currency") {
    res.writeHead(200, { "Content-Type": "application/json" });

    const currencies = { dollar: 3000, jpy: 200 };
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
  if (req.url === "/image") {
    res.writeHead(200, { "Content-type": "image/jpeg" });

    res.write(fs.readFileSync("mori.jpg"));

    res.end();
  }

  res.writeHead(404, "not found");
  res.end();
});

server.listen(3000);

console.log("server listening on 3000");

// const printAlert = printValue => {
//   prompt(printAlert);
// };
