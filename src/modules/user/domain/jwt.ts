export type Token = string;
export type RefreshToken = string;

export interface JWTClaims {
  userId: string;
  email: string;
  username: string;
}
