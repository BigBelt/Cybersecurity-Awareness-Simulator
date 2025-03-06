import React, { useState, useEffect } from "react";

import scam1 from './assets/scam-1.png';
import scam2 from './assets/scam-2.png';
import scam3 from './assets/scam-3.png';
import scam4 from './assets/scam-4.png';
import scam5 from './assets/scam-5.png';
import scam6 from './assets/scam-6.png';
import scam8 from './assets/scam-8.png';
import scam9 from './assets/scam-9.png';
import scam10 from './assets/scam-10.png';
import scam11 from './assets/scam-11.png';
import scam12 from './assets/scam-12.png';
import scam13 from './assets/scam-13.png';
import scam14 from './assets/scam-14.jpg';
import scam15 from './assets/scam-15.png';
import scam16 from './assets/scam-16.png';

const getRandomMoneyChange = () => {
  const increments = [150, 200, 250, 300, 350, 400, 450, 500];
  return increments[Math.floor(Math.random() * increments.length)];
};

const scenarios = [
  {
    // Scenario 1
    text: "You recieve the above email from Google. It asks you to click a link which will take you to a page to verify your account details. Is this a scam?",
    isScam: true,
    explanation:
      "Phishing! This is not a valid Google domain. Always check the sender's email address and look for spelling mistakes in the URL.",
    moneyChange: -getRandomMoneyChange(), // Lose money for falling for the scam
    image: scam1
  },
  {
    // Scenario 2
    text: "You recieve the following email from your bank. Is this a scam?",
    isScam: true,
    explanation:
      "Yes. Your bank usually uses your full name in emails. Furthermore, the email address for the sender is incorrect.",
    moneyChange: -getRandomMoneyChange(), // Lose money for falling for the scam
    image: scam2
  },
  {
    // Scenario 3
    text: "You recieve the following email from a platform you use regularly. Is this a scam?",
    isScam: false,
    explanation:
      "No. The email is from a legitimate source. Always check the sender's email address and look for spelling mistakes in the URL.",
    moneyChange: 0, // Nothing gained nothing lost
    image: scam3
  },
  {
    // Scenario 4
    text: "You recieve the following email on your work email address. Is this a scam?",
    isScam: true,
    explanation:
      "Yes. The email is from an unknown sender and contains a suspicious attachment. Do not open attachments from unknown sources.",
    moneyChange: -getRandomMoneyChange(), // Lose money for falling for the scam
    image: scam4
  },

  {
    // Scenario 5
    text: "You recieve the following email from Doordash. Is this a scam?",
    isScam: true,
    explanation:
      "Yes. The URL is incomplete (...notificationcenter.co) This is not a valid email address.",
    moneyChange: -getRandomMoneyChange(), // Lose money for falling for the scam
    image: scam5
  },

  {
    // Scenario 6
    text: "You recieve the following email from Apple. Is this a scam?",
    isScam: true,
    explanation:
      "Yes, the URL for Apple Support is typed incorrectly. Always check the sender's email address and look for spelling mistakes in the URL.",
    moneyChange: -getRandomMoneyChange(), // Lose money for falling for the scam
    image: scam6
  },

  {
    // Scenario 8
    text: "You recieve the following email from Nord VPN. Is this a scam?",
    isScam: false,
    explanation:
      "No. The email is from a legitimate source. Always check the sender's email address and look for spelling mistakes in the URL.",
    moneyChange: 0,
    image: scam8
  },

  {
    // Scenario 9
    text: "You recieve the following email relating to your Binance Account. Is this a scam?",
    isScam: true,
    explanation:
      "Yes, the sender email address is incorrect. Always check the sender's email address and look for spelling mistakes in the URL.",
    moneyChange: -getRandomMoneyChange(), // Lose money for falling for the scam
    image: scam9
  },

  {
    // Scenario 10
    text: "You recieve the following email from Amazon. Is this a scam?",
    isScam: false,
    explanation:
      "No. The email is from a legitimate source. Always check the sender's email address and look for spelling mistakes in the URL.",
    moneyChange: 0,
    image: scam10
  },

  {
    // Scenario 11
    text: "You recieve the following email from Venmo. Is this a scam?",
    isScam: false,
    explanation:
      "No. The email is from a legitimate source. Always check the sender's email address and look for spelling mistakes in the URL.",
    moneyChange: 0,
    image: scam11
  },

  {
    // Scenario 12
    text: "You recieve the following email. Is this a scam?",
    isScam: true,
    explanation:
      "Yes. The email is from an unknown sender and contains has a deal that is too good to be true. This is a common scam.",
    moneyChange: -getRandomMoneyChange(), // Lose money for falling for the scam
    image: scam12
  },

  {
    // Scenario 13
    text: "You recieve the following email from Sharepoint. Is this a scam?",
    isScam: true,
    explanation:
      "Yes. The email sender's URL is incorrect. Always check the sender's email address and look for spelling mistakes in the URL. Furthermore, Sharepoint does not usually send emails like this.",
    moneyChange: -getRandomMoneyChange(), // Lose money for falling for the scam
    image: scam13
  },

  {
    // Scenario 14
    text: "You get a text message saying you have an unpaid car toll due by the end of the day, directing you to a link to pay it. Is this a scam?",
    isScam: true,
    explanation:
      " This is a scam. You will never get a text message telling you to pay a toll.",
    moneyChange: -getRandomMoneyChange(), // Lose money for falling for the scam
    image: scam14
  },

  {
    // Scenario 15
    text: "You recieve the following email from Paypal. Is this a scam?",
    isScam: true,
    explanation:
      "Yes. The email is from a personal email address and contains a suspicious attachment. Always check the sender's email address and look for spelling mistakes in the URL.",
    moneyChange: -getRandomMoneyChange(), // Lose money for falling for the scam
    image: scam15
  },


  {
    // Scenario 16
    text: "You recieve the following text from Temu. Is this a scam?",
    isScam: true,
    explanation:
      "This is a scam. The address that the text message is from is not related to the company. If it sounds too good to be true, it probably is.",
    moneyChange: -getRandomMoneyChange(), // Lose money for falling for the scam
    image: scam16
  },

  {
    // Scenario 17
    text: "You miss a call from an unknown number, from a location very far away from you, and you see that they are calling you back. Is this a scam?",
    isScam: true,
    explanation:
      "This is a scam, you shouldn’t answer unknown numbers as scammers can use urgency to force you into tough decisions. If it is something important, they will leave a voicemail or text message.",
    moneyChange: -getRandomMoneyChange(), // Lose money for falling for the scam
  },

  {
    // Scenario 18
    text: "You get a phone call from your best friend saying that they are in jail and need you to wire them money to bail them out. Is this a scam?",
    isScam: true,
    explanation:
      "This is a scam. Scammers are able to impersonate voices on the phone and use intense situations to manipulate your emotions.",
    moneyChange: -getRandomMoneyChange(), // Lose money for falling for the scam
  },

  {
    // Scenario 19
    text: "You have been applying to jobs online for months, with no interest. If you don’t get one soon, you might not have enough money for rent. You get a text message saying they found your application, asking if you want a job. Is this a scam?",
    isScam: true,
    explanation:
      "This is a scam. Scammers can use your personal information to manipulate you into giving them more information.",
    moneyChange: -getRandomMoneyChange(), // Lose money for falling for the scam
  },

  {
    // Scenario 20
    text: "You receive a text message from 'Netflix Support' saying your account has been suspended and you need to update your payment information. Is this a scam?",
    isScam: true,
    explanation: 
      "This is a scam. Netflix and other streaming services will never ask for payment information via text message. They will notify you through the app or their website.",
    moneyChange: -getRandomMoneyChange(),
  },

  {
    // Scenario 21
    text: "You receive an email about winning an iPhone 15 from a survey you don't remember taking. All you need to do is pay for shipping. Is this a scam?",
    isScam: true,
    explanation:
      "This is a scam. You cannot win a prize from a contest you never entered. Legitimate contests don't ask for shipping payments.",
    moneyChange: -getRandomMoneyChange(),
  },

  {
    // Scenario 22
    text: "Your college's financial aid office sends an email from their official .edu domain about your upcoming disbursement. Is this a scam?",
    isScam: false,
    explanation:
      "This is legitimate. The email is from an official .edu domain and financial aid offices regularly communicate about disbursements.",
    moneyChange: 0,
  },

  {
    // Scenario 23
    text: "You receive a LinkedIn message from a recruiter whose profile shows they've been active for 5+ years and has connections to real companies. Is this a scam?",
    isScam: false,
    explanation:
      "This appears legitimate. The profile has a long history and verifiable connections. However, always verify job opportunities through official channels.",
    moneyChange: 0,
  },

  {
    // Scenario 24
    text: "You receive a WhatsApp message from an unknown international number claiming to be a distant relative who needs urgent financial help. Is this a scam?",
    isScam: true,
    explanation:
      "This is a scam. Never send money to unknown contacts, even if they claim to be family. Verify their identity through other family members first.",
    moneyChange: -getRandomMoneyChange(),
  }
];


