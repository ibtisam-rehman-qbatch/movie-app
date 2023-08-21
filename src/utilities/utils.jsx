export const calculateYear = (givenDate) => {
  if (givenDate?.split("-").length > 1) return givenDate?.split("-")[0];
  else if (givenDate?.split("-").length === 1)
    return givenDate?.split("/")?.[2];
  return givenDate;
};

export const slackNotification = (raw) => {
  var requestOptions = {
    method: "POST",
    body: raw,
    redirect: "follow",
  };
  fetch(
    "https://hooks.slack.com/services/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",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
