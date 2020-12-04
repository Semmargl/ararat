import { GameAuth } from "./game_auth";
import { GameNonAuth } from "./game_nonauth";

export const GameInner = (authorized) => {
  return `
      
      ${(authorized ? GameAuth() : GameNonAuth())}
    
    `;
};