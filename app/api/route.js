import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const cloudName = "dhyohf42x";
  const folderName = "myfolder";
  const apiKey = "831122935673456";
  const apiSecret = "iwzoTJ6MuzwbRcumtIihLXd1zAw";

  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`;

  const query = {
    expression: `folder=${folderName}`,
    max_results: 30,
  };

  try {
    const response = await axios.post(url, query, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    return NextResponse.json(response.data.resources);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
