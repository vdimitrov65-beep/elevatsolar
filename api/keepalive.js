// Daily read-only call to Brevo so the API key is never idle for 90 days.
// Triggered by the cron entry in vercel.json. Writes nothing to contacts.
export default async function handler(req, res) {
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers.authorization !== `Bearer ${secret}`) {
    return res.status(401).json({ ok: false });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/account", {
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
    });
    return res.status(response.ok ? 200 : 502).json({ ok: response.ok, status: response.status });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message });
  }
}
