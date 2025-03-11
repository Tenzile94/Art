"use client";
import Image from "next/image";

const ModernArtExperience = () => {
  return (
    <section
      className="bg-black bg-opacity-50 text-white py-16 px-4"
      id="art-experience"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl italic mb-4">
          Modern Művészeti Élmény A MagyarTop
        </h2>
        <p className="text-sm leading-relaxed">
          A MagyarTop a modern művészet kedvelőinek első számú célpontja
          Magyarország szívében. Galériánk a kortárs művészeti alkotások
          változatos gyűjteményével büszkélkedhet, bemutatva mind a feltörekvő,
          mind a már befutott művészek innovatív szellemiségét és kreatív
          tehetségét. A MagyarTopnál hiszünk abban, hogy a művészet egy
          univerzális nyelv, amely inspirálja és online fogadás összeköti az
          embereket az élet minden területén. Meghívjuk Önt, hogy fedezze fel
          élénk kiállításainkat, és fedezze fel a modern művészet átalakító
          erejét. Gondosan összeállított gyűjteményünk a kortárs művészeti
          alkotások változatos skáláját mutatja be, kiemelve a feltörekvő
          tehetségek és a már befutott művészek merész, elgondolkodtató és
          élvonalbeli kifejezésmódjait. Galériánk minden egyes darabja egy-egy
          történetet mesél el, tükrözve a modern művészet folyamatosan változó
          világát. Legyen Ön lelkes gyűjtő, művészeti befektető vagy
          szenvedélyes rajongó, a MagyarTop páratlan lehetőséget kínál arra,
          hogy megismerje és megszerezze a legmeggyőzőbb kortárs műalkotásokat
          Magyarországról és azon túlról.
        </p>
      </div>
      <div className="text-center my-8 italic text-lg max-w-4xl mx-auto">
        <h2>Víziónk: A művészet mint egyetemes nyelv</h2>
        <p>
          A MagyarTopnál hiszünk abban, hogy a művészet átlépi a határokat - ez
          egy univerzális nyelv, amely inspirálja, provokálja sportaza és
          összeköti az embereket az élet minden területén. Kiállításainkat úgy
          terveztük, hogy beszélgetéseket indítsanak el, érzelmeket ébresszenek
          fel, és maradandó élményeket nyújtsanak, amelyek maradandó benyomást
          hagynak.
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/modern-art.webp"
          alt="Modern Art Experience"
          width={800}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default ModernArtExperience;
