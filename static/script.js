
// =============================
// VARIABLES GLOBALES
// =============================

//let isPremiumUser = false; // 🔴 statut premium (sera remplacé par backend plus tard)
let currentLang = "fr";     // pour gérer la traduction globale
// =============================
// FORMULAIRES LOGIN / REGISTER
// =============================

function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function showLogin() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}


// =============================
// DASHBOARD SECTION
// =============================

function showSection(section) {

    window.currentSection = section;

    let area = document.getElementById("area");

    if (!area) return;

    // PROFILE
    if (section === "profile") {

        console.log("Langue actuelle :", currentLang);

        const lang = currentLang;

        area.innerHTML = `

            <h2>👤 ${lang === "fr" ? "Profil" : "الملف الشخصي"}</h2>

            <div class="info-card">

                <h3>
                    ${lang === "fr" ? "Gestion du compte" : "إدارة الحساب"}
                </h3>

                <p>
                    ${lang === "fr"
                    ? "Gérez votre compte AGRIGUIDE."
                    : "إدارة حساب AGRIGUIDE الخاص بك."}
                </p>

                <br>

                <button class="profile-btn" onclick="window.location.href='/account'">
                    👁️ ${lang === "fr" ? "Voir mon compte" : "عرض الحساب"}
                </button>

                <button class="logout-profile-btn" onclick="window.location.href='/logout'">
                    🚪 ${lang === "fr" ? "Déconnexion" : "تسجيل الخروج"}
                </button>

                <button class="delete-btn" onclick="deleteAccount()">
                    🗑️ ${lang === "fr" ? "Supprimer le compte" : "حذف الحساب"}
                </button>

            </div>

        `;

        return;
    }

    // MAP

   // ================= MAP =================
    if (section === "map") {

    const lang = currentLang;

    area.innerHTML = `

    <h2 style="color:#2e7d32;">
        🗺️ ${
            lang === "fr"
            ? "Cartes Agricoles d'Algérie"
            : "الخرائط الزراعية في الجزائر"
        }
    </h2>

    <p style="margin-top:10px;margin-bottom:20px;">
        ${
            lang === "fr"
            ? "Cette rubrique présente les principales cartes agricoles ainsi que les zones les plus favorables aux cultures en Algérie. Cliquez sur une image pour l'agrandir."
            : "يعرض هذا القسم أهم الخرائط الزراعية والمناطق الأكثر ملاءمة للزراعة في الجزائر. اضغط على الصورة لتكبيرها."
        }
    </p>

    <div class="info-card">

        <h3>
        ${
            lang === "fr"
            ? "Découpage naturel de la wilaya de Tlemcen (montagnes, plateaux, plaines et régions naturelles)"
            : "التقسيمات الطبيعية لولاية تلمسان (الجبال، الهضاب، السهول، المناطق الطبيعية المختلفة)"
        }
        </h3>

        <img src="/static/images/C1.PNG" class="map-image">

    </div>

    <div class="info-card">

        <h3>
        ${
            lang === "fr"
            ? "Unités physiques et domaines naturels de la wilaya de Tlemcen (relief, forêts, plaines, réseau hydrographique et routes)"
            : "الوحدات الفيزيائية والمجالات الطبيعية لولاية تلمسان (التضاريس، الغابات، السهول، الشبكة المائية والطرق)"
        }
        </h3>

        <img src="/static/images/C2.PNG" class="map-image">

    </div>

    <div class="info-card">

        <h3>
        ${
            lang === "fr"
            ? "Superficie des communes de la wilaya de Tlemcen"
            : "مساحة البلديات بولاية تلمسان"
        }
        </h3>

        <img src="/static/images/C3.PNG" class="map-image">

    </div>

    <div class="info-card">

        <h3>
        ${
            lang === "fr"
            ? "Occupation des terres et couverture du sol dans la wilaya de Tlemcen"
            : "أنماط استغلال الأراضي والغطاء الأرضي بولاية تلمسان"
        }
        </h3>

        <img src="/static/images/C4.PNG" class="map-image">

    </div>

        <!-- ================= TABLE 1 ================= -->

        <h2>
            🌱 ${lang === "ar"
            ? "المناطق الأكثر ملاءمة لزراعة أهم النباتات"
            : "Zones les plus favorables aux principales cultures"}
        </h2>

        <table border="1" width="100%" cellpadding="10">

            <tr>
                <th>${lang === "ar" ? "المساحة (ha)" : "Superficie (ha)"}</th>
                <th>${lang === "ar" ? "المناطق" : "Régions"}</th>
                <th>${lang === "ar" ? "نوع النبات" : "Type de culture"}</th>
            </tr>

            <!-- POTATO -->
            <tr>
                <td>151</td><td>${lang === "ar" ? "الرمشي" : "Remchi"}</td>
                <td rowspan="14">${lang === "ar" ? "البطاطا" : "Pomme de Terre"}</td>
            </tr>
            <tr><td>317</td><td>${lang === "ar" ? "مغنية" : "Maghnia"}</td></tr>
            <tr><td>50</td><td>${lang === "ar" ? "أولاد ميمون" : "Ouled Mimoun"}</td></tr>
            <tr><td>80</td><td>${lang === "ar" ? "بني صميل" : "Beni Smile"}</td></tr>
            <tr><td>43</td><td>${lang === "ar" ? "سيدي عبدلي" : "Sidi Abdelli"}</td></tr>
            <tr><td>80</td><td>${lang === "ar" ? "عين تالوت" : "Ain Talout"}</td></tr>
            <tr><td>60</td><td>${lang === "ar" ? "الحناية" : "ElHenaya"}</td></tr>
            <tr><td>115</td><td>${lang === "ar" ? "الرمشي" : "Remchi"}</td></tr>
            <tr><td>125</td><td>${lang === "ar" ? "الفحول" : "El Fehoul"}</td></tr>
            <tr><td>40</td><td>${lang === "ar" ? "فلاوسن" : "Fellaoussen"}</td></tr>
            <tr><td>120</td><td>${lang === "ar" ? "سواحلية" : "Swahelea"}</td></tr>
            <tr><td>151</td><td>${lang === "ar" ? "مغنية" : "Maghnia"}</td></tr>
            <tr><td>50</td><td>${lang === "ar" ? "سبدو" : "Sebdou"}</td></tr>
            <tr><td>60</td><td>${lang === "ar" ? "العزايل" : "El Azail"}</td></tr>

            <!-- TOMATO -->
            <tr>
                <td>30</td><td>${lang === "ar" ? "منصورة" : "Mansourah"}</td>
                <td rowspan="7">${lang === "ar" ? "الطماطم" : "Tomate"}</td>
            </tr>
            <tr><td>30</td><td>${lang === "ar" ? "أولاد ميمون" : "Ouled Mimoun"}</td></tr>
            <tr><td>30</td><td>${lang === "ar" ? "بني صميل" : "Beni Smile"}</td></tr>
            <tr><td>45</td><td>${lang === "ar" ? "الرمشي" : "Remchi"}</td></tr>
            <tr><td>15</td><td>${lang === "ar" ? "بني سنوس" : "Beni Snous"}</td></tr>
            <tr><td>125</td><td>${lang === "ar" ? "سواحلية" : "Swahelea"}</td></tr>
            <tr><td>80</td><td>${lang === "ar" ? "مغنية" : "Maghnia"}</td></tr>

            <!-- ONION -->
            <tr>
                <td>60</td><td>${lang === "ar" ? "مغنية" : "Maghnia"}</td>
                <td rowspan="7">${lang === "ar" ? "البصل" : "Oignons"}</td>
            </tr>
            <tr><td>50</td><td>${lang === "ar" ? "سواحلية" : "Swahelea"}</td></tr>
            <tr><td>60</td><td>${lang === "ar" ? "ندرومة" : "Nedroma"}</td></tr>
            <tr><td>20</td><td>${lang === "ar" ? "عين فتاح" : "Ain Fatah"}</td></tr>
            <tr><td>20</td><td>${lang === "ar" ? "فلاوسن" : "Fellaoussen"}</td></tr>
            <tr><td>13</td><td>${lang === "ar" ? "الفحول" : "El Fehoul"}</td></tr>
            <tr><td>15</td><td>${lang === "ar" ? "عين تالوت" : "Ain Talout"}</td></tr>

        </table>

        <!-- ================= LEGUMES ================= -->

        <h2>
            🌾 ${lang === "ar" ? "البقوليات" : "Légumineuses"}
        </h2>

        <table border="1" width="100%" cellpadding="10">

            <tr>
                <th>${lang === "ar" ? "المساحة (ha)" : "Superficie (ha)"}</th>
                <th>${lang === "ar" ? "المناطق" : "Régions"}</th>
                <th>${lang === "ar" ? "المحصول" : "Culture"}</th>
            </tr>

            <tr>
                <td>80</td><td>${lang === "ar" ? "بن سكران" : "Ben Sakeran"}</td>
                <td rowspan="9">${lang === "ar" ? "الحمص" : "Pois chiche"}</td>
            </tr>
            <tr><td>124</td><td>${lang === "ar" ? "سيدي عبدلي" : "Sidi Abdelli"}</td></tr>
            <tr><td>500</td><td>${lang === "ar" ? "منصورة" : "Mansourah"}</td></tr>
            <tr><td>510</td><td>${lang === "ar" ? "عين تالوت" : "Ain Talout"}</td></tr>
            <tr><td>402</td><td>${lang === "ar" ? "الرمشي" : "Remchi"}</td></tr>
            <tr><td>100</td><td>${lang === "ar" ? "ندرومة" : "Nedroma"}</td></tr>
            <tr><td>100</td><td>${lang === "ar" ? "غزوات" : "Ghazaouet"}</td></tr>
            <tr><td>15</td><td>${lang === "ar" ? "باب العسة" : "Bab El Assa"}</td></tr>
            <tr><td>50</td><td>${lang === "ar" ? "مغنية" : "Maghnia"}</td></tr>

        </table>

        <!-- ================= FRUIT ================= -->

        <div class="info-card">

        <h3>
        🍎 ${lang === "ar"
        ? "الأشجار المثمرة بولاية تلمسان"
        : "Arbres fruitiers de la wilaya de Tlemcen"}
        </h3>

        <table class="agri-table arabic-table">

        <tr>
        <th>${lang==="ar"?"المنطقة":"Région"}</th>
        <th>${lang==="ar"?"المساحة (هكتار)":"Superficie (ha)"}</th>
        <th>${lang==="ar"?"نوع الفاكهة":"Type de fruit"}</th>
        <th>${lang==="ar"?"الأصناف":"Catégorie"}</th>
        </tr>

        <!-- ================= Arbres à pépins ================= -->

        <tr>

        <td>

        ${lang==="ar"?
        `منصورة<br>
        سبدو<br>
        أولاد ميمون<br>
        عين فزة<br>
        شتوان<br>
        باب العسة<br>
        بني بوسعيد<br>
        سواحلية<br>
        الحناية<br>
        مغنية<br>
        أغرم<br>
        الرمشي`
        :
        `Mansourah<br>
        Sebdou<br>
        Ouled Mimoun<br>
        Aïn Fezza<br>
        Chetouane<br>
        Bab El Assa<br>
        Beni Boussaïd<br>
        Souahlia<br>
        Hennaya<br>
        Maghnia<br>
        Aghrèm<br>
        Remchi`
        }

        </td>

        <td>3041</td>

        <td>

        🍎 ${lang==="ar"?"تفاح":"Pomme"}<br>
        🍐 ${lang==="ar"?"إجاص":"Poire"}<br>
        🍊 ${lang==="ar"?"البشملة":"Nèfle"}<br>
        🍏 ${lang==="ar"?"السفرجل":"Coing"}<br>
        ❤️ ${lang==="ar"?"الرمان":"Grenade"}

        </td>

        <td>

        ${lang==="ar"?
        "الأشجار ذات البذور":
        "Arbres à pépins"}

        </td>

        </tr>

        <!-- ================= Arbres à noyaux ================= -->

        <tr>

        <td>

        ${lang==="ar"?
        `منصورة<br>
        سبدو<br>
        أولاد ميمون<br>
        عين فزة<br>
        شتوان<br>
        باب العسة<br>
        بني بوسعيد<br>
        سواحلية<br>
        الحناية<br>
        مغنية<br>
        أغرم<br>
        الرمشي`
        :
        `Mansourah<br>
        Sebdou<br>
        Ouled Mimoun<br>
        Aïn Fezza<br>
        Chetouane<br>
        Bab El Assa<br>
        Beni Boussaïd<br>
        Souahlia<br>
        Hennaya<br>
        Maghnia<br>
        Aghrèm<br>
        Remchi`
        }

        </td>

        <td>6934</td>

        <td>

        🍑 ${lang==="ar"?"المشمش":"Abricot"}<br>
        🍑 ${lang==="ar"?"الخوخ":"Pêche"}<br>
        🟣 ${lang==="ar"?"البرقوق":"Prune"}<br>
        🍒 ${lang==="ar"?"الكرز":"Cerise"}

        </td>

        <td>

        ${lang==="ar"?
        "الأشجار ذات النواة":
        "Arbres à noyaux"}

        </td>

        </tr>

        <!-- ================= Arbres rustiques ================= -->

        <tr>

        <td>

        ${lang==="ar"?
        `منصورة<br>
        سبدو<br>
        أولاد ميمون<br>
        عين فزة<br>
        شتوان<br>
        باب العسة<br>
        بني بوسعيد<br>
        سواحلية<br>
        الحناية<br>
        مغنية<br>
        أغرم<br>
        الرمشي`
        :
        `Mansourah<br>
        Sebdou<br>
        Ouled Mimoun<br>
        Aïn Fezza<br>
        Chetouane<br>
        Bab El Assa<br>
        Beni Boussaïd<br>
        Souahlia<br>
        Hennaya<br>
        Maghnia<br>
        Aghrèm<br>
        Remchi`
        }

        </td>

        <td>6399</td>

        <td>

        🌰 ${lang==="ar"?"اللوز":"Amande"}<br>
        🌳 ${lang==="ar"?"التين":"Figue"}<br>
        🌰 ${lang==="ar"?"الجوز":"Noix"}<br>
        🌰 ${lang==="ar"?"الفستق":"Pistache"}<br>
        🌿 ${lang==="ar"?"الخروب":"Caroube"}

        </td>

        <td>

        ${lang==="ar"?
        "الأشجار الريفية":
        "Arbres rustiques"}

        </td>

        </tr>

        </table>

        </div>


        <h2>🧱 ${lang === "ar" ? "أنواع التربة" : "Types de sol"}</h2>

        <table border="1" width="100%" cellpadding="10">

            <tr>
                <th>${lang === "ar" ? "نوع التربة" : "Type de sol"}</th>
                <th>${lang === "ar" ? "الخصائص" : "Caractéristiques"}</th>
                <th>${lang === "ar" ? "المناطق" : "Zones"}</th>
            </tr>

            <tr>
                <td>${lang === "ar" ? "تربة طينية" : "Sol argileux"}</td>
                <td>${lang === "ar"
                    ? "تربة ثقيلة تحتفظ بالماء"
                    : "Sol lourd, forte rétention d'eau"}</td>
                <td>${lang === "ar"
                    ? "السهول والمناطق الداخلية"
                    : "Plaines et zones intérieures"}</td>
            </tr>

            <tr>
                <td>${lang === "ar" ? "تربة ليمونية" : "Sol limoneux"}</td>
                <td>${lang === "ar"
                    ? "خصوبة متوسطة وقابلة للانضغاط"
                    : "Fertilité moyenne, compactable"}</td>
                <td>${lang === "ar"
                    ? "الأراضي الزراعية"
                    : "Zones agricoles"}</td>
            </tr>

            <tr>
                <td>${lang === "ar" ? "تربة رملية" : "Sol sableux"}</td>
                <td>${lang === "ar"
                    ? "تصريف جيد للماء"
                    : "Bon drainage"}</td>
                <td>${lang === "ar"
                    ? "قرب الأودية"
                    : "Proximité des oueds"}</td>
            </tr>

        </table>

        `;
    }

    // LAWS

    if (section === "laws") {

    area.innerHTML = `
    <h2> ${translations[currentLang].menu_laws}</h2>

    <div class="info-card">

        <h3>🏛️ Loi sur l'investissement (22-18 / 2022)</h3>

        <p>
        ${currentLang === "fr"
        ? "Cette loi vise à encourager l'investissement, développer les secteurs prioritaires, créer des emplois et renforcer l'économie nationale."
        : "يهدف هذا القانون إلى تشجيع الاستثمار، وتطوير القطاعات ذات الأولوية، وخلق مناصب الشغل، وتعزيز الاقتصاد الوطني."}
        </p>

        <ul>
            <li>✔ ${currentLang === "fr" ? "Liberté d'investissement" : "حرية الاستثمار"}</li>
            <li>✔ ${currentLang === "fr" ? "Égalité entre investisseurs" : "المساواة بين المستثمرين"}</li>
            <li>✔ ${currentLang === "fr" ? "Transparence administrative" : "الشفافية الإدارية"}</li>
            <li>✔ ${currentLang === "fr" ? "Soutien aux projets agricoles" : "دعم المشاريع الفلاحية"}</li>
        </ul>

    </div>

    <div class="info-card">

        <h3>🌾 ${currentLang === "fr" ? "Attribution des terres agricoles" : "تخصيص الأراضي الزراعية"}</h3>

        <ul>
            <li>${currentLang === "fr" ? "Durée maximale : 40 ans" : "المدة القصوى: 40 سنة"}</li>
            <li>${currentLang === "fr" ? "Renouvelable" : "قابلة للتجديد"}</li>
            <li>${currentLang === "fr" ? "Obligation de mise en valeur" : "إلزامية الاستغلال"}</li>
            <li>${currentLang === "fr" ? "Respect du cahier des charges" : "احترام دفتر الشروط"}</li>
        </ul>

    </div>

    <div class="info-card">

        <h3>📈 ${currentLang === "fr" ? "Suivi des investissements agricoles" : "متابعة الاستثمارات الفلاحية"}</h3>

        <ul>
            <li>${currentLang === "fr" ? "Contrôle périodique" : "مراقبة دورية"}</li>
            <li>${currentLang === "fr" ? "Suivi de réalisation" : "متابعة الإنجاز"}</li>
            <li>${currentLang === "fr" ? "Respect des engagements" : "احترام الالتزامات"}</li>
            <li>${currentLang === "fr" ? "Possibilité de retrait de concession" : "إمكانية سحب الامتياز"}</li>
        </ul>

    </div>

    <div class="info-card">

        <h3>💰 ${currentLang === "fr" ? "Avantages fiscaux agricoles" : "الامتيازات الجبائية الفلاحية"}</h3>

        <ul>
            <li>${currentLang === "fr" ? "Coopératives agricoles" : "التعاونيات الفلاحية"}</li>
            <li>${currentLang === "fr" ? "Production laitière" : "إنتاج الحليب"}</li>
            <li>${currentLang === "fr" ? "Transformation agricole" : "التحويل الفلاحي"}</li>
            <li>${currentLang === "fr" ? "Activités de stockage" : "أنشطة التخزين"}</li>
        </ul>

    </div>

    <div class="info-card">

        <h3>📄 ${currentLang === "fr" ? "Version PDF" : "النسخة PDF"}</h3>

        ${premiumBlock(currentLang, "/pdf/lois_agricoles")}

    </div>
    `;
    }

// ================= CONSEILS AGRICOLES =================

    if (section === "advice") {

        area.innerHTML = `

        <h2>
            🌱 ${currentLang === "fr"
            ? "Conseils Agricoles"
            : "الإرشادات الفلاحية"}
        </h2>

        <div class="info-card">

            <h3>
                ${currentLang === "fr"
                ? "Conseils et recommandations agricoles"
                : "إرشادات وتوصيات فلاحية"}
            </h3>

            <ul>

                <li>
                ${currentLang === "fr"
                ? "Éliminer les résidus des plantes infectées."
                : "إزالة بقايا النباتات المصابة."}
                </li>

                <li>
                ${currentLang === "fr"
                ? "Éliminer les champignons et les spores."
                : "التخلص من الفطريات والأبواغ."}
                </li>

                <li>
                ${currentLang === "fr"
                ? "Éviter l'excès d'humidité."
                : "تجنب الرطوبة الزائدة."}
                </li>

                <li>
                ${currentLang === "fr"
                ? "Assurer une bonne aération des cultures."
                : "تهوية النباتات."}
                </li>

                <li>
                ${currentLang === "fr"
                ? "Respecter la rotation des cultures."
                : "احترام الدورة الزراعية."}
                </li>

            </ul>

            <h4>

            ${currentLang === "fr"
            ? "Exemple de rotation culturale"
            : "مثال على الدورة الزراعية"}

            </h4>

            <ul>

                <li>
                🍅 ${currentLang === "fr"
                ? "1ère année : Tomate"
                : "السنة الأولى : طماطم"}
                </li>

                <li>
                🌱 ${currentLang === "fr"
                ? "2ème année : Légumineuses"
                : "السنة الثانية : بقوليات"}
                </li>

                <li>
                🌾 ${currentLang === "fr"
                ? "3ème année : Blé"
                : "السنة الثالثة : قمح"}
                </li>

            </ul>

        </div>

        <div class="info-card">

            <h3 style="color:#2e7d32;">

            📍 ${currentLang === "fr"
            ? "Informations générales"
            : "معلومات عامة"}

            </h3>

            <ul>

                <li>

                ${currentLang === "fr"
                ? "L'Algérie possède plus de 8 millions d'hectares de terres agricoles."
                : "يوجد أكثر من 8 ملايين هكتار من الأراضي الزراعية."}

                </li>

                <li>

                ${currentLang === "fr"
                ? "Les cultures varient selon le climat et le type de sol."
                : "تختلف الزراعات حسب المناخ والتربة."}

                </li>

                <li>

                ${currentLang === "fr"
                ? "Le nord est favorable aux céréales et aux arbres fruitiers."
                : "الشمال مناسب للحبوب والأشجار المثمرة."}

                </li>

                <li>

                ${currentLang === "fr"
                ? "Les Hauts Plateaux conviennent aux céréales et à l'élevage."
                : "الهضاب العليا مناسبة للحبوب وتربية المواشي."}

                </li>

                <li>

                ${currentLang === "fr"
                ? "Le sud est adapté aux palmiers dattiers et aux cultures sous serre."
                : "الجنوب مناسب لزراعة النخيل والخضروات المحمية."}

                </li>

            </ul>

        </div>

        `;

        return;
    }

    // EXPERTS
    // ================= EXPERTS =================

    if (section === "experts") {

        area.innerHTML = `

        <h2>
            👨‍🌾 ${currentLang === "fr"
            ? "Experts"
            : "الخبراء"}
        </h2>

        <div class="expert-card">

            <h3>
                ${currentLang === "fr"
                ? "Expert Agronome"
                : "خبيرة في الهندسة الزراعية"}
            </h3>

            <p><strong>BEKHECHI Yousra</strong></p>

            <p>
            ${currentLang === "fr"
            ? "Agronome spécialiste en protection des végétaux."
            : "مهندسة زراعية متخصصة في وقاية النباتات."}
            </p>

            <p>
            ${currentLang === "fr"
            ? "Licence en Production Végétale et Master en Protection des Végétaux."
            : "حاصلة على ليسانس في الإنتاج النباتي وماستر في وقاية النباتات."}
            </p>

            <p>📞 0657785165</p>

            <p>📧 yousrabekhechi26@gmail.com</p>

        </div>

        <div class="expert-card">

            <h3>
                ${currentLang === "fr"
                ? "Experte Juridique"
                : "خبيرة قانونية"}
            </h3>

            <p><strong>BENAZZOUZ Rabia</strong></p>

            <p>
            ${currentLang === "fr"
            ? "Spécialiste en droit et législation."
            : "متخصصة في القانون والتشريع."}
            </p>

            <p>📧 Rabia.benazzouz@univ-tlemcen.dz</p>

        </div>

        <div class="expert-card">

            <h3>
                ${currentLang === "fr"
                ? "Direction des Services Agricoles de Tlemcen"
                : "مديرية المصالح الفلاحية لولاية تلمسان"}
            </h3>

            <p>
            ${currentLang === "fr"
            ? "Pour toute information concernant les programmes agricoles et les investissements."
            : "للاستفسار حول البرامج الفلاحية والاستثمارات الزراعية."}
            </p>

            <p>📧 DSA13@MAdR.gov.dz</p>

        </div>

        `;

        return;
    }

    if(section==="diseases"){

    area.innerHTML=`

    <h2>🦠 ${currentLang==="fr" ? "Maladies et Ravageurs" : "الأمراض والآفات"}</h2>

    <div class="info-card">

    <h3>${currentLang==="fr" ? "Description" : "الوصف"}</h3>

    <p>
    ${currentLang==="fr"
    ? "Documentation complète sur les maladies agricoles."
    : "وثائق كاملة حول أمراض المحاصيل الزراعية."
    }
    </p>

    <ul>
    <li>${currentLang === "fr" ? "🍅 Tomate" : "🍅 طماطم"}</li>
    <li>${currentLang === "fr" ? "🥔 Pomme de terre" : "🥔 بصل"}</li>
    <li>${currentLang === "fr" ? "🌾 Céréales" : "🌾 حبوب"}</li>
    <li>${currentLang === "fr" ? "🍇 Vigne" : "🍇 كروم"}</li>
    <li>${currentLang === "fr" ? "🫒 Olivier" : "🫒 زيتون"}</li>
    </ul>

    <br>

    <div class="premium-box">
        ${premiumBlock(currentLang, "/pdf/maladies")}
    </div>

    </div>

    `;
    }

    if(section==="treatment"){

    area.innerHTML=`

    <h2>💊 ${currentLang==="fr" ? "Traitements Phytosanitaires" : "العلاجات الفلاحية"}</h2>

    <div class="info-card">

    <h3>${currentLang==="fr" ? "Description" : "الوصف"}</h3>

    <ul>
    <li>✔ ${currentLang==="fr" ? "Produits homologués" : "منتجات مرخصة"}</li>
    <li>✔ ${currentLang==="fr" ? "Doses d'utilisation" : "الجرعات"}</li>
    <li>✔ ${currentLang==="fr" ? "Mode d'application" : "طريقة الاستعمال"}</li>
    </ul>

    <br>

    ${premiumBlock(currentLang, "/pdf/traitements")}

    </div>

    `;
    }

    if(section==="finance"){

        fetch("/finance-data")

        .then(response=>response.json())

        .then(data=>{

            console.log(data);

            area.innerHTML=`

            <h2>${currentLang === "fr" ? "Finance" : "المالية"}</h2>

            <p>${currentLang === "fr" ? "Utilisateurs" : "المستخدمون"} : ${data.users}</p>

            <p>${currentLang === "fr" ? "Agriculteurs" : "المزارعون"}    : ${data.farmers}</p>

            <p>${currentLang === "fr" ? "Investisseurs nationaux" : "المستثمرون المحليون"} : ${data.national}</p>

            <p>${currentLang === "fr" ? "Investisseurs étrangers" : "المستثمرون الأجانب"} : ${data.foreign}</p>

            <p>${currentLang === "fr" ? "Abonnés Premium" : "الأعضاء المميزون"} : ${data.premium}</p>
            <p>
            ${currentLang==="fr" ? "Abonnements 1 mois" : "اشتراكات شهر واحد"}
            : ${data.month1}
            </p>

            <p>
            ${currentLang==="fr" ? "Abonnements 12 mois" : "اشتراكات 12 شهراً"}
            : ${data.month12}
            </p>

            <p>
            ${currentLang==="fr" ? "Revenu 1 mois" : "مداخيل اشتراكات شهر واحد"}
            : ${data.revenu1} DA
            </p>

            <p>
            ${currentLang==="fr" ? "Revenu 12 mois" : "مداخيل اشتراكات 12 شهراً"}
            : ${data.revenu12} DA
            </p>

            <p style="font-weight:bold;color:green;">
            ${currentLang==="fr" ? "Revenu Total" : "إجمالي المداخيل"}
            : ${data.revenu} DA
            </p>
            `;

        })

        .catch(error=>{

            console.log(error);

            area.innerHTML=`
            <h2 style="color:red;">
            Erreur lors du chargement des données.
            </h2>
            `;

        });

    }

    if(section==="payment"){

    area.innerHTML=`

    <h2>
    💳 ${currentLang==="fr" ? "Paiement Premium" : "الاشتراك المميز"}
    </h2>

    <div class="info-card">

    <h3>
    ${currentLang==="fr" ? "Abonnement Premium" : "الاشتراك المميز"}
    </h3>

    <p>

    ${currentLang==="fr"
    ?
    "Débloquez l'accès à tous les guides PDF, lois agricoles, traitements, cartes et documents techniques."
    :
    "احصل على وصول كامل إلى جميع ملفات PDF والخرائط والقوانين والإرشادات الزراعية."
    }

    </p>

    </div>

    <div class="pricing-container">

    <div class="price-card">

    <h3>
    🥉 ${
    currentLang==="fr"
    ?
    "1 Mois"
    :
    "شهر واحد"
    }
    </h3>

    <h2>500 DA</h2>

    <ul>

    <li>✔ PDF Lois</li>
    <li>✔ PDF Maladies</li>
    <li>✔ PDF Traitements</li>


    </ul>

    <button
    class="download-btn"
    onclick="subscribe('1mois')">

    ${currentLang==="fr"
    ?
    "S'abonner"
    :
    "اشترك الآن"}

    </button>

    </div>

    <div class="price-card premium-card">

    <h3>

    🥇 ${
    currentLang==="fr"
    ?
    "12 Mois"
    :
    "12 شهراً"
    }

    </h3>

    <h2>4000 DA</h2>

    <ul>

    <li>✔ PDF Lois</li>
    <li>✔ PDF Maladies</li>
    <li>✔ PDF Traitements</li>
    <li>✔ Assistance</li>
    <li>✔ Mises à jour</li>

    </ul>

    <button
    class="download-btn"
    onclick="subscribe('12mois')">

    ${currentLang==="fr"
    ?
    "S'abonner"
    :
    "اشترك الآن"}

    </button>

    </div>

    </div>

    <div class="info-card">

    <h3>

    💰 ${
    currentLang==="fr"
    ?
    "Moyens de paiement"
    :
    "طرق الدفع"
    }

    </h3>

    <ul>

    <li>💳 CIB</li>
    <li>💳 EDAHABIA</li>
    <li>🏦 BaridiMob</li>
    <li>💳 Visa / Mastercard</li>

    </ul>

    </div>

    `;

    return;

    }
}

