import mongoose from "mongoose";
import qrcode from 'qrcode'
import Certificate from "./models/CertificateModel";
import data from './userdata.json'
import { connectDb } from "./db";

export async function insertData(){
    await connectDb();
    const newdata = await Certificate.insertMany(data);
    for(let i=0;i<newdata.length;i++){
        const qrCodeData = `https://unmutex-seven.vercel.app/verify/${newdata[i].name}`;
        const qrCodeImage = await qrcode.toDataURL(qrCodeData);
        newdata[i].qrCode = qrCodeImage;
        await newdata[i].save();
    }

    return Response.json({message:"Data inserted successfully!"});
}

// new comment