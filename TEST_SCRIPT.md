# Login Email Validation Test Script

## Test environment

- Application: Volunteam
- Platform: Android emulator
- Test date: November 2, 2026
- API: Local JSON Server
- API address from emulator: http://10.0.2.2:3333
- App version: Original starter code before the fix

## Preconditions

1. The JSON Server is running.
2. The Expo application is running in the Android emulator.
3. The login screen is displayed.
4. Both test users exist in `db.json`.
5. No bug-related source-code changes have been made.

## Root cause and correction

The original email-validation expression required every ending domain segment
to contain exactly three characters. It accepted `.com`, but rejected valid
two-letter country domains such as `.it` and `.br`. This caused Luigi's and
John's existing accounts to be rejected before authentication was attempted.

The expression was updated to accept final domain segments containing two or
more letters and to support multi-part domains such as `.com.br`.

## Automated test results

- Before the fix: **2 failed, 2 passed**
- After the fix: **4 passed**

---

## TC-LOGIN-001: Login with Luigi Carluccio's email

### Test data

- Email: `luigi@carluccio.it`
- Password: `123456`

### Reproduction steps

1. Open the Volunteam application.
2. Confirm that the login screen is displayed.
3. Enter `luigi@carluccio.it` in the Email field.
4. Enter `123456` in the Password field.
5. Dismiss the keyboard.
6. Press the **Log in** button.

### Expected result

The email address should be recognized as valid, and the application should
attempt to authenticate the user. With the correct credentials, the user
should be logged in and taken to the events screen.

### Actual result before the fix

The Email field receives a red outline and displays `invalid email`.
The application remains on the login screen and does not attempt authentication.

### Status before the fix

**FAIL**

### Result after the fix

The email address is accepted without an `invalid email` message or red
outline. Authentication succeeds, and the application opens the events screen.

### Status after the fix

**PASS**

---

## TC-LOGIN-002: Login with John Silva's email

### Test data

- Email: `john@silva.com.br`
- Password: `123456`

### Reproduction steps

1. Open the Volunteam application.
2. Confirm that the login screen is displayed.
3. Enter `john@silva.com.br` in the Email field.
4. Enter `123456` in the Password field.
5. Dismiss the keyboard.
6. Press the **Log in** button.

### Expected result

The email address should be recognized as valid, and the application should
attempt to authenticate the user. With the correct credentials, the user
should be logged in and taken to the events screen.

### Actual result before the fix

The Email field receives a red outline and displays `invalid email`.
The application remains on the login screen and does not attempt authentication.

### Status before the fix

**FAIL**

### Result after the fix

The email address is accepted without an `invalid email` message or red
outline. Authentication succeeds, and the application opens the events screen.

### Status after the fix

**PASS**
