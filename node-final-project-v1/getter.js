function mapUsers(users) {
  return { data: users, count: users.length }; 
}

function mapArticles(articles) {
  return { data: articles, count: articles.length }; // TODO: replace this
}
let users = [
  {
    id: 1,
    username: "isrotrip",
    password: "PhT1Oky01",
    gender: "male",
  },
  {
    id: 2,
    username: "dmtrxw",
    password: "oYt2Thj9w",
    gender: "male",
  },
];
let articles = [
  {
    id: 1,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 6,
  },
  {
    id: 2,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 5,
  },
];
export default mapUsers;
export {mapArticles} ;

// TODO: answer here