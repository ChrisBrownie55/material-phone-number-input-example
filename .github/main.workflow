workflow "Test and Publish" {
  on = "push"
  resolves = [
    "Publish to NPM",
  ]
}

action "Run tests" {
  uses = "borales/actions-yarn@master"
  needs = [
    "Install Dependencies",
  ]
  args = "test"
}

action "Publish to NPM" {
  uses = "borales/actions-yarn@master"
  needs = [
    "Run tests",
  ]
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}

action "Install Dependencies" {
  uses = "borales/actions-yarn@master"
  args = "install"
}
