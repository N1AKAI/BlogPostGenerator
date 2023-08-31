hljs.highlightAll();
// Anime Info Section

const animeList = () => {
  let localAnimes = window.localStorage.getItem("animes");
  if (localAnimes) {
    document.querySelector(
      "#selectedAnime"
    ).innerHTML = `<option selected value="-1">اختر أنمي</option>`;
    let animes = JSON.parse(localAnimes);
    animes.forEach((el) => {
      const option = document.createElement("option");
      option.value = animes.indexOf(el);
      option.textContent = el.animeTitleRomaji;
      document.querySelector("#selectedAnime").append(option);
    });
  }
};

animeList();

document.querySelector("#selectedAnime").addEventListener("input", () => {
  const value = document.querySelector("#selectedAnime").value;
  if (value != -1) {
    let localAnimes = window.localStorage.getItem("animes");
    let animeList = JSON.parse(localAnimes);
    document.querySelector("#animeTitleRomaji").value =
      animeList[value].animeTitleRomaji;
    document.querySelector("#animeTitleJp").value =
      animeList[value].animeTitleJp;
    document.querySelector("#animeAlternativeTitle").value =
      animeList[value].animeAlternativeTitle;
    document.querySelector("#animeTitleAr").value =
      animeList[value].animeTitleAr;
    document.querySelector("#animeType").value = animeList[value].animeType;
    document.querySelector("#animeTotalEps").value =
      animeList[value].animeTotalEps;
    document.querySelector("#animeStatus").value = animeList[value].animeStatus;
    document.querySelector("#animeStartAiring").value =
      animeList[value].animeStartAiring;
    document.querySelector("#animeEndAiring").value =
      animeList[value].animeEndAiring;
    document.querySelector("#animeSeason").value = animeList[value].animeSeason;
    document.querySelector("#animeOrigins").value =
      animeList[value].animeOrigins;
    document.querySelector("#animeStudios").value =
      animeList[value].animeStudios;
    document.querySelector("#animeRaiting").value =
      animeList[value].animeRaiting;
    document.querySelector("#animeWebsite").value =
      animeList[value].animeWebsite;
    document.querySelector("#animeTwitter").value =
      animeList[value].animeTwitter;
    document.querySelector("#animeMal").value = animeList[value].animeMal;
    document.querySelector("#animeAnilist").value =
      animeList[value].animeAnilist;
    document.querySelector("#animeAniDb").value = animeList[value].animeAniDb;
    document.querySelector("#animePoster").value = animeList[value].animePoster;
    document.querySelector("#animeEpDuration").value =
      animeList[value].animeEpDuration;
    document.querySelector("#animeGenres").value = animeList[value].animeGenres;
    document.querySelector("#animeStory").value = animeList[value].animeStory;

    assignValuesToVars();

    document.querySelector("#edit").classList.remove("disabled");
    document.querySelector("#delete").classList.remove("disabled");
  } else {
    document.forms[0].reset();
    assignValuesToVars();
    document.querySelector("#edit").classList.add("disabled");
    document.querySelector("#delete").classList.add("disabled");
  }
});

let animeTitleRomaji = "";
let animeTitleJp = "";
let animeAlternativeTitle = "";
let animeTitleAr = "";
let animeType = "";
let animeTotalEps = "";
let animeStatus = "";
let animeStartAiring = "";
let animeEndAiring = "";
let animeSeason = "";
let animeOrigins = "";
let animeStudios = "";
let animeRaiting = "";
let animeWebsite = "";
let animeTwitter = "";
let animeMal = "";
let animeAnilist = "";
let animeAniDb = "";
let animePoster = "";
let animeEpDuration = "";
let animeGenres = "";
let animeStory = "";
let staffList = "";
let epLink = "";

