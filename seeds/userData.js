const { User } = require('../models');

const userData = [
  {
    username: 'laszlo-ratesic',
    email: 'keenanrc@hotmail.com',
    password: 'Kc092394$',
  },
  {
    username: 'cyurygyn0',
    email: 'kpowner0@buzzfeed.com',
    password: 'a9BLM9',
  },
  {
    username: 'cditchfield1',
    email: 'pcomerford1@vimeo.com',
    password: 'rLsa4e',
  },
  {
    username: 'gbodicum2',
    email: 'rstansall2@seattletimes.com',
    password: '5ktUB6qkWNR',
  },
  {
    username: 'mrutherforth3',
    email: 'hfairchild3@admin.ch',
    password: 'S2xHCgOiH55',
  },
  {
    username: 'tgrestie4',
    email: 'gcastles4@dailymotion.com',
    password: 'XohTrt',
  },
  {
    username: 'jloveland5',
    email: 'nblitzer5@google.it',
    password: 'XsTqrrHIEy',
  },
  {
    username: 'rduchatel6',
    email: 'apassey6@senate.gov',
    password: 'dYsUzxrvZki',
  },
  {
    username: 'mmacredmond7',
    email: 'bperkins7@cafepress.com',
    password: 'Rx6ueYQ18m',
  },
  {
    username: 'ggethyn8',
    email: 'dmilington8@ox.ac.uk',
    password: 'bBDFrfJ860U',
  },
  {
    username: 'kgahagan9',
    email: 'emacpaden9@samsung.com',
    password: 'nmDJhMOhOLWE',
  },
  {
    username: 'bfancya',
    email: 'mmccumeskya@creativecommons.org',
    password: 'tT3cSL',
  },
  {
    username: 'awardsb',
    email: 'pphillippob@is.gd',
    password: 'OW37NUGQa9C',
  },
  {
    username: 'rginiec',
    email: 'tfindenc@biblegateway.com',
    password: 'RipSTsNu0c',
  },
  {
    username: 'mflegd',
    email: 'edorkensd@bloglines.com',
    password: 'lVwRWP53',
  },
  {
    username: 'mplaine',
    email: 'ddahlee@nationalgeographic.com',
    password: '2bKBN6',
  },
  {
    username: 'jdaneluttif',
    email: 'dgrabbamf@drupal.org',
    password: '5HnlwDAUl',
  },
  {
    username: 'cerasmusg',
    email: 'btenniswoodg@flickr.com',
    password: 'tcoFxv8hXq',
  },
  {
    username: 'gsteljesh',
    email: 'hyansonsh@businessinsider.com',
    password: '1sRoemkoju',
  },
  {
    username: 'ependdrethi',
    email: 'tcorsori@mediafire.com',
    password: 'OYTAXje',
  },
  {
    username: 'roslarj',
    email: 'gdillintonj@discuz.net',
    password: 'k1xKAH0qkz5W',
  },
  {
    username: 'wjuckesk',
    email: 'gchaplaink@barnesandnoble.com',
    password: 'TacrpfGF',
  },
  {
    username: 'nstuddall',
    email: 'rmanisl@google.it',
    password: 'IPqr2ANt0Sds',
  },
  {
    username: 'lslorancem',
    email: 'dmatteaum@digg.com',
    password: '0e2ZFXu4Gw',
  },
  {
    username: 'mmuccin',
    email: 'flauchlann@eepurl.com',
    password: '1RsPd22KQpS',
  },
  {
    username: 'fkuschelo',
    email: 'cparretto@biblegateway.com',
    password: 'caFk2Ic',
  },
  {
    username: 'bdackp',
    email: 'lklamptp@psu.edu',
    password: '6uv1pf',
  },
  {
    username: 'twycheq',
    email: 'cdibdallq@yelp.com',
    password: 'fyUtOps',
  },
  {
    username: 'wcorteneyr',
    email: 'hcrocumber@comcast.net',
    password: '3vSeD4sP',
  },
  {
    username: 'psturms',
    email: 'mrymills@usda.gov',
    password: 'T2RHAshl',
  },
  {
    username: 'bbyromt',
    email: 'oarmourt@yellowbook.com',
    password: '3IPjvIIt9MNQ',
  },
  {
    username: 'ebaynamu',
    email: 'hdalliu@newsvine.com',
    password: 'yadQaxQ4C',
  },
  {
    username: 'pleonv',
    email: 'gbarnewallv@irs.gov',
    password: '1DPckp1nOI',
  },
  {
    username: 'ascholew',
    email: 'dlawerencew@census.gov',
    password: 'P9dUgvGMd',
  },
  {
    username: 'lsimounetx',
    email: 'jdrawmerx@google.cn',
    password: 'O2vTQeMtW',
  },
  {
    username: 'bgreystokey',
    email: 'pbrasy@aboutads.info',
    password: 'TpAxsYf',
  },
  {
    username: 'lgroomz',
    email: 'bnizetz@ezinearticles.com',
    password: 'hfWJQZTN1klv',
  },
  {
    username: 'jdarkins10',
    email: 'wnorthing10@dailymail.co.uk',
    password: 'AnM6j3e7Cp',
  },
  {
    username: 'vizkovitch11',
    email: 'jwoollhead11@printfriendly.com',
    password: 't5Ui2WN7h0',
  },
  {
    username: 'dgobel12',
    email: 'hswinburn12@cbsnews.com',
    password: 'OPROH9OyzJy',
  },
  {
    username: 'afluger13',
    email: 'cgladdolph13@census.gov',
    password: 'mmTagASnLPh',
  },
  {
    username: 'vsheppey14',
    email: 'dsemechik14@bigcartel.com',
    password: 'TLn1SdfE',
  },
  {
    username: 'fbeardwood15',
    email: 'dkilban15@last.fm',
    password: 'G9tMT8gVf0B',
  },
  {
    username: 'qcoley16',
    email: 'mtakkos16@examiner.com',
    password: 'cLsxIVW3A',
  },
  {
    username: 'dsamwyse17',
    email: 'bharvett17@pagesperso-orange.fr',
    password: 'hwOOsvQQQ',
  },
  {
    username: 'bsuche18',
    email: 'jnealand18@tmall.com',
    password: 'wllbhSIdwg9',
  },
  {
    username: 'gjobbins19',
    email: 'gsiderfin19@tinypic.com',
    password: 'H97Umg3l',
  },
  {
    username: 'jsyddall1a',
    email: 'garnall1a@edublogs.org',
    password: 'hCHpbmLmzK',
  },
  {
    username: 'tandrea1b',
    email: 'ceslemont1b@a8.net',
    password: 'CCXC1U66Wii',
  },
  {
    username: 'gdrewe1c',
    email: 'ccoupe1c@pcworld.com',
    password: 'A76Q6TPFvAW2',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
