/** State Model - used in Auth module */
export interface AuthState {
    /** id of user logged */
    readonly userId: string;
    /** access token of user */
    readonly token: string;
    /** full name of user */
    readonly fullname: string;
    readonly email: string;
    readonly password: string;
}