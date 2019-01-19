workflow "Test and Publish" {
  on = "push"
  resolves = [
    "Publish to NPM"
  ]
}

action "Run tests" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  needs = [
    "Install Dependencies"
  ]
  args = "test"
}

action "Publish to NPM" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  needs = [
    "Run tests",
  ]
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}

action "Install Dependencies" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  args = "install"
}
