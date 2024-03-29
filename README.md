# Set Timezone Action

![Test Action](https://github.com/szenius/set-timezone/workflows/.github/workflows/action.yml/badge.svg)

This action sets timezone in your runner's locale based on its OS.

## Inputs

| Input name      | Description                                                   | Required ? | Default value |
| --------------- | ------------------------------------------------------------- | ---------- | ------------- |
| timezoneLinux   | Timezone you want to set if your runner is running on Linux   | false      | `UTC`         |
| timezoneWindows | Timezone you want to set if your runner is running on Windows | false      | `UTC`         |
| timezoneMacos   | Timezone you want to set if your runner is running on MacOS   | false      | `GMT`         |

## Example usage

```yaml
uses: hkai-engineer/set-timezone@v1.3
with:
  timezoneLinux: "Asia/Hong_Kong"
  timezoneMacos: "Asia/Hong_Kong"
  timezoneWindows: "Hong Kong Standard Time"
```
