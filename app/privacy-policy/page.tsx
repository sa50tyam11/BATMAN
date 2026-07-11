import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Satyam Kumar Jha',
  description: 'Privacy Policy and Terms of Use for Satyam Kumar Jha\'s portfolio.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] light:bg-[#fafafa] flex flex-col pt-32">
      <div className="flex-grow w-full px-6 md:px-12 mb-20">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-serif italic text-white light:text-black mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-zinc-400 light:text-zinc-600 font-sans">
              Last updated: July 12, 2026
            </p>
          </header>

          <div className="prose prose-invert light:prose-p:text-black light:prose-headings:text-black light:prose-li:text-black prose-p:font-sans prose-headings:font-serif prose-headings:italic prose-a:text-[#6C63FF] hover:prose-a:text-[#84cc16] max-w-none">
            <h2>Overview</h2>
            <p>
              This website is operated by Satyam Kumar Jha (SenoWebStudio). This Privacy Policy explains how we collect, use, and handle your information when you visit this site and interact with its features, such as the guestbook.
            </p>

            <h2>Information We Collect</h2>
            <ul>
              <li><strong>Account Information:</strong> When you sign in to the guestbook, we collect basic profile information via Clerk (such as your name, email address, and avatar) from your chosen authentication provider (e.g., Google, GitHub, or Discord).</li>
              <li><strong>Guestbook Messages:</strong> Any messages you choose to post on the guestbook are collected and displayed publicly on the site.</li>
              <li><strong>Technical Data & Analytics:</strong> If we add analytics in the future, it will be limited to aggregate, non-identifying usage data (such as browser type and general location) to help improve the site.</li>
            </ul>

            <h2>How We Use Information</h2>
            <p>
              The information collected is used solely to display your guestbook entries, prevent abuse (such as spam or duplicate messages), and improve the overall experience of the site. We do not sell or rent your personal information to third parties.
            </p>

            <h2>Data Storage</h2>
            <p>
              Your data is processed and stored securely using trusted third-party services:
            </p>
            <ul>
              <li><strong>Clerk:</strong> Handles authentication and user identity. You can review <a href="https://clerk.com/privacy" target="_blank" rel="noopener noreferrer">Clerk's Privacy Policy</a>.</li>
              <li><strong>Supabase:</strong> Stores guestbook messages and blog content. You can review <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Supabase's Privacy Policy</a>.</li>
            </ul>

            <h2>Your Choices</h2>
            <p>
              You have the right to request the removal of any guestbook message you have posted. To do so, please contact me directly using the contact information provided below.
            </p>

            <h2>Cookies</h2>
            <p>
              This site uses cookies strictly for essential functionality. Clerk sets session cookies required for authentication when you sign in to use the guestbook. We do not use cookies for tracking or advertising purposes.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our site may contain links to external websites (such as GitHub, LinkedIn, Instagram, etc.). Please note that these external sites are not operated by us and are not covered by this Privacy Policy. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated "Last updated" date.
            </p>

            <h2>Contact</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or your data, please contact me at: <a href="mailto:krjhasatyam128@gmail.com">krjhasatyam128@gmail.com</a>.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}
