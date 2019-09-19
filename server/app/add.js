module.exports = function(collection, new_entry){
  if (collection.find({_id:new_entry._id})) {
    return console.log("Entry Exists At That ID")
  }

  collection.insertOne(new_entry, function(err, res){
    if (err) {
      return console.log(err)
    }
    console.log("Entry Added");
  });
}
