const BASE_URL = 'http://localhost:3117';

export class ApiService {
  static async retrieve(url) {
    const response = await fetch(`${BASE_URL}/${url}`);

    return await response.json();
  }

  static async post(url, data){
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const response = await fetch(`${BASE_URL}/${url}`, options);

    return await response.json();
  }

  static async add(url, data) {
    const options = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const response = await fetch(`${BASE_URL}/${url}`, options);

    return await response.json();
  }

  static async update(url, data) {
    const options = {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const response = await fetch(`${BASE_URL}/${url}`, options);

    return await response.json();
  }

  static async delete(url) {
    const options = {
      method: 'DELETE'
    };
    const response = await fetch(`${BASE_URL}/${url}`, options);

    return await response.json();
  }
}