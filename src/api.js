import HttpError from "./HttpError";

export const fetchUser = (id) => async () => {
  const response = await fetch(`https://reqres.in/api/users/${id}`);

  if (!response.ok) {
    throw new HttpError({
      message: response.statusText,
      statusCode: response.status,
    });
  }

  const jsonData = await response.json();
  return jsonData;
};
