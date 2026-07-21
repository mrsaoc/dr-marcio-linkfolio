import { createFileRoute } from "@tanstack/react-router";
import background from "@/assets/background.png";
import logo from "@/assets/logo.png";
import instagramIcon from "@/assets/instagram.png";
import facebookIcon from "@/assets/facebook.png";
import whatsappIcon from "@/assets/whatsapp.png";
import horarioIcon from "@/assets/horario.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "marcioalmeidafisio | Dr. Márcio Almeida" },
      {
        name: "description",
        content:
          "Bem-estar integrado em fisioterapia e estética. Agende seu horário com Dr. Márcio Almeida.",
      },
      {
        property: "og:title",
        content: "marcioalmeidafisio | Dr. Márcio Almeida",
      },
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

const socials = [
  { href: "https://www.instagram.com/", icon: instagramIcon, label: "Instagram" },
  { href: "https://www.facebook.com/", icon: facebookIcon, label: "Facebook" },
  { href: "https://wa.me/", icon: whatsappIcon, label: "WhatsApp" },
];

const links = [
  {
    id: "community",
    title: "Marcio Almeida | Condições Exclusivas",
    subtitle: "Entre na nossa comunidade.",
    href: "#community",
    highlight: true,
  },
  {
    id: "appointment",
    title: "Agende seu horário!",
    href: "https://wa.me/",
    icon: horarioIcon,
  },
  {
    id: "instagram",
    title: "Instagram",
    href: "https://www.instagram.com/",
    icon: instagramIcon,
  },
  {
    id: "facebook",
    title: "Facebook",
    href: "https://www.facebook.com/",
    icon: facebookIcon,
  },
];

function Index() {
  return (
    <main
      className="relative min-h-screen w-full overflow-hidden bg-[#a0a0a0] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Ambient teal glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[20%] -left-[25%] h-[60vw] w-[60vw] rounded-full bg-[#00a9bf]/45 blur-[94px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[30%] -right-[15%] h-[60vw] w-[60vw] rounded-full bg-[#00a9bf]/45 blur-[94px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-25%] -left-[25%] h-[60vw] w-[60vw] rounded-full bg-[#00a9bf]/45 blur-[94px]"
      />

      <div className="relative flex min-h-screen items-start justify-center px-4 py-6 sm:py-10">
        {/* Glass card */}
        <div
          className="relative w-full max-w-[520px] rounded-[22px] border border-white/40 bg-white/40 px-6 py-10 shadow-[0_10px_40px_rgba(0,0,0,0.15)] backdrop-blur-[18px] sm:px-10 sm:py-12"
          style={{
            backgroundImage:
              "linear-gradient(179deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 100%)",
          }}
        >
          <header className="flex flex-col items-center text-center">
            <img
              src={logo}
              alt="Símbolo de Dr. Márcio Almeida"
              className="h-[88px] w-[88px] object-contain sm:h-[110px] sm:w-[110px]"
            />
            <h1 className="mt-5 font-['Poppins',sans-serif] text-3xl font-semibold tracking-tight text-[#00717f] sm:text-4xl">
              marcioalmeidafisio
            </h1>
            <p className="mt-2 font-['Poppins',sans-serif] text-base font-medium text-[#00383f] sm:text-lg">
              Bem-estar integrado em fisioterapia e estética.
            </p>

            <div className="mt-5 flex items-center justify-center gap-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00717f]"
                >
                  <img src={s.icon} alt="" className="h-7 w-7 object-contain" />
                </a>
              ))}
            </div>
          </header>

          <nav aria-label="Links de Marcio Almeida Fisioterapia" className="mt-8 flex flex-col gap-4">
            {links.map((link) => {
              const isHighlight = link.highlight;
              return (
                <a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={
                    link.subtitle ? `${link.title}. ${link.subtitle}` : link.title
                  }
                  className={[
                    "relative flex items-center gap-4 rounded-[22px] px-5 py-4 backdrop-blur-[21px] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4",
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_14px_rgba(0,0,0,0.2),inset_-1px_0_14px_rgba(0,0,0,0.16)]",
                    isHighlight ? "bg-[#00b2c9]/60" : "bg-[#8c8c8c]/40",
                  ].join(" ")}
                >
                  {link.icon ? (
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90">
                      <img src={link.icon} alt="" className="h-5 w-5 object-contain" />
                    </span>
                  ) : (
                    <span className="w-0 shrink-0" aria-hidden="true" />
                  )}
                  <span className="flex flex-1 flex-col items-center pr-4 text-center">
                    <span className="font-['Poppins',sans-serif] text-lg font-semibold text-white sm:text-xl">
                      {link.title}
                    </span>
                    {link.subtitle ? (
                      <span className="font-['Poppins',sans-serif] text-sm font-normal text-white/95 sm:text-base">
                        {link.subtitle}
                      </span>
                    ) : null}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </main>
  );
}
