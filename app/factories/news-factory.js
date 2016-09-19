app.factory('NewsFactory', NewsFactory)

NewsFactory.$inject = [];

function NewsFactory() {
  let news = {
    title: 'Neet',
    img: './images/neet-news.png'
  }

  return {
    news: news
  }
}
