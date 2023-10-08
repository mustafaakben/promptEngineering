document.getElementById("generate-button").addEventListener("click", generateMeal);

async function generateMeal() {
    // Extract the ingredients input from the user
    const ingredients = document.getElementById("ingredients").value;

    if (!ingredients) {
        alert("Please enter some ingredients!");
        return;
    }

    // Disable the button and show loading message
    document.getElementById("generate-button").disabled = true;
    const mealIdeasDiv = document.getElementById("meal-ideas");
    mealIdeasDiv.innerHTML = "<p>Loading meal ideas...</p>";
    mealIdeasDiv.style.display = "block"; 

    // Message for the API
    const messages = [
        {
            role: "system",
            content: "You are a helpful assistant."
        },
        {
            role: "user",
            content: `What can I cook with ${ingredients}?`
        }
    ];
    
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Add your API key here
                "Authorization": "Bearer YOUR_API_KEY_HERE"
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo-16k",
                messages: messages
            })
        });

        const data = await response.json();
        // Display the assistant’s reply
        displayMealIdeas(data.choices[0].message.content);

    } catch (error) {
        console.error("Error occurred:", error);
        mealIdeasDiv.innerHTML = "<p>Failed to generate meal ideas. Please try again.</p>";
    } finally {
        // Re-enable the button after processing
        document.getElementById("generate-button").disabled = false;
    }
}

function displayMealIdeas(mealIdea) {
    const mealIdeasDiv = document.getElementById("meal-ideas");
    // Replace newline characters with HTML line breaks
    const formattedMealIdea = mealIdea.replace(/\n/g, "<br>");
    mealIdeasDiv.innerHTML = `<p>${formattedMealIdea}</p>`;
}