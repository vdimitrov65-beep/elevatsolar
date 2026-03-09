export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  
  const { email, name } = req.body;
  
  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.VITE_BREVO_API_KEY,
    },
    body: JSON.stringify({
      email,
      attributes: { FIRSTNAME: name },
      listIds: [3],
      updateEnabled: true,
    }),
  });

  if (response.ok || response.status === 204) {
    res.status(200).json({ success: true });
  } else {
    const err = await response.json();
    res.status(400).json({ error: err });
  }
}
