export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const videoUrl = searchParams.get("videoUrl");

  if (!videoUrl) {
    return new Response("No video URL provided", { status: 400 });
  }

  const response = await fetch(videoUrl);

  if (!response.ok) {
    return new Response("Failed to fetch video", { status: 500 });
  }

  const videoBuffer = await response.arrayBuffer();

  return new Response(videoBuffer, {
    headers: {
      "Content-Type":
        response.headers.get("content-type") || "application/octet-stream",
    },
  });
}
