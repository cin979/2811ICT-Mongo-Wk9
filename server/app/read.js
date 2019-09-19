module.exports = function(collection){
  collection.find({}).toArray(function(err,res){
    if (err) {return console.log(err)}
    console.log(res);
  });
}
