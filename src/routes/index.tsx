import { createFileRoute } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import background from "@/assets/background.png";
import logo from "@/assets/logo.png";
import instagramIcon from "@/assets/instagram.png";
import facebookIcon from "@/assets/facebook.png";
import whatsappIcon from "@/assets/whatsapp.png";

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

function Index() {
  return (
    <main className="min-h-screen w-full bg-[#a0a0a0] flex items-start justify-center">
      {/* Fixed 1080x1920 stage, scaled to fit viewport width */}
      <div
        className="relative bg-[#a0a0a0] overflow-hidden"
        style={{
          width: "1080px",
          height: "1920px",
          transformOrigin: "top center",
          transform: "scale(var(--stage-scale, 1))",
        }}
      >
        <style>{`
          :root { --stage-scale: 1; }
          @media (max-width: 1080px) {
            :root { --stage-scale: calc(100vw / 1080); }
          }
        `}</style>

        {/* Background photo */}
        <img
          src={background}
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 w-[1080px] h-[1920px] object-cover"
        />

        {/* Teal glows */}
        <div
          aria-hidden="true"
          className="absolute top-[-351px] left-[-382px] w-[723px] h-[723px] rounded-full bg-[#00a9bf]/45 blur-[94px]"
        />
        <div
          aria-hidden="true"
          className="absolute top-[650px] left-[792px] w-[723px] h-[723px] rounded-full bg-[#00a9bf]/45 blur-[94px]"
        />
        <div
          aria-hidden="true"
          className="absolute top-[1479px] left-[-362px] w-[723px] h-[723px] rounded-full bg-[#00a9bf]/45 blur-[94px]"
        />

        {/* Glass card */}
        <div
          aria-hidden="true"
          className="absolute top-[79px] left-[68px] w-[944px] h-[1866px] rounded-[15px] border border-white/25 bg-white/40"
          style={{ backdropFilter: "blur(17.5px)" }}
        />

        {/* Header */}
        <header className="absolute top-[133px] left-0 w-[1080px] flex flex-col items-center">
          <img
            src={logo}
            alt="Símbolo de Dr. Márcio Almeida"
            className="w-[135px] h-[135px] object-contain"
          />
          <h1 className="mt-[35px] font-['Poppins',sans-serif] font-semibold text-[#00717f] text-[64px] leading-none tracking-tight">
            marcioalmeidafisio
          </h1>
          <p className="mt-[24px] font-['Poppins',sans-serif] font-medium text-[#00383f] text-[28px] leading-none">
            Bem-estar integrado em fisioterapia e estética.
          </p>

          <div className="mt-[40px] flex items-center justify-center gap-[36px]">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img src={instagramIcon} alt="" className="w-[62px] h-[62px]" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <img src={facebookIcon} alt="" className="w-[62px] h-[62px]" />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <img src={whatsappIcon} alt="" className="w-[62px] h-[62px]" />
            </a>
          </div>
        </header>

        {/* Links */}
        <nav aria-label="Links de Marcio Almeida Fisioterapia">
          {/* Highlight button */}
          <a
            id="community"
            href="#community"
            aria-label="Marcio Almeida | Condições Exclusivas. Entre na nossa comunidade."
            className="absolute top-[601px] left-[124px] w-[831px] h-[132px] rounded-[39px] bg-[#00b2c9]/60 flex flex-col items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_14px_rgba(0,0,0,0.20),inset_-1px_0_14px_rgba(0,0,0,0.16)]"
            style={{ backdropFilter: "blur(21px)" }}
          >
            <span className="font-['Poppins',sans-serif] font-semibold text-white text-[28px]">
              Marcio Almeida | Condições Exclusivas
            </span>
            <span className="mt-[6px] font-['Poppins',sans-serif] font-normal text-white text-[20px]">
              Entre na nossa comunidade.
            </span>
          </a>

          {/* Appointment */}
          <a
            id="appointment"
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            aria-label="Agende seu horário!"
            className="absolute top-[757px] left-[124px] w-[831px] h-[132px] rounded-[39px] bg-[#8c8c8c]/40 flex items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_14px_rgba(0,0,0,0.20),inset_-1px_0_14px_rgba(0,0,0,0.16)]"
            style={{ backdropFilter: "blur(21px)" }}
          >
            <span className="ml-[36px] flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white">
              <Clock className="h-[46px] w-[46px] text-[#00383f]" strokeWidth={2.5} />
            </span>
            <span className="flex-1 pr-[112px] text-center font-['Poppins',sans-serif] font-semibold text-white text-[28px]">
              Agende seu horário!
            </span>
          </a>

          {/* Instagram */}
          <a
            id="instagram"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="absolute top-[913px] left-[124px] w-[831px] h-[132px] rounded-[39px] bg-[#8c8c8c]/40 flex items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_14px_rgba(0,0,0,0.20),inset_-1px_0_14px_rgba(0,0,0,0.16)]"
            style={{ backdropFilter: "blur(21px)" }}
          >
            <span className="ml-[36px] flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white">
              <img src={instagramIcon} alt="" className="h-[52px] w-[52px]" />
            </span>
            <span className="flex-1 pr-[112px] text-center font-['Poppins',sans-serif] font-semibold text-white text-[28px]">
              Instagram
            </span>
          </a>

          {/* Facebook */}
          <a
            id="facebook"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="absolute top-[1069px] left-[124px] w-[831px] h-[132px] rounded-[39px] bg-[#8c8c8c]/40 flex items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_14px_rgba(0,0,0,0.20),inset_-1px_0_14px_rgba(0,0,0,0.16)]"
            style={{ backdropFilter: "blur(21px)" }}
          >
            <span className="ml-[36px] flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white">
              <img src={facebookIcon} alt="" className="h-[56px] w-[56px]" />
            </span>
            <span className="flex-1 pr-[112px] text-center font-['Poppins',sans-serif] font-semibold text-white text-[28px]">
              Facebook
            </span>
          </a>
        </nav>
      </div>
    </main>
  );
}
