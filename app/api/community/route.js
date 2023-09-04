import {connect} from '../../../dbConfig/db'
import Image from '../../../model/imageModel';
import { NextResponse } from "next/server";


connect();

export async function POST(request){
    try {
        const reqBody = await request.json();
        console.log(reqBody);
        const {url} = reqBody
        const newImage = new Image({
            url
        })

        const savedimage = await newImage.save();
        return NextResponse.json({
            message: "image created successfully",
            success: true,
            savedimage

        })

    } catch (error) {
        console.log(error);
        return error
    }
}

export async function GET(){
    try {
        const images = await Image.find()
        return NextResponse.json({
            results:images
        })

    } catch (error) {
        return error
    }
}