function premiumBlock(lang, pdfRoute) {

    if (isPremiumUser) {
        return `
            <a href="${pdfRoute}" target="_blank" class="download-btn">
                ${translations[lang].download_pdf}
            </a>
        `;
    }

    return `
        <div class="info-card">
            <p>🔒 ${lang === "fr" ? "Accès Premium requis" : "مطلوب اشتراك بريميوم"}</p>

            <button class="download-btn" onclick="showSection('payment')">
                💳 ${lang === "fr" ? "Passer Premium" : "الاشتراك الآن"}
            </button>
        </div>
    `;
}
// =============================
// MODE SOMBRE
// =============================

function toggleTheme() {

    const body = document.body;
    const btn = document.getElementById("themeBtn");
    const icon = btn ? btn.querySelector(".icon") : null;

    body.classList.toggle("dark-mode");

    if (icon) {
        icon.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    }

    localStorage.setItem(
        "theme",
        body.classList.contains("dark-mode") ? "dark" : "light"
    );
}


// =============================
// LOAD THEME
// =============================

document.addEventListener("DOMContentLoaded", function () {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");

        let icon = document.querySelector("#themeBtn .icon");
        if (icon) icon.textContent = "☀️";
    }

});




// =============================
// LANGUE FR / AR (CORRIGÉE VRAIMENT)
// =============================

