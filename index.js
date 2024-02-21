import * as core from '@actions/core';
import { execa } from "execa";

const execCommand = async (file, args) => {
  await execa(file, args).stdout.pipe(process.stdout);
};

const setTimezone = async () => {
  try {
    const platform = process.platform;
    let timezone;

    switch (platform) {
      case "linux":
        timezone = core.getInput("timezoneLinux");
        await execCommand("sudo", ["timedatectl", "set-timezone", timezone]);
        break;
      case "darwin":
        timezone = core.getInput("timezoneMacos");
        await execCommand("sudo", ["systemsetup", "-settimezone", timezone]);
        break;
      case "win32":
        timezone = core.getInput("timezoneWindows");
        await execCommand("tzutil", ["/s", timezone]);
        break;
      default:
        core.setFailed(
          `Platform ${platform} not supported; Only linux, darwin or win32 are supported now`
        );
    }
  } catch (error) {
    core.setFailed(error.message);
  }
};

setTimezone();
