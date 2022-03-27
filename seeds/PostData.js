const { Post } = require('../models');

const postData = [
  {
    title: 'Exclusive heuristic software',
    post_text:
      'consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam',
    user_id: 10,
  },
  {
    title: 'Right-sized global parallelism',
    post_text:
      'id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam',
    user_id: 9,
  },
  {
    title: 'Reverse-engineered logistical open architecture',
    post_text:
      'donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac',
    user_id: 4,
  },
  {
    title: 'Cross-group client-driven benchmark',
    post_text:
      'turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum',
    user_id: 7,
  },
  {
    title: 'Enterprise-wide stable function',
    post_text:
      'nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy',
    user_id: 8,
  },
  {
    title: 'Configurable solution-oriented data-warehouse',
    post_text:
      'vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla',
    user_id: 9,
  },
  {
    title: 'Integrated dedicated customer loyalty',
    post_text:
      'turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu',
    user_id: 8,
  },
  {
    title: 'Enhanced object-oriented focus group',
    post_text: 'id nisl venenatis lacinia aenean sit amet justo morbi ut odio',
    user_id: 10,
  },
  {
    title: 'Self-enabling empowering service-desk',
    post_text:
      'aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum',
    user_id: 10,
  },
  {
    title: 'Synergistic content-based strategy',
    post_text:
      'porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper',
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
