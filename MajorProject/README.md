# yfei0054_9103_tut5
## Major Project

## Part 1: How to interact with the work

- **1. Time-Driven Gradient Transitions**
The animation seamlessly transitions between warm and cool images in a loop, simulating the illusion of day-night alternation.
- **2. Dynamic River Motion**
Particles in the river flow continuously from right to left over time, mimicking the natural movement of water.
- **3. Background Flickering Effect**
Sky particles alternate between rectangular and circular shapes, creating a flickering transformation in the background.

### Summary
Time is the core of the animation logic. The `frameCount` variable drives the color transitions between day and night, the direction and speed of river flow, and the rhythm of background flickering. All elements change naturally over time without user intervention.

---

**Chosen Interaction Method**: **Time**

# Part 2: Comparison with Group Members

- **Time-Driven Visual Effects**  
  Unlike my group members, who may use direct controls to manipulate certain elements, my animation is entirely time-driven. The particle colors, motions, and background flickering evolve naturally over time.
- **Gradient Transition Handling**  
  To avoid unnatural color transitions (e.g., pink or green), I introduced a nighttime image as the target color for interpolation. This ensures a smooth and contextually appropriate transition between day and night.
- **River Particle Motion**  
  While all group members worked on river animations, my implementation integrates noise and time-based logic to achieve a unique, non-repetitive, and organic motion.

---

# Part 3: Inspiration

![An image of Day and Night](day_and_night_cycle_by_ryan_sael.gif)
Ryan Seal, *Day And Night*, 2018. [Link to Inspiration](https://dribbble.com/shots/4418228-Day-And-Night)
   This animation simulates time-lapse photography, showcasing a transition from day to night. It inspired my work to include a similar visual effect of day-night alternation.

![An image of Parly 2](circle_and_square_transformation.png)
Roni Kaufman, *Parly 2*, 2024. [Link to Inspiration](https://openprocessing.org/sketch/2405194)
  The switching between square and circular shapes in this example inspired me to create similar visual transformations for the particles in the sky animation.

---

# Part 4: Technical Explanation of Individual Code

![An image of Screemshot1](Screenshot1.png)
- **Functionality**:  
  Draws particles using rectangles and ellipses.  
  - **Rectangle**: The dimensions are dynamically adjusted using the `sin` function to simulate a "flickering" effect.  
  - **Ellipse**: Maintains the base shape of the particles.

- **Technical Highlight**:  
  - **`frameCount`**: Used to control changes over time.

![An image of Screemshot2](Screenshot2.png)
- **Functionality**:  
  Adds a "flowing" effect to particles, simulating horizontal movement with wave-like vertical oscillations.

- **Technical Highlight**:  
  - **Noise Function**: Introduces randomness, making the particle movement more natural.  
  - **Wave Simulation**: Combines the `sin` function to achieve vertical oscillations along the Y-axis, creating a wave effect.

![An image of Screemshot3](Screenshot3.png)
- **Functionality**:  
  Updates particle colors, gradually transitioning from the initial color to the target color.

- **Technical Highlight**:  
  - **`lerpColor`**: Smoothly interpolates between two colors, enabling a fluid transition from daytime to nighttime imagery.

---

# Technical References

To achieve specific effects in my project, I referred to the **p5.js** library and its documentation. Below are the technical references and their applications:

- **Gradient Transitions with `lerpColor`**:  
  [p5.js Documentation: lerpColor](https://p5js.org/reference/#/p5/lerpColor)

- **Brightness Adjustment**:  
  [p5.js Documentation: brightness](https://p5js.org/reference/#/p5/brightness)

- **Time Control Using `frameCount`**:  
  [p5.js Documentation: frameCount](https://p5js.org/reference/#/p5/frameCount)
