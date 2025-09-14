// api/gamepasses.js
module.exports = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: "Falta userId" });
    }

    const response = await fetch(
      `https://games.roblox.com/v2/users/${userId}/game-passes?limit=50`
    );

    if (!response.ok) {
      throw new Error("Error en la API de Roblox");
    }

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
