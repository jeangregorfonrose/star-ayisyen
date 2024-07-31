/**
 * This function helps to generate a passcode for each star profile
 * @returns The passcode generated
 */
export function generatePasscode() {
  // Define the length of the passcode
  const passcodeLength = 6;

  // Initialize an empty string to store the passcode
  let passcode = "";

  // Generate random digits until the passcode reaches the desired length
  for (let i = 0; i < passcodeLength; i++) {
    // Generate a random digit between 0 and 9
    const digit = Math.floor(Math.random() * 10);

    // Append the random digit to the passcode string
    passcode += digit;
  }

  // Return the generated passcode
  return passcode;
}
