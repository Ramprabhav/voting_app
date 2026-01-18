const mongoose=require('mongoose');
//const bcrypt =require('bcript');

//define the person schema
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    age: {
        type:Number
    },
    mobile: {
        type:String,
    },
    email: {
          type:String,
    },
    address: {
        type:String,
        required: true
    },
    aadharcardNumber: {
        type:Number,
        required:true,
        unqiue:true
    },
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    role: {
        type:String,
        enum:['voter','admin'],
        default:'voter'
    },
    isVoted:{
        type:Boolean,
        default:false
    }
});



userSchema.pre('save', async function (next) {
  const user = this;

  // Hash password only if it is new or modified
  if (!user.isModified('password')) {
    return next();
  }

  try {
    // Generate salt
    const salt = await bcrypt.genSalt(10);

    // Hash password
    const hashedPassword = await bcrypt.hash(user.password, salt);

    // Replace plain password with hashed password
    user.password = hashedPassword;

    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.comparePassword = async function(candidatePassword){
    try{
        const ismatch = await bcrypt.compare(candidatePassword,this.password);
        return ismatch;
    }catch(err){
        throw err;
    }
}


const User=mongoose.model('User',userSchema);
module.exports = User;