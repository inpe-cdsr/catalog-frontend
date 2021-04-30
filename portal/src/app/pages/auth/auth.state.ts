/** State Model - used in Auth module */
export interface AuthState {
    /** id of user logged */
    readonly username: string;
    /** access token of user */
    readonly token: string;
    /** full name of user */
    readonly name: string;
    readonly email: string;
    readonly password: string;
}