export default {
  oidc: {
    clientId: '0oan1fmwqh8Ql8aPe4x6',//`${CLIENT_ID}`,
    issuer: 'https://dev-647801.okta.com/oauth2/default',//`${ISSUER}`,
    redirectUri: 'http://localhost:8080/login/callback',
    scopes: ['openid', 'profile', 'email'],
    testing: {
      disableHttpsCheck: false
    }
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
