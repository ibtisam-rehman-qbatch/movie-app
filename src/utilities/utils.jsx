import Axios from "axios";
export const calculateYear = (givenDate) => {
  if (givenDate?.split("-").length > 1) return givenDate?.split("-")[0];
  else if (givenDate?.split("-").length === 1)
    return givenDate?.split("/")?.[2];
  return givenDate;
};

export const slackNotification = (data) => {
  const config = {
    method: "post",
    url: "https://hooks.slack.com/services/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",
    headers: {
      "Content-Type": "text/plain",
    },
    data: data,
  };
  Axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
