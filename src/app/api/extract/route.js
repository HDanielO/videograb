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

    // console.log(data);

    if (!data.download_url) {
      return Response.json(
        { error: "Failed to fetch media info" },
        { status: 500 },
      );
    }

    return Response.json({
      formats: [
        {
          quality: "Default",
          url: `/api/download-proxy?videoUrl=${encodeURIComponent(
            data.download_url,
          )}`,
        },
      ],
      thumb: data.thumb,
      caption: data.caption,
      platform: data.hosting,
    });
  } catch (err) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
