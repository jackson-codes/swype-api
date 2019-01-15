export interface UsersArgs {
  limit?: number;
  offset?: number;
}

export interface UserSaveArgs {
  id?: number;
  firstName: string;
  lastName: string;
}