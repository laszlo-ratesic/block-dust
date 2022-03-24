const { Comment } = require("../models");

const commentData = [
  {
    comment_text:
      "at vulputate vitae nisl aenean lectus pellentesque eget nunc",
    user_id: 8,
    post_id: 6,
  },
  {
    comment_text: "sodales sed tincidunt eu felis fusce posuere felis sed",
    user_id: 6,
    post_id: 10,
  },
  {
    comment_text:
      "in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis",
    user_id: 9,
    post_id: 10,
  },
  {
    comment_text:
      "nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede",
    user_id: 5,
    post_id: 4,
  },
  {
    comment_text:
      "scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas",
    user_id: 10,
    post_id: 10,
  },
  {
    comment_text:
      "amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text:
      "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet",
    user_id: 7,
    post_id: 10,
  },
  {
    comment_text:
      "nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text:
      "facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque",
    user_id: 3,
    post_id: 6,
  },
  {
    comment_text:
      "lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea",
    user_id: 9,
    post_id: 7,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
