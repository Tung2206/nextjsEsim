'use client'
import { useState, useEffect, useRef } from "react";
import Styles from "../styles/rangerValidity.module.scss"
const ValiditySlider = ({ initialMin, initialMax, min, max, step, priceCap }) => {

    const progressRef = useRef(null);
    const [minValue, setMinValue] = useState(initialMin);
    const [maxValue, setMaxValue] = useState(initialMax);
    const handleMin = (e) => {
        if (maxValue - minValue >= priceCap && maxValue <= max) {
            if (parseInt(e.target.value) > parseInt(maxValue)) {
            } else {
                setMinValue(parseInt(e.target.value));
            }
        } else {
            if (parseInt(e.target.value) < minValue) {
                setMinValue(parseInt(e.target.value));
            }
        }
    };

    const handleMax = (e) => {
        if (maxValue - minValue >= priceCap && maxValue <= max) {
            if (parseInt(e.target.value) < parseInt(minValue)) {
            } else {
                setMaxValue(parseInt(e.target.value));
            }
        } else {
            if (parseInt(e.target.value) > maxValue) {
                setMaxValue(parseInt(e.target.value));
            }
        }
    };
    useEffect(() => {
        progressRef.current.style.left = (minValue / max) * step + "%";
        progressRef.current.style.right = step - (maxValue / max) * step + "%";
    }, [minValue, maxValue, max, step]);
    return (
        <div className={Styles.validityPrice}>
            <div className={Styles.validityPriceMinMax}>
                <div className="rounded-md">
                    <span className="p-2 font-semibold"> Min</span>
                    <input
                        onChange={(e) => setMinValue(e.target.value)}
                        type="number"
                        value={minValue}
                        className="w-24 rounded-md border border-gray-400"
                    />
                </div>
                <div className="ml-2 font-semibold text-lg"> - </div>
                <div className=" ">
                    <span className="p-2 font-semibold"> Max</span>
                    <input
                        onChange={(e) => setMaxValue(e.target.value)}
                        type="number"
                        value={maxValue}
                        className={Styles.silderSetValue}
                    />
                </div>
            </div>
            <div className="mb-4">
                <div className={Styles.silderPrice}>
                    <div
                        className={Styles.silderProgress}
                        ref={progressRef}
                    ></div>
                </div>

                <div className={Styles.silderReletive}>
                    <input
                        onChange={handleMin}
                        type="range"
                        min={min}
                        step={step}
                        max={max}
                        value={minValue}
                        className={Styles.silderMinOne}
                    />

                    <input
                        onChange={handleMax}
                        type="range"
                        min={min}
                        step={step}
                        max={max}
                        value={maxValue}
                        className={Styles.silderMaxOne}
                    />
                </div>
            </div>
        </div>
    );
};


export default ValiditySlider;
