module.exports = {
  concurrency: 15,
  apiKey: process.env.APPLITOOLS_API_KEY,
  appName: 'Test Storybook',
  batchName: process.env.APPLITOOLS_BATCH_NAME || 'Test Storybook',
  branchName: process.env.APPLITOOLS_BRANCH_NAME || 'master',
  parentBranchName: 'master',
  saveNewTests: false,
  browser: [
    {width: 700, height: 460, name: 'chrome'},
    // {width: 700, height: 460, name: 'edgechromium'},
    // {width: 700, height: 460, name: 'edgechromium-one-version-back'},
    {width: 700, height: 460, name: 'firefox'},
    // {width: 700, height: 460, name: 'safari'},
  ],
}
