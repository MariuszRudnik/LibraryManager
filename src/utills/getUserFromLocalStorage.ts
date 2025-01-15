import { User } from "./../types/index";

export const getUserFromLocalStorage = (): User | null => {
  const userString = localStorage.getItem("user-store");

  if (!userString) {
    return null;
  }

  try {
    const userObject: { state: { user: User } } = JSON.parse(userString);
    return userObject.state.user;
  } catch (error) {
    console.error("Błąd parsowania JSON:", error);
    return null;
  }
};
