import { createFileRoute } from "@tanstack/react-router";
import background from "@/assets/background.png";
import logo from "@/assets/logo.png";
import instagramIcon from "@/assets/instagram.png";
import facebookIcon from "@/assets/facebook.png";
import whatsappIcon from "@/assets/whatsapp.png";
import instagramWhite from "@/assets/instagram-white.png.asset.json";
import facebookWhite from "@/assets/facebook-white.png.asset.json";
import horarioWhite from "@/assets/horario-white.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "marcioalmeidafisio | Dr. Márcio Almeida" },
      {
        name: "description",
        content:
          "Bem-estar integrado em fisioterapia e estética. Agende seu horário com Dr. Márcio Almeida.",
      },
      { property: "og:title", content: "marcioalmeidafisio | Dr. Márcio Almeida" },
      {
        property: "og:description",
        content: "Bem-estar integrado em fisioterapia e estética.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const BUTTON_SHADOW =
  "inset 0 1px 0 rgba(255,255,255,0.40), inset 1px 0 0 rgba(255,255,255,0.32), inset 0 -1px 14px rgba(0,0,0,0.20), inset -1px 0 14px rgba(0,0,0,0.16)";

function LinkButton({
  href,
  icon,
  label,
  ariaLabel,
  external = true,
}: {
  href: string;
  icon: string;
  label: string;
  ariaLabel: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      aria-label={ariaLabel}
      className="relative flex h-[68px] w-full items-center rounded-[28px] bg-[#8c8c8c]/40 px-5 transition-transform hover:scale-[1.01]"
      style={{ backdropFilter: "blur(21px)", WebkitBackdropFilter: "blur(21px)", boxShadow: BUTTON_SHADOW }}
    >
      <img src={icon} alt="" className="h-11 w-11 shrink-0 object-contain" />
      <span className="flex-1 pr-11 text-center font-['Poppins',sans-serif] text-[18px] font-semibold text-white">
        {label}
      </span>
    </a>
  );
}

function Index() {
  return (
    <main
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Teal glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#00a9bf]/40 blur-[94px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-[#00a9bf]/40 blur-[94px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full bg-[#00a9bf]/40 blur-[94px]"
      />

      <div className="relative z-10 flex min-h-screen w-full items-start justify-center px-4 py-8 md:items-center md:py-12">
        {/* Glass card */}
        <div
          className="w-full max-w-[440px] rounded-[22px] border border-white/25 bg-white/40 px-6 py-10 shadow-2xl"
          style={{ backdropFilter: "blur(17.5px)", WebkitBackdropFilter: "blur(17.5px)" }}
        >
          {/* Header */}
          <header className="flex flex-col items-center text-center">
            <img
              src={logo}
              alt="Símbolo de Dr. Márcio Almeida"
              className="h-[92px] w-[92px] object-contain"
            />
            <h1 className="mt-5 font-['Poppins',sans-serif] text-[32px] font-semibold leading-none tracking-tight text-[#00717f] sm:text-[36px]">
              marcioalmeidafisio
            </h1>
            <p className="mt-3 max-w-[320px] font-['Poppins',sans-serif] text-[15px] font-medium leading-snug text-[#00383f]">
              Bem-estar integrado em fisioterapia e estética.
            </p>

            <div className="mt-6 flex items-center justify-center gap-6">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img src={instagramIcon} alt="" className="h-11 w-11" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <img src={facebookIcon} alt="" className="h-11 w-11" />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <img src={whatsappIcon} alt="" className="h-11 w-11" />
              </a>
            </div>
          </header>

          {/* Links */}
          <nav
            aria-label="Links de Marcio Almeida Fisioterapia"
            className="mt-8 flex flex-col gap-3.5"
          >
            {/* Highlight button */}
            <a
              id="community"
              href="#community"
              aria-label="Marcio Almeida | Condições Exclusivas. Entre na nossa comunidade."
              className="flex h-[68px] flex-col items-center justify-center rounded-[28px] bg-[#00b2c9]/60 transition-transform hover:scale-[1.01]"
              style={{
                backdropFilter: "blur(21px)",
                WebkitBackdropFilter: "blur(21px)",
                boxShadow: BUTTON_SHADOW,
              }}
            >
              <span className="font-['Poppins',sans-serif] text-[15px] font-semibold text-white sm:text-[16px]">
                Marcio Almeida | Condições Exclusivas
              </span>
              <span className="mt-0.5 font-['Poppins',sans-serif] text-[12px] font-normal text-white sm:text-[13px]">
                Entre na nossa comunidade.
              </span>
            </a>

            <LinkButton
              href="https://wa.me/"
              icon={horarioWhite.url}
              label="Agende seu horário!"
              ariaLabel="Agende seu horário!"
            />
            <LinkButton
              href="https://www.instagram.com/"
              icon={instagramWhite.url}
              label="Instagram"
              ariaLabel="Instagram"
            />
            <LinkButton
              href="https://www.facebook.com/"
              icon={facebookWhite.url}
              label="Facebook"
              ariaLabel="Facebook"
            />
          </nav>
        </div>
      </div>
    </main>
  );
}
