import React, { useState } from "react";

function Contact() {
  const [selectedOption, setSelectedOption] = useState(null);

  const emailOptions = [
    {
      reason: "General Inquiry",
      subject: "General Inquiry",
      body: "Hi Jesse,\n\nI saw your website and now I'm reaching out because...",
    },
    {
      reason: "Job Opportunity [Serious]",
      subject: "Job Opportunity for *insert job title here* [Not a scam!]",
      body: "Dear Jesse,\n\nI'm reaching out regarding a potential job opportunity...",
    },
    {
      reason: "I've Got a Bone To Pick With You! ",
      subject: "Now You've Done It! I'm Coming For You, Sheehan!",
      body: "Hey Nimrod 😡\n\n You got a lotta nerve making games this fun and entertaining!!\n\n",
    },
    {
      reason: "Check Out This HOT SCOOP! DO NOT SHARE!",
      subject: "Ya Didn't Hear It From Me, But Hooo Boy, This Is A Big One!",
      body: "Just wait till you hear about this hot scoop...",
    },

  ];

  const generateMailtoLink = (option) => {
    const email = "jessetsheehan@gmail.com";
    const subject = encodeURIComponent(option.subject);
    const body = encodeURIComponent(option.body);
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left side - Email Options */}
        <div className="col-md-4 mb-4">
          <h3 className="mb-3">Choose a Template:</h3>
          <div className="d-grid gap-2">
            {emailOptions.map((option, index) => (
              <button
                key={index}
                className={`btn btn-outline-primary text-start ${
                  selectedOption === index ? "active" : ""
                }`}
                onClick={() => setSelectedOption(index)}
              >
                {option.reason}
              </button>
            ))}
          </div>
        </div>

        {/* Right side - Email Preview */}
        <div className="col-md-8">
          <div className="email-preview-box p-4 rounded shadow">
            <div className="email-header mb-4">
              <div className="mb-2">
                <strong>To:</strong> jessetsheehan@gmail.com
              </div>
              <div className="mb-2">
                <strong>Subject:</strong>{" "}
                {selectedOption !== null
                  ? emailOptions[selectedOption].subject
                  : "Select a template"}
              </div>
            </div>
            <div className="email-body mb-4">
              {selectedOption !== null ? (
                <pre className="email-content">
                  {emailOptions[selectedOption].body}
                </pre>
              ) : (
                <p className="text-muted">
                  Select a template from the left to see the message...
                </p>
              )}
            </div>
            {selectedOption !== null && (
              <div className="text-end">
                <a
                  href={generateMailtoLink(emailOptions[selectedOption])}
                  className="btn btn-primary"
                >
                  Open Template in Email
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;