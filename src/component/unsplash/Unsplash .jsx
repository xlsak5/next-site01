import Image from "next/image";
import React from "react";

const Unsplash = (props) => {
  return (
    <section id="unsplashSection" className="unsplash__wrap section scoreDream">
      <div className="unsplash__inner container">
        <div className="unsplash__text">
          <h3>이미지 다운로드 추천</h3>
          <p>
            더 다양한 강의는 유튜브를 통해 제공하고 있습니다. <br />
            구독과 좋아요! 부탁드립니다.
          </p>
          <a href="#" className="button-blue">
            자세히 보기
          </a>
        </div>
        <div className="unsplash__item">
          <div>
            <Image
              width={400}
              height={218}
              src="/assets/images/unsplash/unsplash1.png"
              alt="유투브"
            />
          </div>
          <div>
            <Image
              width={400}
              height={218}
              src="/assets/images/unsplash/unsplash2.png"
              alt="유투브"
            />
          </div>
          <div>
            <Image
              width={400}
              height={218}
              src="/assets/images/unsplash/unsplash3.png"
              alt="유투브"
            />
          </div>
          <div>
            <Image
              width={400}
              height={218}
              src="/assets/images/unsplash/unsplash4.png"
              alt="유투브"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unsplash;
