export default class FetchApi {
  constructor() {
    this.api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1N2yeTElQOxuxd4PIUim/books';
  }

  async get() {
    const response = await fetch(this.api)
      .then(response => response.json());
    return response;
  }

  async post(payload, method) {
    const configAdd = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    const configDelete = { method: 'DELETE' };
    const config = method === 'POST' ? configAdd : configDelete;
    const url = method === 'POST' ? this.api : `${this.api}/${payload}`;

    await fetch(
      url,
      config,
    );
  }

  // async deleteBook(id) {
  //   await fetch(
  //     `${this.api}/${id}`,
  //     {
  //       method: 'DELETE',
  //     },
  //   );
  // }
}
