#!/usr/bin/node
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve();
      } else {
        reject(new Error('Error fetching data from API'));
      }
    }, 2000);
  });
}
