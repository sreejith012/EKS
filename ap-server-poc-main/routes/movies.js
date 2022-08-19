const userRoutes = (app, fs) => {
    // variables
    const dataPath = './data/movies.json';
    // READ
    app.get('/users', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        const jokes = JSON.parse(data).filter(it => it.year === 1990);;
        console.log(jokes);
       res.send(jokes);

        // console.log(data.filter(it => it.year === '2000'));
        // if(data[0].year != '1990'){
            // console.log(data['0']);
            // for (var i = 0; i < data.length; i++) {
            //     var object = data[i];
            //     for (var property in object) {
            //       console.log('item ' + i + ': ' + property + '=' + object[property]);
            //     }
            // }
        // }  
    //    res.send(JSON.parse(data));
        // console.log(result);

        // var rta =  datafilter.filter(it => it.year === '2000');
        // console.log(rta);

      });
    });
  };
  
  module.exports = userRoutes;