class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.tokenId = `token-${index}-${owner.id}`;
    this.isPlayed = false;
  }
}

export default Token;