// END OF SCENARIO DATA //// END OF SCENARIO DATA //// END OF SCENARIO DATA //// END OF SCENARIO DATA //// END OF SCENARIO DATA //


const PAYDAY = 15; // Day when user gets paid
const PAYDAY_AMOUNT = 1500; // Amount user gets paid
const SCENARIO_CHANCE = 0.7; // 70% chance of getting a scenario each day


export default function CybersecuritySimulator() {
  const [currentDay, setCurrentDay] = useState(0);
  const [currentScenario, setCurrentScenario] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [money, setMoney] = useState(1500);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [remainingScenarios, setRemainingScenarios] = useState([...scenarios]);
  const [showAbout, setShowAbout] = useState(false);
  const [showCredits, setShowCredits] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  // Main menu functionality
  const showMainMenu = () => {
    setGameStarted(false);
    setGameOver(false);
    setCurrentDay(0);
    setMoney(1500);
    setCurrentScenario(null);
    setFeedback(null);
    setRemainingScenarios([...scenarios]);
    setShowAbout(false);
    setShowCredits(false);
    setShowNextButton(false);
  };

  // Get a random scenario and remove it from remaining scenarios
  const getRandomScenario = () => {
    if (remainingScenarios.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * remainingScenarios.length);
    const scenario = remainingScenarios[randomIndex];
    setRemainingScenarios(prev => prev.filter((_, index) => index !== randomIndex));
    return scenario;
  };

  // Modified handleChoice function
  const handleChoice = (choice) => {
    const correct = currentScenario.isScam === choice;
    const moneyChange = currentScenario.moneyChange;

    // Only deduct money if incorrect, add money if correct and moneyChange is positive
    setMoney(prevMoney => {
      const newMoney = correct ? (moneyChange > 0 ? prevMoney + moneyChange : prevMoney) : prevMoney - Math.abs(moneyChange);
      if (newMoney < 0) {
        setGameOver(true);
      }
      return newMoney;
    });

    setFeedback(
      correct
        ? `Correct! ${currentScenario.explanation}`
        : `Incorrect. ${currentScenario.explanation}`
    );

    // Show the "Next" button
    setShowNextButton(true);
  };

  // New function to handle daily progression
  const progressDay = () => {
    const nextDay = currentDay + 1;
    setCurrentDay(nextDay);
    setShowNextButton(false);
    setFeedback(null); // Clear feedback when progressing to the next day
    
    // Handle payday
    if (nextDay === PAYDAY) {
      setMoney(prev => {
        const newMoney = prev + PAYDAY_AMOUNT;
        if (newMoney < 0) {
          setGameOver(true);
        }
        return newMoney;
      });
      setFeedback(`Payday! You received $${PAYDAY_AMOUNT}!`);
      setTimeout(() => setFeedback(null), 3000);
    }

    // Determine if there should be a scenario today
    if (Math.random() < SCENARIO_CHANCE) {
      const newScenario = getRandomScenario();
      setCurrentScenario(newScenario);
    } else {
      setCurrentScenario(null);
      setFeedback("Nothing notable happened today.");
      setTimeout(() => setFeedback(null), 3000);
    }

    // Check for game over
    if (nextDay >= 30) {
      setGameOver(true);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setCurrentScenario(getRandomScenario());
  };

  return (
    <>
      {gameStarted && (
        <div
          style={{
            position: "fixed",
            top: "16px",
            left: "16px",
            backgroundColor: "#fff",
            padding: "8px 12px",
            borderRadius: "4px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            zIndex: 1000,
            color: "#374151",
          }}
        >
          <button
            onClick={showMainMenu}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#374151",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Quit to Menu
          </button>
        </div>
      )}
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
            {!showAbout && !showCredits ? (
              <>
                <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#374151" }}>
                  Phish Tester
                </h1>
                <h2 style={{ fontSize: "rem", fontWeight: "bold", color: "#374151" }}> 
                  A Cybersecurity Awareness Simulator : Can you resist being phished?
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "24px" }}>
                  <button
                    onClick={startGame}
                    style={{
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
                  <button
                    onClick={() => setShowAbout(true)}
                    style={{
                      padding: "12px 24px",
                      backgroundColor: "#4b5563",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "1rem",
                    }}
                  >
                    About
                  </button>
                  <button
                    onClick={() => setShowCredits(true)}
                    style={{
                      padding: "12px 24px",
                      backgroundColor: "#4b5563",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "1rem",
                    }}
                  >
                    Credits
                  </button>
                </div>
              </>
            ) : showAbout ? (
              <>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#374151" }}>
                  About
                </h2>
                <p style={{ marginTop: "16px", color: "#374151" }}>
                  The Cybersecurity Awareness Simulator is an educational game designed to help people
                  identify and avoid common scams and cyber threats. Players navigate through various
                  scenarios they might encounter in their daily digital lives, making decisions that
                  affect their virtual financial security.
                </p>
                <button
                  onClick={() => setShowAbout(false)}
                  style={{
                    marginTop: "24px",
                    padding: "12px 24px",
                    backgroundColor: "#4b5563",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  Back to Menu
                </button>
              </>
            ) : (
              <>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#374151" }}>
                  Credits
                </h2>
                <p style={{ marginTop: "16px", color: "#374151" }}>
                  This game was developed to raise awareness about cybersecurity threats and scams.
                  We made this as a result of the CS3043 Social Implications of Computing Class.
                  
                 <p> Our group members were : Daniel Reynolds, Femke Jansen, and Nathan Amend. </p>

                  <p>For scenarios, we used a mix of generative AI as well as the following resources:
                  <p>https://tryhackme.com/room/phishingyl</p>
                  <p>https://www.phishingbox.com/phishing-test/</p>
                  </p>
                </p>
                <button
                  onClick={() => setShowCredits(false)}
                  style={{
                    marginTop: "24px",
                    padding: "12px 24px",
                    backgroundColor: "#4b5563",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  Back to Menu
                </button>
              </>
            )}
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
                  Day {currentDay + 1}
                  {currentScenario && `: ${currentScenario.text}`}
                </p>
                {currentScenario && currentScenario.image && (
                  <div style={{ margin: "20px 0" }}>
                    <img 
                      src={currentScenario.image} 
                      alt="Scenario visualization"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "8px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      }}
                    />
                  </div>
                )}
                {currentScenario ? (
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
                ) : (
                  <button
                    onClick={progressDay}
                    style={{
                      marginTop: "16px",
                      padding: "12px 24px",
                      backgroundColor: "#2563eb",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Next Day
                  </button>
                )}
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
                {showNextButton && (
                  <button
                    onClick={progressDay}
                    style={{
                      marginTop: "16px",
                      padding: "12px 24px",
                      backgroundColor: "#2563eb",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Next
                  </button>
                )}
              </>
            ) : (
              <>
                <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#374151" }}>
                  Game Over! Your final balance is: ${money}.
                </p>
                <button
                  onClick={showMainMenu}
                  style={{
                    marginTop: "24px",
                    padding: "12px 24px",
                    backgroundColor: "#4b5563",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  Return to Menu
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}