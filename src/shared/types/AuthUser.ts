export default interface AuthUser {
  uid: string | undefined;
  displayName?: string;
  email?: string;
  createdAt?: Date;
}