function assignValuesToVars() {
  animeTitleRomaji = document.querySelector("#animeTitleRomaji").value;
  animeTitleJp = document.querySelector("#animeTitleJp").value;
  animeAlternativeTitle = document.querySelector(
    "#animeAlternativeTitle"
  ).value;
  animeTitleAr = document.querySelector("#animeTitleAr").value;
  animeType = document.querySelector("#animeType").value;
  animeTotalEps = document.querySelector("#animeTotalEps").value;
  animeStatus = document.querySelector("#animeStatus").value;
  animeStartAiring = document.querySelector("#animeStartAiring").value;
  animeEndAiring = document.querySelector("#animeEndAiring").value;
  animeSeason = document.querySelector("#animeSeason").value;
  animeOrigins = document.querySelector("#animeOrigins").value;
  animeStudios = document.querySelector("#animeStudios").value;
  animeRaiting = document.querySelector("#animeRaiting").value;
  animeWebsite = document.querySelector("#animeWebsite").value;
  animeTwitter = document.querySelector("#animeTwitter").value;
  animeMal = document.querySelector("#animeMal").value;
  animeAnilist = document.querySelector("#animeAnilist").value;
  animeAniDb = document.querySelector("#animeAniDb").value;
  animePoster = document.querySelector("#animePoster").value;
  animeEpDuration = document.querySelector("#animeEpDuration").value;
  animeGenres = document.querySelector("#animeGenres").value;
  animeStory = document.querySelector("#animeStory").value;
}

// Add Button

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", () => {
  assignValuesToVars();

  let animes = [];
  let localAnimes = window.localStorage.getItem("animes");
  if (localAnimes) {
    animes = JSON.parse(localAnimes);
  }
  animes.push({
    animeTitleRomaji,
    animeTitleJp,
    animeAlternativeTitle,
    animeTitleAr,
    animeType,
    animeTotalEps,
    animeStatus,
    animeStartAiring,
    animeEndAiring,
    animeSeason,
    animeOrigins,
    animeStudios,
    animeRaiting,
    animeWebsite,
    animeTwitter,
    animeMal,
    animeAnilist,
    animeAniDb,
    animePoster,
    animeEpDuration,
    animeGenres,
    animeStory,
  });
  window.localStorage.setItem("animes", JSON.stringify(animes));
  document.forms[0].reset();
  document.querySelector("#edit").classList.add("disabled");
  document.querySelector("#delete").classList.add("disabled");
  animeList();
});

// Edit Button

const editBtn = document.querySelector("#edit");
editBtn.addEventListener("click", () => {
  const index = document.querySelector("#selectedAnime").value;
  let localAnimes = window.localStorage.getItem("animes");
  const animes = JSON.parse(localAnimes);
  animes[index].animeTitleAr = document.querySelector("#animeTitleAr").value;
  animes[index].animeType = document.querySelector("#animeType").value;
  animes[index].animeTotalEps = document.querySelector("#animeTotalEps").value;
  animes[index].animeStatus = document.querySelector("#animeStatus").value;
  animes[index].animeStartAiring =
    document.querySelector("#animeStartAiring").value;
  animes[index].animeEndAiring =
    document.querySelector("#animeEndAiring").value;
  animes[index].animeSeason = document.querySelector("#animeSeason").value;
  animes[index].animeOrigins = document.querySelector("#animeOrigins").value;
  animes[index].animeStudios = document.querySelector("#animeStudios").value;
  animes[index].animeRaiting = document.querySelector("#animeRaiting").value;
  animes[index].animeWebsite = document.querySelector("#animeWebsite").value;
  animes[index].animeTwitter = document.querySelector("#animeTwitter").value;
  animes[index].animeMal = document.querySelector("#animeMal").value;
  animes[index].animeAnilist = document.querySelector("#animeAnilist").value;
  animes[index].animeAniDb = document.querySelector("#animeAniDb").value;
  animes[index].animePoster = document.querySelector("#animePoster").value;
  animes[index].animeEpDuration =
    document.querySelector("#animeEpDuration").value;
  animes[index].animeGenres = document.querySelector("#animeGenres").value;
  animes[index].animeStory = document.querySelector("#animeStory").value;
  assignValuesToVars();
  window.localStorage.setItem("animes", JSON.stringify(animes));
});

// Delete Button
const deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", () => {
  const index = document.querySelector("#selectedAnime").value;
  let localAnimes = window.localStorage.getItem("animes");
  const animes = JSON.parse(localAnimes);
  animes.splice(index, 1);
  window.localStorage.setItem("animes", JSON.stringify(animes));
  document.forms[0].reset();
  document.querySelector("#edit").classList.add("disabled");
  document.querySelector("#delete").classList.add("disabled");
  animeList();
});

