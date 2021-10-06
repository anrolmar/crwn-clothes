export interface IAuthUser {
  uid: string | undefined;
  displayName?: string | null;
  email?: string | null;
  createdAt?: Date;
}

export interface IUserCredentials {
  email: string;
  password: string;
  displayName: string;
}
