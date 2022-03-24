const { User } = require("../models");

const userData = [
  {
    username: "drecke0",
    email: "swebburn0@squidoo.com",
    password: "gZDDBEgTehws",
  },
  {
    username: "mpreece1",
    email: "madolf1@csmonitor.com",
    password: "jUHC9kF",
  },
  {
    username: "hmallinar2",
    email: "kbeswell2@oaic.gov.au",
    password: "2QcRSeI",
  },
  {
    username: "fbortolazzi3",
    email: "efibbit3@timesonline.co.uk",
    password: "DJnC048aLB",
  },
  {
    username: "jgive4",
    email: "hanthoney4@flickr.com",
    password: "PEcgrHta",
  },
  {
    username: "gsurmeyers5",
    email: "rdeaton5@mail.ru",
    password: "R9y2zG",
  },
  {
    username: "pmcvee6",
    email: "dtellett6@arstechnica.com",
    password: "8WtqwXS",
  },
  {
    username: "bratley7",
    email: "gwellfare7@google.es",
    password: "S5zlQVp",
  },
  {
    username: "molifaunt8",
    email: "zbernadot8@ameblo.jp",
    password: "EGerdMj",
  },
  {
    username: "arudinger9",
    email: "aedgeson9@lulu.com",
    password: "73Nr6CVa",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;