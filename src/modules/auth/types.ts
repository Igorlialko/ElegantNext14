export type TUser = {
  id: number;
  email: string;
  isBanned?: boolean;
  banReason?: string;
  firstName?: string;
  lastName?: string;
  displayName?: string;
  image?: string;
};
