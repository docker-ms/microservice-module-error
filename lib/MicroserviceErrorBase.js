'use strict';

class MicroserviceErrorBase extends Error {

  constructor(errClass, errCode, errMsg, i18nMsgCode, httpStatusCode) {
    super();

    Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);

    this.name = errClass;
    this.errCode = errCode;
    this.errMsg = errMsg;
    this.i18nMsgCode = i18nMsgCode;
    this.httpStatusCode = httpStatusCode;
  }

}

module.exports = MicroserviceErrorBase;


