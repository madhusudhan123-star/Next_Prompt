import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
  name: {
    type: String,
    required: true,
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/  , 'Name can only contain letters']
  },
  image:{
    type: String,
  }
});

const User = models.User || model("User", UserSchema);
export default User;