const execSync = require('child_process').execSync

// Change to the directory of this file
if (process.cwd()) {
  process.chdir(process.cwd());
} else {
  console.error('Current working directory is undefined');
  process.exit(1);
}


// Get the path to the head of the `Subgraphs` repo
export const MESSARI_REPO_PATH = execSync('git rev-parse --show-toplevel')
  .toString()
  .trim()
