import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'YOUR_USER_POOL_ID',
  ClientId: 'YOUR_APP_CLIENT_ID',
};

const userPool = new CognitoUserPool(poolData);

export function signUp(email, password, onSuccess, onFailure) {
  const attributeList = [
    new CognitoUserAttribute({
      Name: 'email',
      Value: email,
    }),
  ];

  userPool.signUp(email, password, attributeList, null, (error, result) => {
    if (error) {
      onFailure(error.message);
    } else {
      onSuccess(result.user);
    }
  });
}

export function confirmSignUp(email, verificationCode, onSuccess, onFailure) {
  const userData = {
    Username: email,
    Pool: userPool,
  };

  const cognitoUser = new CognitoUser(userData);

  cognitoUser.confirmRegistration(verificationCode, true, (error, result) => {
    if (error) {
      onFailure(error.message);
    } else {
      onSuccess(result);
    }
  });
}

export function signIn(email, password, onSuccess, onFailure) {
  const authenticationDetails = new AuthenticationDetails({
    Username: email,
    Password: password,
  });

  const userData = {
    Username: email,
    Pool: userPool,
  };

  const cognitoUser = new CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (result) => {
      onSuccess(result);
    },
    onFailure: (error) => {
      onFailure(error.message);
    },
  });
}