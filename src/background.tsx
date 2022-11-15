import { Background, tsParticles } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";

(async () => {
  await loadLinksPreset(tsParticles);

  await tsParticles.load("tsparticles", {
    preset: "links",

    particles: {
      number: {
        value: 120,
      },
      color: {
        value: "#000000",
      },
      shape: {
        type: "circle",

        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.9,
        random: false,
        animation: {
          enable: false,
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: {
          enable: true,

          minimumValue: 1,
        },
        animation: {
          enable: false,
          speed: 40,

          minimumValue: 0.1,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
        triangles: {
          enable: false,

          frequency: 1,
        },
      },
    },
  });
})();

export default Background;