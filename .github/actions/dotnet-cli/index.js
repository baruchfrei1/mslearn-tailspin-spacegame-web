const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('child_process').exec;

try {
  const command = core.getInput('command');
  const project = core.getInput('project');
  const args = core.getInput('args');
  const dotnetCommand = `dotnet ${command} ${project} ${args}`;
  console.log(`Running command: ${dotnetCommand}`);
  exec(dotnetCommand, (error, stdout, stderr) => {
    if (error) {
      core.setFailed(`Command failed: ${error.message}`);
      return;
    }
    if (stderr) {
      core.warning(`Command stderr: ${stderr}`);
    }
    core.setOutput('result', stdout);
  });
} catch (error) {
  core.setFailed(error.message);
}
