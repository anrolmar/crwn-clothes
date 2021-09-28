type AuthUser = {
  uid: string | undefined;
  displayName?: string;
  email?: string;
  createdAt?: Date;
};

export default AuthUser;
