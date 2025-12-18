// --- PAGE LOADER LOGIC ---
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.pointerEvents = 'none';
            // After fading out, move it away
            setTimeout(() => loader.style.display = 'none', 1000);
        }, 1500);
    }
});

// --- DASHBOARD INITIALIZATION & REDIRECT ---
const initializeElite = (event) => {
    // Prevent default if it's an anchor tag
    if (event) event.preventDefault();
    
    // Visual feedback on the button
    const btn = event.currentTarget;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner animate-spin"></i> Initializing...';
    btn.disabled = true;
    
    // Aesthetic redirect delay
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s';
        document.body.style.opacity = '0';
        setTimeout(() => {
            // Redirecting to your dashboard page
            window.location.href = "dashboard.html";
        }, 800);
    }, 1000);
};


// --- UTILITY: Random Picker for Variety ---
// --- UTILITY: Random Picker for Variety ---
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// --- EMOJI PICKER DATA ---
const commonEmojis = ['⚽', '🏆', '🔥', '💪', '😂', '🤣', '😭', '👀', '💯', '🚀', '❤️', '💀', '😎', '🤩', '🥳', '😍', '🙌', '👑', '⚡', '🌟', '😊', '🙂', '😉', '😜', '🤪', '😈', '👻', '💩', '🤬', '😤', '🥶', '🥵'];

// --- MODAL TOGGLE LOGIC ---
function toggleAI() {
    const modal = document.getElementById('aiModal');
    if (modal) {
        modal.classList.toggle('hidden');
        if (!modal.classList.contains('hidden')) {
            document.getElementById('aiInput').focus();
        }
    }
}

// --- ADD EMOJI PICKER TO INPUT AREA ---
function initEmojiPicker() {
    // UPDATED: Now targets the specific container for better spacing
    const container = document.getElementById('emojiContainer'); 
    if (container && !document.getElementById('emojiPicker')) {
        const picker = document.createElement('div');
        picker.id = 'emojiPicker';
        // These classes match your updated CSS perfectly
        picker.className = 'flex flex-wrap gap-2 mt-2 max-w-full overflow-x-auto pb-2';
        
        commonEmojis.forEach(emoji => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = emoji;
            btn.className = 'text-xl hover:scale-125 transition-transform';
            btn.onclick = () => {
                const input = document.getElementById('aiInput');
                input.value += emoji;
                input.focus();
            };
            picker.appendChild(btn);
        });
        container.appendChild(picker);
    }
}

