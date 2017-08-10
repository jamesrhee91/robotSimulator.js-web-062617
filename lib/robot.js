'use strict';

var Robot = function createRobot() {

      var dir = ["north", "east", "south", "west"];

        return class Robot {
          // implement your solution here!

          // robot1 = new Robot()
          // robot1.bearing => current facing direction ("north")
          // robot1.right => "east"
          // robot1.bearing => ""

          constructor() {
            // this.bearing = undefined
          }

          orient(direction) {
            if (dir.includes(direction)) {
              this.bearing = direction
            } else {
              throw new Error("Invalid Robot Bearing")
            }
          }

          turnRight() {
            let newBearing = dir.indexOf(this.bearing) + 1
            if (newBearing > 3) {
              newBearing = 0
            }
            this.bearing = dir[newBearing]
            console.log(`current bearing is ${dir[newBearing]}`)
          }

          turnLeft() {
            let newBearing = dir.indexOf(this.bearing) - 1
            if (newBearing < 0) {
              newBearing = 3
            }
            this.bearing = dir[newBearing]
            console.log(`current bearing is ${dir[newBearing]}`)
          }

          at(x, y) {
            this.coordinates = [x,y]
          }

          advance() {
            let c = this.coordinates

            if (this.bearing === "north") {
              this.coordinates = [c[0], c[1]+1]
            } else if (this.bearing === "east") {
              this.coordinates = [c[0]+1, c[1]]
            } else if (this.bearing === "south") {
              this.coordinates = [c[0], c[1]-1]
            } else if (this.bearing === "west") {
              this.coordinates = [c[0]-1, c[1]]
            }
            console.log(`current coordinates are ${this.coordinates}`)
          }

          instructions(str) {
            let newStr = str.split("")
            let result = []

            for (var i in newStr) {
              if (newStr[i] === "R") {
                result.push("turnRight")
              } else if (newStr[i] === "L") {
                result.push("turnLeft")
              } else if (newStr[i] === "A") {
                result.push("advance")
              }
            }
            return result
          }

          place(object) {
            this.at(object["x"], object["y"])
            this.bearing = object["direction"]
          }

          evaluate(str) {
            let newStr = str.split("") // ["R", "A"]
            for (let i in newStr) {
              if (newStr[i] == "R") {
                this.turnRight()
              } else if (newStr[i] == "L") {
                this.turnLeft()
              } else if (newStr[i] == "A") {
                this.advance()
              }
          }

        }
      }

}()
