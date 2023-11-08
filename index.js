#!/usr/bin/env node

const { copyFileSync, mkdir } = require("fs");
const { resolve } = require("path");
const { execSync } = require("child_process");
const select = require("@inquirer/select").default;
const { name: packageName } = require("./package.json");

function help(code) {
  console.log(`Usage:
  react-quality-assurance init
  `);
  process.exit(code);
}

async function init() {
  const packageManager = await select({
    message: "Select a package manager",
    choices: [
      {
        name: "npm",
        value: "npm",
      },
      {
        name: "yarn",
        value: "yarn",
      },
    ],
  });

  const isForceCmd = process?.argv.some((arg) => arg === "--force");

  const commandsForPackageManager = {
    npm: {
      install: "npm install",
      devInstall: "--save-dev",
      uninstall: "npm uninstall",
    },
    yarn: {
      install: "yarn add",
      devInstall: "--dev",
      uninstall: "yarn remove",
    },
  };

  const forceCMD = isForceCmd ? "--force" : "";
  const { install, uninstall, devInstall } =
    commandsForPackageManager[packageManager];

  console.log("Installing ESLint and required plugins...");
  execSync(
    `${install} @types/node @types/react @types/react-dom eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-next  eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks  husky lint-staged prettier ${devInstall} ${forceCMD}`,
    {
      stdio: "inherit",
    }
  );

  execSync(`npm pkg set scripts.lint="next lint --fix`, {
    stdio: "inherit",
  });

  console.log("ESLint and required plugins installed successfully.");

  console.log("Adding husky script");
  execSync(`npm pkg set scripts.prepare="husky install`, {
    stdio: "inherit",
  });

  console.log("Running husky script");
  execSync(`npm run prepare`, {
    stdio: "inherit",
  });

  execSync(`npm pkg delete scripts.prepare`, {
    stdio: "inherit",
  });

  const configNames = [
    ".eslintrc.json",
    ".gitattributes",
    ".lintstagedrc.json",
    ".prettierignore",
    ".prettierrc.json",
  ];

  console.log("Coping ESLint and Others configuration files");
  configNames.forEach((configName) => {
    const configPath = resolve(__dirname, `./${configName}`);
    copyFileSync(configPath, configName);
  });

  const preCommitHookPath = "./.husky/pre-commit";
  const preCommitConfigPath = resolve(__dirname, preCommitHookPath);
  copyFileSync(preCommitConfigPath, preCommitHookPath);

  mkdir("./.vscode", () => {});

  const vscodePath = "./.vscode/settings.json";
  const vscodeConfigPath = resolve(__dirname, vscodePath);
  copyFileSync(vscodeConfigPath, vscodePath);

  console.log("ESLint and Others configuration files copied successfully.");

  execSync(`${uninstall} ${packageName} ${forceCMD}`, {
    stdio: "inherit",
  });
  console.log("Configuration completed successfully.");
}
const cmds = {
  init,
};

try {
  const [, , cmd] = process.argv;
  cmds[cmd] ? cmds[cmd]() : help(0);
} catch (error) {
  console.error("Error installing ESLint and required plugins:", error);
  process.exit(1);
}
