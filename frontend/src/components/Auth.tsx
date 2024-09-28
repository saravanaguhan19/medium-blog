import { SignupInput } from "@saravanaguhan/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      //alert the user here  that request failed
      alert("user input is in valid");
    }
  }

  return (
    <div className="h-screen   flex justify-center items-center">
      {/* {JSON.stringify(postInputs)} */}
      <div>
        <div className="px-10">
          <div className="text-3xl font-extrabold">Create an account</div>
          <div className="text-xl  text-slate-500 mt-3">
            {type === "signin"
              ? "Don't have an account?"
              : "Already have an account ?"}

            <Link
              to={type === "signin" ? "/signup" : "/signin"}
              className="pl-1 underline"
            >
              {type === "signin" ? "Sign up" : "Sign in"}
            </Link>
          </div>
        </div>
        <div className="pt-4">
          {type === "signup" ? (
            <LabelledInput
              label={"Name"}
              placeholder={"Saravana Guhan "}
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  name: e.target.value,
                }));
              }}
            />
          ) : null}

          <LabelledInput
            label={"Email"}
            placeholder={"saravanaguhan@gmail.com"}
            onChange={(e) => {
              setPostInputs((c) => ({
                ...c,
                email: e.target.value,
              }));
            }}
          />
          <LabelledInput
            label={"Password"}
            placeholder={"Password "}
            type="password"
            onChange={(e) => {
              setPostInputs((c) => ({
                ...c,
                password: e.target.value,
              }));
            }}
          />
          <button
            onClick={sendRequest}
            type="button"
            className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {type === "signin" ? "Sign in" : "Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white pt-4"
      >
        {label}
      </label>
      <input
        type={type || "text"}
        id="first_name"
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
