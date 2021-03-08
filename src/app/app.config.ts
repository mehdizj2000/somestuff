export default {
  oidc: {
    clientId: '0oan1fmwqh8Ql8aPe4x6',//`${CLIENT_ID}`,
    issuer: 'https://dev-647801.okta.com/oauth2/default',//`${ISSUER}`,
    redirectUri: 'http://localhost:4200/callback',
    scopes: ['openid', 'profile', 'email'],
    testing: {
      disableHttpsCheck: true
    }
  },
  resourceServer: {
    messagesUrl: 'http://localhost:4000/api/messages',
  },
};
