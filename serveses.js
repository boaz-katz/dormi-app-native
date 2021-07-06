const posturl = "https://b.dormi.co.il/requests";
export const PostToServer = async (ruter, value) => {
  let myPromis = await fetch(`${posturl}/${ruter}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((err) => {
      return err;
    });

  return myPromis;
};
