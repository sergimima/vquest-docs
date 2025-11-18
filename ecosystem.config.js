module.exports = {
  apps: [{
    name: 'vquest-docs',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3007',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production'
    }
  }]
};
