import Certificate from "@/lib/models/CertificateModel";
import { connectDb } from "@/lib/db";

export async function POST(request) {
  await connectDb();

  const { name } = await request.json();

  if (name) {
    return Response.json(
      { message: "All fields are mandatory" },
      { status: 400 }
    );
  }

  const data = await Certificate.findOne({ name });

  if (!data) {
    return Response.json(
      { message: "No Certificate found" },
      { status: 404 }
    );
  }

  return Response.json(data);
}