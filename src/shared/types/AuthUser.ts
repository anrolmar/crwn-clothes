export default interface AuthUser {
  uid: string | undefined;
  displayName?: string | undefined;
  email?: string | undefined;
  createdAt?: Date;
}
