import React from "react";
import TextWithBackground from "../components/ui/TextWithBackground";
import FooterPage from "../components/FooterPage";

export default function PrivacyPolicy() {
  return (
    <div className="pt-6">
      <TextWithBackground>Privacy Policy</TextWithBackground>

      <div className="flex justify-center max-w-[80%] mx-auto">
        <div className="flex flex-col gap-4 pt-2 pb-12">
          <p className="text-sm font-medium">
            One Dine Restaurant is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use,
            <br /> disclose, and safeguard your information when you visit our
            website ([insert website URL]). By using our website,
            <br /> you agree to the terms outlined in this policy.
          </p>
          <h1 className="text-3xl font-semibold">1. Information We Collect</h1>
          <h2 className="text-xl font-semibold">1.1 Personal Information</h2>
          <p className="text-sm font-medium">
            When you visit our website or interact with us, we may collect the
            following personal information:
            <ul className="list-disc pl-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing and payment details</li>
              <li>Reservation details</li>
              <li>Delivery or pickup information</li>
            </ul>
          </p>
          <h2 className="text-xl font-semibold">
            1.2 Non-Personal Information
          </h2>
          <p className="text-sm font-medium">
            We also collect non-personal information, such as:
            <ul className="list-disc pl-6">
              <li>Browser type and version</li>
              <li>IP address</li>
              <li>Pages visited and time spent on our website</li>
              <li>Device type and operating system</li>
            </ul>
          </p>
          <h2 className="text-xl font-semibold">
            2. How We Use Your Information
          </h2>
          <p className="text-sm font-medium">
            We use the collected information to:
            <ul className="list-disc pl-6">
              <li>Process reservations and orders</li>
              <li>Improve our website and services</li>
              <li>Send promotional offers (if you opt-in)</li>
              <li>Respond to customer inquiries</li>
              <li>Enhance user experience through analytics</li>
            </ul>
          </p>
          <h2 className="text-xl font-semibold">
            3. How We Share Your Information
          </h2>
          <p className="text-sm font-medium">
            We do not sell your personal data. However, we may share information
            with:
            <ul className="list-disc pl-6">
              <li>
                Service providers (e.g., payment processors, delivery partners)
              </li>
              <li>Legal authorities if required by law</li>
              <li>Marketing partners (only with your consent)</li>
            </ul>
          </p>
          <h2 className="text-xl font-semibold">
            4. Cookies and Tracking Technologies
          </h2>
          <p className="text-sm font-medium">
            We use cookies to improve your browsing experience. You can control
            cookie settings in your browser.
          </p>
          <h2 className="text-xl font-semibold">5. Data Security</h2>
          <p className="text-sm font-medium">
            We implement security measures to protect your data but cannot
            guarantee absolute security.
          </p>
          <h2 className="text-xl font-semibold">6. Third-Party Links</h2>
          <p className="text-sm font-medium">
            Our website may contain links to third-party sites. We are not
            responsible for their privacy practices.
          </p>
          <h2 className="text-xl font-semibold">7. Your Rights</h2>
          <p className="text-sm font-medium">
            You have the right to:
            <ul className="list-disc pl-6">
              <li>Access or update your personal data</li>
              <li>Request data deletion</li>
              <li>Opt-out of marketing emails</li>
            </ul>
          </p>
          <h2 className="text-xl font-semibold">8. Changes to This Policy</h2>
          <p className="text-sm font-medium">
            We may update this Privacy Policy occasionally. Changes will be
            posted on this page.
          </p>
          <h2 className="text-xl font-semibold">9. Contact Us</h2>
          <p className="text-sm font-medium">
            For questions about this Privacy Policy, contact us at:
            <ul>
              <li>📧 info@onedine.com.np</li>
              <li>📍 Butwal 11, Kalikanagar, Rupandehi</li>
              <li>📞 +977 970-1650769</li>
            </ul>
          </p>
        </div>
      </div>

      <FooterPage />
    </div>
  );
}
