import MailchimpSubscribe from "react-mailchimp-subscribe";
import { WaitListForm } from "../waitlist/WaitListForm";

export const WaitListSubscribe = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL!;

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <WaitListForm
            status={status || ""}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        );
      }}
    />
  );
};
