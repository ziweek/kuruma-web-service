import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState(0);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordRepeated, setPasswordRepeated] = useState("");
  const handleNameChange = (e) => {
    // <- input값으로 text 변경 함수
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handlePhoneChange = (e) => {
    // <- input값으로 text 변경 함수
    console.log(e.target.value);
    setPhone(e.target.value);
  };
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
  const handlePasswordRepeatedChange = (e) => {
    // <- input값으로 text 변경 함수
    console.log(e.target.value);
    setPasswordRepeated(e.target.value);
  };

  const linkToPage = async (url) => {
    await router.push(url, {
      shallow: true,
    });
  };

  const registerAPI = async () => {
    await console.log(Email.includes("@korea.ac.kr"));
    await console.log(Password.toString() === PasswordRepeated.toString());

    if (Email.includes("@korea.ac.kr") && Password === PasswordRepeated) {
      await axios
        .post("/auth/register", {
          name: Name.toString(),
          phone: Phone,
          email: Email.toString(),
          password: Password.toString(),
        })
        .then((res) => {
          console.log(res.data);
          linkToPage("http://localhost:3000/congratulations");
        })
        .catch((err) => {
          console.log(err.message);
          linkToPage('"http://localhost:3000/register"');
        });
    }
  };

  return (
    <>
      {/* <form> */}
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="윤타밤"
          required
          onChange={handleNameChange}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Phone
        </label>
        <input
          // type="number"
          id="phone"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="01012345678"
          required
          onChange={handlePhoneChange}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Email
        </label>
        <input
          // type="text"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="name@korea.ac.kr"
          required
          onChange={handleEmailChange}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="currnet-password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          // type="text"
          id="currnet-password"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
          onChange={handlePasswordChange}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="repeat-password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Repeat password
        </label>
        <input
          // type="text"
          id="repeat-password"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
          onChange={handlePasswordRepeatedChange}
        />
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="terms"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <a
            // href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            개인정보에 관한 약관
          </a>
          에 동의합니다.
        </label>
      </div>
      <div className="text-center">
        <button
          // type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={registerAPI}
        >
          타밤 회원으로 가입하기
        </button>
      </div>
      {/* </form> */}
    </>
  );
}
