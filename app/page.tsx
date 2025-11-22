<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RoastMyScreenshot 🔥 Get Destroyed by AI</title>
  <meta property="og:title" content="I let an AI roast my screenshot and I regret everything">
  <meta property="og:description" content="Upload anything. Get emotionally damaged for free.">
  <meta property="og:image" content="https://roastmyscreenshot.com/preview.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
    body { margin:0; font-family: 'Inter', sans-serif; background:#000; color:#fff; text-align:center; }
    .container { max-width: 620px; margin: 0 auto; padding: 60px 20px; }
    h1 { font-size: 48px; margin:0; background: linear-gradient(90deg,#ff6b6b,#feca57); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
    p { font-size:20px; opacity:0.8; }
    .upload-area { margin:40px auto; padding:60px; border:4px dashed #ff6b6b; border-radius:20px; cursor:pointer; transition:0.3s; }
    .upload-area:hover { background:#ff6b6b15; }
    .result { margin-top:40px; padding:30px; background:#111; border-radius:16px; display:none; }
    .roast { font-size:28px; line-height:1.5; margin:20px 0; }
    .share { margin:20px; }
    button { background:#ff6b6b; color:#000; border:none; padding:14px 32px; font-size:18px; font-weight:bold; border-radius:50px; cursor:pointer; margin:0 8px; }
    footer { margin-top:100px; opacity:0.5; font-size:14px; }
    canvas { display:none; }
  </style>
</head>
<body>
  <div class="container">
    <h1>RoastMyScreenshot</h1>
    <p>Upload any screenshot.<br>Our AI will hurt your feelings in public.</p>
    
    <div class="upload-area" onclick="document.getElementById('file').click()">
      <h2>📸 Drop your sad screenshot here</h2>
      <input type="file" id="file" accept="image/*" hidden>
    </div>
    
    <div class="result" id="result">
      <img id="uploaded" width="100%" style="border-radius:12px; max-height:500px; object-fit:contain;">
      <div class="roast" id="roast-text"></div>
      <div class="share">
        <button onclick="share()">Share My Pain 🔥</button>
        <button onclick="location.reload()">Roast Another</button>
      </div>
    </div>
    
    <canvas id="canvas"></canvas>
  </div>

  <footer>Made by internet degenerates • Not liable for therapy bills</footer>

  <script>
    const roastTemplates = [
      "Bro really thought this UI was acceptable in 2025 💀",
      "This is what happens when you let your cousin 'who knows computers' design it",
      "I've seen better design on a 1998 Geocities page",
      "Your color palette is screaming for help",
      "This screenshot gave me stage 4 eye cancer",
      "Even Comic Sans is embarrassed to be associated with this",
      "Congratulations, you invented a new form of visual torture",
      "This is why we can't have nice things",
      "Your desktop looks like a ransomware attack in progress",
      "I just showed this to my grandma and she blocked you",
      "This has the same vibe as a Facebook minion meme from 2014",
      "Skill issue detected",
    ];

    document.getElementById('file').addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      
      const img = new Image();
      img.onload = () => {
        document.getElementById('uploaded').src = img.src;
        document.querySelector('.upload-area').style.display = 'none';
        document.getElementById('result').style.display = 'block';
        
        // Fake loading + random roast
        setTimeout(() => {
          const roast = roastTemplates[Math.floor(Math.random() * roastTemplates.length)];
          document.getElementById('roast-text').innerText = '“' + roast + '”';
        }, 1500);
      };
      img.src = URL.createObjectURL(file);
    });

    function share() {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      const img = document.getElementById('uploaded');
      
      canvas.width = 1200;
      canvas.height = 675;
      
      // Background
      ctx.fillStyle = '#000';
      ctx.fillRect(0,0,1200,675);
      
      // Uploaded image (centered)
      const scale = Math.max(800 / img.naturalWidth, 500 / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      ctx.drawImage(img, 600 - w/2, 100, w, h);
      
      // Text overlay
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 60px Inter';
      ctx.textAlign = 'center';
      ctx.fillText('RoastMyScreenshot.com', 600, 80);
      
      ctx.font = '50px Inter';
      ctx.fillStyle = '#ff6b6b';
      ctx.fillText(document.getElementById('roast-text').innerText, 600, 620);
      
      canvas.toBlob(blob => {
        const shareData = {
          files: [new File([blob], "my-roast.png", {type: "image/png"})],
          title: "I got destroyed",
          text: "Come laugh at me"
        };
        navigator.share(shareData);
      });
    }
  </script>
  
  <!-- Analytics (replace with your own) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXX"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXX');</script>
</body>
</html>
