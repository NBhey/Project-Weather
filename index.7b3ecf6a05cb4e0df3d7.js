(()=>{const t={"#/":"home","#/about":"about","#/contact":"contact"},o={home:()=>"<h1>Welcome to the homepage!</h1> <input>",about:()=>"<h1>About us</h1>",contact:()=>"<h1>Contact us</h1>"};function e(e){console.log(e);const n=t[e]||"home";console.log(n);const c=o[n]();document.getElementById("root").innerHTML=c}window.addEventListener("hashchange",(()=>{e(window.location.hash)})),document.querySelectorAll("a").forEach((t=>{t.addEventListener("click",(o=>{o.preventDefault();const n=t.getAttribute("href");history.pushState({},"",n),e(n)}))})),e(window.location.hash)})();