import React, { useState, lazy, Suspense } from "react";
import BottomNav from "./components/BottomNav";
import "./App.css";

// Лениво загружаем Video
const Video = lazy(() => import("./components/Video"));

function App() {
const [activeId, setActiveId] = useState(1);

const videos = [
{
id: 1,
url: process.env.PUBLIC_URL + "/videos/Book_of_dead.mp4",
channel: "@adSponsor",
description: "🎰 Book of Dead",
likes: "1.5M",
dislikes: "43K",
comments: "6.1K",
isAd: true,
link: "https://example.com/book-of-dead"
},
{
id: 2,
url: process.env.PUBLIC_URL + "/videos/first.mp4",
channel: "Канал Eins",
description: "Erstes Video – kurze Beschreibung",
likes: "2.1M",
dislikes: "123K",
comments: "13.5K",
},
{
id: 3,
url: process.env.PUBLIC_URL + "/videos/second.mp4",
channel: "@boatsdotcom",
description: "Check out the secret cabin on this Adre...",
likes: "2M",
dislikes: "101K",
comments: "7.5K",
},
{
id: 4,
url: process.env.PUBLIC_URL + "/videos/sweetbonanza.mp4",
channel: "@adSponsor2",
description: "🍬 Sweet Bonanza",
likes: "1.2M",
dislikes: "39K",
comments: "4.7K",
isAd: true,
link: "https://example.com/sweet-bonanza"
},
{
id: 5,
url: process.env.PUBLIC_URL + "/videos/third.mp4",
channel: "@luxuryhomes",
description: "Inside this $25M Mansion 🤯",
likes: "1.8M",
dislikes: "85K",
comments: "9.2K",
},
{
id: 6,
url: process.env.PUBLIC_URL + "/videos/fourth.mp4",
channel: "@foodiesunite",
description: "Making street tacos from scratch 🌮",
likes: "2.3M",
dislikes: "65K",
comments: "5.4K",
},
];

return (
<div className="app">
<Suspense fallback={<div>Загрузка видео...</div>}>
{videos.map(video => (
<Video
key={video.id}
{...video}
isActive={activeId === video.id}
onActivate={() => setActiveId(video.id)}
/>
))}
</Suspense>
<BottomNav />
</div>
);
}

export default App;   