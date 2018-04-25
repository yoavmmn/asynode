function fakeAsyncAction(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 20);
  });
}

const promise = await fakeAsyncAction({ success: true });

console.log(promise);
