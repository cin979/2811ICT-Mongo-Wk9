module.exports = function(collection, del_id){
  collection.deleteOne({id:del_id}, function(err,res){
    if (err) {return console.log(err)}
    console.log("Entry Removed");
  });
}
