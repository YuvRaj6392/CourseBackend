module.exports = mongoose => {
  const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          firstName: {type: String, required: true},
          lastName: String,
          email: { type : String , unique : true, required : true , dropDups: true},
          password: {type: String, required: true},
          role: {type: String, default: 'user'}, /*types: admin ,user*/
          isLoggedIn: Boolean,
          token: String
        },
        { timestamps: true }
      )
    );
  
    return User;
  };