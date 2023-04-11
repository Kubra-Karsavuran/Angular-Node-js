const express = require("express");
const app = express();

var titra_shema = require("./titra_shema");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/nodeblog_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// gelen json verılerını kabul edebılmesı ıcın kullandık
app.use(express.json());

const cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

// TODO veri getirme işlemleri başlatıldı
app.get("/api/getall", (req, res) => {
  titra_shema.find({}).then((posts) => {
    res.send(posts);
    console.log("get geldi");
  });
});

// TODO TYPE eşsiz veri bulma algoritması
app.get("/api/fortype", (req, res) => {
  titra_shema.find({}).then((posts) => {
    var typeliste = [];

    posts.forEach(function (posts) {
      console.log(posts.type);
      var kontrol_veri = posts.type;

      if (typeof typeliste[0] == "undefined" || typeliste[0] == null) {
        console.log("ilk veri burda eklendi:");
        console.log(kontrol_veri);
        typeliste.push(kontrol_veri);
      } else {
        for (let veriler of typeliste) {
          if (veriler == kontrol_veri) {
            var deneme = 10;
            break;
          }
        }
        if (deneme != 10) {
          console.log("yenı verı eklendı ");
          typeliste.push(posts.type);
        }
      }
    });

    console.log("dizi kontrolu: ");
    console.log(typeliste);
    res.send(typeliste);
  }); // bunun dısında dızı yazdırma
});

// TODO iki zaman arasındakı verılerı bulma ıslemı
app.get("/api/time/:timeone/:timetwo", (req, res) => {
  titra_shema.find({}).then((posts) => {
    var timearray = []; // arada kalanlar buna atılacak

    posts.forEach(function (posts) {
      var alinan = new Date(posts.timestamp);
      var ilk = new Date(req.params.timeone);
      var son = new Date(req.params.timetwo);
      if (alinan > ilk) {
        if (alinan <= son) {
          timearray.push(posts);
        }
      }
    });
    console.log(timearray);
    res.send(timearray);
  });
});

// TODO secilen type ıcın verı yansıtılacak sımdı
app.get("/api/fortype/get/:veri", (req, res) => {
  console.log("secilen veri: " + req.params.veri);
  titra_shema.find({ type: req.params.veri }).then((posts) => {
    res.send(posts);
  });
});

const port = 3000;
app.listen(port, () => {
  console.log("site http ye sıkıntısız baglana bıldı");
});
