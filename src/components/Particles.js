import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBg = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        "particles": {
          "color": {
            "value": [
              "#FFFFFF",
              "#FFd700"
            ]
          },
          "move": {
            "direction": "bottom",
            "enable": true,
            "outModes": {
              "default": "out"
            },
            "size": true,
            "speed": {
              "min": 0.2,
              "max": 1.5
            }
          },
          "number": {
            "value": 1,
            "density": {
              "enable": true,
              "area": 100
            }
          },
          "opacity": {
            "value": 1,
            "animation": {
              "enable": false,
              "startValue": "max",
              "destroy": "min",
              "speed": 0.3,
              "sync": true
            }
          },
          "rotate": {
            "value": {
              "min": 0,
              "max": 360
            },
            "direction": "random",
            "move": true,
            "animation": {
              "enable": true,
              "speed": 60
            }
          },
          "tilt": {
            "direction": "random",
            "enable": true,
            "move": true,
            "value": {
              "min": 0,
              "max": 360
            },
            "animation": {
              "enable": true,
              "speed": 60
            }
          },
          "shape": {
            "type": "image",
            "options": {
              "image": [
                {
                  "src": "./flower-petal.png",
                  "width": 16,
                  "height": 16,
                  "particles": {
                    "size": {
                      "value": 4
                    }
                  }
                },
              ]
            }
          },
          "size": {
            "value": {
              "min": 2,
              "max": 4
            }
          },
          "roll": {
            "darken": {
              "enable": true,
              "value": 30
            },
            "enlighten": {
              "enable": true,
              "value": 30
            },
            "enable": true,
            "speed": {
              "min": 15,
              "max": 25
            }
          },
          "wobble": {
            "distance": 30,
            "enable": true,
            "move": true,
            "speed": {
              "min": -15,
              "max": 15
            }
          }
        }
      }}
    />
  );
};

export default ParticlesBg;