export default async function handleAPI(
  api: string,
  method: string,
  username: string = "",
  password: string = ""
): Promise<boolean> {
  const url = `http://localhost:8080${api}`;
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.text();
    return data === "true";
  } catch (error: any) {
    console.error(error.message);
  }
  return false;
}
