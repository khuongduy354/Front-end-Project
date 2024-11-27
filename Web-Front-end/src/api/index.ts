const baseURL = "http://localhost:8000/v1"; // thay base url vao day (tu env hoac tu nhap)

export const UserAPI = {
  login: (email: string, password: string) => {
    try {
      const url = `${baseURL}/users/login`;
      const body = {
        email,
        password,
      };
      const res = fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      return res;
    } catch (err) {
      throw new Error(err);
    }
  },

  register: (name: string, email: string, password: string) => {
    try {
      const url = `${baseURL}/users`;
      const body = {
        name,
        email,
        password,
      };
      const res = fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      return res;
    } catch (err) {
      throw new Error(err);
    }
  },

  getUser: (token: string) => {
    try {
      const url = `${baseURL}/users`;
      const res = fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, //quan trọng, token để biết user nào đang login
          // request nào có protect thì phải có token
        },
      });
      return res;
    } catch (err) {
      throw new Error(err);
    }
  },
};
