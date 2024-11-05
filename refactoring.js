// Fonctions de votre code
const adjustBet = (playerIndex, amount, setCurrentBets) => {
  setCurrentBets(prevBets => {
    const newBets = [...prevBets];
    newBets[playerIndex] = Math.max(0, newBets[playerIndex] + amount);
    console.log(`Bet adjusted: Player ${playerIndex + 1} bet is now ${newBets[playerIndex]}`);
    return newBets;
  });
};

const confirmBet = (
  playerIndex,
  currentBets,
  balances,
  setBalances,
  setCurrentBettingPlayer,
  setBetting,
  startNewGame,
  numPlayers,
  betting
) => {
  if (
    currentBets[playerIndex] > 0 &&
    currentBets[playerIndex] <= balances[playerIndex]
  ) {
    setBalances(prevBalances => {
      const newBalances = [...prevBalances];
      newBalances[playerIndex] -= currentBets[playerIndex];
      console.log(`Bet confirmed: Player ${playerIndex + 1} bet ${currentBets[playerIndex]}`);
      return newBalances;
    });

    setCurrentBettingPlayer(prevPlayer => {
      const bettingFinished = prevPlayer >= numPlayers - 1;
      setBetting(!bettingFinished);
      console.log(
        bettingFinished
          ? "All bets are placed! Starting the game..."
          : `Next player: Player ${prevPlayer + 2}`
      );
      return bettingFinished ? null : prevPlayer + 1;
    });

    if (!betting) {
      console.log("Game is starting...");
      startNewGame(true);
    }
  } else {
    console.log("Invalid bet or bet exceeds available balance.");
    console.error("Pari invalide ou supérieur au solde disponible.");
  }
};


// Simulation des états et fonctions de test
let currentBets = [50, 30];
let balances = [100, 150];
let betting = true;
let currentPlayer = 0;
const numPlayers = 2;


const setBalances = (updateFunction) => {
  balances = updateFunction(balances);
  console.log("Updated Balances:", balances);
};

const setCurrentBettingPlayer = (updateFunction) => {
  currentPlayer = updateFunction(currentPlayer);
  console.log("Current Betting Player:", currentPlayer);
};

const setBetting = (newBetting) => {
  betting = newBetting;
  console.log("Betting Status:", betting);
};

// Fonction pour démarrer un nouveau jeu
const startNewGame = (resetBetting) => {
  console.log("Game started!", resetBetting ? "Betting reset." : "Continuing with previous bets.");
};

// Tests

console.log("\n=== Test confirmBet ===");
confirmBet(
  0, // Index du joueur
  currentBets,
  balances,
  setBalances,
  setCurrentBettingPlayer,
  setBetting,
  startNewGame,
  numPlayers,
  betting
);
