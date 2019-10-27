function resolveSetTimeout(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, timeout);
  });
}

resolveSetTimeout(2000).then(
  response => console.log(response),
  error => console.log("rejected")
);
