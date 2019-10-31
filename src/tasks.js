import { scheduleJob } from 'node-schedule';

class AuctionListener {
    
    constructor(db) {
        this.db = altura;
    }



}

var j = scheduleJob('42 * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
})

module.exports = AuctionListener