import React, { useState, useEffect } from "react";

const scenarios = [
  {
    text: "You receive an email from the university's IT department saying your account will be deactivated unless you confirm your login within 24 hours. What do you do?",
    isScam: true,
    explanation:
      "Phishing! Always verify through the official website instead of clicking links in emails.",
    moneyChange: -50, // Lose money for falling for the scam
  },
  {
    text: "A friend recommends a new social media app and sends you a link. What do you do?",
    isScam: false,
    explanation:
      "It's okay to check out new apps, but always be cautious with links. Ask your friend if the app is legit.",
    moneyChange: 20, // Gain money for being cautious
  },
  {
    text: "You get a pop-up claiming your computer has a virus and needs an urgent fix. What do you do?",
    isScam: true,
    explanation:
      "Fake antivirus. Don't download anything from random pop-ups. Use trusted security software.",
    moneyChange: -100, // Lose money for falling for the scam
  },
  {
    text: "You receive a phone call from someone claiming to be from tech support, saying your computer has been hacked. What do you do?",
    isScam: true,
    explanation:
      "Scammers often use tech support calls as a ruse. Hang up and contact official support if concerned.",
    moneyChange: -75,
  },
  {
    text: "Your bank sends a text message asking you to verify a recent transaction via a provided link. What do you do?",
    isScam: true,
    explanation:
      "Banks never ask you to verify transactions via text. Visit the official site or call your bank directly.",
    moneyChange: -50,
  },
  {
    text: "You see an advertisement on social media offering a free trial of a premium service with no credit card required. What do you do?",
    isScam: false,
    explanation:
      "Free trials can be genuine, but always double-check the source before providing any personal info.",
    moneyChange: 30,
  },
  {
    text: "You receive an email regarding a tax refund with an attached form to complete your information. What do you do?",
    isScam: true,
    explanation:
      "Official tax agencies don't send unexpected emails with attachments. Verify through trusted channels.",
    moneyChange: -80,
  },
];


// END OF SCENARIO DATA //// END OF SCENARIO DATA //// END OF SCENARIO DATA //// END OF SCENARIO DATA //// END OF SCENARIO DATA //

export default function CybersecuritySimulator() {
  const [currentDay, setCurrentDay] = useState(0);
  const [currentScenario, setCurrentScenario] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [money, setMoney] = useState(500); // Start with 500 units of money
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  // End the game after 30 days
  useEffect(() => {
    if (currentDay >= 30) {
      setGameOver(true);
    }
  }, [currentDay]);

  const handleChoice = (choice) => {
    const correct = scenarios[currentScenario].isScam === choice;
    const moneyChange = scenarios[currentScenario].moneyChange;

    // Adjust money based on choice
    setMoney(money + (correct ? moneyChange : -moneyChange));
    setFeedback(
      correct
        ? `Correct! ${scenarios[currentScenario].explanation}`
        : `Incorrect. ${scenarios[currentScenario].explanation}`
    );

    setTimeout(() => {
      if (currentDay < 30) {
        setCurrentDay(currentDay + 1); // Advance the day
        setCurrentScenario((currentScenario + 1) % scenarios.length); // Cycle through scenarios
        setFeedback(null); // Reset feedback
      } else {
        setFeedback(`Game Over! Your final balance is: $${money}.`);
      }
    }, 3000);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "16px",
          right: "16px",
          backgroundColor: "#fff",
          padding: "8px 12px",
          borderRadius: "4px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          zIndex: 1000,
          color: "#374151",
        }}
      >
        Balance: ${money}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "16px",
          backgroundColor: "#f3f4f6",
          width: "100vw", // Ensure the container takes the full width of the viewport
        }}
      >
        {!gameStarted ? (
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              padding: "24px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              borderRadius: "8px",
              backgroundColor: "#fff",
            }}
          >
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#374151" }}>
              Cybersecurity Awareness Simulator
            </h1>
            <button
              onClick={startGame}
              style={{
                marginTop: "16px",
                padding: "12px 24px",
                backgroundColor: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Start Game
            </button>
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              padding: "24px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              borderRadius: "8px",
              backgroundColor: "#fff",
            }}
          >
            {!gameOver ? (
              <>
                <p style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#374151" }}>
                  Day {currentDay + 1}: {scenarios[currentScenario].text}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "16px",
                  }}
                >
                  <button
                    onClick={() => handleChoice(true)}
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#2563eb",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Scam
                  </button>
                  <button
                    onClick={() => handleChoice(false)}
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#059669",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Not a Scam
                  </button>
                </div>
                {feedback && (
                  <p
                    style={{
                      marginTop: "16px",
                      fontSize: "0.875rem",
                      color: "#374151",
                    }}
                  >
                    {feedback}
                  </p>
                )}
              </>
            ) : (
              <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#374151" }}>
                Game Over! Your final balance is: ${money}.
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
