tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: {
    color: { value: "#000000" }
  },
  fpsLimit: 100,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
        parallax: {
          enable: false,
          force: 60,
          smooth: 100
        }
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 120,
        duration: 1, // decreased duration
        speed: 0.2 // increased speed
      }
    }
  },
  particles: {
    color: {
      value: ["#00ffff", "#ff00ff", "#00ff88", "#ffaa00", "#9966ff"]
    },
    links: {
      enable: true,
      distance: 80,
      color: "#ffffff",
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outModes: {
        default: "bounce"
      }
    },
    number: {
      value: 30, // Increased number of particles
      density: {
        enable: true,
        area: 500 // Adjusted density
      }
    },
    opacity: {
      value: 1
    },
    shape: {
      type: "star",
    },
    size: {
      value: { min: 1, max: 3 }
    }
  },
  detectRetina: true
});