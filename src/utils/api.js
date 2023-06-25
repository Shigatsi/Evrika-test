const BASE_URL = "someUrl";

const checkRes = (res) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

export const search = (categoryId, regionId) => {
  return fetch(`${BASE_URL}/search/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ categoryId, regionId }),
  }).then(checkRes);
};
