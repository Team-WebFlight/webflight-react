var WebTorrent = require("webtorrent");
var client = new WebTorrent();

client.seed('/Users/Baoyee/Codesmith/wf-react/test/fixtures/assets/images/falcon.jpg', function(torrent) {
  --totalSeeds;
  console.log('🐣 ', torrent.files[0].name, ' now seeding at hash ', torrent.infoHash);

  if (!totalSeeds) console.log("🕊 all seeds active")
});

client.seed('/Users/Baoyee/Codesmith/wf-react/test/fixtures/assets/images/eagle.jpg', function(torrent) {
  --totalSeeds;
  console.log('🐣 ', torrent.files[0].name, ' now seeding at hash ', torrent.infoHash);

  if (!totalSeeds) console.log("🕊 all seeds active")
});

client.seed('/Users/Baoyee/Codesmith/wf-react/test/fixtures/assets/videos/birds.gif', function(torrent) {
  --totalSeeds;
  console.log('🐣 ', torrent.files[0].name, ' now seeding at hash ', torrent.infoHash);

  if (!totalSeeds) console.log("🕊 all seeds active")
});

client.seed('/Users/Baoyee/Codesmith/wf-react/test/fixtures/assets/images/owl.jpg', function(torrent) {
  --totalSeeds;
  console.log('🐣 ', torrent.files[0].name, ' now seeding at hash ', torrent.infoHash);

  if (!totalSeeds) console.log("🕊 all seeds active")
});