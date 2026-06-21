import Feedback from '@/lib/models/Feedback.js'
import { connectDb } from '@/lib/db.js'
import fs from 'fs'
import path from 'path'

// Local JSON database file path for development isolation
const LOCAL_FILE = path.join(process.cwd(), 'feedback-local.json');

function readLocal() {
  if (!fs.existsSync(LOCAL_FILE)) {
    return [];
  }
  try {
    return JSON.parse(fs.readFileSync(LOCAL_FILE, 'utf8'));
  } catch (e) {
    return [];
  }
}

function writeLocal(data) {
  fs.writeFileSync(LOCAL_FILE, JSON.stringify(data, null, 2), 'utf8');
}

export async function POST(request) {
  const body = await request.json();
  const { name, feedback, rating, role, avatar } = body;

  if (!name || !feedback) {
    return Response.json(
      { message: "All fields are mandatory" },
      { status: 400 }
    );
  }

  // If local DB is enabled, write to a local JSON file to protect the live website database!
  if (process.env.USE_LOCAL_DB === 'true') {
    const localData = readLocal();
    const newEntry = {
      _id: Date.now().toString(),
      name,
      feedback,
      rating: Number(rating) || 5,
      role: role || "Member",
      avatar: avatar || "",
      createdAt: new Date().toISOString()
    };
    localData.push(newEntry);
    writeLocal(localData);

    return Response.json(
      { message: "Feedback saved locally (Isolated from Production!)" },
      { status: 200 }
    );
  }

  // Production path
  await connectDb();
  await Feedback.create({
    name,
    feedback,
    rating: Number(rating) || 5,
    role: role || "Member",
    avatar: avatar || ""
  });

  return Response.json(
    { message: "Feedback sent successfully!" },
    { status: 200 }
  );
}

export async function GET() {
  try {
    // If local DB is enabled, read from local JSON file
    if (process.env.USE_LOCAL_DB === 'true') {
      const localData = readLocal();
      return Response.json(localData, { status: 200 });
    }

    // Production path
    await connectDb()
    const data = await Feedback.find()
    return Response.json(data, { status: 200 })
  } catch (error) {
    return Response.json(
      { message: error.message },
      { status: 500 }
    )
  }
}