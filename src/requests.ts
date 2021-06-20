interface LooseObject {
  [key: string]: any
}

export function callAPI<T>(url: string, method: string, body: any): Promise<T> {
  const options: LooseObject = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<T>
    })
}