// Staff Section

// Delete Job
function deleteJobFn() {
  const deleteJob = document.querySelectorAll("#deleteJob");
  deleteJob.forEach((el) => {
    el.addEventListener("click", function () {
      this.parentElement.parentElement.remove();
    });
  });
}

deleteJobFn();

// Add Job
const addJob = document.querySelector("#addJob");
addJob.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("row");
  div.classList.add("gx-1");
  div.classList.add("mb-2");
  div.classList.add("align-items-center");
  div.innerHTML = `<div class="col-6"> <input type="text" class="form-control jobs" placeholder="الوظيفة"> </div> <div class="col-5"> <input type="text" class="form-control names" placeholder="الاسم"> </div> <div class="col-1"> <button type="button" class="btn btn-danger btn-sm" id="deleteJob">حذف</button> </div>`;
  document.forms[1].append(div);
  deleteJobFn();
});

// Ep Section

// Delete Ep
function deleteEpLinkFn() {
  const deleteEpLink = document.querySelectorAll("#deleteEpLink");
  deleteEpLink.forEach((el) => {
    el.addEventListener("click", function () {
      this.parentElement.parentElement.remove();
    });
  });
}

deleteJobFn();

// Add Ep
const addEpLink = document.querySelector("#addEpLink");
addEpLink.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("row");
  div.classList.add("gx-1");
  div.classList.add("mb-2");
  div.classList.add("ep-link");
  div.classList.add("align-items-center");
  div.innerHTML = `<div class="col-11 mb-3" dir="ltr"> <input type="text" class="form-control ep-name" placeholder="[BAM25] Zom 100: Zombie ni Naru made ni Shitai 100 no Koto - 05 (1080p).mkv"> </div> <div class="col-1 mb-2"> <button type="button" class="btn btn-danger btn-sm" id="deleteEpLink">حذف</button> </div> <div class="col-4 mb-2"> <input type="text" class="form-control server-name" placeholder="اسم السيرفر"> </div> <div class="col-7 mb-2"> <input type="url" class="form-control server-link" placeholder="الرابط"> </div> <div class="col-4 mb-2"> <input type="text" class="form-control ep-size" placeholder="حجم الحلقة"> </div> <div class="col-7 mb-2"> <input type="url" class="form-control sub-link" placeholder="رابط ملف الترجمة"> </div>`;
  document.forms[2].append(div);
  deleteEpLinkFn();
});

