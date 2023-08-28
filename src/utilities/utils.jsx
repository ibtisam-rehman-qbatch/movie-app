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
  Axios.request(config);
};
