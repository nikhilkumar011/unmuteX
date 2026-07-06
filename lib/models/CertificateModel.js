import mongoose  from "mongoose";
const schema = mongoose.Schema;

const certificateSchema = new schema({
    name:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true
    },
    certificate:{
        type:String,
        default:""
    },
    qrCode:{
        type:String,
        default:""
    }
},{timestamps:true})

const Certificate = mongoose.models.Certificate || mongoose.model("Certificate",certificateSchema);

export default Certificate;