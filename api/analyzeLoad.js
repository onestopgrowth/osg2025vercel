export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { totalPay, loadedMiles, deadheadMiles, truckType, fuelCost, weather, routeData } = req.body;

    const prompt = `
        You are an AI trucking consultant. Analyze this load and provide a decision (Take, Negotiate, or Decline) with reasoning.
        Consider these factors:

        - Total Pay: $${totalPay}
        - Loaded Miles: ${loadedMiles}
        - Deadhead Miles: ${deadheadMiles}
        - Truck Type: ${truckType}
        - Fuel Cost: $${fuelCost}
        - Weather Conditions: ${weather}
        - Route Efficiency Score: ${routeData.efficiencyScore}
        - Estimated Traffic & Delays: ${routeData.trafficDelays}

        Provide a professional yet direct response.
    `;

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",  // Use GPT-3.5 for speed, switch to "gpt-4" if needed
                messages: [
                    { role: "system", content: "You are an AI trucking consultant, analyzing load profitability." },
                    { role: "user", content: prompt }
                ]
            })
        });

        const data = await response.json();
        const aiResponse = data.choices[0].message.content;

        res.status(200).json({ decision: aiResponse });
    } catch (error) {
        res.status(500).json({ error: "AI request failed" });
    }
}