export async function POST(req) {
  try {
    const { url } = await req.json();

    if (!url) {
      return Response.json({ error: "No URL provided" }, { status: 400 });
    }

    const response = await fetch(
      `https://fastsaverapi.com/get-info?url=${encodeURIComponent(
        url,
      )}&token=${process.env.FASTSAVER_TOKEN}`,
    );

    const data = await response.json();

    if (data.error) {
      return Response.json(
        { error: "Failed to fetch media info" },
        { status: 500 },
      );
    }

    // FastSaver returns only one download_url
    const formats = [
      {
        quality: "Default",
        url: data.download_url,
      },
    ];

    return Response.json({
      formats,
      thumb: data.thumb,
      caption: data.caption,
      platform: data.hosting,
    });
  } catch (err) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
