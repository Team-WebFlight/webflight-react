var totalSeeds = 3;
console.log('xurls', undefined)
var http = require("http");
 var WebTorrent = require("webtorrent");
var client = new WebTorrent();


      client.seed('/Users/Baoyee/Codesmith/WebFlight/test/fixtures/imgs/apple.png', function(torrent) {
        --totalSeeds;
        console.log('🐣 ', torrent.files[0].name, ' now seeding at hash ', torrent.infoHash);

        if (!totalSeeds) console.log("🕊 all seeds active")
      });

      client.seed('/Users/Baoyee/Codesmith/WebFlight/test/fixtures/imgs/google.png', function(torrent) {
        --totalSeeds;
        console.log('🐣 ', torrent.files[0].name, ' now seeding at hash ', torrent.infoHash);

        if (!totalSeeds) console.log("🕊 all seeds active")
      });

      client.seed('/Users/Baoyee/Codesmith/WebFlight/test/fixtures/imgs/netflix.png', function(torrent) {
        --totalSeeds;
        console.log('🐣 ', torrent.files[0].name, ' now seeding at hash ', torrent.infoHash);

        if (!totalSeeds) console.log("🕊 all seeds active")
      });console.log("⌛️ ", "waiting on ", totalSeeds, " seeds...");setInterval(function() {
    http.get('http://localhost:3000/count.check.4wf', function(response) {
      response.on('data', function(data) {
        data = JSON.parse(data);

        if (data.count < 5) {
          console.log("😴 bots going offline")
          http.get('http://localhost:3000/bots.no.longer.seeding.4wf')
          require('remote').require('app').quit()
        }
      });
    });
  }, 600000);