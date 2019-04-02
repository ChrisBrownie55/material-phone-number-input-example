action "Install Dependencies" {
  uses = "borales/actions-yarn@master"
  args = "install"
}

action "Run Tests" {
  uses = "borales/actions-yarn@master"
  needs = [
    "Install Dependencies",
  ]
  args = "test"
}

workflow "Test and Publish" {
  on = "release"
  resolves = ["Send Notification for Publish"]
}

action "Publish to NPM" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  needs = [
    "Run Tests",
  ]
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}

action "Send Notification for Publish" {
  uses = "techulus/push-github-action@master"
  env = {
    API_KEY = "8ee4ad87-7b3f-42ff-bbf6-51591547a369"
    MESSAGE = "mui-phone-input's build has succeeded! 🎉"
  }
  needs = ["Publish to NPM"]
}

workflow "Test and Build" {
  on = "push"
  resolves = [
    "Send Notification for Build",
  ]
}

action "Build" {
  uses = "borales/actions-yarn@master"
  args = "build"
  needs = ["Run Tests"]
}

action "Send Notification for Build" {
  uses = "techulus/push-github-action@master"
  env = {
    API_KEY = "8ee4ad87-7b3f-42ff-bbf6-51591547a369"
    MESSAGE = "mui-phone-input's build has succeeded! 🎉"
  }
  needs = ["Build"]
}
