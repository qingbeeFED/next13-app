module.exports = {
  apps : [{
    "name": "pm2_next13",
    "script": 'node_modules/next/dist/bin/next',
    "args": "start",
    "cwd": "./",
    "instances": "2",
    "exec_mode": "cluster"
  }]
};
