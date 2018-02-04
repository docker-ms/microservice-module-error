'use strict';

const MicroserviceErrorBase = require('./lib/MicroserviceErrorBase');

const errors = {

  RetryRecoverable: MicroserviceErrorBase.bind(null, 'RetryRecoverable', 'RR', 'Retry Recoverable'),

  UnknownError: MicroserviceErrorBase.bind(null, 'UnknownError', '999', 'Unknown Error', 'UnknownError', 500),

  // UE
  UncategorizedError: {
    NoDataFound: MicroserviceErrorBase.bind(null, 'NoDataFound', 'UE1', 'No Data Found'),
    RedundantRequest: MicroserviceErrorBase.bind(null, 'RedundantRequest', 'UE2', 'Redundant Request'),
    InvalidRequest: MicroserviceErrorBase.bind(null, 'InvalidRequest', 'UE3', 'Invalid Request'),
    TransactionErrorDetected: MicroserviceErrorBase.bind(null, 'TransactionErrorDetected', 'UE4', 'Transaction Error Detected, Data Inconsistent'),
    InvalidApiUsageDetected: MicroserviceErrorBase.bind(null, 'InvalidApiUsageDetected', 'UE5', 'Invalid API Usage Detected')
  },

  // IC
  InvalidCredentials: {
    InvalidCredentials: MicroserviceErrorBase.bind(null, 'InvalidCredentials', 'IC0', 'Invalid Credentials'),
    InvalidUserCredentials: MicroserviceErrorBase.bind(null, 'InvalidUserCredentials', 'IC1', 'Invalid User Credentials')
  },

  // IF
  InvalidField: {
    InvalidCompanyId: MicroserviceErrorBase.bind(null, 'InvalidCompanyId', 'IF1', 'Invalid Company Id'),
    InvalidEmail: MicroserviceErrorBase.bind(null, 'InvalidEmail', 'IF2', 'Invalid Email'),
    InvalidMobilePhoneNo: MicroserviceErrorBase.bind(null, 'InvalidMobilePhoneNo', 'IF3', 'Invalid Mobile Phone No.'),
    InvalidUserId: MicroserviceErrorBase.bind(null, 'InvalidUserId', 'IF4', 'Invalid User Id'),
    InvalidUserSetId: MicroserviceErrorBase.bind(null, 'InvalidUserSetId', 'IF5', 'Invalid User Set Id'),
    InvalidGender: MicroserviceErrorBase.bind(null, 'InvalidGender', 'IF6', 'Invalid Gender'),
    InvalidCsvTplId: MicroserviceErrorBase.bind(null, 'InvalidCsvTplId', 'IF7', 'Invalid CSV Template Id')
  },

  // UR
  UniqueRestriction: {
    DuplicateVal4UniqueField: MicroserviceErrorBase.bind(null, 'DuplicateVal4UniqueField', 'UR0', 'Duplicate Value For Unique Field'),
    DuplicateEmail: MicroserviceErrorBase.bind(null, 'DuplicateEmail', 'UR1', 'Duplicate Email'),
    DuplicateMobilePhoneNo: MicroserviceErrorBase.bind(null, 'DuplicateMobilePhoneNo', 'UR2', 'Duplicate Mobile Phone No.'),
    DuplicateUserSetId: MicroserviceErrorBase.bind(null, 'DuplicateUserSetId', 'UR3', 'Duplicate User Set Id')
  },

  // TE
  TokenError: {
    InvalidToken: MicroserviceErrorBase.bind(null, 'InvalidToken', 'TE0', 'Invalid Token', null, 403),
    InvalidToken24: MicroserviceErrorBase.bind(null, 'InvalidToken24', 'TE1', 'Invalid Verification Token', null, 403),
    TokenExpired:  MicroserviceErrorBase.bind(null, 'TokenExpired', 'TE2', 'Token Expired', null, 403)
  },

  // BL
  BusinessLogic: {
    EmailOrMobilePhoneNoIsRequired: MicroserviceErrorBase.bind(null, 'EmailOrMobilePhoneNoIsRequired', 'BL1', 'Email Or Mobile Phone No. Is Required'),
    RealNameIsRequired: MicroserviceErrorBase.bind(null, 'RealNameIsRequired', 'BL2', 'Real Name Is Required'),
    EmailIsRequired: MicroserviceErrorBase.bind(null, 'EmailIsRequired', 'BL3', 'Email Is Required'),
    CompanyNameIsRequired: MicroserviceErrorBase.bind(null, 'CompanyNameIsRequired', 'BL4', 'Company Name Is Required'),
    AtLeastOneManager: MicroserviceErrorBase.bind(null, 'AtLeastOneManager', 'BL5', 'At Least One Manager'),
    Temp121ConversationIsForbidden: MicroserviceErrorBase.bind(null, 'Temp121ConversationIsForbidden', 'BL6', 'Temporary One To One Conversation Is Forbidden'),
    TempGroupIsForbidden: MicroserviceErrorBase.bind(null, 'TempGroupIsForbidden', 'BL7', 'Temporary Group Is Forbidden'),
    TempGroupAtLeaseHas3Peers: MicroserviceErrorBase.bind(null, 'TempGroupAtLease3Peers', 'BL8', 'Temporary Group At Lease Has Three Peers')
  },

  // VE
  VerificationError: {
    EmailAlreadyVerified: MicroserviceErrorBase.bind(null, 'EmailAlreadyVerified', 'VE1', 'Email Already Verified', 'VerificationMsgs.Email.alreadyVerified'),
    MobilePhoneNoAlreadyVerified: MicroserviceErrorBase.bind(null, 'MobilePhoneNoAlreadyVerified', 'VE2', 'Mobile Phone No. Already Verified'),
    InvalidCompany: MicroserviceErrorBase.bind(null, 'InvalidCompany', 'VE3', 'Invalid Company', 'VerificationMsgs.Email.invalidCompany')
  },

  // NS
  NotSupported: {
    FileTypeNotSupported: MicroserviceErrorBase.bind(null, 'FileTypeNotSupported', 'NS1', 'Not Supported File Type')
  },

  // RNF
  ResourceNotFound: {
    ResourceNotFound: MicroserviceErrorBase.bind(null, 'ResourceNotFound', 'RNF0', 'Resource Not Found'),
    UserNotFound: MicroserviceErrorBase.bind(null, 'UserNotFound', 'RNF1', 'Required User Not Found'),
    ActiveUserNotFound : MicroserviceErrorBase.bind(null, 'ActiveUserNotFound', 'RNF2', 'Active User Not Found'),
    GroupNotFound: MicroserviceErrorBase.bind(null, 'GroupNotFound', 'RNF3', 'Group Not Found'),
    MessageNotFound: MicroserviceErrorBase.bind(null, 'MessageNotFound', 'RNF4', 'Message Not Found'),
    ConversationNotFound: MicroserviceErrorBase.bind(null, 'ConversationNotFound', 'RNF5', 'Conversation Not Found')
  },

  // DDD
  DirtyDataDetected: {
    DirtyUserDataDetected: MicroserviceErrorBase.bind(null, 'DirtyUserDataDetected', 'DDD1', 'Dirty User Data Detected'),
    DirtyConversationDataDetected: MicroserviceErrorBase.bind(null, 'DirtyConversationDataDetected', 'DDD2', 'Dirty Conversation Data Detected')
  },

  // NP
  NoPermission: {
    NoPermissionKickUser: MicroserviceErrorBase.bind(null, 'NoPermissionKickUser', 'NP1', 'No Permission Kick User'),
    UserHasBeenBlocked: MicroserviceErrorBase.bind(null, 'UserHasBeenBlocked', 'NP2', 'User Has Been Blocked'),
    ToBeContactsFirst: MicroserviceErrorBase.bind(null, 'ToBeContactsFirst', 'NP3', 'To Be Contacts First')
  },

  // SE
  SyncError: {
    SnapshotDeltaGenIP: MicroserviceErrorBase.bind(null, 'SnapshotDeltaGenIP', 'SE1', 'Snapshot Delta Gen IP'),
    InvalidDeviceBucketId: MicroserviceErrorBase.bind(null, 'InvalidDeviceBucketId', 'SE2', 'Invalid Device Bucket Id')
  }

};

errors.lookup = (errCode) => {
  let target;
  const _inner = (scope) => {
    const keys = Object.keys(scope);
    for (let i = 0; i < keys.length; i++) {
      if (typeof scope[keys[i]] === 'object') {
        _inner(scope[keys[i]]);
      } else if (typeof scope[keys[i]] === 'function') {
        if (keys[i] !== 'lookup') {
          let tester = new scope[keys[i]]();
          if (tester.errCode === errCode) {
            return target = scope[keys[i]];
          }
        }
      }
    }
  };
  _inner(errors);
  return target;
};

module.exports = errors;