const translations = {

fr: {

    // ================= HEADER =================
    nav_home: "Accueil",
    nav_contact: "Contact",

    // ================= HERO =================
    title: "🌱 Bienvenue dans AGRIGUIDE",
    desc: "Plateforme collaborative dédiée aux agriculteurs, investisseurs et experts du secteur agricole en Algérie.",

    // ================= LOGIN =================
    login_title: "Connexion",
    email: "Adresse Email",
    password: "Mot de passe",
    remember: "Se souvenir de moi",
    forgot_password: "Mot de passe oublié ?",
    login_btn: "Se connecter",
    google_login: "Continuer avec Google",
    create_account: "Créer un compte",

    register_title: "Inscription",
    first_name: "Nom",
    last_name: "Prénom",
    role_select: "Choisir un profil",
    farmer: "Agriculteur",
    investor_local: "Investisseur National",
    investor_foreign: "Investisseur Étranger",
    phone: "Téléphone",
    confirm_password: "Confirmer le mot de passe",
    register_btn: "S'inscrire",
    back_login: "Retour à la connexion",

    // ================= MENU =================
    menu_title:"Menu",
    menu_map: "🗺️ Cartes Agricoles",
    menu_laws: "📜 Lois Agricoles",
    menu_advice: "🌱 Conseils Agricoles",
    menu_diseases: "🦠 Maladies & Ravageurs",
    menu_treatment: "💊 Traitements",
    menu_experts: "👨‍🌾 Experts",
    menu_finance: "📊 Finance",
    menu_payment: "💳 Paiement",

    // ================= PROFILE =================
    profile: "Profil",
    view_account: "Voir mon compte",
    logout: "Déconnexion",
    delete_account: "Supprimer le compte",
    // ================= ACCUEIL =================
    welcome: "Bienvenue",
    profile_label: "Profil",
    home_desc: "Sélectionnez une rubrique dans le menu de gauche.",
    platform_objective: "Objectif de la plateforme",
    platform_text: "AGRIGUIDE permet aux agriculteurs et investisseurs d'accéder à des informations agricoles, juridiques et techniques.",
    // ================= PAYMENT =================
    payment_title: "Paiement",
    secure_payment: "Paiement sécurisé",
    payment_methods: "Méthodes de paiement",
    guide_payment: "Consulter le guide",
    download_prices: "Télécharger les tarifs",

    // ================= PREMIUM =================
    premium_required: "Contenu Premium - Abonnement requis",
    unlock_pdf: "Déverrouiller le PDF",
    download_pdf: "📄 Télécharger le guide",
    payment_required: "Ce contenu est réservé aux utilisateurs premium."
},


ar: {

    // ================= HEADER =================
    nav_home: "الرئيسية",
    nav_contact: "اتصل بنا",

    // ================= ACCUEIL =================
    welcome: "مرحبًا",
    profile_label: "الصفة",
    home_desc: "اختر قسماً من القائمة الجانبية.",
    platform_objective: "هدف المنصة",
    platform_text: "تمكن منصة AGRIGUIDE الفلاحين والمستثمرين من الوصول إلى المعلومات الفلاحية والقانونية والتقنية.",
    // ================= HERO =================
    title: "🌱 مرحبًا بكم في AGRIGUIDE",
    desc: "منصة تعاونية مخصصة للفلاحين والمستثمرين وخبراء القطاع الفلاحي في الجزائر.",

    // ================= LOGIN =================
    login_title: "تسجيل الدخول",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    remember: "تذكرني",
    forgot_password: "نسيت كلمة المرور؟",
    login_btn: "تسجيل الدخول",
    google_login: "المتابعة عبر Google",
    create_account: "إنشاء حساب",

    register_title: "التسجيل",
    first_name: "الاسم",
    last_name: "اللقب",
    role_select: "اختر الملف الشخصي",
    farmer: "فلاح",
    investor_local: "مستثمر وطني",
    investor_foreign: "مستثمر أجنبي",
    phone: "الهاتف",
    confirm_password: "تأكيد كلمة المرور",
    register_btn: "إنشاء حساب",
    back_login: "العودة لتسجيل الدخول",

    // ================= MENU =================
    menu_title:"القائمة",
    menu_map: "🗺️ الخرائط الزراعية",
    menu_laws: "📜 القوانين الزراعية",
    menu_advice: "🌱 إرشادات فلاحية",
    menu_diseases: "🦠 الأمراض والآفات",
    menu_treatment: "💊 العلاجات",
    menu_experts: "👨‍🌾 الخبراء",
    menu_finance: "📊 المالية",
    menu_payment: "💳 الدفع",

    // ================= PROFILE =================
    profile: "الملف الشخصي",
    view_account: "عرض الحساب",
    logout: "تسجيل الخروج",
    delete_account: "حذف الحساب",

    // ================= PAYMENT =================
    payment_title: "الدفع",
    secure_payment: "دفع آمن",
    payment_methods: "طرق الدفع",
    guide_payment: "عرض الدليل",
    download_prices: "تحميل الأسعار",

    // ================= PREMIUM =================
    premium_required: "محتوى مدفوع - يتطلب اشتراك",
    unlock_pdf: "فتح الملف",
    download_pdf: "📄 تحميل الدليل",
    payment_required: "هذا المحتوى مخصص للمشتركين فقط."
}

};


