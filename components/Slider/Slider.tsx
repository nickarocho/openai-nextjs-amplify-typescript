import React from "react";
import * as RadixSlider from "@radix-ui/react-slider";
import styles from "./Slider.module.css";

const Slider = () => {
  return (
    <form>
      <RadixSlider.Root
        className={styles.SliderRoot}
        defaultValue={[50]}
        max={100}
        step={1}
        aria-label="Volume"
      >
        <RadixSlider.Track className={styles.SliderTrack}>
          <RadixSlider.Range className={styles.SliderRange} />
        </RadixSlider.Track>
        <RadixSlider.Thumb className={styles.SliderThumb} />
      </RadixSlider.Root>
    </form>
  );
};

export default Slider;
