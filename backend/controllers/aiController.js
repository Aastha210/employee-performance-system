const axios = require("axios");

exports.getRecommendation = async (req, res) => {

  try {

    const employee = req.body;

    if (
      !employee ||
      !employee.name
    ) {

      return res.status(400).json({
        message: "Employee not selected",
      });

    }

    const prompt = `
    Give:
    1. Promotion Recommendation
    2. Employee Ranking
    3. Training Suggestions
    4. AI Feedback

    Employee Details:

    Name: ${employee.name}
    Department: ${employee.department}
    Skills: ${employee.skills}
    Performance Score: ${employee.performanceScore}
    Experience: ${employee.experience}
    `;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization:
            `Bearer ${process.env.OPENROUTER_API_KEY}`,

          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);

    res.json({
      recommendation:
        response.data.choices[0].message.content,
    });

  } catch (error) {

    console.log(error.response?.data || error.message);

    res.status(500).json({
      message:
        error.response?.data || error.message,
    });

  }
};