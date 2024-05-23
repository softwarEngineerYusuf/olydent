import "./Numbers.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function Numbers() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Sadece bir kere tetiklenmesini sağlar
    threshold: 0.1, // Görünürlüğün %10'unda tetiklenir
  });

  const animatedProps1 = useSpring({
    number: inView ? 3 : 0,
    from: { number: 0 },
    delay: 1000,
  });
  const animatedProps2 = useSpring({
    number: inView ? 1500 : 0,
    from: { number: 0 },
    delay: 1000,
  });
  const animatedProps3 = useSpring({
    number: inView ? 4 : 0,
    from: { number: 0 },
    delay: 1000,
  });
  const animatedProps4 = useSpring({
    number: inView ? 10 : 0,
    from: { number: 0 },
    delay: 1000,
  });

  return (
    <div className="NumbersDiv">
      <div className="row NumbersRow mt-4 pt-5 pb-5" ref={ref}>
        <div className="col-md-3 d-flex justify-content-around">
          <div className="d-flex justify-content-around align-content-center flex-column">
            <div className="d-flex justify-content-center align-content-center">
              <img
                style={{ width: "70px" }}
                src="https://olydent.com/wp-content/uploads/2022/06/cunt-icon01.png"
                alt=""
              />
            </div>
            <div className="NumbersSpan mt-3">
              <animated.span>
                {animatedProps1.number.interpolate((value) =>
                  Math.floor(value)
                )}
              </animated.span>
              <span>+</span>
            </div>
            <div className="NumbersName">DOKTOR</div>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-around">
          <div className="d-flex justify-content-around flex-column">
            <div className="d-flex justify-content-center align-content-center">
              <img
                style={{ width: "70px" }}
                src="https://olydent.com/wp-content/uploads/2022/06/cunt-icon02.png"
                alt=""
              />
            </div>
            <div className="NumbersSpan mt-3">
              <animated.span>
                {animatedProps2.number.interpolate((value) =>
                  Math.floor(value)
                )}
              </animated.span>
              <span>+</span>
            </div>
            <div className="NumbersName">MUTLU TEDAVİ</div>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-around">
          <div className="d-flex justify-content-around flex-column">
            <div className="d-flex justify-content-center align-content-center">
              <img
                style={{ width: "70px" }}
                src="https://olydent.com/wp-content/uploads/2022/06/cunt-icon03.png"
                alt=""
              />
            </div>
            <div className="NumbersSpan mt-3">
              <animated.span>
                {animatedProps3.number.interpolate((value) =>
                  Math.floor(value)
                )}
              </animated.span>
              <span>+</span>
            </div>
            <div className="NumbersName">AKTİF MUAYENEHANE</div>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-around">
          <div className="d-flex justify-content-around flex-column">
            <div className="d-flex justify-content-center align-content-center">
              <img
                style={{ width: "55px" }}
                src="https://olydent.com/wp-content/uploads/2022/06/sr-icon02.png"
                alt=""
              />
            </div>
            <div className="NumbersSpan mt-3">
              <animated.span>
                {animatedProps4.number.interpolate((value) =>
                  Math.floor(value)
                )}
              </animated.span>
              <span>+</span>
            </div>
            <div className="NumbersName">AKTİF MUAYENEHANE</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
