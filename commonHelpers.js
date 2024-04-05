import{i as n,S as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=document.querySelector(".form"),c=document.querySelector(".gallery");l.addEventListener("submit",m);function m(a){a.preventDefault();const s=a.target.elements.input.value.trim();if(s.length===0){n.show({message:'Please, fill in the "Search" params',backgroundColor:"#ef4040",messageColor:"#fff",position:"center"}),c.innerHTML="";return}d(s).then(r=>{r.hits.length===0&&n.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fff",position:"center"}),c.innerHTML=h(r.hits),new u(".card a",{captionsData:"alt"})}).catch(r=>console.log(r)).finally(()=>l.reset())}function d(a){const s=new URLSearchParams({key:"43250270-1f98e5ae52bb69b689c51c131",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function h(a){return a.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:t,comments:o,downloads:f})=>`<li class="card">
        <a href="${r}">
        <img src="${s}" alt="${i}" class="card-img">
        </a>
        <ul class="card-stats">
          <li>
            <h3 class="card-stats-name">Likes</h3>
            <p class="card-stats-info">${e}</p>
          </li>
          <li>
            <h3 class="card-stats-name">Views</h3>
            <p class="card-stats-info">${t}</p>
          </li>
          <li>
            <h3 class="card-stats-name">Comments</h3>
            <p class="card-stats-info">${o}</p>
          </li>
          <li>
            <h3 class="card-stats-name">Downloads</h3>
            <p class="card-stats-info">${f}</p>
          </li>
        </ul>
      </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
