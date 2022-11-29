import axios from "axios";
import Image from "next/image";
import imgLogoMoon from "../../public/images/logo_moon_64.png";
import imgLogoYellow from "../../public/images/tabam _logo_yellow_4x.png";
import imgLogoNavy from "../../public/images/tabam_logo_navy_4x.png";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [LinkToHome, setLinkToHome] = useState("http://localhost:3000/index");
  const handleEmailChange = (e) => {
    // <- input값으로 text 변경 함수
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    // <- input값으로 text 변경 함수
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const linkToPage = async (url) => {
    await router.push(url, {
      shallow: true,
    });
  };
  const loginAPI = async () => {
    console.log("loginAPI");
    console.log(Email);
    console.log(Password);
    if (Email != "" && Password != "") {
      await axios
        .post("/auth/login", {
          email: Email,
          password: Password,
        })
        .then((res) => {
          console.log(res.data);
          linkToPage("/home");
        })
        .catch((err) => {
          console.log(err.message);
          linkToPage("/");
        });
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 min-h-screen">
          <button type="button">
            <a className="flex flex-col items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <Image
                src={imgLogoMoon}
                className="pb-5"
                alt="imgLogoMoon"
                height={60}
              />
              <Image
                src={imgLogoNavy}
                className="pb-5 dark:hidden"
                alt="imgLogoMoon"
                height={60}
              />
              <Image
                src={imgLogoYellow}
                className="pb-5 hidden dark:block"
                alt="imgLogoMoon"
                height={60}
              />
              {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"> */}
              {/* TABAM */}
            </a>
          </button>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="pt-5 space-y-4 md:space-y-6" action="#">
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Kupid@korea.ac.kr"
                    required="@"
                    onChange={handleEmailChange}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-gray-600"
                  >
                    아이디 / 비밀번호 찾기
                  </a>
                </div>
                {/* <Link href={LinkToHome}> */}
                <button
                  // type="submit"
                  className="w-full text-white bg-[#1F2B44] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#F2C148] dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={loginAPI}
                >
                  <a className="dark:text-black">로그인</a>
                </button>
                {/* </Link> */}
                <p className="pt-2.5 text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                  서비스를 처음 사용하시나요? <br />
                  <a
                    href="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-gray-600"
                  >
                    고려대학교 이메일로 회원가입
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
