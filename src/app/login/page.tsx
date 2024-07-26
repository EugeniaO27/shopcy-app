import React from "react";

const Login = () => {
  return (
    <main className="w-full h-screen px-5 py-10 bg-orange-200">
      <button className="my-20 py-2 px-7 bg-orange-500 text-white rounded-3xl">
        login
      </button>
      <p className="before:content-[''] before:w-[30px] before:h-[4px] before:bg-purple-500 
       before:absolute before:bottom-0 relative"
      >
        Onwa
      </p>
      <p className="pt-10 before:content-[' '] before:w-[20px] before:h-[20px] before:rounded-[50%]
       before:bg-blue-600 before:absolute relative before:left-[-20px]"
      >
       Advanced Learning
      </p>
    </main>
  );
};

export default Login;
