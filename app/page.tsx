import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

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
  "This has the same vibe as a 2014 Facebook minion meme",
  "Skill issue detected",
  "Your mom uses this and thinks it’s cool",
  "This is the reason dark mode exists",
  "My eyes threw up a little",
  "You should be arrested for this",
  "This UI committed war crimes",
  "I need bleach for my eyeballs",
  "Your designer has been fired… from life",
  "This is why aliens won’t talk to us",
];

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [roast, setRoast] = useState<string>('');

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
      setTimeout(() => {
        setRoast(roastTemplates[Math.floor(Math.random() * roastTemplates.length)]);
      }, 1200);
    };
    reader.readAsDataURL(file);
  };

  const share = () => {
    if (!image) return;
    const link = document.createElement('a');
    link.href = image;
    link.download = 'my-roast.png';
    link.click();
  };

  return (
    <main className={`${inter.className} min-h-screen bg-black text-white flex flex-col items-center justify-center p-6`}>
      <div className="max-w-2xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            RoastMyScreenshot
          </h1>
          <p className="text-xl opacity-80 mt-4">Upload any screenshot.<br />Get emotionally destroyed for free.</p>
        </div>

        {!image ? (
          <label className="block cursor-pointer">
            <div className="border-4 border-dashed border-red-500 rounded-2xl p-16 hover:bg-red-500/10 transition">
              <h2 className="text-3xl">📸 Drop your shameful screenshot here</h2>
              <p className="text-gray-400 mt-2">Click or drag & drop</p>
            </div>
            <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
          </label>
        ) : (
          <div className="space-y-8 animate-fadeIn">
            <img src={image} alt="Uploaded" className="w-full rounded-xl shadow-2xl max-h-screen" />
            {roast && (
              <div className="bg-gray-900 rounded-2xl p-8 border border-red-500/30">
                <p className="text-3xl md:text-4xl leading-tight font-bold text-red-400">“{roast}”</p>
              </div>
            )}
            <div className="flex gap-4 justify-center">
              <button onClick={share} className="bg-red-500 hover:bg-red-600 text-black font-bold py-4 px-8 rounded-full text-lg transition">
                Share My Pain 🔥
              </button>
              <button onClick={() => location.reload()} className="bg-gray-800 hover:bg-gray-700 font-bold py-4 px-8 rounded-full text-lg transition">
                Roast Another
              </button>
            </div>
          </div>
        )}

        <footer className="text-center text-gray-500 text-sm mt-20">
          Made by internet degenerates • Not liable for therapy bills •{' '}
          <a href="https://x.com/yourhandle" className="underline">@yourhandle</a>
        </footer>
      </div>
    </main>
  );
}
