"use client";

const Privacy: React.FC = () => {
  return (
    <div className="pt-12 pb-12 bg-tertiary-100 px-8">
      <h1 className="text-center md:text-left home-section-header pb-4 md:px-8">
        Privacy Policy
      </h1>
      <div className="pt-4 pb-8">
        <div className="pb-2 px-8">
          <p className="privacy-section-p">
            Your privacy is important to us. It is TT Web Development & Design's
            policy to respect your privacy regarding any information we may
            collect from you across our website, https://trevorstanner.com, and
            other sites we own and operate.
          </p>
        </div>
        <div className="py-2 px-8">
          <h1 className="text-left privacy-section-subheader">
            Collection of your Personal Information
          </h1>
          <p className="privacy-section-p">
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We only retain collected
            information for as long as necessary to provide you with your
            requested service. What data we store, we’ll protect within
            commercially acceptable means to prevent loss and theft, as well as
            unauthorized access, disclosure, copying, use or modification. We
            don’t share any personally identifying information publicly or with
            third-parties, except when required to by law.
          </p>
        </div>

        <div className="py-2 px-8">
          <h1 className="text-left privacy-section-subheader">
            Use and Sharing of your Personal Information
          </h1>
          <p className="privacy-section-p">
            What data we store, we’ll protect within commercially acceptable
            means to prevent loss and theft, as well as unauthorized access,
            disclosure, copying, use or modification. We don’t share any
            personally identifying information publicly or with third-parties,
            except when required to by law.
          </p>
        </div>

        <div className="py-2 px-8">
          <h1 className="text-left privacy-section-subheader">Links</h1>
          <p className="privacy-section-p">
            Our website may link to external sites that are not operated by us.
            Please be aware that we have no control over the content and
            practices of these sites, and cannot accept responsibility or
            liability for their respective privacy policies.
          </p>
        </div>

        <div className="py-2 px-8">
          <h1 className="text-left privacy-section-subheader">Opt-Out</h1>
          <p className="privacy-section-p">
            You are free to refuse our request for your personal information,
            with the understanding that we may be unable to provide you with
            some of your desired services. If you have any questions about how
            we handle user data and personal information, feel free to contact
            us.
          </p>
        </div>

        <div className="py-2 px-8">
          <h1 className="text-left privacy-section-subheader">
            Contact Information
          </h1>
          <p className="privacy-section-p">
            TT Web Development & Design welcomes your questions or comments
            regarding this Statement of Privacy. If you believe that we have not
            adhered to this Statement, please contact us at:
          </p>
        </div>

        <div className="py-2 px-8">
          <p className="privacy-section-p">TT Web Development & Design</p>

          <a
            className="privacy-section-p hover:underline"
            href=" https://trevorstanner.com/contact/"
          >
            https://trevorstanner.com/contact/
          </a>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
