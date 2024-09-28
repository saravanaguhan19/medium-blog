import { ChangeEvent, useState } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-xl w-full">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Title"
            className="block w-full my-4 text-2xl font-semibold outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50   border-none"
          />
          <TextEditor
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <button
            //   onClick={async (e) => {
            //     await response = axios.post(`${BACKEND_URL}/api/v1/blog`, {
            //     title,
            //     content,
            // }} }
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                {
                  title,
                  content,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              navigate(`/blog/${response.data.id}`);
            }}
            type="submit"
            className="inline-flex items-center px-5 py-2.5  mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div>
      <div className="w-full mb-4  ">
        <div className=" py-2 bg-white rounded-b-lg dark:bg-gray-800">
          <textarea
            id="editor"
            onChange={onChange}
            rows={8}
            className="block w-full  text-lg text-gray-800 bg-white border-none  outline-none"
            placeholder="Write an article..."
            required
          ></textarea>
        </div>
      </div>
    </div>
  );
}
