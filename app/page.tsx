<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>RoastMyScreenshot 🔥 Get Destroyed</title>
  <meta name="description" content="Upload any screenshot. Get emotionally damaged for free." />
  <meta property="og:title" content="RoastMyScreenshot 🔥" />
  <meta property="og:description" content="I let an AI roast my screenshot and I regret everything" />
  <meta property="og:image" content="https://roast-4b7vztso2-qolednoi-rgbs-projects.vercel.app/og-preview.jpg" />
  <meta property="twitter:card" content="summary_large_image" />
  <link rel="icon" href="/favicon.ico" />
  <style>
    :root { --red: #ff6b6b; --yellow: #feca57; }
    * { box-sizing: border-box; }
    body { margin:0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background:#000; color:#fff; min-height:100vh; display:grid; place-items:center; padding:20px; }
    .container { max-width: 640px; width:100%; text-align:center; }
    h1 { font-size: clamp(2.5rem, 8vw, 4rem); margin:0; background: linear-gradient(90deg, var(--red), var(--yellow)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
    p { font-size:1.25rem; opacity:0.8; }
    .upload { margin:3rem 0; padding:4rem 2rem; border:4px dashed var(--red); border-radius:24px; cursor:pointer; transition:0.3s; }
    .upload:hover { background:#ff6b6b15; }
    .result { display:none; animation: fadeIn 0.6s forwards; }
    .roast { font-size: clamp(1.8rem, 5vw, 2.5rem); line-height:1.3; padding:2rem; background:#111; border-radius:20px; border:2px solid #ff6b6b40; margin:2rem 0; }
    img { max-width:100%; border-radius:16px; box-shadow:0 20px 40px rgba(0,0,0,0.6); }
    button { background:var(--red); color:#000; border:none; padding:1rem 2rem; margin:0.5rem; font-weight:bold; font-size:1.1rem; border-radius:50px; cursor:pointer; transition:0.3s; }
    button:hover { transform:scale(1.05); }
    button:nth-child(2) { background:#333; color:#fff; }
    footer { margin-top:5rem; opacity:0.5; font-size:0.9rem; }
    @keyframes fadeIn { from {opacity:0; transform:translateY(20px);} to {opacity:1; transform:none;} }
  </style>
</head>
<body>
  <div class="container">
    <h1>RoastMyScreenshot</h1>
    <p>Upload anything.<br>Get emotionally destroyed for free.</p>

    <div class="upload" onclick="document.getElementById('file').click()">
      <h2>📸 Drop your shameful screenshot here</h2>
      <input type="file" id="file" accept="image/*" hidden />
    </div>

    <div class="result" id="result">
      <img id="img" />
      <div class="roast" id="roast"></div>
      <button onclick="share()">Share My Pain 🔥</button>
      <button onclick="location.reload()">Roast Another</button>
    </div>

    <footer>Made by degenerates • Therapy not included • <a href="https://x.com/yourhandle" style="color:#ff6b6b">@yourhandle</a></footer>
  </div>

  <script>
    const roasts = [
      "Bro really thought this UI was acceptable in 2025 💀","This is what happens when your cousin 'knows computers'",
      "I've seen better design on a 1998 Geocities page","Your color palette is screaming for help",
      "This screenshot gave me stage 4 eye cancer","Even Comic Sans is embarrassed to be associated with this",
      "Congratulations, you invented visual torture","This is why we can't have nice things",
      "Your desktop looks like a ransomware attack in progress","I showed this to my grandma and she blocked you",
      "This has 2014 Facebook minion meme energy","Skill issue detected","Your mom uses this and thinks it’s cool",
      "This is the reason dark mode exists","My eyes threw up a little","You should be arrested for this",
      "This UI committed war crimes","I need bleach for my eyeballs","Your designer has been fired… from life",
      "This is why aliens won’t talk to us","Loading this page counted as self-harm"
    ];

    document.getElementById('file').onchange = e => {
      const file = e.target.files[0];
      if (!file) return;
      const img = document.getElementById('img');
      img.onload = () => {
        document.querySelector('.upload').style.display = 'none';
        document.getElementById('result').style.display = 'block';
        setTimeout(() => {
          const roast = roasts[Math.floor(Math.random() * roasts.length)];
          document.getElementById('roast').textContent = `“${roast}”`;
        }, 1000);
      };
      img.src = URL.createObjectURL(file);
    };

    function share() {
      if (navigator.share) {
        navigator.share({
          title: "I got roasted 💀",
          text: "Come laugh at my terrible screenshot",
          url: location.href
        });
      } else {
        alert("Share this link manually: " + location.href);
      }
    }
  </script>
</body>
</html>