// Generate Function
function generateCode() {
  staffList = "";
  for (let i = 0; i < document.querySelectorAll(".jobs").length; i++) {
    staffList += `
        <tr class="tr">
            <td class="anime-info-key tl">${
              document.querySelectorAll(".names")[i].value
            }</td>
            <td class="anime-info-value">:${
              document.querySelectorAll(".jobs")[i].value
            }</td>
        </tr>
        `;
  }
  epLink = "";
  for (let i = 0; i < document.querySelectorAll(".ep-link").length; i++) {
    let one = document.querySelectorAll(".ep-link")[i];
    epLink += `
        <div class="download-box">
            <h5 class="download-title-1" dir="ltr">
                <span class="download-ep-title">${
                  one.querySelector(".ep-name").value
                }</span>
            </h5>
            <h6 class="download-links" dir="ltr">
                <a class="link ep" href="${
                  one.querySelector(".server-link").value
                }" target="_blank">${
      one.querySelector(".server-name").value
    }</a>&nbsp;-
                <a class="link sub" href="${
                  one.querySelector(".sub-link").value
                }" target="_blank">ملفات الترجمة والخطوط</a>
            </h6>
            <h6 class="download-links" dir="ltr">
                <b><span class="ep-size disableselect">${
                  one.querySelector(".ep-size").value
                }</span></b><b class="ep-size disableselect">:حجم الحلقة</b>
            </h6>
        </div>
        `;
  }
  let htmlCode = `<div class="separator thumbnail" style="clear: both; text-align: center;"><div class="separator" style="clear: both; text-align: center;"><a href="${
    document.querySelector("#ep-img").value
  }" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="1080" data-original-width="1920" src="${
    document.querySelector("#ep-img").value
  }" /></a></div><br /><div class="separator" style="clear: both; text-align: center;"><br /></div></div>
<!--Anime Cover-->
<span><!--more--></span>
<br />
<br />
<div class="anime">
   <div class="anime-main-column">
      <div class="anime-header">
		<!--صورة الأنمي الأصلية-->
		<a class="image-post disableselect disabledrag">
			<img class="anime-cover-image" src="${animePoster}" />
		</a>
		<!--صورة الأنمي الأصلية-->
         <div class="space"></div>
         <div class="anime-info">
            <h1 class="anime-title">${animeTitleRomaji}</h1>
            <h1 class="anime-title">${animeTitleJp}</h1>
            <h2 class="anime-alternative-title">${animeAlternativeTitle}</h2>
			<!--الإسم بالعربية إذا تمت ترجمته-->
			<h2 class="anime-alternative-title">${animeTitleAr}</h2>
			<!--الإسم بالعربية إذا تمت ترجمته-->
			<!--قصة الأنمي-->
            <p class="anime-summary">${animeStory}</p>
			<!--قصة الأنمي-->

            <div class="anime-summary-footer-container">
               <footer class="anime-summary-footer">
                  <div class="anime-genres">
					  <!--رابط صفحة الأنمي-->
					  <a class="anime-genre main" href="">
						<span class="tag">${animeTitleRomaji}</span>
					  </a>
					  <!--رابط صفحة الأنمي-->
					  ${animeGenres}
				  </div>
               </footer>
            </div>
         </div>
      </div>

      <div class="anime-section">
		<!--Download Box-->
		${epLink}
		<!--Download Box-->
		<br />
		<br /><b class="anime-info-1 note disableselect">.مشاهدة ممتعة ألقاكم في الحلقة القادمة إن شاء الله</b><br />
		<br />
		<!--Smile Gif-->
		<div class="separator" style="clear: both; text-align: center;">
			<a class="image-post disableselect disabledrag">
				<img border="0" class="smile-gif" height="400" src="${
          document.querySelector("#smileGif").value
        }" width="1600" />
			</a>
		</div>
		<!--Smile Gif-->
      </div>
   </div>

<!--Side Bar-->
   <div class="anime-side-column">
		<!--طاقم العمل-->
		<section class="anime-section crew">
			<h3 class="anime-section-name">طاقم العمل</h3>
			<table class="anime-info-table">
				<tbody>
				   ${staffList}
				</tbody>
			</table>
		</section>
		<!--طاقم العمل-->
      <section class="anime-section">
         <h3 class="anime-section-name">معلومات الأنمي</h3>
         <table class="anime-info-table">
            <tbody>
               <tr class="tr">
                  <td class="anime-info-key">${animeType}</td>
                  <td class="anime-info-value">:النوع</td>
               </tr>
               <tr class="tr">
                  <td class="anime-info-key">${animeTotalEps}</td>
                  <td class="anime-info-value">:عدد الحلقات</td>
               </tr>
               <tr class="tr">
                  <td class="anime-info-key">${animeEpDuration}</td>
                  <td class="anime-info-value">:مدة الحلقة</td>
               </tr>
               <tr class="tr">
                  <td class="anime-info-key">${animeStatus}</td>
                  <td class="anime-info-value">:الحالة</td>
               </tr>
               <tr class="tr">
                  <td class="anime-info-key">${animeStartAiring}</td>
                  <td class="anime-info-value">:بداية العرض</td>
               </tr>
               <tr class="tr">
                  <td class="anime-info-key">${animeEndAiring}</td>
                  <td class="anime-info-value">:نهاية العرض</td>
               </tr>
               <tr class="tr">
                  <td class="anime-info-key">${animeSeason}</td>
                  <td class="anime-info-value">:الموسم</td>
               </tr>
               <tr class="tr">
                  <td class="anime-info-key">${animeOrigins}</td>
                  <td class="anime-info-value">:مقتبس من</td>
               </tr>
               <tr class="tr">
                  <td class="anime-info-key">${animeStudios}</td>
                  <td class="anime-info-value">:استديو الإنتاج</td>
               </tr>
               <tr class="tr">
                  <td class="anime-info-key">${animeRaiting}<br /></td>
                  <td class="anime-info-value">:التصنيف العمري</td>
               </tr>
            </tbody>
         </table>
      </section>
      <section class="anime-section">
         <h3 class="anime-section-name">التقييمات</h3>
         <table class="anime-info-table">
            <tbody>
               <tr class="tr">
                  <td class="anime-info-key">8.38</td>
                  <td class="anime-info-value">
                     <div class="anime-rating tip">:التقييم الإجمالي</div>
                  </td>
               </tr>
               <tr class="tr">
                  <td class="anime-info-key">N/A</td>
                  <td class="anime-info-value">
                     <div class="anime-rating tip">:القصة</div>
                  </td>
               </tr>
               <tr class="tr">
                  <td class="anime-info-key">N/A</td>
                  <td class="anime-info-value">
                     <div class="anime-rating tip">:الرسم</div>
                  </td>
               </tr>
               <tr class="tr">
                  <td class="anime-info-key">N/A</td>
                  <td class="anime-info-value">
                     <div class="anime-rating tip">:الموسيقى</div>
                  </td>
               </tr>
            </tbody>
         </table>
      </section>
      <section class="anime-section">
         <h3 class="anime-section-name">المصادر</h3>
         <div class="light-button-group">
            <a class="light-button" href="${animeWebsite}" rel="noopener" target="_blank">
               <i class="fas fa-external-link-alt"><span class="link">Website</span></i>
            </a>
            <a class="light-button" href="${animeTwitter}" rel="noopener" target="_blank">
               <i class="fas fa-external-link-alt"><span class="link">Twitter</span></i>
            </a>
            <a class="light-button" href="${animeMal}" rel="noopener" target="_blank">
               <i class="fas fa-external-link-alt"><span class="link">MAL</span></i>
            </a>
            <a class="light-button" href="${animeAnilist}" rel="noopener" target="_blank">
               <i class="fas fa-external-link-alt"><span class="link">AniList</span></i>
            </a>
            <a class="light-button" href="${animeAniDb}" rel="noopener" target="_blank">
               <i class="fas fa-external-link-alt"><span class="link">AniDB</span></i>
            </a>
         </div>
      </section>
	</div>
<!--Side Bar-->
</div>

<style>
b.server-title {
	background: none;
    color: #000;
    box-shadow: none;
}
#secret-gift {
    display: none;
    width: 800px;
    margin: auto;
}
.separator a > img {
    width: 850px;
    height: auto;
}
.separator a > img.banner {
    width: 550px;
    height: auto;
}
.separator a > img.banner-2 {
    width: 630px;
    height: auto;
}
img.cover-big {
	box-shadow: 1px 1px 4px 1px rgb(0 0 0 / 50%);
}
.download-box {
    margin: auto !important;
    width: 50%;
}
.anime-info-1 {
    width: 70%;
    display: block;
    margin: auto;
}
img.smile-gif {
    width: 700px !important;
    height: auto;
}

.post-body div {
    margin: initial;
}
.footer-subscribe {
    display: none;
}
.outer-wrapper .ct-wrapper {
	max-width: 91%;
}
.main-wrapper {
    width: 100%;
}
.post-outer {
    width: 100%;
    float: none;
    padding-bottom: 0;
    margin: 0;
}
.post-footer {
    width: 55%;
    margin: auto;
	display: block;
}
div#blog-comment {
    display: block;
    width: 55%;
    margin: auto;
    margin-bottom: 50px;
}

.sidebar-wrapper {
    display: none;
}
#sidebar {
    display: none;
}

h1.anime-title {
    font-size: 27px;
	margin: auto;
}
h2.anime-alternative-title {
    font-size: 18px;
}
p.anime-summary {
    font-family: 'El Messiri', sans-serif;
    direction: rtl;
    font-size: 20px;
    color: #fff;
    padding: 10px 50px 0;
}
h3.anime-section-name {
    text-align: center;
}
td.anime-info-key {
    font-family: 'El Messiri', sans-serif,'Laila', serif !important;
    font-size: 17px;
    font-weight: 600;
    color: #333;
}
td.anime-info-key.tl {
    color: #c7712b;
}
.scroll {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    height: 49px;
    width: 160px;
}
.scroll::-webkit-scrollbar-track {
    background-color: #0000;
    box-shadow: none;
}

@media screen and (min-width:300px) and (max-width:786px) {
	.scroll::-webkit-scrollbar-thumb {
		background-color: #0000;
		box-shadow: none;
	}
}

td.anime-info-value {
    font-family: 'El Messiri', sans-serif,'Laila', serif !important;
    font-size: 17px;
    font-weight: 600;
    color: #333;
}
.anime {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 100%;
    width: 100%;
}
@media (min-width: 1250px) {
	.anime {
		display: flex;
		flex-direction: row;
	}
}
.anime-main-column, .anime-info {
    display: flex;
    flex: 1;
    flex-direction: column;
	margin-top: 1rem !important;
}

@media (min-width: 800px) {
	.anime-header {
		display: flex;
		flex-direction: row;
		padding-bottom: 0;
	}
}
.anime-header {
    display: flex;
    flex-direction: row;
}
.character-image-container, .anime-image-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.anime-cover-image {
    border-radius: 3px;
	box-shadow: 1px 1px 4px 1px rgb(0 0 0 / 50%);
    filter: saturate(1);
    height: 350px;
    object-fit: cover;
    transition: all 150ms ease;
    width: 250px;
}
.space {
    height: 1.6rem;
    width: 1.6rem;
}
.anime-info {
    display: flex;
    flex: 1;
    flex-direction: column;
}

.anime-alternative-title {
	text-align: left;
}
.anime-alternative-title {
    font-size: .9em;
    font-weight: normal;
    line-height: 1.7em;
    margin-bottom: 0.5rem;
    margin-top: 0;
    text-align: center;
}

@media (min-width: 800px) {
	.anime-summary-footer-container {
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: flex-end;
		align-items: flex-end;
	}
}
@media (min-width: 800px) {
	.anime-summary-footer {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
.anime-genres, .anime-studios {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 0.4rem;
}
.anime-genre, .anime-studio {
	border-radius: 3px;
    color: #fff;
    font-size: 85%;
    margin: 0.35rem;
    padding: 0.25rem 0.75rem;
    transition: all 150ms ease;
    background: var(--b-l);
	box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 50%);
}
a.anime-genre.main {
    background: var(--b-l);
}
@media (min-width: 800px) {
	.anime-genres {
		justify-content: flex-start;
		margin-bottom: 0;
	}
}
.anime-section {
    margin-top: 1rem !important;
}
.anime-section-name {
	font-weight: 500 !important;
    font-size: 1.5em;
    line-height: 1.6em;
    margin-top: 0.6em;
    text-align: left;
    background: var(--third-bg-color);
	background: var(--b-l);
    padding: 7px 0;
    color: #000;
    font-family: 'Tajawal', sans-serif,'Laila', serif !important;
    box-shadow: 2px 3px 4px rgb(0 0 0 / 50%);
}
h3.anime-section-name > a {
    color: #fff;
	user-select: none;
    pointer-events: none;
}

@media (min-width: 1250px) {
	.anime-side-column {
		margin-left: 1.6rem;
		margin-top: 0;
		flex-basis: 300px;
	}
}
.company-sidebar, .character-sidebar, .anime-side-column {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    margin-left: 0;
    margin-top: 1rem !important;
}

.video-container {
    border-radius: 3px;
    min-height: 100px;
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    width: 100%;
	box-shadow: 1px 1px 4px 1px rgb(0 0 0 / 50%);
}
.video {
    background-color: black;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

.company-rating-info-table, .anime-info-table {
    display: flex;
    flex-direction: column;
    margin: 0;
}
table {
    margin: 0 auto;
    max-width: 1100px;
    width: 100%;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
.anime-info-table tr {
    display: flex;
    flex-direction: row;
}
.spacer, .company-rating-info-key, .anime-info-value {
    flex: 1;
}
td, input, select {
    padding: 0.5rem 1rem;
}
.anime-info-value {
    text-align: right;
}
td, input, select {
    padding: 0.5rem 1rem;
}
.light-button-group {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
}
.light-button {
    align-items: center;
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    font-size: .9rem;
    justify-content: center;
    padding: 0.5rem 1rem;
	margin: auto;
}
a.light-button {
    margin-bottom: 5px;
}
i.fas > span.s-link {
	color: #333;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Laila', serif;
}
i.fas.fa-external-link-alt {
    color: #333;
}

p.anime-summary  {
	color: var(--primary-color);
}
h1.anime-title {
	color: var(--primary-color);
}
h2.anime-alternative-title {
	color: var(--primary-color);
}
h3.anime-section-name {
	color: var(--third-color);
}
h3.anime-section-name > a {
	color: var(--primary-color);
}
i.fas.fa-external-link-alt {
	color: var(--primary-color);
}
i.fas > span.s-link {
	color: var(--primary-color);
}
td.anime-info-key {
	color: var(--primary-color);
}
td.anime-info-value {
	color: var(--primary-color);
}
.anime-genre > span {
    color: var(--third-color);
}
.episode-number > span {
    color: var(--third-color);
}
.episode-title {
    color: var(--third-color);
}
.episode {
	background: var(--third-bg-color);
}
.b1 {
    color: var(--primary-color);
    border-top: 1px solid var(--primary-border);
    width: 60%;
    margin: auto;
    padding-top: 30px;
    padding-bottom: 15px;
    background: none;
    font-weight: 500 !important;
    font-size: 30px;
	box-shadow: none;
}

a.episode:hover span.episode-title {
	color:#c7712b;
}
a.episode:hover span.episode-number {
	color:#c7712b;
}
a.light-button:hover {
	color:#c7712b;
	background: var(--b-l);
}
a.light-button:hover i.fas.fa-external-link-alt {
	color:#c7712b;
}
a.light-button:hover span.s-link {
	color:#c7712b;
}

.anime-genre:hover span.tag {
	color:#c7712b;
}
.main:hover span.tag {
    color:#c7712b;
}

@media screen and (min-width:300px) and (max-width:786px) {
	.anime {
		display: block;
	}
	.anime-main-column, .anime-info {
		display: block;
	}
	.anime-header {
		display: block;
	}
	.anime-section {
		display: block !important;
	}
	.company-sidebar, .character-sidebar, .anime-side-column {
		display: block;
	}
	.post-footer {
		width: 100%;
		display: block;
	}
	.author_description_container {
		width: 89%;
	}
	div#blog-comment {
		display: block;
		width: 100%;
	}
	h1.anime-title {
		font-size: 20px;
		line-height: normal;
	}
	h2.anime-alternative-title {
		font-size: 14px;
		line-height: normal;
	}
	h3.anime-section-name {
		font-size: 27px;
	}
	p.anime-summary {
		font-size: 17px;
		padding: 10px 0 15px;
		line-height: normal;
	}
	.anime-cover-image {
		width: 100%;
	}
	.light-button {
		border-radius: 0;
		display: inline-block;
		font-size: 13px;
		padding: 0.5rem 1rem;
	}
	.download-box {
		width: auto;
	}
	.anime-info-1 {
		width: auto;
	}
	.separator a > img {
		width: auto;
		height: auto;
	}
	td.anime-info-value {
		font-size: 15px;
	}
	td.anime-info-key {
		font-size: 15px;
	}
}
</style>

<script>
$(function() {
  $('.post-footer').insertBefore($('#blog-pager'));  
});
</script>

<script>
const mediaQuery = window.matchMedia('(min-width:315px) and (max-width: 1249px)')
if (mediaQuery.matches) {
	$('section.anime-section.crew').insertBefore($('div.anime-section'));
}
</script>`;

  document.querySelector("#code").textContent = format(htmlCode);
}

function format(html) {
  var tab = "\t";
  var result = "";
  var indent = "";

  html.split(/>\s*</).forEach(function (element) {
    if (element.match(/^\/\w/)) {
      indent = indent.substring(tab.length);
    }

    result += indent + "<" + element + ">\r\n";

    if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("input")) {
      indent += tab;
    }
  });

  return result.substring(1, result.length - 3);
}

function copyCode() {
  const code = document.querySelector("#code").textContent;
  navigator.clipboard.writeText(code);
}
