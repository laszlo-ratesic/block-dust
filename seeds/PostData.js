const { Post } = require("../models");

const postData = [
  {
    post_text:
      "mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus",
    user_id: 6,
  },
  {
    post_text:
      "nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit",
    user_id: 10,
  },
  {
    post_text:
      "vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam",
    user_id: 5,
  },
  {
    post_text:
      "in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam",
    user_id: 10,
  },
  {
    post_text:
      "dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes",
    user_id: 1,
  },
  {
    post_text:
      "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus",
    user_id: 9,
  },
  {
    post_text:
      "vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    user_id: 4,
  },
  {
    post_text:
      "quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere",
    user_id: 5,
  },
  {
    post_text:
      "vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien",
    user_id: 2,
  },
  {
    post_text:
      "ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit",
    user_id: 8,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;