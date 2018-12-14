

const githubOAuth = require('github-oauth')({
    githubClient: config.GITHUB_KEY,
    githubSecret: config.GITHUB_SECRET,
    baseURL: 'http://localhost:' + port,
    loginURI: '/auth/github',
    callbackURI: '/auth/github/callback'
  });

