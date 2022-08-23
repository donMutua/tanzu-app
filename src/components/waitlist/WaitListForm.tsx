import React, { useRef, useState } from "react";
import { sanitize } from "utils/sanitize";

type FormState = {
  onValidated: (formData: any) => void;
  message: string | any | null;
  status: string;
};

export function WaitListForm({ onValidated, message, status }: FormState) {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError("");

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event: React.KeyboardEvent<object>) => {
    setError("");

    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message: string) => {
    if (!message) {
      return "";
    }
    const result = message?.split("-") ?? "";
    if ("0" !== result?.[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? "";
    return formattedMessage ? sanitize(formattedMessage) : "";
  };
  return (
    <div className="bg-blue-800  mt-8" id="waitlist">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            id="newsletter-headline"
          >
            Join our Waitlist
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
            Be the first to know about our upcoming events and opportunities.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <div className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
              onChange={(e) => setEmail(e.target?.value ?? "")}
              onKeyUp={(e) => handleInputKeyEvent(e)}
              type="email"
              id="email-input"
              name="email"
              placeholder="your best email"
              required
              autoCapitalize="off"
              autoCorrect="off"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                value=""
                name="notify"
                onClick={handleFormSubmit}
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
              >
                Notify me
              </button>
            </div>
          </div>
          <div className="mt-3 text-sm text-red-300">
            {"sending" === status ? (
              <p className="text-green-200 font-bold pt-2">
                Adding you to greatness ...{" "}
              </p>
            ) : null}
            {"error" === status || error ? (
              <div
                className="text-red-300 pt-2"
                dangerouslySetInnerHTML={{
                  __html: error || getMessage(message),
                }}
              />
            ) : null}
            {"success" === status && !error && (
              <div
                className="text-green-200 font-bold pt-2"
                dangerouslySetInnerHTML={{ __html: sanitize(message) }}
              />
            )}
          </div>
          <p className="mt-3 text-sm text-gray-300">
            We care about the protection of your data. Read our{" "}
            <a href="#" className="text-white font-medium underline">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
