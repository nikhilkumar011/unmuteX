import mongoose from 'mongoose'
const schema =  mongoose.Schema;

const FeedbackSchema = new schema({
    name:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        default:5
    },
    role:{
        type:String,
        default:"Member"
    },
    avatar:{
        type:String,
        default:""
    }
},{timestamps:true})

const Feedback =
  mongoose.models.Feedback ||
  mongoose.model('Feedback', FeedbackSchema)

export default Feedback
