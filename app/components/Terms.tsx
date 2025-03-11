"use client";

import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-left mb-6">
        Felhasználási feltételek
      </h1>

      <section className="mb-6">
        <p>
          A weboldal szerzői jogvédelem alatt álló mű. A weboldal egyes
          funkcióira további irányelvek, feltételek vagy szabályok
          vonatkozhatnak, amelyeket a weboldalon a vonatkozó funkciókkal
          kapcsolatban teszünk közzé.
        </p>
        <p>
          Minden ilyen további feltétel, irányelv és szabály beépül ezekbe a
          feltételekbe.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Hozzáférés a weboldalhoz</h2>
        <p>
          A feltételek betartásával a vállalat nem átruházható, nem kizárólagos,
          visszavonható, korlátozott licencet biztosít Önnek a weboldal
          elérésére kizárólag személyes, nem kereskedelmi célokra.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Bizonyos korlátozások</h2>
        <ul className="list-disc ml-6">
          <li>
            Nem értékesítheti, nem bérbe adhatja és nem oszthatja meg a
            weboldalt.
          </li>
          <li>
            Nem módosíthatja, nem származtathat belőle más művet, nem bonthatja
            részeire, nem dekompilálhatja vagy visszafejtheti a weboldalt.
          </li>
          <li>
            Nem használhatja a weboldalt egy hasonló vagy versenytárs weboldal
            létrehozására.
          </li>
          <li>
            Ha nincs kifejezetten másként jelezve, a weboldal egyetlen része sem
            másolható, reprodukálható, terjeszthető, újraközzétehető,
            letölthető, megjeleníthető, közzétehető vagy továbbítható.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">
          Harmadik felektől származó hivatkozások és hirdetések
        </h2>
        <p>
          A weboldal harmadik fél által üzemeltetett weboldalakra és
          szolgáltatásokra mutató hivatkozásokat és hirdetéseket tartalmazhat.
          Ezek a hivatkozások nem állnak a vállalat ellenőrzése alatt, és nem
          vállalunk értük felelősséget.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Cookies és Web Beacons</h2>
        <p>
          Sütiket használunk a tartalom és hirdetések személyre szabásához, a
          közösségi média funkciók biztosításához, valamint a forgalom
          elemzéséhez. A sütik kis szöveges fájlok, amelyeket a weboldalak a
          felhasználói élmény javítására használnak.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Felelősség kizárása</h2>
        <p>
          A vállalat és beszállítói kizárnak minden kifejezett, hallgatólagos
          vagy törvényes garanciát. Nem garantáljuk, hogy a weboldal megszakítás
          nélkül, biztonságosan vagy hibamentesen működik.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Felelősség korlátozása</h2>
        <p>
          A vállalat nem felelős semmilyen elmaradt nyereségért, adatvesztésért
          vagy közvetett kárért.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Megszüntetés</h2>
        <p>
          Ezek a feltételek hatályban maradnak, amíg Ön használja a weboldalt.
          Fenntartjuk a jogot a weboldalhoz való hozzáférés megszüntetésére.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Szerzői jogi irányelvek</h2>
        <p>
          Ha úgy véli, hogy szerzői jogait megsértették, értesítsen minket a
          megfelelő információk megadásával.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Általános rendelkezések</h2>
        <p>
          A feltételek időről időre módosulhatnak. Ha jelentős változásokat
          hajtunk végre, e-mailben értesíthetjük Önt, vagy értesítést tehetünk
          közzé a weboldalon.
        </p>
        <p>
          Szerzői jogi információ: © Minden jog fenntartva. Minden védjegy és
          logó a vállalat vagy harmadik felek tulajdonában van. Azokat csak
          előzetes írásos engedéllyel használhatja.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
