// WonderLife Creator Studio - Next.js 15 Starter
// This is the main layout + homepage starter

import './globals.css'

export const metadata = {
  title: 'WonderLife Creator Studio',
  description: 'Web-based streaming control center',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="bg-[#070712] text-white">
        {children}
      </body>
    </html>
  )
}

// Home Dashboard Page - app/page.tsx
export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
        WONDERLIFE CREATOR STUDIO
      </h1>
      <p className="text-lg text-gray-300">
        Willkommen im WonderLife Web-Dashboard. Wähle links eine Szene oder öffne den Editor.
      </p>
    </main>
  )
}

// Scenes Page - app/scenes/page.tsx
export default function ScenesPage() {
  return (
    <main className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Szenen</h2>
      <div className="text-gray-300">Hier werden später deine Szenen angezeigt.</div>
    </main>
  )
}

// Editor Page - app/editor/page.tsx
export default function EditorPage() {
  return (
    <main className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Overlay / Szenen Editor</h2>
      <div className="text-gray-300">Grafik-Editor kommt hier hin.</div>
    </main>
  )
}

// Live Page - app/live/page.tsx
export default function LivePage() {
  return (
    <main className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Live Ausgabe</h2>
      <div className="text-gray-300">Hier erscheint dein Live-Output.</div>
    </main>
  )
}

// Chat Page - app/chat/page.tsx
export default function ChatPage() {
  return (
    <main className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Twitch Chat</h2>
      <div className="border border-purple-700 h-[600px] rounded-lg overflow-hidden">
        <iframe
          src="https://www.twitch.tv/embed/engels811/chat?parent=localhost"
          className="w-full h-full"
          frameBorder="0"
        />
      </div>
    </main>
  )
}

// ==========================
// COMPLETE LAYOUT (E)
// Sidebar + Preview + Chat + Audio Mixer
// ==========================

// components/Sidebar.tsx
export function Sidebar() {
  return (
    <aside className="w-64 h-full bg-[#0b0b17] border-r border-purple-700 p-4">
      <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
        WL Studio
      </h2>
      <nav className="flex flex-col gap-3 text-gray-300">
        <a href="/" className="hover:text-white">Dashboard</a>
        <a href="/scenes" className="hover:text-white">Szenen</a>
        <a href="/editor" className="hover:text-white">Editor</a>
        <a href="/live" className="hover:text-white">Live</a>
        <a href="/chat" className="hover:text-white">Twitch Chat</a>
      </nav>
    </aside>
  );
}

// components/PreviewWindow.tsx
export function PreviewWindow() {
  return (
    <div className="flex-1 bg-[#0e0e1f] border border-purple-700 rounded-lg p-2">
      <img
        src="/preview.jpg"
        alt="Preview"
        className="w-full h-[500px] object-cover rounded-lg"
      />
    </div>
  );
}

// components/TwitchChat.tsx
export function TwitchChat() {
  return (
    <div className="w-80 bg-[#0b0b17] border border-purple-700 rounded-lg overflow-hidden">
      <iframe
        src="https://www.twitch.tv/embed/engels811/chat?parent=localhost"
        className="w-full h-[500px]"
      />
    </div>
  );
}

// components/AudioMixer.tsx
export function AudioMixer() {
  return (
    <div className="mt-4 bg-[#0d0d1d] border border-purple-700 rounded-lg p-4 flex gap-6">
      <div className="text-gray-300">
        <p className="mb-2">Mikrofon</p>
        <div className="w-6 h-40 bg-black rounded-md relative overflow-hidden">
          <div className="absolute bottom-0 w-full bg-green-400 h-1/3"></div>
        </div>
      </div>
      <div className="text-gray-300">
        <p className="mb-2">Desktop Audio</p>
        <div className="w-6 h-40 bg-black rounded-md relative overflow-hidden">
          <div className="absolute bottom-0 w-full bg-blue-400 h-1/4"></div>
        </div>
      </div>
    </div>
  );
}

// ==========================
// MAIN LAYOUT PAGE (Dashboard)
// ==========================

// app/page.tsx (REPLACE OLD HOMEPAGE)
import { Sidebar } from "../components/Sidebar";
import { PreviewWindow } from "../components/PreviewWindow";
import { TwitchChat } from "../components/TwitchChat";
import { AudioMixer } from "../components/AudioMixer";

export default function HomePage() {
  return (
    <main className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col p-4 gap-4">
        <div className="flex gap-4">
          {/* Preview */}
          <PreviewWindow />

          {/* Chat */}
          <TwitchChat />
        </div>

        {/* Audio */}
        <AudioMixer />
      </div>
    </main>
  );
}

