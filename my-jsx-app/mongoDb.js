import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

// Load environment variables from passcode.env
dotenv.config({ path: "passcode.env" });

// Check if MONGO_URI is defined
if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined in passcode.env file");
}

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
