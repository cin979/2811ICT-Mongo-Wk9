module.exports = function(collection, id_old, obj_update){
  collection.updateOne({id:id_old}, {$set:obj_update}, function(err, res){
    if (err) {return console.log(err)}
    console.log("Entry Updated");
  });
}
