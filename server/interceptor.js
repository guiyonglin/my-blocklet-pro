class ResponseDTO {
  constructor(code, data, message = 'success') {
    this.code = code;
    this.data = data;
    this.message = message;
  }

  static success(data) {
    return new ResponseDTO(200, data);
  }
}

module.exports = ResponseDTO;
