const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent";

const generateWorkout = async (req, res) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        message: "Gemini API Key not found",
      });
    }

    const {
      goal,
      targetMuscle,
      level,
      duration,
      equipment,
    } = req.body;

    if (
      !goal ||
      !targetMuscle ||
      !level ||
      !duration ||
      !equipment
    ) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const prompt = `
You are an expert fitness coach.

Generate ONE workout.

Goal: ${goal}

Target Muscle: ${targetMuscle}

Experience Level: ${level}

Workout Duration: ${duration} minutes

Equipment Available: ${equipment}

Return ONLY valid JSON.

{
  "title":"",
  "goal":"",
  "targetMuscle":"",
  "level":"",
  "duration":"",
  "equipment":"",
  "exercises":[
    {
      "name":"",
      "sets":0,
      "reps":"",
      "restSeconds":0
    }
  ]
}

Generate 5-7 exercises.

Do not return markdown.

Return ONLY JSON.
`;

    const response = await fetch(
      `${GEMINI_URL}?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.8,
            responseMimeType: "application/json",
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      return res.status(500).json({
        message: errorText,
      });
    }

    const data = await response.json();

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return res.status(500).json({
        message: "Empty AI Response",
      });
    }

    const workout = JSON.parse(text);

    return res.status(200).json(workout);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "AI Generation Failed",
    });
  }
};

module.exports = {
  generateWorkout,
};