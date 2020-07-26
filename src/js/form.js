export class Form {
  constructor(form) {
    this.form = form;

    this._init();
  }

  _init() {
    this.form.addEventListener('submit', this._handleSubmit.bind(this));
  }

  _handleSubmit(e) {
    e.preventDefault();
    const newRequestData = this._createNewRequest();
    console.log(newRequestData);

    this.form.reset();
  }

  _createNewRequest() {
    const newRequest = {};
    const formData = new FormData(this.form);
    for (const [name, value] of formData) {
      newRequest[name] = value;
    }

    return newRequest;
  }
}