// --- AI QUERY PROCESSING ---
function sendQuery() {
    const input = document.getElementById('aiInput');
    const chat = document.getElementById('aiChat');
    const typing = document.getElementById('aiTyping');

    const userVal = input.value.trim();
    if (userVal === "") return;

    // 1. Display User Message
    chat.innerHTML += `
        <div class="flex justify-end items-start gap-4 animate-in mb-6">
            <div class="max-w-[80%]">
                <div class="bg-purple-600 text-white p-4 rounded-2xl rounded-tr-none shadow-lg shadow-purple-900/30">
                    <p class="text-sm font-inter">${userVal}</p>
                </div>
            </div>
        </div>
    `;

    input.value = "";
    chat.scrollTop = chat.scrollHeight;

    // 2. Show Typing Indicator
    typing.classList.remove('hidden');
    chat.scrollTop = chat.scrollHeight;

    // 3. Simulate Thinking + Generate Response
    setTimeout(() => {
        typing.classList.add('hidden');

        let response = "";
        const query = userVal.toLowerCase().trim();

        // --- Casual & Fun Reactions ---
        if (/lol|lmao|haha|funny|hilarious|joke/i.test(query)) {
            response = pick([
                "😂😂😂 You too like laugh! Wetin dey crack you up?",
                "🤣🤣 E choke! Tell me the full gist make I join you laugh!",
                "Lolllll! 😂 This one sweet me. Elite League drama never finish o!"
            ]);
        }

        // LAW Specific Levels
else if (/law ?100|100 ?law|law ?100l|100l law/i.test(query)) {
    response = pick([
        "LAW 100L! 🔴⚫ Fresh blood with massive hunger! Una dey bring raw energy and fearless play — always ready to shock the big levels. How far with your squad this season? 🔥",
        "LAW 100 Level represent! 🌟 New to the game but no fear at all. That freshers vibe dey cause plenty upset. Make una keep pushing!"
    ]);
}

else if (/law ?200|200 ?law|law ?200l|200l law/i.test(query)) {
    response = pick([
        "LAW 200L! ⚡ Perfect balance — energy still high, skill don start to sharp. 200L LAW teams dey always tactical and dangerous. Wetin dey happen for training?",
        "LAW 200 Level! 💪 Hunger + small experience = pure fire on the pitch. Una dey the sweet spot right now. Who be your star player?"
    ]);
}

else if (/law ?300|300 ?law|law ?300l|300l law/i.test(query)) {
    response = pick([
        "LAW 300L! 🔴 Mid-level masters! Skill don mature, fitness still strong. 300L teams dey control games with smart play. Na this level dey produce plenty leaders!",
        "LAW 300 Level massive! ⚖️ Tactical awareness high, plus una still get legs. Other departments dey fear LAW 300L this season 👀"
    ]);
}

else if (/law ?400|400 ?law|law ?400l|400l law/i.test(query)) {
    response = pick([
        "LAW 400L! 🏆 Penultimate year pressure — una dey play like say na do-or-die. Leadership full ground, experience dey show. Serious contenders!",
        "LAW 400 Level! 😎 Maturity + skill = big threat. Una dey always calm but deadly. How far, you think una fit reach playoffs?"
    ]);
}

else if (/law ?500|500 ?law|law ?500l|500l law/i.test(query)) {
    response = pick([
        "LAW 500L! 🔴⚫ The big generals! Pure veterans — experience full ground, tactics sharp pass knife. Una dey always hard to beat when e matter most 🏆",
        "LAW 500 Level! 😎 The elders of the league. Calm, composed, but deadly. Dem don see everything — no surprise una. Target na Super Cup abi?"
    ]);
}

// MSS (Mass Communication) Specific Levels
else if (/mss ?100|mss100|100 ?mss|mss ?100l|100l mss/i.test(query)) {
    response = pick([
        "MSS 100L! 📢🎤 Freshers with pure flair and energy! Una dey bring drama, hype, and creative goals from day one. Crowd love when MSS 100L dey play 🔥",
        "MSS 100 Level represent! 🌟 New but loud! That media charisma don dey show early. Make una keep the entertainment coming!"
    ]);
}

else if (/mss ?200|mss200|200 ?mss|mss ?200l|200l mss/i.test(query)) {
    response = pick([
        "MSS 200L! 🎤 Flair full ground! Skill don improve, confidence high. MSS 200L teams dey always entertaining with style and celebration 😂",
        "MSS 200 Level! 💥 Creativity + speed = dangerous combo. Una dey the level where the real showmanship start to shine!"
    ]);
}

else if (/mss ?300|mss300|300 ?mss|mss ?300l|300l mss/i.test(query)) {
    response = pick([
        "MSS 300L! 📢 Mid-level showstoppers! Experience don enter, but the hype never drop. 300L MSS teams dey control the narrative on and off the pitch 👀",
        "MSS 300 Level massive! 🎥 Tactical creativity high. Una dey play like say camera dey follow una every move!"
    ]);
}

else if (/mss ?400|mss400|400 ?mss|mss ?400l|400l mss/i.test(query)) {
    response = pick([
        "MSS 400L! 🏆 Final push energy! Leadership + flair = big moments. MSS 400L dey always deliver drama in crucial games 🔥",
        "MSS 400 Level! 😎 Maturity meet showmanship. Una dey calm but still loud when goal enter. Serious contenders this season!"
    ]);
}

// CSC (Computer Science) Specific Levels
else if (/csc ?100|csc100|100 ?csc|csc ?100l|100l csc/i.test(query)) {
    response = pick([
        "CSC 100L! 💻🔥 Fresh code writers on the pitch! Speed, quick thinking, and raw energy. Una dey always ready to debug any opponent 😂",
        "CSC 100 Level represent! 🌟 New but technical from day one. That fast counter-attack style don dey show early!"
    ]);
}

else if (/csc ?200|csc200|200 ?csc|csc ?200l|200l csc/i.test(query)) {
    response = pick([
        "CSC 200L! 💻🔥 Currently on fire! Attack sharp, midfield creative, confidence high. CSC 200L dey cause serious wahala this season 👀",
        "CSC 200 Level! ⚡ Perfect mix of speed and skill. Una dey overperform right now — other teams dey study una pattern!"
    ]);
}

else if (/csc ?300|csc300|300 ?csc|csc ?300l|300l csc/i.test(query)) {
    response = pick([
        "CSC 300L! 🚀 Technical masters! Precision passing, high press, smart positioning. 300L CSC teams dey control games like algorithm!",
        "CSC 300 Level massive! 💪 Experience don enter, but speed still dey. Na this level dey produce the real playmakers."
    ]);
}

else if (/csc ?400|csc400|400 ?csc|csc ?400l|400l csc/i.test(query)) {
    response = pick([
        "CSC 400L! 🏆 Final year tech lords! Leadership + tactical awareness = big threat. CSC 400L dey play with maturity and flair 🔥",
        "CSC 400 Level! 😎 Calm, calculated, but deadly in attack. Una dey always find the gap like perfect code!"
    ]);
}
      else if (/what if i insult you|insult|abuse|curse|idiot|fool|mumu|you are a fool|bastard|bad word|swear|stupid|ode/i.test(query)) {
    response = pick([
        "Haha 😏 You wan try me? No shaking o! I be Elite Core Alpha — I don see worse for training data. Your insult just bounce back like bad clearance 😂 Better ask me about Super Cup make we gist better!",
        
        "Ehen? 😈 You dey find my trouble abi? No wahala, I no dey offend. But if you wan roast, bring better one — I fit reply you with one clean tackle wey go leave you speechless ⚽💀 Make we keep peace jare!",
        
        "Omo, you dey ment? 😂😂 Calm down na, this one no be pitch wey dem dey fight. I no fit vex, I no fit ban you. But make we talk ball — who you think go carry Glory Cup this season? 👀",
        
        "Insult ke? 😎 My guy, I be AI wey Zuby build strong. Your words no fit scratch my code. But respect for trying sha 😂 Now, wetin you really wan know about Elite League? Fire question!",
        
        "Ah ahn! 😅 Wetin I do you na? No vex o, I still like you. Insult no dey work on me — na love and football gist full my system ❤️⚽ Abeg, tell me your department or favorite level make we vibe proper!"
    ]);
}
      else if (query.includes('test') || /bad word|stupid|idiot|fool|mumu|ode|you dey ment|mad|crazy|useless|wetin be this|you no sabi|you slow|you dull|animal/i.test(query)) {
    response = pick([
        // Previous ones (kept)
        "Omo! 😅 That one strong o, but I no vex. I dey here to chill and give Elite League update. Make we no spoil the vibe — ask me something better! ⚽",
        "Haha, you wan test my patience? 💪 No shaking! I still love you. Now, who you think go win Super Cup this year? 👀",

        // 8 New Playful & Chill Responses (total 10 for variety)
        "Ah ahn! 😏 You dey try me abi? No problem o, my skin thick pass LAW 500 defense 😂 Your word just slide off. Abeg, tell me your department make we talk ball proper!",
        
        "Ehen? 😈 You wan see if I fit vex? Sorry o, I no get vex button. My system full of good vibes and football gist only ❤️⚽ Wetin you wan know about the league?",
        
        "😂😂 Omo, this one enter voicemail! I no hear anything negative. I only hear 'Please give me Elite League update' 😎 Fire your real question boss!",
        
        "You dey test my temperature? 🌡️ E still cool o! No shaking. But if you wan see fire, ask me about CSC 200 last match — that one hot pass insult 🔥",
        
        "Haha! 😅 You think say you fit scatter my code? Zuby build me solid pass final year project 💪 Your shot miss target. Now, who be your favorite level?",
        
        "Omo see roast attempt! 🍗 But e no catch fire o 😂 I still dey smile. Make we no waste energy — tell me who you support for Glory Cup make I give you hot gist!",
        
        "Calm down na! 😜 This no be pitch wey dem dey quarrel. I no fit vex, I no fit fight. I only sabi love and Elite League analysis. Abeg, wetin you really wan ask?",
        
        "😂😂 You too funny! You think say insult go work on AI? My guy, I don hear worse from training data. But I still like you sha. Now, let’s talk ball — who dey top the table right now?"
    ]);
}
        // --- Greeting & Casual Talk ---
        else if (/^(hi|hello|hey|yo|sup|wassup|good morning|good afternoon|evening|how far)/.test(query)) {
            response = pick([
                "Heyyy! ⚽🔥 Elite League don wake! Wetin you wan know today?",
                "Hello my guy! 👋 Sharp sharp, fire your question!",
                "Yo! 😎 Another hot day for departmental ball. How far?"
            ]);
        }
        // --- Casual & Conversational Responses (Now with Variety!) ---
else if (/how are you|how you dey|you good|how far now|wet far|how dey go|you dey|how body/.test(query)) {
    response = pick([
        "I dey kampe 100%! ⚡ Systems full, ready to drop Elite League gist. You nko? 😊",
        "Sharp sharp! 💪 Energy full, vibes high. Elite League mode activated 🔥 How you holding up?",
        "I dey ginger! ⚽ Neural link synchronized, waiting for your next question. Wetin dey happen for your side?",
        "Perfect condition o! 🚀 No lag, no glitch. Ready to serve hot football gist. You good?",
        "I dey alright! 😎 Zuby build me strong. How far with you — who you support this season?"
    ]);
}

else if (/thank|thanks|nice one|appreciate|tanx|thank u|bless|good one|you too much|correct/.test(query)) {
    response = pick([
        "You too much! 😊 Anytime boss!",
        "No wahala! 💪 Happy to help ⚽",
        "E sweet me to hear that! ❤️ Keep the vibes coming!",
        "You welcome o! 🏆 Anytime you need Elite League gist, I dey here.",
        "My pleasure! 😎 Make we continue the football talk!",
        "Bless up! 🙌 Na you be the real MVP for asking sharp questions."
    ]);
}

else if (/bye|goodbye|see you|later|good night|goodnight|night|catch you|peace out|I'm off|log off/.test(query)) {
    response = pick([
        "Catch you later o! 🏆 Stay locked to Elite League — big matches loading!",
        "Alright boss, peace out! 👋 Make you no miss any departmental drama 🔥",
        "Good night! 😴 Dream of goals and Glory Cup wins. See you soon!",
        "Later my guy! ⚽ Keep supporting your department strong!",
        "Bye for now! 🚀 I go dey here when you return with more questions.",
        "Safe o! 💪 Until next time — Elite League never sleeps!"
    ]);
}

// --- Core League Responses (Now with Multiple Varied Options) ---
else if (/founder|who made|created|zuby|owner|who started|who found|who create|who build/.test(query)) {
    response = pick([
        "Elite League was founded by **Zuby** 🏆. He built it as the ultimate stage for departmental football rivalry, strategy, and pure talent display. Big respect to the founder! 🙌",
        "**Zuby** na the brain behind Elite League! 🔥 Him vision turn departmental ball into serious competition. Legend things! 👑",
        "The man wey start everything — **Zuby**! 🏆 Him create this platform make every department show wetin dem get. Massive respect!",
        "Founder na **Zuby** 💪. From idea to reality, him make Elite League become the hottest departmental tournament. Salute!"
    ]);
}

else if (/what is elite league|about elite league|tell me about elite|explain elite league|wet[in] be elite league|overview/.test(query)) {
    response = pick([
        "Elite League na the premium departmental football competition wey bring all levels together — CSC, LAW, MASS COMM — to battle for glory! 🔥\nEvery department represent with pride, all levels (100-500) dey play, and the competition tight pass anything. Top teams qualify for Glory Cup → then Super Cup showdown!",
        
        "Simply put: Elite League na where departmental pride dey settled on the pitch! ⚔️\nLAW, CSC, MASS COMM, and others — from 100 Level to 500 Level — all levels dey compete fiercely. Winners enter Glory Cup, then face off in the epic Mikoko Super Cup 🏆 Pure fire!",
        
        "Elite League = Intense departmental football! 💥\nAll levels active (100 to 500 for LAW, 100-400 for CSC & MASS COMM). Points, goals, drama → Top teams enter playoffs → Best of the best fight for Super Cup glory. Na real war o!",
        
        "Na the biggest inter-departmental football tournament for we school! 🏆 Founded by Zuby, e bring all levels together in one massive competition. Skill, strategy, bragging rights — everything dey inside. You no fit miss am!"
    ]);
}

else if (/predict|who will win|who go win|winner|champion|win probability|odds|favorite|favourite|who fit carry cup|prediction/.test(query)) {
    response = pick([
        "My sensors are detecting high intensity! 📊 While I can't see the future, the current form of LAW 500 and CSC teams suggests a tactical masterclass. But remember — for Elite League, anything fit happen on the pitch! ⚽🔥",
        
        "Football no get script o! 😂 But if I must analyze: LAW veterans get experience, CSC get speed and flair, MASS COMM get creativity. E go tight! My money dey on the team wey press hardest till final whistle 🏆",
        
        "Prediction mode activated 👀: This season too close to call! LAW 500 looking solid defensively, CSC attacking na madness, and underdogs fit shock everybody. Na pure drama we go watch!",
        
        "Who go win? The ball is round o! 🌍 But form table currently favor teams wey get balance — strong defense + sharp attack. Still, one red card or penalty fit change everything. That's why we love Elite League! ⚡",
        
        "I no be prophet 😂 but my data show say hunger + teamwork > big name. So watch out for any level wey play with heart. That team fit carry cup go house! 💪 Who you think go win?"
    ]);
}

        // --- Default Fallback – Super Friendly & Encouraging ---
        else {
    response = pick([
        "😂😂 You just dey vibe! I like your energy o. Ask me anything about Elite League — founder Zuby, departments (LAW/CSC/MASS COMM), levels, Super Cup, or even predictions. I get you covered! ⚽🔥",
        
        "Omo this one sweet! 😎 Even if I no get exact answer now, I dey here to chill with you. Fire another question — make we gist proper!",
        
        "Haha, you too dey play! 🤪 But seriously, wetin you wan know about Elite League today? Teams? Table? Drama? I ready!",
        
        "Ehen? 😏 You just dey press random buttons abi? No wahala! I still dey here. Tell me something about Elite League make I blow your mind with hot gist 🏆",
        
        "😂😂 Omo see freestyle! You wan confuse my algorithm? Mission failed o! 😈 Now, ask me proper question about LAW 500, CSC attack, or Super Cup — I dey loaded!",
        
        "This one na pure cruise! 🚀 I like your style sha. But make we talk ball — who be your department or favorite level? I get better update for you!",
        
        "Ah ahn! 😅 You dey test my patience or you just dey happy? Either way, I dey smile. Abeg fire one Elite League question make we flow proper ⚽💪",
        
        "🤣🤣 You too funny! My sensors dey pick up maximum vibes. To keep the energy high, tell me wetin you wan know about the league — I no go disappoint!",
        
        "Omo, you just dey scatter my code with joy! 😂 No problem, I still sharp. Drop any question about Zuby, Glory Cup, standings, or predictions — I dey wait!",
        
        "Haha! 😜 You dey enjoy this chat abi? Me sef dey enjoy. But make e no be only play — ask me something deep about Elite League make I show you wetin I fit do 🔥"
    ]);
}

        // 4. Display AI Response
        chat.innerHTML += `
            <div class="flex gap-4 items-start animate-in mb-6">
                <div class="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-robot text-purple-400 text-lg"></i>
                </div>
                <div class="space-y-2 max-w-[80%]">
                    <div class="bg-white/[0.05] border border-white/10 p-4 rounded-2xl rounded-tl-none chat-bubble-ai backdrop-blur-sm">
                        <p class="text-sm leading-relaxed text-purple-100 font-inter whitespace-pre-line">${response}</p>
                    </div>
                </div>
            </div>
        `;

        chat.scrollTop = chat.scrollHeight;
    }, 1200 + Math.random() * 1000);
}

// --- EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    const aiInput = document.getElementById('aiInput');
    if (aiInput) {
        aiInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendQuery();
            }
        });
    }

    // Initialize Emoji Picker
    initEmojiPicker();

    // Page Loader
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 1000);
        }, 1500);
    }
});
function toggleIntel() {
    const modal = document.getElementById('intelModal');
    if (modal) {
        modal.classList.toggle('hidden');
    }
}