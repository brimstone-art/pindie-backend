const allowedCors = [
  "http://localhost:3001",
  "http://localhost:3000",
  "http://br-stone.nomoredomainswork.ru",
  "https://br-stone.nomoredomainswork.ru",
  "http://br-stone.nomoredomainswork.ru",
  "https://br-stone.nomoredomainswork.ru",
  "https://br-domain.nomoredomainswork.ru",
  "https://br-domain.nomoredomainswork.ru/api/games",
  "https://br-domain.nomoredomainswork.ru/api/categories",
  "https://br-domain.nomoredomainswork.ru/api"
];

function cors(req, res, next) {
  const { origin } = req.headers;

  if (allowedCors.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
  next();
}

module.exports = cors;
