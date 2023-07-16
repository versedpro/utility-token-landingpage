import Nav from "../components/Nav";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "react-lottie-player";
import lottie1 from "../1.json";
import lottie2 from "../2.json";
import lottie3 from "../3.json";
import lottie4 from "../4.json";
import lottie5 from "../5.json";
import lottie6 from "../6.json";
import lottie7 from "../7.json";
import lottie8 from "../8.json";
import lottie9 from "../9.json";
import lottie10 from "../10.json";
import lottie11 from "../11.json";
import lottie12 from "../signup.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { ToastContainer, toast } from "react-toastify";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import emailjs from "@emailjs/browser";

function Home() {
  const currentTab = "home";
  window.addEventListener("load", function () {
    AOS.init({ disable: "mobile" });
  });
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
    AOS.refresh();
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_j4ksmgr", "template_vv1twi8", form.current, "_Vax4h6cPLN4RykCm").then(
      (result) => {
        console.log(result.text);
        toast.success(`Your message was sent.`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      },
      (error) => {
        console.log(error.text);
        toast.error(`Your message was not sent.`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    );
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
  };
  const postUrl = `https://capital.us11.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
  const CustomForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState("");
    const clearFields = () => {
      setEmail("");
    };
    useEffect(() => {
      if (status === "success") {
        clearFields();
        toast.success(`You successfully signed up for Early Access.`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      if (status === "error") {
        toast.error(`An error occured.`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }, [status]);
    const handleSubmit = (e) => {
      e.preventDefault();
      onValidated({
        EMAIL: email,
      });
    };
    return (
      // <form onSubmit={(e) => handleSubmit(e)}>
      //   <input
      //     type="email"
      //     className="early-input"
      //     placeholder="Email"
      //     value={email}
      //     onChange={(e) => setEmail(e.target.value)}
      //     required
      //   />
      //   <div>
      //     <button className="buypresale" type="submit">
      //       Sign Up
      //     </button>
      //   </div>
      // </form>
      <div>
        <a href="https://invesableai.com/?a=signup" target="_blank" rel="noreferrer">
          <button className="buypresale" type="submit">
            Sign Up
          </button>
        </a>
      </div>
    );
  };

  return (
    <>
      <div className="home">
        <Nav Tab={currentTab} />

        <div className="home-top" id="home">
          <div className="text">
            <div className="label" data-aos="fade-right" data-aos-duration="1000">
              HOME
              <hr></hr>
            </div>
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
              Empower <br />
              your investments
              <br />
              <span>with AI</span>
            </h1>
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
              Let our AI technology help you make smarter trades and maximize your profits.
            </p>
            <div className="mobi-cent" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
              <a href="https://invesableai.com/" target="_blank" rel="noreferrer">
                <button className="buypresale">Buy Presale</button>
              </a>
            </div>
            <div className="scroll-arrow" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400">
              <a href="#advantages">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_801_1841)">
                    <g opacity="0.1">
                      <path
                        d="M15 1C22.7 1 29 7.3 29 15C29 22.7 22.7 29 15 29C7.3 29 1 22.7 1 15C1 7.3 7.3 1 15 1ZM15 0C6.7 0 0 6.7 0 15C0 23.3 6.7 30 15 30C23.3 30 30 23.3 30 15C30 6.7 23.3 0 15 0Z"
                        fill="#162142"
                      ></path>
                    </g>
                    <path
                      d="M15 8.6001V19.0001"
                      stroke="#4897E0"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M19.3002 15.3999L15.0002 19.7999L10.7002 15.3999"
                      stroke="#4897E0"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_801_1841">
                      <rect width="30" height="30" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
          <img src="/assets/UI.png" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300" alt="" />
          <div className="abs-back"></div>
        </div>

        <div className="project" id="advantages">
          <div className="title">
            <div className="label" data-aos="fade-right" data-aos-duration="1000">
              ADVANTAGES
              <hr></hr>
            </div>
            <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">
              Elevated trading <span>starts here</span>
            </h1>
            <p data-aos="fade-right" data-aos-duration="1000">
              Start gaining an edge over other investors with cutting edge AI powered investment system.
            </p>
            <br />
            <br />
            <h2 data-aos="fade-right" data-aos-duration="1000">
              INVESABLEAI's three key features
            </h2>
          </div>
          <div className="cards">
            <div className="card" data-aos="fade-up" data-aos-duration="1000">
              <img src="/assets/advantages/management.svg" alt="" />
              <h3>Easy management of crypto investments</h3>
              <p>
                Stay on top of their crypto investments across multiple blockchain networks with a user-friendly
                interface, real-time updates, and auto-investing features, allowing for more informed investment
                decisions and potential higher returns.
              </p>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
              <img src="/assets/advantages/risk.svg" alt="" />

              <h3>Risk management features</h3>
              <p>
                Our AI technology helps users make informed decisions, such as identifying safer and more suitable
                centralized/decentralized exchanges for each transaction, and offering real-time information on
                high-risk coins and those that are best sold.
              </p>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
              <img src="/assets/advantages/earning.svg" alt="" />

              <h3>Deflationary and scarcity</h3>
              <p>
                Our token has a fixed supply of coins available, and its intrinsic value increases over time as their
                total supply remains constant. Our token encourages holding and discourage spending, increasing scarcity
                and adoption of the currency as a store of value. A reduction in token supply may counteract
                inflationary pressures caused by external factors, including government policies or economic incidents
              </p>
            </div>
          </div>
        </div>
        <div className="project" id="about">
          <div className="title">
            <div className="label" data-aos="fade-right" data-aos-duration="1000">
              ABOUT
              <hr></hr>
            </div>
            <h1 data-aos="fade-left" data-aos-duration="1000">
              About <span>INVESABLEAI</span>
            </h1>
            <p data-aos="fade-right" data-aos-duration="1000">
              INVESABLEAI is an innovative cryptocurrency investment system that uses cutting-edge AI technology to help
              investors manage their assets across multiple CEX/DEX, including Binance and Kukoin. With features like
              auto-investing, dollar-cost averaging, and copy-trading, INVESABLEAI makes it easy for both novice and
              experienced investors to participate in the cryptocurrency market. Our AI-powered system monitors the
              market in real-time. Join INVESABLEAI today and experience the benefits of an advanced cryptocurrency
              investment system designed for everyone.
            </p>
          </div>
          <div className="functions">
            <div className="function">
              <div className="function-text" data-aos="fade-right" data-aos-duration="1000">
                <h3>Portfolio monitoring</h3>
                <p>
                  Our platform enables investors to monitor VC portfolios across multiple blockchain networks, including
                  Arbitrum and Ethereum.
                </p>
              </div>
              <Lottie
                data-aos="fade-left"
                data-aos-duration="1000"
                className="lottie-mobile"
                loop
                animationData={lottie1}
                play
                style={{ width: 580, height: 580 }}
              />
            </div>
            <div className="function">
              <div className="function-text" data-aos="fade-left" data-aos-duration="1000">
                <h3>User-friendly UI/UX</h3>
                <p>
                  Our user-friendly UI/UX enables investors to track their investments across multiple blockchain
                  networks. Our platform's AI can flag high-risk coins and identify those that are best sold due to
                  significant price spikes or negative news from reliable sources such as notable news sites and crypto
                  Twitter accounts.
                </p>
              </div>
              <Lottie
                data-aos="fade-right"
                data-aos-duration="1000"
                className="lottie-mobile"
                loop
                animationData={lottie2}
                play
                style={{ width: 580, height: 580 }}
              />
            </div>
            <div className="function">
              <div className="function-text" data-aos="fade-right" data-aos-duration="1000">
                <h3>Auto-investing and DCA</h3>
                <p>
                  We provide an auto-investing and dollar-cost averaging (DCA) feature for selected coins, initially
                  available on Arbitrum and Ethereum, and later cross-chain. Our platform offers the option to set
                  take-profit and trailing stop-loss orders.
                </p>
              </div>
              <Lottie
                data-aos="fade-left"
                data-aos-duration="1000"
                className="lottie-mobile"
                loop
                animationData={lottie3}
                play
                style={{ width: 580, height: 580 }}
              />
            </div>
            <div className="function">
              <div className="function-text" data-aos="fade-left" data-aos-duration="1000">
                <h3>Trading bot</h3>
                <p>
                  Our platform enables users to auto-invest in major blue-chip projects, and we utilize a trading bot
                  for faster transactions.
                </p>
              </div>
              <Lottie
                data-aos="fade-right"
                data-aos-duration="1000"
                className="lottie-mobile"
                loop
                animationData={lottie4}
                play
                style={{ width: 400, height: 400 }}
              />
            </div>
            <div className="function">
              <div className="function-text" data-aos="fade-right" data-aos-duration="1000">
                <h3>Staking stablecoins</h3>
                <p>
                  We enable staking (lending) of stablecoins on the platform, which will be utilized by the auto-trading
                  AI bot to generate APY. If the bot underperforms in the long term, users can still recover their funds
                  due to the platform's generated fees and profit.
                </p>
              </div>
              <Lottie
                data-aos="fade-left"
                data-aos-duration="1000"
                className="lottie-mobile"
                loop
                animationData={lottie5}
                play
                style={{ width: 580, height: 580 }}
              />
            </div>
            <div className="function">
              <div className="function-text" data-aos="fade-left" data-aos-duration="1000">
                <h3>Copy-trade portfolios</h3>
                <p>
                  Our platform allows users to copy-trade in real-time from VC portfolios or regular user portfolios,
                  initially available on CEX, and later DEX. The platform includes risk management features and the
                  option to ignore low/medium/big market-cap calls or those that have already experienced significant
                  price increases.
                </p>
              </div>
              <Lottie
                data-aos="fade-right"
                data-aos-duration="1000"
                className="lottie-mobile"
                loop
                animationData={lottie6}
                play
                style={{ width: 580, height: 580 }}
              />
            </div>
            <div className="function">
              <div className="function-text" data-aos="fade-right" data-aos-duration="1000">
                <h3>Multi-CEX/DEX aggregation</h3>
                <p>
                  Our platform utilizes multi-cex/dex aggregation, with the AI playing a crucial role in deciding which
                  dex is safer and more suitable for each transaction.
                </p>
              </div>
              <Lottie
                data-aos="fade-left"
                data-aos-duration="1000"
                className="lottie-mobile"
                loop
                animationData={lottie7}
                play
                style={{ width: 580, height: 580 }}
              />
            </div>
            <div className="function">
              <div className="function-text" data-aos="fade-left" data-aos-duration="1000">
                <h3>Fast-revoke feature</h3>
                <p>
                  We implement a fast-revoke feature that withdraws contract allowances and approvals after each
                  transaction.
                </p>
              </div>
              <Lottie
                data-aos="fade-right"
                data-aos-duration="1000"
                className="lottie-mobile"
                loop
                animationData={lottie8}
                play
                style={{ width: 450, height: 450 }}
              />
            </div>
            <div className="function">
              <div className="function-text" data-aos="fade-right" data-aos-duration="1000">
                <h3>Unlimited tracking</h3>
                <p>Our platform enables users to track an unlimited number of portfolios using a single account.</p>
              </div>
              <Lottie
                data-aos="fade-left"
                data-aos-duration="1000"
                className="lottie-mobile"
                loop
                animationData={lottie9}
                play
                style={{ width: 500, height: 500 }}
              />
            </div>
            <div className="function">
              <div className="function-text" data-aos="fade-left" data-aos-duration="1000">
                <h3>Code & Share bots</h3>
                <p>
                  Our platform enables users to code their trading/investing/DCA bots, share them on the platform, and
                  receive a specific percentage of profits made by other users.
                </p>
              </div>
              <Lottie
                data-aos="fade-right"
                data-aos-duration="1000"
                className="lottie-mobile"
                loop
                animationData={lottie4}
                play
                style={{ width: 400, height: 400 }}
              />
            </div>
            <div className="function">
              <div className="function-text" data-aos="fade-right" data-aos-duration="1000">
                <h3>AI Analysis</h3>
                <p>
                  We enable users to request AI analysis of a specific coin, which provides information on its contract,
                  price, listed CEX/DEX, liquidity, lock time, audit, and team background, with an indication of its
                  safety level.
                </p>
              </div>
              <Lottie
                data-aos="fade-left"
                data-aos-duration="1000"
                className="lottie-mobile"
                loop
                animationData={lottie10}
                play
                style={{ width: 400, height: 400 }}
              />
            </div>
            <div className="function">
              <div className="function-text" data-aos="fade-left" data-aos-duration="1000">
                <h3>Twitter scraping with AI</h3>
                <p>
                  Our platform includes a section dedicated to Twitter scraping using AI. The most trending coins on
                  Twitter are displayed for users to view.
                </p>
              </div>
              <Lottie
                data-aos="fade-right"
                data-aos-duration="1000"
                className="lottie-mobile"
                loop
                animationData={lottie11}
                play
                style={{ width: 400, height: 400 }}
              />
            </div>
            <a
              data-aos="zoom-in"
              data-aos-duration="500"
              href="https://invesableai.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="buypresale">Buy Presale</button>
            </a>
          </div>
        </div>
        <div className="why-us-wrapper" data-aos="fade-up" data-aos-duration="1000">
          <div className="project ovmob" id="why-us">
            <div className="why-us-trust">
              <h3>Revolutionize your crypto portfolio management with AI-powered precision and ease.</h3>
            </div>
            <div className="why-us-stats">
              <div className="why-us-stats-item">
                <h3>10%</h3>
                <h6>Sell transaction fees</h6>
              </div>
              <div className="why-us-stats-item">
                <h3>5</h3>
                <h6>CEXs supported</h6>
              </div>
              <div className="why-us-stats-item">
                <h3>100%</h3>
                <h6>Perfect risk management</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="roadmap" id="roadmap">
          <div className="project">
            <div className="title">
              <div className="label" data-aos="fade-right" data-aos-duration="1000">
                ROAD MAP
                <hr></hr>
              </div>
              <h1 data-aos="fade-left" data-aos-duration="1000">
                ROAD MAP
              </h1>
            </div>
          </div>
          <div className="swiper-line-wrap" data-aos="zoom-in" data-aos-duration="500">
            <div className="line"></div>

            <Swiper
              slidesPerView={"auto"}
              spaceBetween={20}
              pagination={false}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <h2>Stage 1</h2>
                <div className="dot"></div>
                <p>
                  - Audit: Conduct a thorough audit of the platform to ensure security and functionality. <br />
                  - Pre-Sale Website Live: Launch the website for the upcoming pre-sale, including information on the
                  project, team, and tokenomics. <br />
                  - Pre-Sale Live: Launch the pre-sale, allowing early investors to purchase tokens at a discounted
                  price. <br />- PR Machine Live: Begin public relations efforts to promote the project and increase
                  awareness. <br />- Socials Live: Launch social media accounts to engage with the community and share
                  updates on the project. <br />
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <h2>Stage 2</h2>
                <div className="dot"></div>
                <p>
                  - Secure First CEX: Secure a listing on the first centralized exchange to increase liquidity and
                  exposure. <br />
                  - Meme Machine Live: Launch a the best community meme <br />
                  - Influencers: Partner with influential individuals in the crypto space to increase exposure and
                  credibility. <br />
                  - Full Website: Launch a comprehensive website. <br />- Media Stunts: Plan and execute creative
                  marketing stunts to generate buzz and drive adoption.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <h2>Stage 3</h2>
                <div className="dot"></div>
                <p>
                  - Meme Machine Live: Enhance the meme content <br />
                  - Influencers Turbo: Expand the influencer partnerships to reach a broader audience and increase
                  engagement. <br />
                  - Media Stunts Turbo: Plan and execute even bigger and more creative marketing stunts to generate buzz
                  and attract attention. <br />
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <h2>Stage 4</h2>
                <div className="dot"></div>
                <p>
                  - Full service: Launch a full web application to provide a seamless and secure user experience. <br />
                  - Staking: Implement staking capabilities to incentivize holding and increase token value. <br />- DAO
                  Launch: Late stage 4 we will go full decentralized giving full control over future decisions of the
                  protocol.
                </p>
              </SwiperSlide>
            </Swiper>
            <div className="project nopad">
              <div className="nav-swiper">
                <div className="prev">
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.00984015 6.99996C0.00984021 6.74905 0.105643 6.49818 0.296845 6.30688L6.31659 0.287198C6.69952 -0.0957329 7.32038 -0.0957328 7.70315 0.287198C8.08593 0.669974 8.08593 1.29071 7.70315 1.67367L2.37655 6.99996L7.70296 12.3263C8.08574 12.7092 8.08574 13.3299 7.70296 13.7126C7.32019 14.0958 6.69933 14.0958 6.3164 13.7126L0.296658 7.69304C0.105425 7.50165 0.0098401 7.25078 0.00984015 6.99996Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <div className="next">
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.99016 7.00004C7.99016 7.25095 7.89436 7.50182 7.70315 7.69312L1.68341 13.7128C1.30048 14.0957 0.679623 14.0957 0.296847 13.7128C-0.0859282 13.33 -0.0859281 12.7093 0.296848 12.3263L5.62345 7.00004L0.297035 1.67371C-0.0857406 1.29078 -0.0857405 0.670111 0.297035 0.287366C0.679811 -0.0957503 1.30067 -0.0957503 1.6836 0.287366L7.70334 6.30696C7.89457 6.49835 7.99016 6.74922 7.99016 7.00004Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="whitepaper-wrap">
                <a href="whitepaper.pdf" target="_blank" rel="noreferrer">
                  <button className="buypresale">Whitepaper</button>
                </a>
              </div>
              <br />
            </div>
          </div>
        </div>

        <div className="early-access-wrap" id="earlyaccess" data-aos="zoom-out" data-aos-duration="1000">
          <div className="project">
            <div className="title">
              <h1>Early Access</h1>
              <p>
                Have the edge over others first! <br></br>
                Sign up now and get notified when the early access spots come available for our AI investment system.
              </p>

              <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                  <CustomForm status={status} message={message} onValidated={(formData) => subscribe(formData)} />
                )}
              />
            </div>
            <Lottie className="lottieearly" loop animationData={lottie12} play style={{ width: 600, height: 400 }} />
          </div>
        </div>

        <footer id="contact">
          <div className="project">
            <div className="title">
              <div className="label" data-aos="fade-right" data-aos-duration="1000">
                REACH OUT
                <hr></hr>
              </div>
              <h1 data-aos="fade-left" data-aos-duration="1000">
                Contact
              </h1>
              <p data-aos="fade-right" data-aos-duration="1000">
                For questions or concerns, simply fill out our contact form to get in touch.
              </p>
              <h5 data-aos="fade-right" data-aos-duration="1000">
                Follow us:
              </h5>
              <div className="socials" data-aos="fade-right" data-aos-duration="1000">
                <a href="https://t.me/" target="_blank" rel="noreferrer">
                  <img src="/assets/telegram.svg" alt="" />
                </a>
                <a href="https://discord.gg/" target="_blank" rel="noreferrer">
                  <img src="/assets/discord.svg" alt="" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <img src="/assets/twitter.svg" alt="" />
                </a>
                <a href="https://medium.com/" target="_blank" rel="noreferrer">
                  <img src="/assets/medium.svg" alt="" />
                </a>
                <a href="https://gitbook.com/" target="_blank" rel="noreferrer">
                  <img src="/assets/gitbook.svg" alt="" />
                </a>
              </div>
              <h6 data-aos="fade-right" data-aos-duration="1000">
                © 2023 INVESABLEAI. All rights reserved.
              </h6>
            </div>
            <div class="contact-form" data-aos="zoom-in" data-aos-duration="1000">
              <span class="title">
                Do you have a question?{` `}
                {/* <form class="form" ref={form} onSubmit={sendEmail}>
                <div class="group">
                  <input placeholder="" type="text" id="name" name="name" required />
                  <label for="name">Name</label>
                </div>
                <div class="group">
                  <input placeholder="" type="email" id="email" name="email" required />
                  <label for="email">Email</label>
                </div>
                <div class="group">
                  <textarea placeholder="" id="comment" name="comment" rows="5" required></textarea>
                  <label for="comment">Message</label>
                </div>
                <button type="submit" value="Send">
                  Submit
                </button>
              </form> */}
                <a href="https://invesableai.com/?a=support" target="_blank" rel="noreferrer">
                  Contact us
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
export default Home;