document.addEventListener("DOMContentLoaded", function () {

    const select = document.getElementById("languageSelect");

    if (!select) return;

    // langue enregistrée
    const savedLang = localStorage.getItem("lang") || "fr";
    currentLang = savedLang;
    select.value = savedLang;

    applyTranslation(savedLang);

    select.addEventListener("change", function () {

        currentLang = this.value;

        localStorage.setItem("lang", currentLang);

        applyTranslation(currentLang);

        // rafraîchir la section affichée du dashboard
        if (typeof showSection === "function") {
            showSection(window.currentSection || "home");
        }
        

    });

});


function applyTranslation(lang){

    document.body.dir = (lang === "ar") ? "rtl" : "ltr";

    // ================= HEADER =================

    const nav = document.querySelectorAll("nav a");

    if(nav.length >= 2){
        nav[0].textContent = translations[lang].nav_home;
        nav[1].textContent = translations[lang].nav_contact;
    }

    // ================= HERO =================

    const heroTitle=document.querySelector(".hero-left h1");
    if(heroTitle)
        heroTitle.textContent=translations[lang].title;

    const heroDesc=document.querySelector(".hero-left p");
    if(heroDesc)
        heroDesc.textContent=translations[lang].desc;


    // ================= LOGIN =================

    const loginTitle=document.querySelector("#loginForm h2");
    if(loginTitle)
        loginTitle.textContent=translations[lang].login_title;

    const registerTitle=document.querySelector("#registerForm h2");
    if(registerTitle)
        registerTitle.textContent=translations[lang].register_title;


    const remember=document.querySelector("label");
    if(remember)
        remember.textContent=translations[lang].remember;


    const forgot=document.querySelector(".auth-options a");
    if(forgot)
        forgot.textContent=translations[lang].forgot_password;


    const loginBtn=document.querySelector(".login-btn");
    if(loginBtn)
        loginBtn.textContent=translations[lang].login_btn;


    document.querySelectorAll(".google-btn").forEach(btn=>{
        btn.textContent=translations[lang].google_login;
    });


    const createBtn=document.querySelector(".register-btn");
    if(createBtn)
        createBtn.textContent=translations[lang].create_account;


    const backBtn=document.getElementById("backLoginBtn");
    if(backBtn)
        backBtn.textContent=translations[lang].back_login;


    const registerBtn=document.getElementById("registerBtn");
    if(registerBtn)
        registerBtn.textContent=translations[lang].register_btn;


    // ================= DASHBOARD =================

    const menuTitle=document.getElementById("menu_title");
    if(menuTitle)
        menuTitle.textContent=(lang==="fr")?"Menu":"القائمة";


    const menuMap=document.getElementById("menu_map");
    if(menuMap)
        menuMap.textContent=translations[lang].menu_map;


    const menuLaws=document.getElementById("menu_laws");
    if(menuLaws)
        menuLaws.textContent=translations[lang].menu_laws;


    const menuAdvice=document.getElementById("menu_advice");
    if(menuAdvice)
        menuAdvice.textContent=translations[lang].menu_advice;


    const menuDiseases=document.getElementById("menu_diseases");
    if(menuDiseases)
        menuDiseases.textContent=translations[lang].menu_diseases;


    const menuTreatment=document.getElementById("menu_treatment");
    if(menuTreatment)
        menuTreatment.textContent=translations[lang].menu_treatment;


    const menuExperts=document.getElementById("menu_experts");
    if(menuExperts)
        menuExperts.textContent=translations[lang].menu_experts;


    const menuFinance=document.getElementById("menu_finance");
    if(menuFinance)
        menuFinance.textContent=translations[lang].menu_finance;


    const menuPayment=document.getElementById("menu_payment");
    if(menuPayment)
        menuPayment.textContent=translations[lang].menu_payment;


    // accueil dashboard

    // ================= ACCUEIL DASHBOARD =================

    const welcomeTitle = document.getElementById("welcomeTitle");

    if (welcomeTitle) {

        const username = welcomeTitle.dataset.user;

        welcomeTitle.textContent =
            (lang === "fr" ? "Bienvenue " : "مرحبًا ")
            + username;
    }


    const profileTitle = document.getElementById("profileTitle");

    if (profileTitle) {

        profileTitle.textContent =
            (lang === "fr" ? "Profil : " : "الملف الشخصي : ")
            + profileTitle.dataset.role;
    }


    const homeTitle = document.getElementById("homeTitle");

    if(homeTitle){

        homeTitle.textContent =
        lang==="fr"
        ? "🌱 AGRIGUIDE"
        : "🌱 AGRIGUIDE";
    }


    const homeDesc = document.getElementById("homeDesc");

    if(homeDesc){

        homeDesc.textContent =
        lang==="fr"
        ? "Sélectionnez une rubrique dans le menu de gauche."
        : "اختر قسماً من القائمة الجانبية.";
    }


    const objectiveTitle = document.getElementById("objectiveTitle");

    if(objectiveTitle){

        objectiveTitle.textContent =
        lang==="fr"
        ? "Objectif de la plateforme"
        : "هدف المنصة";
    }


    const objectiveText = document.getElementById("objectiveText");

    if(objectiveText){

        objectiveText.textContent =
        lang==="fr"
        ? "AGRIGUIDE permet aux agriculteurs et investisseurs d'accéder aux informations agricoles, juridiques et techniques."
        : "تمكن منصة AGRIGUIDE الفلاحين والمستثمرين من الوصول إلى المعلومات الزراعية والقانونية والتقنية.";
    }    
            // ================= REFRESH CURRENT SECTION =================
            if (typeof showSection === "function") {
                const activeSection = window.currentSection || "accueil";
                showSection(activeSection);
            }

}
        


