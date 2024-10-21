import db from "@/lib/db";
import { NextResponse } from "next/server";
import {hash} from 'bcrypt'
import { FormSchema } from "@/app/FormSchema";

export async function POST(req: Request){
    try{
        console.log("POST request received at /api/user");
        const body=await req.json();
        console.log("Request body:", body);
        
        try {
            const { email, username, password } = FormSchema.parse(body);
        } catch (validationError) {
            console.error("Validation error:", validationError);
            return NextResponse.json({ message: "Invalid input", error: validationError }, { status: 400 });
        }
        const { email, username, password } = FormSchema.parse(body);
        //check if email already exists

        const existingUserByEmail= await db.user.findUnique({
            where:{email: email}
        });
        if(existingUserByEmail){
            return NextResponse.json({user: null, message:"User with this email already exists"}, {status: 409})
        }

         //check if username already exists

         const existingUserByUsername= await db.user.findUnique({
            where:{username: username}
        });
        if(existingUserByUsername){
            return NextResponse.json({user: null, message:"User with this username already exists"}, {status: 409})
        }

        const hashedPassword=await hash(password,10)

        const newUser = await db.user.create({
            data:{
             username,
             email,
             password: hashedPassword,
             name: ""
            }
        })
        const {password: newUserPassword,...rest}=newUser
        console.log("New user created:", newUser);
        return NextResponse.json({user:rest, message: "User created successfully"},{status: 201});
    }catch(error){
        return NextResponse.json({message: error},{status: 500});
        console.log(error)
    }
}