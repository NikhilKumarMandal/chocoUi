import { Check, Mail } from "lucide-react";
import { useState } from "react";

const Input_03 = () => {
  const [email, setEmail] = useState("");
  const isValid = email.includes("@") && email.includes(".");

  return (
    <div className="w-full max-w-sm mx-auto px-4">
      <label htmlFor="email" className="text-sm font-normal">
        Email
      </label>
      <div className="relative mt-1">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="user@example.com"
          className="bg-background w-full outline-none focus-within:border-blue-700 rounded-md p-2 pl-10 border-2"
        />
        <Mail size={18} className="absolute left-3 top-3.5 text-gray-400" />
        {isValid && (
          <Check
            size={18}
            className="absolute right-3 top-3.5 text-green-500"
          />
        )}
      </div>
    </div>
  );
};

export default Input_03;

