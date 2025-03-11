import Image from "next/image";

const data = [
  {
    image: "/images/artistic1.webp",
    title: "Kurátori Művészeti Kiállítások",
    description:
      "Lépjen be a művészi ragyogás világába a modern remekművekből válogatott, aprólékosan összeállított művészeti kiállításainkkal. Galériánkban feltörekvő tehetségek és neves művészek elgondolkodtató alkotásait mutatjuk be, a stílusok, technikák és inspirációk változatos online fogadás keverékét kínálva. Minden egyes kiállítást átgondoltan terveznek meg vezető művészeti szakértők, biztosítva a zökkenőmentes és magával ragadó élményt, amely megragadja az érzékeket.Fedezze fel a kortárs kreativitás határait exkluzív gyűjtemények, interaktív installációk és különleges események, köztük művészek előadásai és vezetett túrák révén. Akár lelkes gyűjtő, művészetkedvelő vagy egyszerűen csak inspirációt keresel, kiállításaink egyedülálló lehetőséget nyújtanak arra, hogy megismerkedj a modern művészet folyamatosan fejlődő világával.Csatlakozzon hozzánk, és tapasztalja meg a művészi kifejezés átalakító erejét egy elegáns, dinamikus galériában.",
  },
  {
    image: "/images/artistic2.webp",
    title: "Magángyűjteményi Túrák",
    description:
      "Merüljön el a modern művészet világában exkluzív magángyűjteményi túráinkkal. A műkedvelők, gyűjtők és műértők számára tervezett, vezetett tárlatvezetések ritka lehetőséget kínálnak arra, hogy gondosan összeállított gyűjteményeinket intim környezetben fedezzék fel.Szakértő kurátorok és művészettörténészek vezetésével minden egyes túra során mélyen elmerülhetünk a művek mögött rejlő történetekben, a neves és feltörekvő művészek alkotói folyamataiban és a különböző művészeti irányzatok jelentőségében. Akár befektetési lehetőségeket keres, akár művészi inspirációt, vagy egyszerűen csak mélyebben szeretné megismerni a kortárs remekműveket, privát túráink egyedülállóan személyre szabott élményt nyújtanak.Élvezze a VIP-hozzáférést a korlátozott számú kiállításokhoz, a kulisszák mögötti betekintést, és a modern művészet fejlődéséről szóló gondolatébresztő beszélgetések lehetőségét. A magángyűjtemény-túrák tökéletesek egyének, kiscsoportok vagy vállalati összejövetelek számára, és kifinomult és gazdagító utazást ígérnek a folyamatosan fejlődő művészeti világba.",
  },
  {
    image: "/images/artistic3.webp",
    title: "Művészeti Konzultációs Szolgáltatások",
    description:
      "Alakítsa át terét a modern művészet erejével, szakértői művészeti tanácsadási szolgáltatásaink segítségével. Akár tapasztalt műgyűjtő, akár új rajongó, vagy olyan vállalkozás, amely szeretné feldobni környezetét, tapasztalt művészeti tanácsadóink csapata minden lépésnél segít Önnek.Szakterületünk a magánszemélyek és vállalati ügyfelek segítése a kivételes modern művészeti alkotások megszerzésében, kiválasztásában és integrálásában, amelyek összhangban vannak esztétikai elképzeléseikkel, befektetési céljaikkal és márkaidentitásukkal. ",
  },
];

const Premier = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Premier Kortárs Művészeti Gyűjtemény.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-80">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Premier;
