module.exports = {
  apps: [
    {
      name: "HrosDev",
      exec_mode: 'cluster',
      instances: 'max',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      env_local: {
      }
    }
  ]
}