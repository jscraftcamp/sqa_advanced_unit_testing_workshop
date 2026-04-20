export type GetAgeForName = (name: string) => Promise<number>;

export const getAgeForName: GetAgeForName = async (name) => {
  const response = await fetch(
    `https://api.agify.io?name=${encodeURIComponent(name)}`,
  );
  const data = (await response.json()) as { age: number };
  return data.age;
};

// Demo (needs network): uncomment the line below, then run `npm run demo:agify`
// console.log(await getAgeForName("Marco"));
