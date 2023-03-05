const axios = require('axios');

class ControladorResultado{
    static listar(req, res){
        const query = req.query.resultado; 
        axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: query,
            apiKey: '215395ef7a3240febd535edb983bf181' 
          }
        })
        .then(response => {
          const articles = response.data.articles;
          res.render('resultado', { articles }); 
        })
        .catch(error => {
          console.error(error);
          res.send('Ha ocurrido un error al buscar las noticias');
        });
    }
}

module.exports = ControladorResultado;