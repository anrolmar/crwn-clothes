export default interface AuthUser {
  id: string | undefined;
  displayName: string | undefined;
  email: string | undefined;
  createdAt?: Date;
}
