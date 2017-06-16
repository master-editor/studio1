******
Услуги
******

Качественият звук е неизменна част от добрия аудио или видео продукт.
Аудио услугите имат широко приложение в радиото (запис на терен, аудио рекламни спотове) и телевизията (аудио дублажи на чуждоезично съдържание, телевизионни реклами, запис на терен, музикално оформление, аудио за телевизионни лога и заставки),
Kиноиндустрията(запис на терен, аудио ефекти, ADR, филмова музика), музикалния бизнес, рекламния бизнес (радио и ТВ реклами, ПР филми, аудио спотове за мултимедийно и интернет базирани рекламни приложения) ,
IT технологиите, е-образованието (аудио за обучителни инструкции за персонала или мултимедийни упътвания за експлоатация на продукти, внедряване употреба на технологии).

Аудио услуги
############




.. csv-table:: Balance Sheet
  :header: Услуга,Време,Цена,Инжинер
  :widths: 20, 10, 10, 20
  :stub-columns: 1

       Travel,,230.00,-230.00
       Fees,,400.00,-630.00
       Grant,700.00,,70.00
       Train Fare,,70.00,**0.00**

Продукция
---------

       • композиране на оригинална музика
       • запис и продукция на оригинална музика
       • аудио запис на терен на филмов и телевизионен звук
       • изработка на музикални аранжименти
       • продукция на аудио спотове за радио, телевизия и интернет; аудио реклама
       • дублаж на аудио спотове за тв реклами, филми, тв предавания, анимация
       • мултимедия и интернет аудио, аудио подкастове


Experimental support is available for hosting DNS domains on the Ethereum blockchain via ENS. This works by configuring the domain's nameserver records to point to gateway DNS servers; these DNS servers resolve lookups by consulting an ENS registry which points to resolvers containing the zone data for the relevant domain.

Запис
-----
The steps to host your own domain on the blockchain are:

        • запис и продукция на аудио книги
        • аудио за компютърни игри и приложения
        • аудио менюта за телефонни централи
        • аудио инструкции и аудио навигации ( IVR, GPS)
        • аудио лого и аудио презентации
        • аудио микс и аудио мастеринг
        • аудио лип синхронизация
        • аудио адаптация на филми
        • аудио адаптация на телевизионни сериали
        • аудио адаптация на реклами
        • аудио адаптация на анимационни серии

 1. `deploy your own ENS registry`_
 2. Deploy an instance of `DNSResolver`_
 3. Update your ENS registry to set your newly deployed DNSResolver as the resolver for your domain name (eg, by calling setSubnodeOwner and setResolver; see :ref:`interacting` for details). Don't forget to set the TTL on this record to a reasonable value, or your DNS data may not get cached.
 4. Write a zonefile. The zonefile must include an NS record for your domain that specifies the resolver as *address*.ns1.ens.domains, where *address* is the address of the ENS registry you deployed in step 1, without the leading '0x'. An `example zonefile`_ is available for reference.
 5. Clone and build `ensdns`_. Start a local node, and run 'ensdns upload --keystore=path/to/keystore zonefile' to upload the zone to the blockchain.
 6. Update your NS records with your registrar to point to the name above (*address*.ns1.ens.domains).


Редакция
---------

„Студио 1 София” предлага комплексни аудио услуги на множество български и чужди компании.
През годините студиото работи със световно известни имена от музикалната (Joe Lynn Turner, Billy Gould, Naughty by Nature, Cafe Del Mar), телевизионната и филмова индустрия (Warner Bros).
Безспорно признание за качеството на работа не само за „Студио 1 София”, но и за България като цяло.
Разполагаме с високо квалифициран екип и професионално аудио оборудване за звукозапис, продукция и пост-продукция, което постоянно се обновява, за да отговаря на световните аудио стандарти.

         • аудио адаптация на тв канали за българския пазар
         • реализация на рекламни аудио и видео клипове
         • музикално оформление за аудио и видео клипове
         • аудио сингбеци, аудио джингли
         • аудио ефекти за филми и реклами
         • аудио едитинг и аудио редакция на звук
         • реставриране на стари аудио записи
         • ISDN линия за мониторинг в реално време
         • CD/DVD оформление и тиражиране

 Please note that this feature is still experimental, and shouldn't be used for anything production critical; the DNS gateway is lightly tested, and only a single instance is running at present, providing no backup or failover in case of server issues. The API and configuration may change in backwards-incompatible ways, breaking your nameserver!

.. _`deploy your own ENS registry`: deploying.html
.. _`DNSResolver`: https://github.com/ethereum/ens/blob/master/DNSResolver.sol
.. _`ensdns`: https://github.com/arachnid/ensdns/
.. _`example zonefile`: https://github.com/ethereum/ens/blob/master/ens.domains.zone
