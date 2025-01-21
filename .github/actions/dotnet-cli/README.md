# Dotnet CLI javascript action

This action executes dotnet commands.

## Inputs

### `command`

**Required** The command to execute. Default `"build"`.

### `project`

**Required** Path to project file. Default `"./"`.

### `args`

**Required** Additional Args. Default `""`.

## Example usage

```yaml
uses: actions/dotnet-cli
with:
  command: 'restore'
  project: './test.csproj'
```
