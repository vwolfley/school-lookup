import React from "react";
import DocConfig from "../../../config/DocConfig";
import Terms from "../../Modals/terms/TermsModal";
import Privacy from "../../Modals/privacy/PrivacyModal";
import LegalDisclaimer from "../../Modals/legal/LegalModal";

export default function MainFooter() {
  return (
    <footer>
      <hr className="border-1 my-3 h-px bg-slate-400" />
      <div className="container mt-3 mb-0 text-center text-xs">
        <div>
          Copyright&nbsp;&copy;&nbsp;{DocConfig.copyright}&nbsp;
          <a
            href={DocConfig.magLink}
            className="font-medium hover:underline text-magTeal hover:text-magDark"
            target="_blank"
            rel="noreferrer">
            Maricopa Association of Governments
          </a>
        </div>
        <ul className="flex list-none justify-center divide-x md:order-2">
          <li className="px-2">{DocConfig.version}</li>
          <li className="px-2">{DocConfig.date}</li>
          <li className="px-2 text-magTeal hover:text-magDark hover:underline cursor-pointer">
            <Privacy />
          </li>
          <li className="px-2 text-magTeal hover:text-magDark hover:underline cursor-pointer">
            <Terms />
          </li>
          <li className="px-2 text-magTeal hover:text-magDark hover:underline cursor-pointer">
            <LegalDisclaimer />
          </li>
        </ul>
      </div>
    </footer>
  )
}
