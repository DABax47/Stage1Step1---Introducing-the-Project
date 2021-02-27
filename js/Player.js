import Token from "./Token.js";
class Player {
  constructor(name, id, color, isTurn = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.isTurn = isTurn;
    this.tokens = this.createTokens(21);
  }

  /*when player objects are created tokens are automatically created and split evenly between the 2 players*/
  /**
   * Creates token objects for player
   * @param     {int}    num - Number of token objects to be created
   * @returns   {Array}     An array of the newly created token objects
   */

  createTokens(tokens) {
    let tokenArray = [];

    for (let i = 0; i < tokens; i++) {
      let token = new Token(i, this);
      tokenArray.push(token);
    }

    return tokenArray;
  }
}
let player1 = new Player("dwayne", 2, "red");

console.log(player1);
