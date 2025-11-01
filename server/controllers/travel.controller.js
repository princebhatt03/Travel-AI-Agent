const Travel = require('../models/travel.model');
const OpenAI = require('openai');

// Initialize OpenAI client with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Generate Travel Plan Controller
exports.generateTravelPlan = async (req, res) => {
  try {
    const { destination, startDate, endDate, budget, interests, userId } =
      req.body;

    if (!destination || !startDate || !endDate || !budget || !interests) {
      return res
        .status(400)
        .json({ success: false, message: 'All fields are required.' });
    }

    // Create a prompt for OpenAI
    const prompt = `
You are a professional travel planner.
Generate a detailed travel itinerary for:
Destination: ${destination}
Travel Dates: ${startDate} to ${endDate}
Budget: $${budget}
Interests: ${interests}

Include:
- Best places to visit
- Suggested day-by-day itinerary
- Local food recommendations
- Travel tips
Format it neatly for easy reading.
`;

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // fast + affordable for such tasks
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.8,
    });

    const plan = response.choices[0].message.content.trim();

    // Optionally save the plan in DB
    const travel = await Travel.create({
      userId: userId || null,
      destination,
      startDate,
      endDate,
      budget,
      interests,
      plan,
    });

    res.status(200).json({
      success: true,
      plan,
      data: travel,
    });
  } catch (error) {
    console.error('Travel Plan Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate travel plan',
      error: error.message,
    });
  }
};
