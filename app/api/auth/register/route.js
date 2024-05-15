import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectMongoDB from "@/service";
import userModel from "@/models/user-model";

export async function POST(request) {
  const { fname, lname, email, password } = await request.json();

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const newUser = {
    name: `${fname} ${lname}`,
    email: email,
    password: hash,
    image: null,
  };

  try {
    await connectMongoDB();
    const user = await userModel.create(newUser);
    return NextResponse.json({
      status: 201,
      message: "New user created.",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "There was an error occurred!",
      err: error,
    });
  }
}
