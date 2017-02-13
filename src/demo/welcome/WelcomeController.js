export default class WelcomeController {
  constructor($http, $q) {

    this.responses = [];
    this.errors = [];

    const reportError = error => {
      console.error('Request error', error);
      this.errors.push(error);
    };

    this.makeRequest = () => {
      $q.all([
        $http.get('/get1'),
        $http.get('/get2')
      ]).then(responses => {
        this.responses.push(responses[0].data.resp);
        this.responses.push(responses[1].data.resp);

        $http.get('/get3').then(response => {
          this.responses.push(response.data.resp);
        }, reportError);

      }, reportError);
    }
  }
}
