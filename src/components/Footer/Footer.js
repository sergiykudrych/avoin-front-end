import React from 'react';
import { Link } from 'react-router-dom';

// Style
import './footer.scss';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top grid">
          <div className="footer__column">
            <h2 className="footer__title">Menu</h2>
            <ul className="footer__list list-reset">
              <li className="footer__item ">
                <Link>New arrivals</Link>
              </li>
              <li className="footer__item ">
                <Link>Best sellers</Link>
              </li>
              <li className="footer__item ">
                <Link>Recently viewed</Link>
              </li>
              <li className="footer__item ">
                <Link>Popular this week</Link>
              </li>
              <li className="footer__item ">
                <Link>All products</Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h2 className="footer__title">Categories</h2>
            <ul className="footer__list list-reset">
              <li className="footer__item ">
                <Link>Crockery</Link>
              </li>
              <li className="footer__item ">
                <Link>Furniture</Link>
              </li>
              <li className="footer__item ">
                <Link>Homeware</Link>
              </li>
              <li className="footer__item ">
                <Link>Plant pots</Link>
              </li>
              <li className="footer__item ">
                <Link>Chairs</Link>
              </li>
              <li className="footer__item ">
                <Link>Crockery</Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h2 className="footer__title">Our company</h2>
            <ul className="footer__list list-reset">
              <li className="footer__item ">
                <Link>About us</Link>
              </li>
              <li className="footer__item ">
                <Link>Vacancies</Link>
              </li>
              <li className="footer__item ">
                <Link>Contact us</Link>
              </li>
              <li className="footer__item ">
                <Link>Privacy</Link>
              </li>
              <li className="footer__item ">
                <Link>Returns policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer__column footer__column--big">
            <h2 className="footer__title">Join our mailing list</h2>
            <form action="#" className="form footer__form">
              <input type="email" className="form__input" placeholder="your@email.com" />
              <button className="form__button btn btn--gray">Sign up</button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copyrignt">Copyright 2022 Avion LTD</span>
          <ul className="social">
            <li className=" social__item">
              <a className="social__link" aria-label="Facebook" target="_blank" href="https://www.linkedin.com/">
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.65 0H1.35C0.6 0 0 0.6 0 1.275V16.65C0 17.325 0.6 17.925 1.35 17.925H16.65C17.4 17.925 18 17.325 18 16.65V1.275C18 0.6 17.4 0 16.65 0ZM5.325 15.3H2.7V6.75H5.325V15.3ZM4.05 5.55C3.225 5.55 2.475 4.875 2.475 3.975C2.475 3.075 3.15 2.4 4.05 2.4C4.875 2.4 5.625 3.075 5.625 3.975C5.625 4.875 4.875 5.55 4.05 5.55ZM15.375 15.225H12.75V11.025C12.75 10.05 12.75 8.7 11.325 8.7C9.9 8.7 9.75 9.825 9.75 10.875V15.15H7.125V6.75H9.6V7.875H9.675C10.05 7.2 10.95 6.45 12.225 6.45C14.925 6.45 15.45 8.25 15.45 10.575V15.225H15.375Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li className=" social__item">
              <a className="social__link" aria-label="Facebook" target="_blank" href="https://www.facebook.com/">
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.0025 0H0.9975C0.733553 0.00196251 0.480974 0.107686 0.29433 0.29433C0.107686 0.480974 0.00196251 0.733553 0 0.9975V17.0025C0.00196251 17.2664 0.107686 17.519 0.29433 17.7057C0.480974 17.8923 0.733553 17.998 0.9975 18H9.615V11.04H7.275V8.3175H9.615V6.315C9.615 3.99 11.0325 2.7225 13.1175 2.7225C13.815 2.7225 14.5125 2.7225 15.21 2.8275V5.25H13.7775C12.645 5.25 12.4275 5.79 12.4275 6.5775V8.31H15.1275L14.775 11.0325H12.4275V18H17.0025C17.2664 17.998 17.519 17.8923 17.7057 17.7057C17.8923 17.519 17.998 17.2664 18 17.0025V0.9975C17.998 0.733553 17.8923 0.480974 17.7057 0.29433C17.519 0.107686 17.2664 0.00196251 17.0025 0Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li className=" social__item">
              <a className="social__link" aria-label="Facebook" target="_blank" href="https://www.instagram.com/">
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.8042 5.2758C14.4007 5.2758 14.8842 4.79227 14.8842 4.1958C14.8842 3.59933 14.4007 3.1158 13.8042 3.1158C13.2077 3.1158 12.7242 3.59933 12.7242 4.1958C12.7242 4.79227 13.2077 5.2758 13.8042 5.2758Z"
                    fill="white"
                  />
                  <path
                    d="M9 4.37835C8.08592 4.37835 7.19237 4.64941 6.43235 5.15724C5.67232 5.66507 5.07995 6.38688 4.73015 7.23137C4.38035 8.07587 4.28883 9.00513 4.46715 9.90164C4.64548 10.7982 5.08565 11.6217 5.732 12.268C6.37835 12.9144 7.20185 13.3545 8.09836 13.5328C8.99487 13.7112 9.92413 13.6196 10.7686 13.2698C11.6131 12.92 12.3349 12.3277 12.8428 11.5677C13.3506 10.8076 13.6217 9.91408 13.6217 9C13.6217 7.77426 13.1347 6.59873 12.268 5.732C11.4013 4.86527 10.2257 4.37835 9 4.37835ZM9 12C8.40666 12 7.82664 11.8241 7.33329 11.4944C6.83994 11.1648 6.45542 10.6962 6.22836 10.1481C6.0013 9.59987 5.94189 8.99667 6.05764 8.41473C6.1734 7.83279 6.45912 7.29824 6.87868 6.87868C7.29824 6.45912 7.83279 6.1734 8.41473 6.05764C8.99667 5.94189 9.59987 6.0013 10.1481 6.22836C10.6962 6.45542 11.1648 6.83994 11.4944 7.33329C11.8241 7.82664 12 8.40666 12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12Z"
                    fill="white"
                  />
                  <path
                    d="M9 1.62165C11.4031 1.62165 11.6878 1.6308 12.6368 1.67415C13.2075 1.68094 13.7728 1.78577 14.308 1.98405C14.6961 2.13381 15.0486 2.36316 15.3428 2.65732C15.6369 2.95149 15.8663 3.30398 16.016 3.6921C16.2143 4.22731 16.3191 4.79261 16.3259 5.36333C16.3692 6.3123 16.3784 6.597 16.3784 9.00007C16.3784 11.4031 16.3693 11.6878 16.3259 12.6368C16.3191 13.2075 16.2143 13.7728 16.016 14.3081C15.8663 14.6962 15.6369 15.0487 15.3428 15.3428C15.0486 15.637 14.6961 15.8663 14.308 16.0161C13.7728 16.2144 13.2075 16.3192 12.6368 16.326C11.6879 16.3693 11.4033 16.3785 9 16.3785C6.5967 16.3785 6.31215 16.3694 5.36325 16.326C4.79253 16.3192 4.22723 16.2144 3.69202 16.0161C3.3039 15.8663 2.95142 15.637 2.65725 15.3428C2.36308 15.0487 2.13374 14.6962 1.98397 14.3081C1.78569 13.7728 1.68087 13.2075 1.67408 12.6368C1.6308 11.6878 1.62157 11.4031 1.62157 9.00007C1.62157 6.597 1.63072 6.3123 1.67408 5.36333C1.68087 4.79261 1.78569 4.22731 1.98397 3.6921C2.13373 3.30396 2.36307 2.95146 2.65724 2.65728C2.95141 2.3631 3.30389 2.13375 3.69202 1.98397C4.22723 1.78569 4.79253 1.68087 5.36325 1.67408C6.31222 1.6308 6.59693 1.62165 9 1.62165ZM9 0C6.55575 0 6.24922 0.0103499 5.2893 0.0541499C4.54279 0.0691372 3.80422 0.210592 3.105 0.4725C2.50705 0.703735 1.96401 1.05735 1.51068 1.51068C1.05735 1.96401 0.703735 2.50705 0.4725 3.105C0.210551 3.80434 0.0690949 4.54304 0.0541499 5.28968C0.0103499 6.24923 0 6.55575 0 9C0 11.4443 0.0103499 11.7508 0.0541499 12.7107C0.0691036 13.4573 0.210559 14.196 0.4725 14.8954C0.703735 15.4933 1.05735 16.0364 1.51068 16.4897C1.96401 16.943 2.50705 17.2966 3.105 17.5279C3.80434 17.7898 4.54304 17.9313 5.28968 17.9462C6.24923 17.9897 6.55575 18 9 18C11.4443 18 11.7508 17.9896 12.7107 17.9459C13.4573 17.9309 14.196 17.7894 14.8954 17.5275C15.4933 17.2963 16.0364 16.9426 16.4897 16.4893C16.943 16.036 17.2966 15.493 17.5279 14.895C17.7898 14.1957 17.9313 13.457 17.9462 12.7103C17.9897 11.7508 18 11.4443 18 9C18 6.55575 17.9896 6.24922 17.9459 5.2893C17.9309 4.54279 17.7894 3.80422 17.5275 3.105C17.2962 2.50712 16.9426 1.96415 16.4893 1.51089C16.0359 1.05763 15.4929 0.704069 14.895 0.472875C14.1957 0.210934 13.457 0.0694787 12.7103 0.054525C11.7508 0.01035 11.4443 0 9 0Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li className=" social__item">
              <a className="social__link" aria-label="Facebook" target="_blank" href="https://www.skype.com/">
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.9321 11.4102C19.0078 10.944 19.0454 10.4724 19.0446 10.0002C19.0446 7.60129 18.0917 5.30066 16.3954 3.60439C14.6992 1.90813 12.3985 0.955175 9.99965 0.955175C9.52738 0.954442 9.05583 0.992065 8.58965 1.06768C7.5442 0.441429 6.3195 0.182406 5.11002 0.331741C3.90054 0.481075 2.77563 1.0302 1.9139 1.89193C1.05218 2.75365 0.503047 3.87857 0.353713 5.08805C0.204379 6.29753 0.463401 7.52223 1.08965 8.56768C1.00527 9.04064 0.96012 9.51977 0.954647 10.0002C0.954647 12.3991 1.9076 14.6997 3.60387 16.396C5.30013 18.0922 7.60076 19.0452 9.99965 19.0452C10.4719 19.0459 10.9435 19.0083 11.4096 18.9327C12.4551 19.5589 13.6798 19.8179 14.8893 19.6686C16.0987 19.5193 17.2237 18.9701 18.0854 18.1084C18.9471 17.2467 19.4962 16.1218 19.6456 14.9123C19.7949 13.7028 19.5359 12.4781 18.9096 11.4327L18.9321 11.4102ZM14.2971 14.1102C13.8738 14.6955 13.2904 15.146 12.6171 15.4077C11.7864 15.7337 10.8993 15.8917 10.0071 15.8727C8.96867 15.9161 7.93554 15.7023 6.99965 15.2502C6.45401 14.9569 5.9861 14.5378 5.63465 14.0277C5.31271 13.5919 5.12974 13.0691 5.10965 12.5277C5.10886 12.3872 5.13709 12.2481 5.19259 12.119C5.24808 11.9899 5.32964 11.8737 5.43215 11.7777C5.65931 11.5843 5.95174 11.4851 6.24965 11.5002C6.49861 11.4955 6.74092 11.5807 6.93215 11.7402C7.14146 11.936 7.3031 12.1772 7.40465 12.4452C7.53477 12.7584 7.70088 13.0554 7.89965 13.3302C8.09775 13.5839 8.35535 13.7848 8.64965 13.9152C9.04939 14.0867 9.48256 14.1661 9.91715 14.1477C10.5361 14.1777 11.1492 14.0152 11.6721 13.6827C11.8728 13.5651 12.0397 13.3977 12.1567 13.1966C12.2736 12.9956 12.3367 12.7677 12.3396 12.5352C12.3461 12.3723 12.3181 12.2099 12.2573 12.0587C12.1966 11.9075 12.1045 11.7708 11.9871 11.6577C11.7201 11.4116 11.399 11.2318 11.0496 11.1327C10.6596 11.0052 10.1421 10.8777 9.48965 10.7352C8.74027 10.5607 8.0094 10.3146 7.30715 10.0002C6.75457 9.7737 6.26732 9.41278 5.88965 8.95018C5.53144 8.47336 5.34628 7.88877 5.36465 7.29268C5.35859 6.68668 5.55379 6.0958 5.91965 5.61267C6.33754 5.09349 6.89405 4.7034 7.52465 4.48767C8.322 4.22284 9.15988 4.10096 9.99965 4.12768C10.6567 4.11605 11.3117 4.20457 11.9421 4.39018C12.4369 4.53708 12.9016 4.77071 13.3146 5.08017C13.6397 5.3243 13.9104 5.63334 14.1096 5.98767C14.2718 6.2739 14.3595 6.59626 14.3646 6.92518C14.3637 7.06539 14.3347 7.20399 14.2793 7.3328C14.2239 7.46161 14.1433 7.57803 14.0421 7.67518C13.9401 7.78577 13.8159 7.87364 13.6776 7.93308C13.5394 7.99252 13.3901 8.02219 13.2396 8.02017C12.9984 8.03895 12.7592 7.9637 12.5721 7.81018C12.3753 7.62055 12.2107 7.40017 12.0846 7.15768C11.8989 6.77542 11.6298 6.43969 11.2971 6.17517C10.8606 5.90304 10.3468 5.78183 9.83465 5.83017C9.30896 5.80801 8.78806 5.93824 8.33465 6.20517C8.16995 6.29312 8.03086 6.42227 7.93096 6.58C7.83106 6.73774 7.77376 6.91869 7.76465 7.10518C7.75871 7.30894 7.82514 7.50822 7.95215 7.66768C8.10173 7.84099 8.28559 7.98144 8.49215 8.08017C8.71211 8.19396 8.94337 8.28446 9.18215 8.35018C9.42215 8.41768 9.81215 8.51517 10.3596 8.64268C11.0496 8.79268 11.6646 8.95768 12.2271 9.13768C12.7303 9.29096 13.2098 9.51307 13.6521 9.79768C14.038 10.0417 14.3554 10.3798 14.5746 10.7802C14.7975 11.2369 14.9008 11.7427 14.8746 12.2502C14.8814 12.9153 14.6794 13.5658 14.2971 14.1102Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li className=" social__item">
              <a className="social__link" aria-label="Facebook" target="_blank" href="https://www.twitter.com/">
                <svg width="18" height="14" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.94 13.705C7.20685 13.713 8.46268 13.4693 9.63465 12.9882C10.8066 12.507 11.8714 11.798 12.7672 10.9022C13.663 10.0064 14.3721 8.9416 14.8532 7.76964C15.3343 6.59767 15.578 5.34184 15.57 4.07499C15.57 3.92499 15.57 3.78249 15.57 3.63249C16.2267 3.15136 16.7951 2.56012 17.25 1.88499C16.6316 2.15544 15.9773 2.3348 15.3075 2.41749C16.0177 1.99432 16.5506 1.32824 16.8075 0.542488C16.1456 0.939569 15.4199 1.21871 14.6625 1.36749C14.1524 0.824013 13.4775 0.46378 12.7421 0.342528C12.0067 0.221275 11.2518 0.345763 10.5943 0.696729C9.93678 1.04769 9.41324 1.60557 9.1047 2.28405C8.79617 2.96252 8.71983 3.72376 8.8875 4.44999C7.54202 4.38395 6.22553 4.03525 5.02377 3.42662C3.822 2.81798 2.7619 1.96305 1.9125 0.917488C1.48419 1.66087 1.35437 2.53923 1.54932 3.37473C1.74427 4.21023 2.24942 4.94043 2.9625 5.41749C2.43646 5.3972 1.92259 5.25332 1.4625 4.99749V5.03499C1.45783 5.81186 1.71954 6.56688 2.20403 7.17419C2.68851 7.78151 3.3665 8.20443 4.125 8.37249C3.63573 8.50408 3.12322 8.52458 2.625 8.43249C2.84459 9.09503 3.26376 9.67342 3.82503 10.0883C4.38631 10.5032 5.06219 10.7344 5.76 10.75C4.56691 11.7104 3.08407 12.239 1.5525 12.25C1.28396 12.2422 1.01606 12.2197 0.75 12.1825C2.30022 13.1702 4.1019 13.6909 5.94 13.6825"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li className=" social__item">
              <a className="social__link" aria-label="Facebook" target="_blank" href="https://www.pinterest.com/">
                <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.9998 0.5C8.56549 0.516578 6.21257 1.37849 4.34356 2.93828C2.47455 4.49807 1.20559 6.65882 0.753754 9.05089C0.301919 11.443 0.695288 13.9177 1.86657 16.0518C3.03785 18.1858 4.91426 19.8466 7.1748 20.75C7.02287 19.7558 7.02287 18.7442 7.1748 17.75L8.4123 12.5C8.21646 12.0245 8.11949 11.5142 8.1273 11C8.1273 9.545 8.9748 8.45 10.0248 8.45C10.215 8.44714 10.4036 8.48543 10.5776 8.56224C10.7517 8.63906 10.9071 8.75258 11.0331 8.89504C11.1592 9.0375 11.253 9.20553 11.3081 9.38761C11.3632 9.5697 11.3783 9.76154 11.3523 9.95C11.3523 10.85 10.7823 12.2 10.4823 13.445C10.4177 13.6772 10.4101 13.9215 10.4599 14.1573C10.5098 14.3931 10.6157 14.6133 10.7688 14.7995C10.9218 14.9857 11.1175 15.1322 11.3391 15.2267C11.5608 15.3212 11.802 15.361 12.0423 15.3425C13.9023 15.3425 15.3423 13.37 15.3423 10.535C15.361 9.95891 15.2594 9.38525 15.044 8.85061C14.8287 8.31598 14.5042 7.8321 14.0914 7.42986C13.6786 7.02762 13.1864 6.71584 12.6464 6.51442C12.1063 6.31299 11.5302 6.22634 10.9548 6.26C10.3405 6.23361 9.72718 6.33216 9.15204 6.54966C8.5769 6.76717 8.05188 7.09912 7.60875 7.52542C7.16563 7.95172 6.81361 8.46351 6.57401 9.0298C6.33441 9.59609 6.21221 10.2051 6.2148 10.82C6.20646 11.6766 6.46895 12.5139 6.9648 13.2125C7.00086 13.2526 7.02654 13.3009 7.03962 13.3532C7.05269 13.4055 7.05275 13.4602 7.0398 13.5125C6.9573 13.8425 6.7773 14.5625 6.7473 14.705C6.7173 14.8475 6.5898 14.9375 6.3948 14.8475C5.0823 14.2325 4.2648 12.32 4.2648 10.775C4.2648 7.4675 6.6723 4.4225 11.2023 4.4225C14.8398 4.4225 17.6748 7.0175 17.6748 10.49C17.6748 14.105 15.4248 17.015 12.2223 17.015C11.7528 17.0313 11.2867 16.9301 10.8662 16.7206C10.4458 16.511 10.0844 16.1997 9.8148 15.815L9.1623 18.3125C8.84951 19.2831 8.41077 20.2085 7.8573 21.065C8.87714 21.3664 9.93644 21.513 10.9998 21.5C13.7846 21.5 16.4553 20.3938 18.4244 18.4246C20.3936 16.4555 21.4998 13.7848 21.4998 11C21.4998 8.21523 20.3936 5.54451 18.4244 3.57538C16.4553 1.60625 13.7846 0.5 10.9998 0.5Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}