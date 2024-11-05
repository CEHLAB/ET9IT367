// Fonction pour ajuster le pari 
function fn1(x, y, z) {
    z(function(b) {
      var a = b.slice();
      a[x] = Math.max(0, a[x] + y);
      console.log("Bet adjusted: Player " + (x + 1) + " bet is now " + a[x]);
      return a;
    });
  }
  
  // Fonction pour confirmer le pari
  function fn2(a, b, c, d, e, f, g, h, i) {
    if (b[a] > 0 && b[a] <= c[a]) {
      d(function(old) {
        var temp = old.slice();
        temp[a] -= b[a];
        console.log("Bet confirmed: Player " + (a + 1) + " bet " + b[a]);
        return temp;
      });
  
      e(function(old) {
        var done;
        if (old >= h - 1) {
          done = true;
        } else {
          done = false;
        }
        f(!done);
        if (done) {
          console.log("All bets are placed! Starting the game...");
        } else {
          console.log("Next player: Player " + (old + 2));
        }
        if (done) {
          return null;
        } else {
          return old + 1;
        }
      });
  
      if (!i) {
        console.log("Game is starting...");
        g(true);
      }
    } else {
      console.log("Invalid bet or bet exceeds available balance.");
      console.error("Pari invalide ou supérieur au solde disponible.");
    }
  }
  

  
  // Fonction pour simuler la mise à jour des paris
  let x = [50, 30];
  let y = [100, 150];
  let z = true;
  let a = 0;
  const b = 2;
  
  // Fonction pour mettre à jour les balances
  function fn5(fn) {
    y = fn(y);
    console.log("Updated Balances:", y);
  }
  
  // Fonction pour gérer le joueur en train de parier
  function fn6(fn) {
    a = fn(a);
    console.log("Current Betting Player:", a);
  }
  
  // Fonction pour gérer l'état des paris
  function fn7(val) {
    z = val;
    console.log("Betting Status:", z);
  }
  
  // Fonction pour démarrer un nouveau jeu
  function fn8(reset) {
    if (reset) {
      console.log("Game started! Betting reset.");
    } else {
      console.log("Game started! Continuing with previous bets.");
    }
  }
  
  // Tests
  console.log("\n=== Test confirmBet ===");
  fn2(0, x, y, fn5, fn6, fn7, fn8, b, z);
  