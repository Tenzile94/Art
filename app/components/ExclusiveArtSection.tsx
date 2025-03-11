"use client";
import Image from "next/image";

const artSections = [
  {
    title: "Vállalati Művészeti Kurátori Tevékenység",
    description:
      "Dobja fel irodáját, szállodáját vagy kereskedelmi helyiségét szakértelemmel összeállított modern művészeti alkotásokkal, amelyek javítják a hangulatot, erősítik a márkaidentitást, és emlékezetes élményt online fogadás nyújtanak az ügyfelek, vendégek és alkalmazottak számára. Vállalati művészeti kurátori szolgáltatásaink vizuálisan inspiráló környezetté alakítják a tereket, amelyek elősegítik a kreativitást, a kifinomultságot és az elkötelezettséget.",
    src: "/images/artimg1.webp",
  },
  {
    title: "Artist & Artwork Kiválasztása",
    description:
      "Egy sikeres műgyűjtemény kurátori munkájához éles szemre van szükség a tehetséghez, a piaci trendek mély megértésére és stratégiai döntéshozatalra. Művész- és műtárgyválasztási szolgáltatásunk célja, hogy segítsen a gyűjtőknek, befektetőknek és vállalkozásoknak felfedezni a nagy lehetőségeket rejtő feltörekvő tehetségeket és a befektetésük céljaihoz és művészi elképzeléseikhez illeszkedő elismert neveket.",
    src: "/images/artimg2.webp",
  },
  {
    title: "Aukciós És Magánértékesítési Útmutatás",
    description:
      "A művészeti aukciók és magánértékesítések versenyző világában való eligazodás szakértelmet, piaci rálátást és stratégiai döntéshozatalt igényel. Aukciós és magánértékesítési tanácsadási szolgáltatásunk sportaza szakértői támogatást nyújt a gyűjtőknek, befektetőknek és intézményeknek, hogy a modern és kortárs művészeti piacon a legjobb üzleteket és lehetőségeket biztosítsák.",
    src: "/images/artimg3.webp",
  },
];

const ExclusiveArtSection = () => {
  return (
    <section className="bg-black bg-opcity-50 text-white py-16 px-4">
      <h2 className="text-center text-3xl italic mb-8">
        Fedezze Fel Az Exkluzív Művészeti Gyűjteményeket
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {artSections.map((section, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg h-[600px]"
          >
            <Image
              src={section.src}
              alt={section.title}
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute  bg-[#08080887] flex flex-col justify-end p-6 h-96 bottom-0">
              <h3 className="text-lg font-semibold italic">{section.title}</h3>
              <p className="mt-2 text-sm">{section.description}</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition">
                További Információ
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExclusiveArtSection;
