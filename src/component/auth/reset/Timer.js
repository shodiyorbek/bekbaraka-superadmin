import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';

function Timer({isValid}) {
    const [timeLeft, setTimeLeft] = useState(10);
    const timerCircleRef = useRef(null);

    useEffect(() => {
        const timerCircle = timerCircleRef.current;

        if(timeLeft!==0){
            isValid(true);
            if (timerCircle) {
                const normalizedTime = (120 - timeLeft) / 120;
                timerCircle.style.strokeDashoffset = normalizedTime;

                if (isTimeLeft()) {
                    const countdownTimer = setInterval(() => {
                        const timeRemaining = timeLeft - 1;
                        const normalizedTime = (120 - timeRemaining) / 120;

                        timerCircle.style.strokeDashoffset = normalizedTime;
                        setTimeLeft(timeRemaining);

                        if (!isTimeLeft()) {
                            clearInterval(countdownTimer);
                            timerCircle.style.strokeDashoffset = 0; // Ensure it's complete
                        }
                    }, 1000);

                    return () => {
                        clearInterval(countdownTimer);
                    };
                }
            }
        }
        else {
            isValid(false)
        }


    }, [timeLeft]);

    function isTimeLeft() {
        return timeLeft > -1;
    }
    let minutes=0
    let seconds=0
   if(timeLeft!==0){
        minutes = Math.floor(timeLeft / 60);
        seconds = timeLeft % 60;
   }


    return (
        <div className="timer animatable">
            <svg>
                <circle cx="50%" cy="50%" r="16" />
                <circle ref={timerCircleRef} cx="50%" cy="50%" r="16" pathLength="1" />
                <text x="50%" y="55%" textAnchor="middle">
                    <tspan id="timeLeft">{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</tspan>
                </text>

            </svg>
        </div>
    );
}

export default Timer;
