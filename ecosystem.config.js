module.exports = {
  apps: [
    {
      name: "pm2_next13",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "./",
      instances: "2",
      exec_mode: "cluster",
      // "log_type": "json",
      error_file: "./logs/pm2_next13-error.log",
      out_file: "./logs/pm2_next13-out.log",
      // "log_file": ""
      env: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
    {
      name: "pm2_next13_development",
      script: "node_modules/next/dist/bin/next",
      args: "dev",
      cwd: "./",
      instances: "2",
      exec_mode: "cluster",
      // "log_type": "json",
      error_file: "./logs/pm2_next13-error.log",
      out_file: "./logs/pm2_next13-out.log",
      // "log_file": ""
      env: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
  ],
};
