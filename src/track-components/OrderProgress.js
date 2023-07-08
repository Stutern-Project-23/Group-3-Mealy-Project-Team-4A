import React, { useEffect } from 'react';

export default function OrderProgress() {
  useEffect(() => {
    const first = document.querySelector('.first');
    const second = document.querySelector('.second');
    const third = document.querySelector('.third');
    const fourth = document.querySelector('.fourth');
    const fifth = document.querySelector('.fifth');
    const steps = [first, second, third, fourth, fifth];

    function nextStep(currentStep) {
      steps.forEach(step => step.classList.remove('finished'));

      steps.forEach((step, index) => {
        if (index <= currentStep) {
          step.classList.add('finished');
        } else {
          step.classList.remove('finished');
        }
      });
    }

    steps.forEach((step, index) => {
      step.addEventListener('click', () => {
        nextStep(index);
      });
    });

    // Cleanup event listeners when component unmounts
    return () => {
      steps.forEach((step, index) => {
        step.removeEventListener('click', () => {
          nextStep(index);
        });
      });
    };
  }, []); 

  return (
    <div>
      <div className='track-order-progress-bar'>
        <ul>
          <li>
            <div className="step first">
              <i className="awesome fa-solid fa-check"></i>
            </div>
            <p className="label">Order Confirmed</p>
          </li>
          <li>
            <div className="step second">
              <i className="awesome fa-solid fa-check"></i>
            </div>
            <p className="label">Preparing Your Order</p>
          </li>

          <li>
            <div className="step third">
              <i className="awesome fa-solid fa-check"></i>
            </div>
            <p className="label">Order is ready at the restaurant</p>
          </li>

          <li>
            <div className="step fourth">
              <i className="awesome fa-solid fa-check"></i>
            </div>
            <p className="label">Rider is picking up the order</p>
          </li>
          <li>
            <div className="step fifth">
              <i className="awesome fa-solid fa-check"></i>
            </div>
            <p className="label">Rider is nearby your place</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

