import "./Numbers.css";
import { useSpring, animated } from "react-spring";
function Numbers() {
  const animatedProps1 = useSpring({
    number: 3,
    from: { number: 0 },
    delay: 1000,
  });
  const animatedProps2 = useSpring({
    number: 1500,
    from: { number: 0 },
    delay: 1000,
  });
  const animatedProps3 = useSpring({
    number: 4,
    from: { number: 0 },
    delay: 1000,
  });
  const animatedProps4 = useSpring({
    number: 10,
    from: { number: 0 },
    delay: 1000,
  });
  return (
    <div className=" NumbersDiv">
      <div className="row NumbersRow mt-4 pt-5 pb-5">
        <div className="col-md-3  d-flex justify-content-around ">
          <div className=" d-flex justify-content-around align-content-center flex-column">
            <div className="d-flex justify-content-center align-content-center">
              <img
                style={{ width: "70px" }}
                src="https://olydent.com/wp-content/uploads/2022/06/cunt-icon01.png "
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
        <div className="col-md-3 d-flex justify-content-around ">
          <div className=" d-flex justify-content-around flex-column">
            <div className=" d-flex justify-content-center align-content-center">
              <img
                style={{ width: "70px" }}
                src="https://olydent.com/wp-content/uploads/2022/06/cunt-icon02.png "
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
            <div className="NumbersName"> MUTLU TEDAVİ</div>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-around ">
          <div className=" d-flex justify-content-around flex-column">
            <div className=" d-flex justify-content-center align-content-center">
              <img
                style={{ width: "70px" }}
                src="https://olydent.com/wp-content/uploads/2022/06/cunt-icon03.png "
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
            <div className="NumbersName"> AKTİF MUAYENEHANE</div>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-around ">
          <div className=" d-flex justify-content-around flex-column">
            <div className=" d-flex justify-content-center align-content-center">
              <img
                style={{ width: "55px" }}
                src="https://olydent.com/wp-content/uploads/2022/06/sr-icon02.png "
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
            <div className="NumbersName"> AKTİF MUAYENEHANE</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