// =============================
// DELETE ACCOUNT
// =============================

function deleteAccount() {

    let confirmation = confirm("⚠️ Supprimer compte ?");

    if (confirmation) {

        let check = prompt("Tapez SUPPRIMER pour confirmer");

        if (check === "SUPPRIMER") {
            window.location.href = "/delete_account";
        }
    }
}


// =============================
// PROFILE MENU
// =============================

function toggleProfileMenu() {

    let menu = document.getElementById("profileDropdown");

    if (menu) {
        menu.classList.toggle("show");
    }
}


// close dropdown
window.onclick = function (event) {

    if (!event.target.matches('.profile-btn')) {

        let dropdown = document.getElementById("profileDropdown");

        if (dropdown) {
            dropdown.classList.remove("show");
        }
    }
};

document.addEventListener("click", function(e){

    if(e.target.tagName === "IMG"){

        let image = window.open("");

        image.document.write(
            "<img src='" +
            e.target.src +
            "' style='width:100%'>"
        );
    }

});

function forgotPassword() {
    alert("Redirection vers la page de récupération de mot de passe");
    window.location.href = "/forgot-password";
}

document.addEventListener("DOMContentLoaded", function () {

    const emailInput = document.querySelector("input[name='email']");
    const remember = document.getElementById("remember");

    if (localStorage.getItem("email")) {
        emailInput.value = localStorage.getItem("email");
        remember.checked = true;
    }

    document.querySelector("form").addEventListener("submit", function () {
        if (remember.checked) {
            localStorage.setItem("email", emailInput.value);
        } else {
            localStorage.removeItem("email");
        }
    });

});

function applyLanguage(lang){

    document.getElementById("heroTitle").textContent = translations[lang].title;
    document.getElementById("heroDesc").textContent = translations[lang].desc;

    document.getElementById("loginTitle").textContent = translations[lang].login_title;
    document.getElementById("registerTitle").textContent = translations[lang].register_title;

    document.getElementById("nav_home").textContent = translations[lang].nav_home;
    document.getElementById("nav_contact").textContent = translations[lang].nav_contact;

    document.getElementById("loginBtn").textContent = translations[lang].login_btn;
    document.getElementById("registerBtn").textContent = translations[lang].register_btn;

    document.getElementById("createAccountBtn").textContent = translations[lang].create_account;
    document.getElementById("backLoginBtn").textContent = translations[lang].back_login;
}

function subscribe(plan){

    alert("Paiement validé avec succès !");

    window.location.href="/pay/"+plan;

}
