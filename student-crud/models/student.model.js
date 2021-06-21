module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      age: String,
      status: Boolean
    },
    { timestamps: true }
  );
 
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  }); 
 
  const Students = mongoose.model("students", schema);
  return Students;
};
 