import Image from "next/image";
import logos from "../images/logo.svg";
import Phone from "../images/phone.svg";
import Mail from "../images/mail.svg";
import Instagram from "../images/Instagram.svg";
import facebuk from "../images/facebook.svg";
import telegram from "../images/telegram.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-[#FBD029] h-5"></div>
        <div className="bg-[#1F1D14]">
          <div className="max-w-[1280px] mx-auto flex justify-between items-center flex-wrap">
            <div className="flex">
              <Image src={logos} alt="Logo" />
              <h1 className="text-[#fff] opacity-[0.9] font-semibold text-[24px]">
                Sport <br />
                Market
              </h1>
            </div>
            <div>
              <p className="text-[#fff]">Контакты</p>
              <div>
                <div className="flex items-center">
                  <Image src={Phone} alt="Phone" />
                  <p className="text-[#fff] flex items-center gap-1 opacity-[0.8] text-[16px]">
                    <span className="text-xs">+998 (90)</span> 565-85-85
                  </p>
                </div>
                <div className="flex items-center">
                  <Image src={Mail} alt="Mail" />
                  <p className="text-[#fff] opacity-[0.8] text-[14px]">
                    info@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#fff]">
                Tashkent Sh. Chilonzor 9 kvartal <br />
                12 uy
              </p>
            </div>
            <div>
              <p className="text-[#fff]">Подписатся</p>
              <button className="bg-[#Fff]">support@figma.com</button> <br />
              <button className="bg-[#FBD029]">Отправить</button>
              <div className="flex">
                <Image src={Instagram} alt="Instagram" />
                <Image src={facebuk} alt="facebuk" />
                <Image src={telegram} alt="telegram" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
