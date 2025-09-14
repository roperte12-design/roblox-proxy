// api/gamepasses.js
export default async function handler(req, res) {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ error: "Falta userId" });
  }

  try {
    const response = await fetch(
      `https://games.roblox.com/v2/users/${userId}/game-passes?limit=50`
    );
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Error consultando Roblox API" });
  }
}
