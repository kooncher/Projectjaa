import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      student_id : user.student_id,
      student_name: user.student_name,
      username: user.username,
       password: user.password,
       faculty: user.faculty,
       major: user.major,
       email: user.email,
       tel:user.tel
     
    });
  }
}

export default new AuthService();
