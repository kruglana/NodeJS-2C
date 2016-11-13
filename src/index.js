  function canonize(url){
    const re = new RegExp('@?(https?:)?(\/\/)?((www.)?(telegram|vk|vkontakte|twitter|github|xn--80adtgbbrh1bc.xn--p1ai|medium)[^\/]*\/)?([a-zA-Z0-9\._@]*)([^\/]*\/)?','i');
    const username = url.match(re);
    return username;
  }

  import express from 'express';
  import cors from 'cors';

  const app = express();
  app.use(cors());

  app.get('/taskMy2C', (req, res) =>{
    const url = req.query.username;
    try{
      var answer;
      var newStr = canonize(url);
      if(newStr[6][0]=='@'){
        answer = newStr[6];
      }
      else{
        answer = '@'+newStr[6];
      }
      res.send(answer.toString());
    }
    catch(err){
     res.send('Invalid fullname');
   }
  });

  app.listen(3000, () => {
    console.log('Your app listening on port 3000!');
  });
