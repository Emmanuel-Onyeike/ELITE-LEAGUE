
/**
 * MIKOKO LEAGUE - Command Center Core Script
 * Single-Engine Mobile & Desktop Integration
 */

// 1. SELECTORS
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const mainDisplay = document.getElementById('mainDisplay'); 
const greetingElement = document.getElementById('greeting');
const viewTitle = document.getElementById('viewTitle');

// 2. DYNAMIC GREETING LOGIC
function setGreeting() {
    const hour = new Date().getHours();
    let welcome;

    if (hour >= 5 && hour < 12) welcome = "Good morning";
    else if (hour >= 12 && hour < 17) welcome = "Good afternoon";
    else if (hour >= 17 && hour < 21) welcome = "Good evening";
    else welcome = "Good night";

    if (greetingElement) {
        greetingElement.innerText = `${welcome}, User`;
    }
}

// 3. MOBILE MENU TOGGLES (single sidebar)
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full'); // Slide in/out
        overlay.classList.toggle('hidden');           // Show/hide overlay
    });
}

if (overlay) {
    overlay.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    });
}


// 4. CONTENT REPOSITORY
const contentData = {
   'Overview': `
    <div class="space-y-10 animate-in pb-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
            <div class="space-y-1">
                <div class="flex items-center gap-3">
                    <div class="w-2 h-8 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
                    <h3 class="text-4xl font-black italic uppercase tracking-tighter text-white">Command Center</h3>
                </div>
                <p class="text-[10px] text-blue-500 font-bold uppercase tracking-[0.5em] ml-5"> // Season 01 Operational</p>
            </div>
            
            <div class="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-2xl">
                <div class="text-right px-4 border-r border-white/10">
                    <p class="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Network Status</p>
                    <p class="text-xs font-mono text-blue-400">ENCRYPTED</p>
                </div>
                <div class="text-right pr-2">
                    <p class="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Global Time</p>
                <p id="digitalClock" class="text-xs font-mono text-white">00:00:00</p>
                </div>
            </div>
        </div>

        <div class="relative overflow-hidden md:rounded-[4rem] border-y md:border border-blue-500/10 bg-[#020617]">
            <div class="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full"></div>
            <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-600/10 blur-[120px] rounded-full"></div>

            <div class="relative z-10 py-16 px-6 flex flex-col items-center">
                <div class="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
                    
                    <div class="flex flex-col items-center group order-1">
                        <div class="relative mb-6 transform group-hover:scale-110 transition-transform duration-500">
                            <div class="absolute -inset-8 bg-blue-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div class="relative w-32 h-32 md:w-44 md:h-44 bg-gradient-to-tr from-zinc-900 to-black rounded-[3rem] border border-blue-500/20 flex items-center justify-center p-6 shadow-2xl">
                                <img src="CSC 300.jpeg" alt="CSC" class="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                            </div>
                            <div class="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center border-4 border-[#020617]">
                                <i class="fas fa-code text-white text-xs"></i>
                            </div>
                        </div>
                        <h4 class="text-3xl font-black text-white italic tracking-tighter uppercase">CSC 300</h4>
                        <span class="text-[10px] text-blue-500 font-black uppercase tracking-[0.3em] mt-2">The Technicians</span>
                    </div>

                    <div class="flex flex-row md:flex-col items-center gap-6 order-2">
                        <div class="hidden md:block h-20 w-[1px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
                        <div class="bg-white text-black px-6 py-2 rounded-full font-black text-sm italic shadow-[0_0_30px_rgba(255,255,255,0.1)]">VS</div>
                        <div class="hidden md:block h-20 w-[1px] bg-gradient-to-t from-transparent via-blue-500/50 to-transparent"></div>
                    </div>

                    <div class="flex flex-col items-center group order-3">
                        <div class="relative mb-6 transform group-hover:scale-110 transition-transform duration-500">
                            <div class="absolute -inset-8 bg-cyan-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div class="relative w-32 h-32 md:w-44 md:h-44 bg-gradient-to-tr from-zinc-900 to-black rounded-[3rem] border border-cyan-500/20 flex items-center justify-center p-6 shadow-2xl">
                                <img src="LAW 500.jpeg" alt="LAW" class="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                            </div>
                            <div class="absolute -bottom-2 -left-2 w-10 h-10 bg-cyan-500 rounded-2xl flex items-center justify-center border-4 border-[#020617]">
                                <i class="fas fa-gavel text-white text-xs"></i>
                            </div>
                        </div>
                        <h4 class="text-3xl font-black text-white italic tracking-tighter uppercase">LAW 300</h4>
                        <span class="text-[10px] text-cyan-400 font-black uppercase tracking-[0.3em] mt-2">The Arbitrators</span>
                    </div>

                </div>
<div class="mt-16 flex flex-col items-center gap-4">
                    <p class="text-[10px] text-gray-500 font-black uppercase tracking-[0.5em] animate-pulse">Transmission Active: Mid-Season Resumption</p>
                    <button onclick="updateView('Live')" class="group relative px-10 py-4 bg-transparent border border-blue-500/30 overflow-hidden rounded-2xl transition-all">
                        <div class="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span class="relative z-10 text-white font-black uppercase text-[10px] tracking-widest group-hover:text-white">Enter Arena Intel</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
            <div class="lg:col-span-2 space-y-6">
                <div class="flex items-center justify-between">
                    <h5 class="text-xs font-black uppercase tracking-widest text-white italic">Tactical Intel</h5>
                    <div class="h-[1px] flex-1 bg-white/5 ml-4"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.04] transition-all">
                        <i class="fas fa-microchip text-blue-500 mb-4 text-xl"></i>
                        <h6 class="text-white font-bold uppercase italic text-sm mb-2">Resumption Protocol</h6>
                        <p class="text-[11px] text-gray-500 uppercase leading-relaxed font-medium">Elite League resumes after the break. All tactical nodes are being recalibrated for the second half.</p>
                    </div>
                    <div class="p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.04] transition-all">
                        <i class="fas fa-bolt text-cyan-500 mb-4 text-xl"></i>
                        <h6 class="text-white font-bold uppercase italic text-sm mb-2">2025 Kickoff</h6>
                        <p class="text-[11px] text-gray-500 uppercase leading-relaxed font-medium">Anticipate as we kick off 2025 half-way season in style. Pure performance, zero latency.</p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                 <h5 class="text-xs font-black uppercase tracking-widest text-white italic">System Logs</h5>
                 <div class="bg-blue-600/5 border border-blue-500/10 rounded-[2.5rem] p-8 h-[320px] overflow-y-auto custom-scroll space-y-8 shadow-inner">
                    <div class="space-y-2 border-l-2 border-blue-600 pl-4 py-1">
                        <div class="flex items-center justify-between">
                            <span class="text-[9px] text-blue-500 font-black uppercase tracking-widest">Update</span>
                            <span class="text-[8px] text-gray-600 font-mono">19.12.25</span>
                        </div>
                        <h6 class="text-white font-bold text-xs uppercase italic">Mid-Season Resumption</h6>
                        <p class="text-[10px] text-gray-500 uppercase font-medium leading-relaxed">Elite League is officially returning. Ensure team lineups are synced with the core terminal.</p>
                    </div>

                    <div class="space-y-2 border-l-2 border-white/10 pl-4 py-1">
                        <div class="flex items-center justify-between">
                            <span class="text-[9px] text-gray-600 font-black uppercase tracking-widest">Alert</span>
                            <span class="text-[8px] text-gray-600 font-mono">2025 Kickoff</span>
                        </div>
                        <h6 class="text-gray-300 font-bold text-xs uppercase italic">Season Evolution</h6>
                        <p class="text-[10px] text-gray-600 uppercase font-medium">Preparing for the half-way season kickoff. Expect high-intensity matchups across the board.</p>
                    </div>

                    <div class="space-y-2 border-l-2 border-white/10 pl-4 py-1 opacity-60">
                         <div class="flex items-center justify-between">
                            <span class="text-[9px] text-gray-700 font-black uppercase tracking-widest">Status</span>
                            <span class="text-[8px] text-gray-700 font-mono">System</span>
                        </div>
                        <h6 class="text-gray-500 font-bold text-xs uppercase">Terminal Operational</h6>
                        <p class="text-[10px] text-gray-700 uppercase font-medium">The Elite Arena interface is now free for all registered team nodes. No subscription required.</p>
                    </div>
                 </div>
            </div>
        </div>
    </div>`,



'Standings': `
    <div class="space-y-8 animate-in pb-20 px-4">
        <div class="flex flex-col gap-4">
            <div class="flex items-center gap-3">
                <div class="w-2 h-8 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
                <h3 class="text-3xl font-black italic uppercase tracking-tighter text-white">League Circuit</h3>
            </div>
            <div class="flex flex-wrap items-center gap-3">
                <span class="px-3 py-1 bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[9px] font-black uppercase tracking-widest rounded-lg">Live Data Feed</span>
                <span class="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-[9px] font-black uppercase tracking-widest rounded-lg">12 Units Synced</span>
            </div>
        </div>

        <div class="bg-[#030816] border border-blue-500/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div class="overflow-x-auto custom-scrollbar">
                <table class="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr class="bg-blue-600/5 text-blue-400 border-b border-blue-500/10 uppercase text-[9px] tracking-[0.2em] font-black">
                            <th class="py-5 pl-8">Rank</th>
                            <th class="py-5">Unit Name</th>
                            <th class="py-5 text-center">MP</th>
                            <th class="py-5 text-center">W</th>
                            <th class="py-5 text-center">D</th>
                            <th class="py-5 text-center">L</th>
                            <th class="py-5 text-center">GF</th>
                            <th class="py-5 text-center">GA</th>
                            <th class="py-5 text-center">GD</th>
                            <th class="py-5 text-right pr-8 text-white">PTS</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-300 font-bold divide-y divide-white/[0.03]">
                        ${[
                            { rank: 1, team: "MSS-200", mp: 3, w: 2, d: 1, l: 0, gf: 18, ga: 11, gd: "+7", pts: 7, crown: true },
                            { rank: 2, team: "CSC-200", mp: 5, w: 2, d: 1, l: 2, gf: 15, ga: 21, gd: "-6", pts: 7 },
                            { rank: 3, team: "CSC-400", mp: 2, w: 2, d: 0, l: 0, gf: 12, ga: 6, gd: "+6", pts: 6 },
                            { rank: 4, team: "CSC-100", mp: 5, w: 2, d: 0, l: 3, gf: 16, ga: 17, gd: "-1", pts: 6 },
                            { rank: 5, team: "NUR-200", mp: 2, w: 1, d: 1, l: 0, gf: 9, ga: 6, gd: "+3", pts: 4 },
                            { rank: 6, team: "LAW-200", mp: 2, w: 1, d: 1, l: 0, gf: 12, ga: 11, gd: "+1", pts: 4 },
                            { rank: 7, team: "LAW-100", mp: 2, w: 1, d: 0, l: 1, gf: 11, ga: 10, gd: "+1", pts: 3 },
                            { rank: 8, team: "MSS-100", mp: 3, w: 1, d: 0, l: 2, gf: 7, ga: 9, gd: "-2", pts: 3 },
                            { rank: 9, team: "MSS-300", mp: 1, w: 0, d: 0, l: 1, gf: 5, ga: 7, gd: "-2", pts: 0 },
                            { rank: 10, team: "MED-200", mp: 1, w: 0, d: 0, l: 1, gf: 4, ga: 7, gd: "-3", pts: 0 },
                            { rank: 11, team: "CSC-300", mp: 1, w: 0, d: 0, l: 1, gf: 1, ga: 5, gd: "-4", pts: 0 },
                            { rank: 12, team: "MED-500", mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: "0", pts: 0 }
                        ].map((data) => `
                            <tr class="hover:bg-blue-600/[0.03] transition-colors group">
                                <td class="py-5 pl-8">
                                    <span class="text-xs font-mono ${data.rank <= 4 ? 'text-blue-500' : 'text-gray-600'}">${data.rank.toString().padStart(2, '0')}</span>
                                </td>
                                <td class="py-5">
                                    <div class="flex items-center gap-3">
                                        <div class="w-8 h-8 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center text-[8px] text-gray-500 italic group-hover:border-blue-500/50 transition-all uppercase">
                                            ${data.team.split('-')[0]}
                                        </div>
                                        <span class="text-sm font-black tracking-tighter text-white uppercase italic flex items-center gap-2">
                                            ${data.team}
                                            ${data.crown ? '<i class="fas fa-crown text-[10px] text-yellow-500"></i>' : ''}
                                        </span>
                                    </div>
                                </td>
                                <td class="py-5 text-center font-mono text-xs text-gray-400">${data.mp}</td>
                                <td class="py-5 text-center font-mono text-xs text-blue-400">${data.w}</td>
                                <td class="py-5 text-center font-mono text-xs text-gray-500">${data.d}</td>
                                <td class="py-5 text-center font-mono text-xs text-red-900/50">${data.l}</td>
                                <td class="py-5 text-center font-mono text-xs text-gray-400">${data.gf}</td>
                                <td class="py-5 text-center font-mono text-xs text-gray-400">${data.ga}</td>
                                <td class="py-5 text-center font-mono text-xs ${data.gd.startsWith('+') ? 'text-green-500' : data.gd.startsWith('-') ? 'text-red-500' : 'text-gray-500'}">${data.gd}</td>
                                <td class="py-5 text-right pr-8 font-black text-white text-base">${data.pts}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        <div class="relative p-8 bg-gradient-to-r from-blue-900/10 to-transparent border border-blue-500/10 rounded-[3rem] overflow-hidden group">
            <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
            
            <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div class="flex items-center gap-6">
                    <div class="relative">
                    <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)]">
    <i class="fas fa-shield-alt text-white text-2xl animate-pulse"></i>
</div>


                        <div class="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-4 border-[#030816]"></div>
                    </div>
                    <div>
                        <h4 class="text-white font-black text-lg uppercase italic leading-none">High-Efficiency Logic</h4>
                        <p class="text-[10px] text-blue-500 font-black uppercase tracking-[0.3em] mt-1">Real-Time Sync: 100% Verified</p>
                    </div>
                </div>

                <div class="hidden lg:block w-[1px] h-12 bg-white/10"></div>

                <p class="text-xs text-gray-500 uppercase font-bold leading-relaxed text-center lg:text-left max-w-lg italic">
                    This circuit utilizes <span class="text-white">Elite-Grade Automation</span>. Every goal, unit rank, and goal difference is processed through a zero-latency protocol to ensure absolute data integrity for the 2025 resumption.
                </p>

                <div class="flex items-center gap-4">
                    <div class="text-right hidden sm:block">
                        <p class="text-[8px] text-gray-600 font-black uppercase tracking-widest">System Load</p>
                        <p class="text-xs font-mono text-blue-400">OPTIMAL</p>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>`,


    'Live': `
    <div class="flex flex-col items-center justify-center min-h-[600px] text-center animate-in px-4">
        
        <div class="relative w-48 h-48 mb-12">
            <div class="absolute inset-0 border border-blue-500/10 rounded-[3rem] animate-[spin_15s_linear_infinite]"></div>
            <div class="absolute inset-4 border border-dashed border-blue-500/20 rounded-[2.5rem] animate-[spin_10s_linear_infinite_reverse]"></div>
            
            <div class="absolute inset-12 bg-[#030816] border border-blue-500/40 rounded-[2rem] flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.2)] group">
                <i class="fas fa-microchip text-blue-500 text-3xl animate-pulse"></i>
                
                <div class="absolute -top-2 left-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
                <div class="absolute -bottom-2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
            </div>
        </div>

        <div class="space-y-4">
            <div class="flex items-center justify-center gap-3">
                <span class="px-3 py-1 bg-blue-600 text-white text-[8px] font-black uppercase tracking-[0.3em] rounded-md">System Phase 02</span>
            </div>
            <h3 class="text-4xl font-black italic uppercase tracking-tighter text-white">Engineering In Progress</h3>
            <p class="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em] font-bold">Elite Engineers are working on this node...</p>
        </div>

        <div class="mt-12 w-full max-w-xl p-10 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-[3.5rem] relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            
            <p class="text-sm text-gray-400 uppercase leading-relaxed font-bold italic">
                The <span class="text-white">Elite Broadcast Engine</span> is being optimized for high-velocity match tracking. 
                Our engineering team is finalizing the <span class="text-blue-500 font-black">Direct-Lens Uplink</span> protocol.
            </p>
            
            <div class="mt-8 flex flex-col items-center gap-4">
                <div class="flex gap-2">
                    <div class="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                    <div class="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                    <div class="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 0.3s"></div>
                </div>
                <h4 class="text-[11px] text-white font-black uppercase tracking-[0.4em] opacity-80">Stay Tuned for Kickoff</h4>
            </div>
        </div>

        <p class="mt-10 text-[9px] text-gray-600 uppercase tracking-widest font-bold">
            <i class="fas fa-mobile-screen-button mr-2"></i> Camera Transmission Support: Finalizing Encryption
        </p>
    </div>`,



    'Glory Cup': `
<div class="space-y-8 animate-in pb-20 px-4 md:px-0">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-blue-500/20 pb-8 gap-4">
        <div>
            <div class="flex items-center gap-3 mb-2">
                <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_#3b82f6]"></div>
                <span class="text-[10px] text-blue-400 font-black uppercase tracking-[0.4em]">Knockout Protocol</span>
            </div>
            <h3 class="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white">Elite <span class="text-blue-500">Cup</span></h3>
            <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-2">Requirement: <span class="text-white italic font-black">Top 4 League Finishers Only</span></p>
        </div>
        <div class="text-left md:text-right bg-blue-600/5 p-4 rounded-2xl border border-blue-500/10">
            <p class="text-[9px] text-blue-500 font-black uppercase tracking-widest">Season 01 Resumption</p>
            <p class="text-sm text-white font-mono font-black tracking-tighter">FINALS // 2025 CIRCUIT</p>
        </div>
    </div>

    <div class="relative p-6 md:p-16 bg-[#030816] border border-blue-500/10 rounded-[4rem] overflow-hidden shadow-2xl">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full"></div>

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-4">
            
            <div class="space-y-6">
                <div class="flex items-center gap-3 mb-4">
                    <span class="h-[1px] w-8 bg-blue-500/30"></span>
                    <h4 class="text-[10px] text-blue-500 font-black uppercase tracking-[0.4em]">Semi-Final A</h4>
                </div>
                
                <div class="p-6 bg-white/[0.03] border border-white/10 rounded-[2rem] group hover:border-blue-500/50 transition-all opacity-60 grayscale">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-[9px] text-blue-500 font-black italic uppercase">League Leader #1</span>
                        <i class="fas fa-lock text-[10px] text-gray-700"></i>
                    </div>
                    <p class="text-white font-black uppercase italic text-lg tracking-tight">TBD UNIT</p>
                </div>

                <div class="flex justify-center">
                    <div class="w-10 h-10 rounded-full bg-zinc-950 border border-blue-500/20 flex items-center justify-center">
                        <i class="fas fa-bolt text-blue-500 text-xs animate-pulse"></i>
                    </div>
                </div>

                <div class="p-6 bg-white/[0.03] border border-white/10 rounded-[2rem] group hover:border-blue-500/50 transition-all opacity-60 grayscale">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-[9px] text-blue-500 font-black italic uppercase">Qualifier #4</span>
                        <i class="fas fa-lock text-[10px] text-gray-700"></i>
                    </div>
                    <p class="text-white font-black uppercase italic text-lg tracking-tight">TBD UNIT</p>
                </div>
            </div>

            <div class="flex flex-col items-center justify-center py-12 order-first lg:order-none">
                <div class="relative group cursor-pointer">
                    <div class="absolute inset-0 bg-blue-600/30 blur-[60px] group-hover:bg-blue-600/50 transition-all"></div>
                    <div class="relative w-40 h-40 md:w-52 md:h-52 bg-[#050b1a] border-2 border-blue-500/20 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.1)] overflow-hidden">
                        <div class="absolute inset-4 border-2 border-dashed border-blue-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                        <i class="fas fa-medal text-5xl md:text-7xl text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] z-10"></i>
                    </div>
                </div>
                <div class="mt-10 text-center">
                    <h2 class="text-white font-black italic uppercase tracking-tighter text-2xl">Grand Finale</h2>
                    <p class="text-blue-500 text-[9px] font-black mt-2 uppercase tracking-[0.5em] animate-pulse">Waiting for Finalists</p>
                </div>
            </div>

            <div class="space-y-6">
                <div class="flex items-center gap-3 mb-4 lg:justify-end">
                    <h4 class="text-[10px] text-blue-500 font-black uppercase tracking-[0.4em]">Semi-Final B</h4>
                    <span class="h-[1px] w-8 bg-blue-500/30"></span>
                </div>
                
                <div class="p-6 bg-white/[0.03] border border-white/10 rounded-[2rem] group hover:border-blue-500/50 transition-all opacity-60 grayscale lg:text-right">
                    <div class="flex lg:flex-row-reverse justify-between items-center mb-4">
                        <span class="text-[9px] text-blue-500 font-black italic uppercase">Runner Up #2</span>
                        <i class="fas fa-lock text-[10px] text-gray-700"></i>
                    </div>
                    <p class="text-white font-black uppercase italic text-lg tracking-tight">TBD UNIT</p>
                </div>

                <div class="flex justify-center">
                    <div class="w-10 h-10 rounded-full bg-zinc-950 border border-blue-500/20 flex items-center justify-center">
                        <i class="fas fa-bolt text-blue-500 text-xs animate-pulse"></i>
                    </div>
                </div>

                <div class="p-6 bg-white/[0.03] border border-white/10 rounded-[2rem] group hover:border-blue-500/50 transition-all opacity-60 grayscale lg:text-right">
                    <div class="flex lg:flex-row-reverse justify-between items-center mb-4">
                        <span class="text-[9px] text-blue-500 font-black italic uppercase">Qualifier #3</span>
                        <i class="fas fa-lock text-[10px] text-gray-700"></i>
                    </div>
                    <p class="text-white font-black uppercase italic text-lg tracking-tight">TBD UNIT</p>
                </div>
            </div>

        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-8 bg-blue-600/5 border border-blue-600/20 rounded-[2.5rem] flex flex-col gap-4">
            <div class="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                <i class="fas fa-microchip text-white"></i>
            </div>
            <div>
                <h5 class="text-white font-black uppercase italic text-sm">Qualification Algorithm</h5>
                <p class="text-gray-500 text-[10px] uppercase font-bold mt-2 leading-relaxed">
                    The Elite Circuit system monitors the top 4 units. Once the 2025 season reaches its conclusion, these units will be automatically locked into the semi-final nodes.
                </p>
            </div>
        </div>

        <div class="p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] flex flex-col gap-4">
            <div class="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center">
                <i class="fas fa-trophy text-blue-500"></i>
            </div>
            <div>
                <h5 class="text-white font-black uppercase italic text-sm">Elite Cup Reward</h5>
                <p class="text-gray-500 text-[10px] uppercase font-bold mt-2 leading-relaxed">
                    The champion of this tournament earns the ultimate <span class="text-white">Franchise Mastery Badge</span> and seasonal honors.
                </p>
            </div>
        </div>
    </div>

    <div class="p-6 bg-[#050b1a] border border-dashed border-blue-500/20 rounded-3xl text-center">
        <p class="text-[9px] text-gray-600 uppercase font-black tracking-[0.4em] flex items-center justify-center gap-4">
            <span class="w-2 h-2 bg-gray-800 rounded-full"></span>
            Node Generation Locked Until Mid-Season Conclusion
            <span class="w-2 h-2 bg-gray-800 rounded-full"></span>
        </p>
    </div>
</div>`,

'Upcoming': `
    <div class="space-y-8 animate-in pb-20 px-4">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-2">
            <div>
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_#3b82f6]"></div>
                    <span class="text-[10px] text-blue-400 font-black uppercase tracking-[0.4em]">Operations: Matchday 01</span>
                </div>
                <h3 class="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">Circuit <span class="text-blue-500">Fixtures</span></h3>
                <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Status: Season 01 Resumption // 06 Active Slots</p>
            </div>
            <div class="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
                <span class="text-[10px] text-gray-400 font-black uppercase tracking-widest italic">Awaiting Global Sync</span>
            </div>
        </div>

        <div class="grid gap-5">
            ${[
                { id: 1, home: "CSC-300", away: "LAW-500" },
                { id: 2, home: "MSS-300", away: "LAW-100" },
                { id: 3, home: "CSC-300", away: "MSS-300" },
                { id: 4, home: "CSC-400", away: "LAW-500" },
                { id: 5, home: "LAW-200", away: "LAW-100" },
                { id: 6, home: "MSS-300", away: "LAW-500" }
            ].map((match) => `
                <div class="p-6 bg-[#030816] border border-blue-500/10 rounded-[2.5rem] transition-all hover:border-blue-500/30 group">
                    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div class="flex items-center flex-1">
                            <div class="hidden md:flex w-12 h-12 bg-zinc-900 rounded-2xl border border-white/5 items-center justify-center text-[11px] font-black text-blue-500 mr-8">
                                0${match.id}
                            </div>
                            <div class="flex items-center justify-between flex-1 md:justify-start md:gap-12">
                                <span class="text-white font-black text-lg md:text-xl lg:text-2xl uppercase italic tracking-tighter">${match.home}</span>
                                <span class="text-blue-500 font-black italic text-xs md:text-sm">VS</span>
                                <span class="text-white font-black text-lg md:text-xl lg:text-2xl uppercase italic tracking-tighter">${match.away}</span>
                            </div>
                        </div>

                        <div class="flex flex-row items-center justify-between lg:justify-end gap-4 pt-6 lg:pt-0 border-t border-white/5 lg:border-none">
                            <div class="text-left lg:text-right lg:mr-6">
                                <span class="block text-xs text-white font-black font-mono tracking-tighter uppercase">NIL</span>
                                <span class="block text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1 italic">VENUE: NIL</span>
                            </div>
                            <div class="flex gap-2">
                                <button onclick="openFixtureDetails(${match.id}, '${match.home}', '${match.away}')" 
                                    class="px-5 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all">
                                    Intel
                                </button>
                                <button onclick="broadcastPush('${match.home}', '${match.away}')" 
                                    class="w-12 h-12 lg:w-auto lg:px-6 bg-blue-600/10 hover:bg-blue-600 text-blue-500 hover:text-white border border-blue-600/20 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3">
                                    <i class="fas fa-satellite-dish"></i> 
                                    <span class="hidden lg:inline italic">Initialize</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>`,

'Stats': `
    <div class="space-y-8 animate-in pb-24 px-4">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-2">
            <div class="space-y-1">
                <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_#3b82f6]"></div>
                    <span class="text-[10px] text-blue-400 font-black uppercase tracking-[0.4em]">Analytics Engine 1.0</span>
                </div>
                <h3 class="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white">Unit <span class="text-blue-500">Analytics</span></h3>
                <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Status: <span class="text-white italic">Protocol Active // Live Data Feed</span></p>
            </div>
            <div class="w-full md:w-auto">
                <span class="block text-center px-5 py-3 bg-green-600/10 border border-green-500/20 rounded-2xl text-[10px] text-green-500 font-black uppercase tracking-widest">
                    SYNC STATUS: ACTIVE
                </span>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            
            <div class="bg-[#030816] border border-blue-500/10 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                <div class="p-6 md:p-8 border-b border-white/5 bg-gradient-to-r from-blue-600/10 to-transparent flex justify-between items-center">
                    <h4 class="text-white font-black uppercase italic tracking-tighter text-base flex items-center gap-3">
                        <i class="fas fa-crosshairs text-blue-500"></i> Golden Strike Rank
                    </h4>
                    <span class="text-[9px] text-gray-500 font-mono font-bold uppercase tracking-widest">Metric: G</span>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full min-w-[300px]">
                        <tbody class="divide-y divide-white/[0.02]">
                            ${[
                                { name: "Chukwuemeka", val: "6" },
                                { name: "Austin", val: "5" },
                                { name: "Ebuka", val: "4" },
                                { name: "Halaand", val: "4" },
                                { name: "Christian Dior", val: "3" }
                            ].map((player, i) => `
                                <tr class="group hover:bg-blue-600/[0.03] transition-colors">
                                    <td class="py-5 pl-6 w-12">
                                        <span class="text-xs font-mono font-black ${i === 0 ? 'text-blue-500' : 'text-gray-600'}">#0${i+1}</span>
                                    </td>
                                    <td class="py-5">
                                        <div class="flex items-center gap-3 md:gap-4">
                                            <div class="hidden sm:flex w-10 h-10 bg-zinc-900 rounded-xl border border-white/5 items-center justify-center">
                                                <i class="fas fa-user-shield text-[12px] text-gray-700"></i>
                                            </div>
                                            <div class="min-w-0">
                                                <p class="text-[13px] md:text-sm text-white font-black uppercase italic tracking-tighter truncate">${player.name}</p>
                                                <p class="text-[8px] text-blue-500/50 font-bold uppercase tracking-widest italic">Node Verified</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-5 pr-8 text-right">
                                        <span class="text-lg md:text-xl text-white font-black italic tracking-tighter">${player.val}</span>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="bg-[#030816] border border-blue-500/10 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                <div class="p-6 md:p-8 border-b border-white/5 bg-gradient-to-r from-cyan-600/10 to-transparent flex justify-between items-center">
                    <h4 class="text-white font-black uppercase italic tracking-tighter text-base flex items-center gap-3">
                        <i class="fas fa-microchip text-cyan-400"></i> Playmaker Rank
                    </h4>
                    <span class="text-[9px] text-gray-500 font-mono font-bold uppercase tracking-widest">Metric: A</span>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full min-w-[300px]">
                        <tbody class="divide-y divide-white/[0.02]">
                            ${[
                                { name: "Chukwuemeka", val: "6" },
                                { name: "Emmanuel", val: "4" },
                                { name: "OBI", val: "4" },
                                { name: "Mello", val: "3" },
                                { name: "Kev o", val: "3" }
                            ].map((player, i) => `
                                <tr class="group hover:bg-cyan-600/[0.03] transition-colors">
                                    <td class="py-5 pl-6 w-12">
                                        <span class="text-xs font-mono font-black ${i === 0 ? 'text-cyan-400' : 'text-gray-600'}">#0${i+1}</span>
                                    </td>
                                    <td class="py-5">
                                        <div class="flex items-center gap-3 md:gap-4">
                                            <div class="hidden sm:flex w-10 h-10 bg-zinc-900 rounded-xl border border-white/5 items-center justify-center">
                                                <i class="fas fa-terminal text-[12px] text-gray-700"></i>
                                            </div>
                                            <div class="min-w-0">
                                                <p class="text-[13px] md:text-sm text-white font-black uppercase italic tracking-tighter truncate">${player.name}</p>
                                                <p class="text-[8px] text-cyan-500/50 font-bold uppercase tracking-widest italic">Uplink Stable</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-5 pr-8 text-right">
                                        <span class="text-lg md:text-xl text-white font-black italic tracking-tighter">${player.val}</span>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div class="p-8 bg-blue-600/5 border border-blue-500/10 rounded-[2.5rem] group hover:bg-blue-600/10 transition-all">
                <div class="flex justify-between items-start mb-4">
                    <i class="fas fa-bolt text-2xl text-blue-500"></i>
                    <span class="text-[9px] text-blue-500 font-black uppercase tracking-widest">Discipline</span>
                </div>
                <h5 class="text-white font-black text-xs uppercase tracking-widest mb-1 italic">Total Breach Cards</h5>
                <p class="text-4xl md:text-5xl font-black italic text-white tracking-tighter">8</p>
                <p class="text-[9px] text-blue-500/40 font-bold uppercase mt-2 tracking-widest">Across All Sectors</p>
            </div>
            
            <div class="p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem] group hover:border-cyan-500/20 transition-all">
                <div class="flex justify-between items-start mb-4">
                    <i class="fas fa-shield-halved text-2xl text-cyan-400"></i>
                    <span class="text-[9px] text-gray-500 font-black uppercase tracking-widest">Defense</span>
                </div>
                <h5 class="text-white font-black text-xs uppercase tracking-widest mb-1 italic">Null-Goal Sheets</h5>
                <p class="text-4xl md:text-5xl font-black italic text-white tracking-tighter">03</p>
                <p class="text-[9px] text-cyan-500/40 font-bold uppercase mt-2 tracking-widest">Leading: MSS-200</p>
            </div>

            <div class="p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem] group hover:border-white/20 transition-all">
                <div class="flex justify-between items-start mb-4">
                    <i class="fas fa-chart-pie text-2xl text-gray-600"></i>
                    <span class="text-[9px] text-gray-500 font-black uppercase tracking-widest">Efficiency</span>
                </div>
                <h5 class="text-white font-black text-xs uppercase tracking-widest mb-1 italic">Goal / Node Ratio</h5>
                <p class="text-4xl md:text-5xl font-black italic text-white tracking-tighter">4.07</p>
                <p class="text-[9px] text-gray-600 font-bold uppercase mt-2 tracking-widest">Total Goals: 110</p>
            </div>
        </div>
    </div>`,




  'Highlights': `
    <div class="space-y-12 animate-in pb-24 px-6 md:px-10">
        <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
                <div class="h-[1px] w-12 bg-blue-500"></div>
                <span class="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em]">System Core: VOD_LOGS</span>
            </div>
            <h3 class="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-none">
                Elite <span class="text-transparent stroke-blue-500" style="-webkit-text-stroke: 1px #3b82f6;">Archives</span>
            </div>
            <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold max-w-xs">
                Status: <span class="text-blue-400">Elite Engineers Optimizing Uplink</span>
            </p>
        </div>

        <div class="relative aspect-[16/10] md:aspect-video bg-[#020612] rounded-[4rem] border border-blue-500/10 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7)] group">
            <div class="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
            
            <div class="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div class="relative mb-10">
                    <div class="w-20 h-20 bg-blue-600/5 rounded-[2.5rem] flex items-center justify-center border border-blue-500/20 rotate-45 group-hover:rotate-90 transition-all duration-1000">
                        <i class="fas fa-shield-halved text-blue-500/40 text-2xl -rotate-45 group-hover:-rotate-90 transition-all duration-1000"></i>
                    </div>
                    <div class="absolute inset-0 border border-blue-500/20 rounded-[2.5rem] animate-ping opacity-10"></div>
                </div>
                
                <div class="text-center space-y-4">
                    <h4 class="text-white font-black italic uppercase tracking-[0.3em] text-lg">Circuit Feed Encrypted</h4>
                    <div class="h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
                    <p class="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed max-w-sm">
                        Elite Engineers are currently calibrating the high-velocity stream buffers for Matchday 01.
                    </p>
                </div>
            </div>

            <div class="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#020612] to-transparent">
                <div class="flex justify-between items-center">
                    <span class="text-[8px] text-blue-500/40 font-mono tracking-widest uppercase">Buffer: 0% // Offline</span>
                    <i class="fas fa-bolt text-blue-500/20 text-xs"></i>
                </div>
            </div>
        </div>

        <div class="relative p-10 md:p-16 bg-white/[0.01] border border-white/5 rounded-[4rem] group overflow-hidden">
            <div class="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                <i class="fas fa-microchip text-[15rem]"></i>
            </div>
            
            <div class="relative z-10 flex flex-col items-center text-center space-y-8">
                <div class="px-6 py-2 bg-blue-600/5 border border-blue-500/10 rounded-full">
                    <span class="text-[9px] text-blue-400 font-black uppercase tracking-[0.4em]">Node Expansion Underway</span>
                </div>
                
                <div class="space-y-3">
                    <h4 class="text-3xl font-black italic uppercase tracking-tighter text-white">Engineering <span class="text-blue-500">Hub</span></h4>
                    <p class="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] max-w-lg font-bold leading-loose">
                        The <span class="text-white">Elite Engineers</span> are building a custom architecture for community VODs. Stay tuned for the rollout.
                    </p>
                </div>

                <div class="flex flex-col sm:flex-row gap-6 w-full max-w-md pt-4">
                    <div class="flex-1 py-6 bg-white/5 border border-white/10 rounded-3xl text-[10px] text-gray-700 font-black uppercase tracking-[0.3em] cursor-not-allowed flex flex-col items-center gap-3">
                        <i class="fas fa-folder-open opacity-20"></i> Source Locked
                    </div>
                    <div class="flex-1 py-6 bg-blue-600/5 border border-blue-500/10 rounded-3xl text-[10px] text-blue-500/20 font-black uppercase tracking-[0.3em] cursor-not-allowed flex flex-col items-center gap-3">
                        <i class="fas fa-upload opacity-10"></i> Terminal Down
                    </div>
                </div>

                <div class="pt-10 w-full flex justify-center">
                    <div class="flex items-center gap-6">
                        <span class="text-[8px] text-gray-700 font-black uppercase tracking-[0.5em]">Maintenance Mode Active</span>
                        <div class="w-1.5 h-1.5 bg-yellow-500/20 rounded-full"></div>
                        <span class="text-[8px] text-gray-700 font-black uppercase tracking-[0.5em]">Ver 1.0.4</span>
                    </div>
                </div>
            </div>
        </div>
    </div>`,

    
   'News': `
<div class="space-y-12 animate-in pb-32 px-5 md:px-12">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 px-2">
        <div class="space-y-2">
            <div class="flex items-center gap-4">
                <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]"></div>
                <span class="text-[10px] text-blue-400 font-black uppercase tracking-[0.5em]">Elite Authority Broadcast</span>
            </div>
            <h3 class="text-5xl md:text-6xl font-black italic uppercase tracking-tighter text-white leading-none">News <span class="text-blue-500">Hub</span></h3>
            <p class="text-gray-500 text-[11px] uppercase tracking-[0.3em] font-bold">Source: <span class="text-white italic">Elite Coordinators</span></p>
        </div>
        <div class="bg-white/5 border border-white/10 px-8 py-3 rounded-2xl w-full md:w-auto text-center">
            <span class="text-[10px] text-gray-400 font-mono uppercase tracking-[0.2em]">Broadcast ID: 20.12.2025</span>
        </div>
    </div>

    <div id="liveInjectionZone" class="space-y-10">
        <div class="flex items-center gap-4 mb-4 opacity-50">
            <span class="text-[10px] text-rose-500 font-black uppercase tracking-[0.4em]">Live Signal Stream</span>
            <div class="h-[1px] flex-1 bg-rose-500/20"></div>
        </div>
        
        <div id="emptyLiveNotice" class="py-10 border border-dashed border-white/5 rounded-[3rem] text-center">
            <p class="text-[9px] text-gray-600 font-black uppercase tracking-[0.5em]">Waiting for Live Data Packets...</p>
        </div>
    </div> 

    <div id="permanentNews" class="space-y-12">
        
        <div class="bg-blue-600/5 border border-blue-500/20 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
            <div class="flex flex-col md:flex-row gap-8 items-center relative z-10">
                <div class="w-20 h-20 bg-[#020617] rounded-3xl border border-blue-500/30 flex items-center justify-center shrink-0">
                    <i class="fas fa-info-circle text-blue-500 text-3xl"></i>
                </div>
                <div class="space-y-4">
                    <h4 class="text-2xl font-black italic text-white uppercase tracking-tighter">Uplink <span class="text-blue-500">Protocol</span></h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <p class="text-[9px] text-blue-400 font-black uppercase tracking-widest">01. Synchronization</p>
                            <p class="text-gray-500 text-[10px] font-bold uppercase leading-relaxed">The Live Session signal goes online 24 hours prior to the scheduled date for all units.</p>
                        </div>
                        <div class="space-y-2">
                            <p class="text-[9px] text-blue-400 font-black uppercase tracking-widest">02. Post-Session Lock</p>
                            <p class="text-gray-500 text-[10px] font-bold uppercase leading-relaxed">Once the session concludes, the uplink is locked. Final updates from the Board will be deployed here until the next cycle.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gradient-to-br from-green-600/10 to-transparent border border-green-500/20 rounded-[3.5rem] p-10 md:p-20 relative overflow-hidden">
            <div class="relative z-10">
                <div class="flex items-center gap-4 mb-8">
                    <i class="fas fa-certificate text-green-500"></i>
                    <span class="text-[10px] text-green-500 font-black uppercase tracking-[0.5em]">Holiday Reset Protocol</span>
                </div>
                <h4 class="text-4xl md:text-5xl font-black italic text-white uppercase tracking-tighter mb-8 italic">The Christmas <span class="text-green-500">Amnesty</span></h4>
                <div class="max-w-2xl space-y-8">
                    <p class="text-gray-400 text-sm font-bold uppercase leading-relaxed italic italic">In the spirit of the season, all player suspensions are void.</p>
                    <div class="p-8 bg-white/5 border border-white/10 rounded-[2.5rem]">
                        <p class="text-white text-[11px] font-black uppercase tracking-widest italic mb-3">Targeted Decryption: Jasso (CSC 200)</p>
                        <p class="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-loose">Red card status purged. Unit restored to active duty.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div class="bg-[#020617] border border-blue-500/10 rounded-[3.5rem] p-10 md:p-12 hover:border-blue-600/30 transition-all group">
                <div class="flex justify-between items-start mb-10">
                    <div class="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center border border-blue-600/20">
                        <i class="fas fa-gavel text-blue-500 text-2xl"></i>
                    </div>
                    <span class="text-[9px] text-blue-500 font-black uppercase tracking-[0.4em]">Ruling 01</span>
                </div>
                <h5 class="text-white font-black uppercase italic tracking-tighter text-3xl mb-6">CSC 200 <span class="text-blue-500">v</span> MSS 100</h5>
                <div class="space-y-6 text-gray-400 text-[11px] font-bold uppercase leading-loose tracking-widest">
                    <p><span class="text-white">Official Result:</span> CSC 200 awarded the win (5-2).</p>
                    <p>Elite Coordinators acknowledge the sportsmanship of the CSC 200 unit.</p>
                </div>
            </div>

            <div class="bg-white/[0.02] border border-white/5 rounded-[3.5rem] p-10 md:p-12 flex flex-col items-center justify-center text-center group relative overflow-hidden">
                <div class="relative z-10">
                    <div class="text-5xl mb-8 animate-bounce">🎄</div>
                    <h5 class="text-4xl font-black uppercase italic text-white tracking-tighter mb-4">Merry Christmas <br><span class="text-blue-500">To All Units</span></h5>
                    <p class="text-gray-500 text-[10px] font-black uppercase tracking-[0.5em] mb-10 leading-loose">The Elite League is back.</p>
                </div>
            </div>
        </div> 
    </div> 

    <div class="pt-12 border-t border-white/5 text-center">
        <p class="text-[11px] text-gray-700 font-black uppercase tracking-[0.8em]">Authorized: Elite Coordinators</p>
    </div>
</div> 
`,

    
   'LiveSession': `
<div class="space-y-8 animate-in pb-20 px-4 md:px-12">
    <div class="relative overflow-hidden bg-[#020617] border border-blue-500/20 p-8 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl">
        <div class="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] pointer-events-none"></div>
        <div class="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            <div class="text-center md:text-left">
                <div class="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    <span class="text-[9px] text-blue-400 font-black uppercase tracking-[0.4em]">Elite Authority Uplink</span>
                </div>
                <h3 class="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">Live <span class="text-blue-500">Session</span></h3>
                <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1 italic">First Reliable Source Protocol</p>
            </div>
            <div class="w-16 h-16 bg-blue-600/10 rounded-[1.5rem] flex items-center justify-center border border-blue-500/20 shadow-inner group">
                <i class="fas fa-tower-broadcast text-blue-500 text-2xl group-hover:scale-110 transition-transform duration-500"></i>
            </div>
        </div>
    </div>

    <div class="relative rounded-[3.5rem] bg-[#050c1f]/40 border border-white/5 p-10 md:p-20 flex flex-col items-center text-center shadow-2xl backdrop-blur-xl">
        <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(#3b82f6 1px, transparent 1px); background-size: 40px 40px;"></div>

        <div id="countdownContainer" class="space-y-8 relative z-10">
            <div class="inline-flex items-center gap-3 px-6 py-2 bg-blue-600/5 border border-blue-500/20 rounded-full">
                <span class="text-[10px] text-blue-400 font-black uppercase tracking-widest">Next Synchronization</span>
            </div>
            <div id="timer" class="text-6xl md:text-8xl font-mono text-white font-black tracking-tighter drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">00 : 00 : 00</div>
            <div class="space-y-2">
                <p class="text-gray-500 text-[11px] font-bold uppercase tracking-[0.4em] italic">Signal Unlocks Midnight</p>
                <div class="w-24 h-1 bg-blue-500/20 rounded-full mx-auto">
                    <div class="w-1/3 h-full bg-blue-500 rounded-full animate-shimmer"></div>
                </div>
            </div>
        </div>

        <div id="liveStatus" class="hidden space-y-6 relative z-10">
            <div class="w-24 h-24 bg-rose-600/10 rounded-full flex items-center justify-center mx-auto border border-rose-500/20 animate-pulse">
                <i class="fas fa-signal text-rose-500 text-3xl"></i>
            </div>
            <h4 class="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none">WE ARE <br> <span class="text-rose-500">LIVE!</span></h4>
            <p class="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] max-w-xs mx-auto italic">Broadcast Control Interface Fully Initialized.</p>
        </div>

        <div class="mt-16 pt-10 border-t border-white/5 w-full max-w-xs relative z-10">
            <button 
                onmousedown="startFingerprintScan(event)" 
                onmouseup="cancelFingerprintScan()" 
                onmouseleave="cancelFingerprintScan()"
                ontouchstart="startFingerprintScan(event)" 
                ontouchend="cancelFingerprintScan()"
                class="group relative flex flex-col items-center gap-4 focus:outline-none select-none mx-auto">
                <div class="relative">
                    <div class="absolute inset-0 bg-blue-500/20 blur-2xl group-active:bg-rose-500/40 transition-all"></div>
                    <div class="w-20 h-20 bg-zinc-900 border border-white/10 rounded-[2rem] flex items-center justify-center group-hover:border-blue-500/50 transition-all duration-500 relative z-10 shadow-2xl">
                        <i class="fas fa-fingerprint text-gray-500 text-3xl transition-colors group-active:text-rose-500"></i>
                    </div>
                </div>
                <div class="space-y-1">
                    <p class="text-[11px] text-white font-black uppercase tracking-[0.2em]">Admin Decryption</p>
                    <p class="text-[8px] text-gray-600 font-bold uppercase tracking-widest">Hold to Authenticate</p>
                </div>
            </button>
        </div>

        <div class="flex flex-col md:flex-row justify-center items-center gap-8 opacity-40 mt-12">
            <div class="flex items-center gap-2">
                <i class="fas fa-shield-halved text-[10px] text-blue-500"></i>
                <span class="text-[8px] text-white font-black uppercase tracking-widest">Encrypted Uplink</span>
            </div>
            <div class="flex items-center gap-2">
                <i class="fas fa-bolt text-[10px] text-blue-500"></i>
                <span class="text-[8px] text-white font-black uppercase tracking-widest">Direct Dispatch</span>
            </div>
        </div>
    </div>
</div>
`,


    
    
'Goals Leaderboard': `
<div class="space-y-12 animate-in pb-40 px-6 md:px-16">
    <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4">
            <div class="h-[1px] w-12 bg-blue-500"></div>
            <span class="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em]">Sector: STRIKER_LOGS</span>
        </div>
        <h3 class="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white leading-none">
            Elite <span class="text-transparent stroke-blue-500" style="-webkit-text-stroke: 1px #3b82f6;">Scorers</span>
        </h3>
    </div>

    <div class="flex flex-col lg:flex-row gap-16">
        
        <div class="lg:w-1/3">
            <div class="relative group bg-[#020617] border border-blue-500/20 rounded-[4rem] p-12 flex flex-col items-center text-center sticky top-12 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                <div class="absolute -top-20 -left-20 w-40 h-40 bg-blue-600/10 blur-[80px] rounded-full"></div>
                
                <div class="relative mb-10">
                    <div class="w-48 h-48 bg-zinc-900 rounded-[3.5rem] border-2 border-blue-500/20 flex items-center justify-center rotate-3 group-hover:rotate-0 transition-all duration-700 overflow-hidden">
                        <i class="fas fa-user-shield text-7xl text-blue-500/20"></i>
                    </div>
                    <div class="absolute -bottom-4 bg-blue-600 text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest italic shadow-xl">
                        Rank #01
                    </div>
                </div>

                <h3 class="text-4xl font-black text-white uppercase tracking-tighter italic leading-tight">Chukwu<br><span class="text-blue-500">emeka</span></h3>
                
                <div class="grid grid-cols-2 gap-8 mt-12 w-full pt-8 border-t border-white/5">
                    <div class="text-center">
                        <span class="block text-4xl font-black text-white">06</span>
                        <span class="text-[9px] text-gray-500 uppercase font-black tracking-widest mt-1">Gls</span>
                    </div>
                    <div class="text-center border-l border-white/5">
                        <span class="block text-4xl font-black text-white">06</span>
                        <span class="text-[9px] text-gray-500 uppercase font-black tracking-widest mt-1">Ast</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:w-2/3 space-y-4">
            <div class="flex justify-between items-end mb-8 px-4">
                <span class="text-[10px] text-blue-400 font-black uppercase tracking-[0.4em]">Live Leaderboard</span>
                <span class="text-[10px] text-gray-700 font-mono uppercase tracking-widest italic">Ver 2.0.5</span>
            </div>

            <div class="space-y-4">
                ${[
                    { name: "Chukwuemeka", val: "6", unit: "CSC 100" },
                    { name: "Austin", val: "5", unit: "NUR 200" },
                    { name: "Ebuka", val: "4", unit: "MSS 200" },
                    { name: "Halaand", val: "4", unit: "CSC 400" },
                    { name: "Christian Dior", val: "3", unit: "CSC 400" },
                    { name: "Paschal", val: "3", unit: "CSC 200" },
                    { name: "Sporty", val: "3", unit: "MSS 300" },
                    { name: "Zubby", val: "2", unit: "CSC 200" },
                    { name: "IK", val: "2", unit: "MSS 200" },
                    { name: "Sammy", val: "1", unit: "CSC 200" }
                ].map((player, i) => `
                    <div class="flex items-center justify-between p-6 md:p-8 bg-white/[0.01] border border-white/5 rounded-[2.5rem] group hover:bg-blue-600/[0.03] hover:border-blue-500/20 transition-all duration-500">
                        <div class="flex items-center gap-6">
                            <div class="w-10 h-10 rounded-2xl bg-zinc-950 border border-white/5 flex items-center justify-center">
                                <span class="text-xs font-mono font-black ${i < 3 ? 'text-blue-500' : 'text-gray-700'}">0${i + 1}</span>
                            </div>
                            
                            <div class="flex flex-col">
                                <span class="text-lg md:text-xl font-black text-white uppercase tracking-tighter italic group-hover:text-blue-400 transition-colors leading-none mb-1">
                                    ${player.name}
                                </span>
                                <span class="text-[9px] text-gray-600 font-bold uppercase tracking-[0.2em]">
                                    Unit: <span class="text-blue-500/40">${player.unit}</span> // Status: Clear
                                </span>
                            </div>
                        </div>
                        
                        <div class="flex items-center gap-6">
                            <div class="h-10 w-[1px] bg-white/5"></div>
                            <span class="text-3xl md:text-4xl font-black italic text-white tracking-tighter">${player.val}</span>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="mt-12 p-10 bg-blue-600/5 border border-blue-500/10 rounded-[3rem] text-center">
                <p class="text-[9px] text-blue-500/60 font-black uppercase tracking-[0.5em] italic leading-loose">
                    Authorized Data Feed // All suspensions removed as per Christmas amnesty protocol.
                </p>
            </div>
        </div>
    </div>
</div>`,



'Assists Leaderboard': `
<div class="space-y-12 animate-in pb-40 px-6 md:px-16">
    <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4">
            <div class="h-[1px] w-12 bg-blue-500"></div>
            <span class="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em]">Sector: VISION_CORE</span>
        </div>
        <h3 class="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white leading-none">
            Elite <span class="text-transparent stroke-blue-500" style="-webkit-text-stroke: 1px #3b82f6;">Playmakers</span>
        </h3>
    </div>

    <div class="flex flex-col lg:flex-row gap-16">
        
        <div class="lg:w-1/3">
            <div class="relative group bg-[#020617] border border-blue-500/20 rounded-[4rem] p-12 flex flex-col items-center text-center sticky top-12 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                <div class="absolute -top-20 -right-20 w-40 h-40 bg-blue-600/10 blur-[80px] rounded-full"></div>
                
                <div class="relative mb-10">
                    <div class="w-48 h-48 bg-zinc-900 rounded-[3.5rem] border-2 border-blue-500/20 flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-all duration-700 overflow-hidden">
                        <i class="fas fa-microchip text-7xl text-blue-500/20"></i>
                    </div>
                    <div class="absolute -bottom-4 bg-blue-600 text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest italic shadow-xl">
                        Rank #01
                    </div>
                </div>

                <h3 class="text-4xl font-black text-white uppercase tracking-tighter italic leading-tight">Chukwu<br><span class="text-blue-500">emeka</span></h3>
                
                <div class="grid grid-cols-2 gap-8 mt-12 w-full pt-8 border-t border-white/5">
                    <div class="text-center">
                        <span class="block text-4xl font-black text-white">06</span>
                        <span class="text-[9px] text-gray-500 uppercase font-black tracking-widest mt-1">Asts</span>
                    </div>
                    <div class="text-center border-l border-white/5">
                        <span class="block text-4xl font-black text-white">06</span>
                        <span class="text-[9px] text-gray-500 uppercase font-black tracking-widest mt-1">Goals</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:w-2/3 space-y-4">
            <div class="flex justify-between items-end mb-8 px-4">
                <span class="text-[10px] text-blue-400 font-black uppercase tracking-[0.4em]">Creative Uplink</span>
                <span class="text-[10px] text-gray-700 font-mono uppercase tracking-widest italic">Ver 2.0.5</span>
            </div>

            <div class="space-y-4">
                ${[
                    { name: "Chukwuemeka", val: "6", unit: "CSC 100" },
                    { name: "Emmanuel", val: "4", unit: "NUr 200" },
                    { name: "Obi", val: "4", unit: "CSC 400" },
                    { name: "Mello", val: "3", unit: "MSS 200" },
                    { name: "Hassan", val: "3", unit: "CSC 400" },
                    { name: "Cush", val: "3", unit: "CSC 200" },
                    { name: "Kev O", val: "3", unit: "CSC 200" },
                    { name: "Paschal", val: "2", unit: "CSC 200" },
                    { name: "Ebuka", val: "2", unit: "MSS 200" },
                    { name: "Zubby", val: "2", unit: "CSC 200" }
                ].map((player, i) => `
                    <div class="flex items-center justify-between p-6 md:p-8 bg-white/[0.01] border border-white/5 rounded-[2.5rem] group hover:bg-blue-600/[0.03] hover:border-blue-500/20 transition-all duration-500">
                        <div class="flex items-center gap-6">
                            <div class="w-10 h-10 rounded-2xl bg-zinc-950 border border-white/5 flex items-center justify-center">
                                <span class="text-xs font-mono font-black ${i < 3 ? 'text-blue-500' : 'text-gray-700'}">0${i + 1}</span>
                            </div>
                            
                            <div class="flex flex-col">
                                <span class="text-lg md:text-xl font-black text-white uppercase tracking-tighter italic group-hover:text-blue-400 transition-colors leading-none mb-1">
                                    ${player.name}
                                </span>
                                <span class="text-[9px] text-gray-600 font-bold uppercase tracking-[0.2em]">
                                    Link: <span class="text-blue-500/40">${player.unit}</span> // Active
                                </span>
                            </div>
                        </div>
                        
                        <div class="flex items-center gap-6">
                            <div class="h-10 w-[1px] bg-white/5"></div>
                            <span class="text-3xl md:text-4xl font-black italic text-white tracking-tighter">${player.val}</span>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="mt-12 p-10 bg-[#020617] border border-blue-500/10 rounded-[3.5rem] text-center">
                <p class="text-[9px] text-blue-500/60 font-black uppercase tracking-[0.5em] italic leading-loose">
                    Transmission Complete // Authorized by Elite Coordinators
                </p>
            </div>
        </div>
    </div>
</div>`,


'Player Selection': `
<div class="animate-in pb-40 px-6 md:px-16 space-y-16">
    <div class="pt-10 flex flex-col gap-6">
        <div class="flex items-center gap-4">
            <div class="h-[1px] w-12 bg-blue-500"></div>
            <span class="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em]">Sector: PERSONNEL_REGISTRY</span>
        </div>
        <h3 class="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.85]">
            Player <br><span class="text-transparent stroke-blue-500" style="-webkit-text-stroke: 1px #3b82f6;">Selection</span>
        </h3>
    </div>

    <div class="relative p-12 md:p-24 bg-[#020617] border border-blue-500/10 rounded-[4rem] overflow-hidden flex flex-col items-center justify-center text-center shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
        
        <div class="absolute inset-0 opacity-20 pointer-events-none">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_80%)]"></div>
            <div class="absolute inset-0" style="background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 30px 30px;"></div>
        </div>

        <div class="relative z-10 max-w-2xl">
            <div class="w-24 h-24 bg-blue-600/5 text-blue-500 rounded-[2.5rem] flex items-center justify-center mx-auto mb-12 border border-blue-500/20 shadow-[0_0_60px_rgba(59,130,246,0.1)]">
                <i class="fas fa-fingerprint text-4xl animate-pulse"></i>
            </div>
            
            <h4 class="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase leading-tight mb-8">
                Registry <br>
                <span class="text-blue-500">Suspended</span>
            </h4>

            <div class="inline-block px-8 py-3 bg-zinc-950 border border-white/5 rounded-2xl mb-12">
                <span class="text-[10px] text-gray-500 font-black uppercase tracking-[0.5em]">Auth: ELITE_BOARD_ONLY</span>
            </div>

            <p class="text-base md:text-lg text-gray-400 font-bold uppercase leading-[2] tracking-widest mb-12 italic">
                The personnel database is currently <span class="text-white">non-operational</span>. Player registration will commence once the <span class="text-blue-500 underline underline-offset-8 decoration-blue-500/30">Kick-off protocols</span> are verified by the board.
            </p>

            <div class="p-8 bg-blue-600/5 border border-blue-500/10 rounded-[3rem]">
                <p class="text-[11px] text-blue-400 font-black uppercase tracking-[0.4em] leading-relaxed">
                    Personnel uplink standby. Check back in the next update.
                </p>
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-8 opacity-40">
        <div class="flex items-center gap-6 p-8 border border-white/5 rounded-[2.5rem] bg-white/[0.01]">
            <i class="fas fa-satellite-dish animate-bounce text-blue-500"></i>
            <span class="text-[10px] text-gray-600 font-black uppercase tracking-widest leading-loose">Pinging personnel database... No response from Coord_Node.</span>
        </div>
    </div>

    <div class="pt-10 text-center">
        <p class="text-[8px] text-gray-800 font-black uppercase tracking-[0.8em]">
            Elite League Identification System // Ver 2.0
        </p>
    </div>
</div>`,




'Team Selection': `
<div class="animate-in pb-40 px-6 md:px-16 space-y-16">
    <div class="pt-10 flex flex-col gap-6">
        <div class="flex items-center gap-4">
            <div class="h-[1px] w-12 bg-blue-500"></div>
            <span class="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em]">Sector: UNIT_ASSIGNMENT</span>
        </div>
        <h3 class="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.85]">
            Team <br><span class="text-transparent stroke-blue-500" style="-webkit-text-stroke: 1px #3b82f6;">Selection</span>
        </h3>
    </div>

    <div class="relative p-12 md:p-24 bg-[#020617] border border-blue-500/10 rounded-[4rem] overflow-hidden flex flex-col items-center justify-center text-center shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
        
        <div class="absolute inset-0 opacity-20 pointer-events-none">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_80%)]"></div>
            <div class="absolute inset-0" style="background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 30px 30px;"></div>
        </div>

        <div class="relative z-10 max-w-2xl">
            <div class="w-24 h-24 bg-blue-600/5 text-blue-500 rounded-[2.5rem] flex items-center justify-center mx-auto mb-12 border border-blue-500/20 shadow-[0_0_60px_rgba(59,130,246,0.1)]">
                <i class="fas fa-lock text-4xl animate-pulse"></i>
            </div>
            
            <h4 class="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase leading-tight mb-8">
                Tactical Units <br>
                <span class="text-blue-500">Offline</span>
            </h4>

            <div class="inline-block px-8 py-3 bg-zinc-950 border border-white/5 rounded-2xl mb-12">
                <span class="text-[10px] text-gray-500 font-black uppercase tracking-[0.5em]">Protocol: LOCKED_BY_COORDINATORS</span>
            </div>

            <p class="text-base md:text-lg text-gray-400 font-bold uppercase leading-[2] tracking-widest mb-12 italic">
                The assignment terminal is currently <span class="text-white">encrypted</span>. Access will be authorized once the <span class="text-blue-500 underline underline-offset-8 decoration-blue-500/30">Coordinators</span> finalize the Elite Cup roster updates.
            </p>

            <div class="p-8 bg-blue-600/5 border border-blue-500/10 rounded-[3rem]">
                <p class="text-[11px] text-blue-400 font-black uppercase tracking-[0.4em] leading-relaxed">
                    Check back after the next system synchronization.
                </p>
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-8 opacity-40">
        <div class="flex items-center gap-6 p-8 border border-white/5 rounded-[2.5rem] bg-white/[0.01]">
            <i class="fas fa-circle-notch animate-spin text-blue-500"></i>
            <span class="text-[10px] text-gray-600 font-black uppercase tracking-widest">Awaiting board authorization for Unit 01...</span>
        </div>
        <div class="flex items-center gap-6 p-8 border border-white/5 rounded-[2.5rem] bg-white/[0.01]">
            <i class="fas fa-circle-notch animate-spin text-blue-500"></i>
            <span class="text-[10px] text-gray-600 font-black uppercase tracking-widest">Pending synchronization with Player Selection node...</span>
        </div>
    </div>

    <div class="pt-10 text-center">
        <p class="text-[8px] text-gray-800 font-black uppercase tracking-[0.8em]">
            Elite League Authority // Secure Broadcast
        </p>
    </div>
</div>`,



'Transfer Market': `
<div class="animate-in pb-40 px-6 md:px-16 space-y-16">
    <div class="pt-10 flex flex-col gap-6">
        <div class="flex items-center gap-4">
            <div class="h-[1px] w-12 bg-blue-500"></div>
            <span class="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em]">Sector: EXCHANGE_NODE</span>
        </div>
        <h3 class="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.85]">
            Market <br><span class="text-transparent stroke-blue-500" style="-webkit-text-stroke: 1px #3b82f6;">Terminal</span>
        </h3>
        <p class="text-gray-500 text-[11px] uppercase tracking-[0.3em] font-bold">Status: <span class="text-blue-400 italic">Pre-Operational Standby</span></p>
    </div>

    <div class="relative p-12 md:p-24 bg-[#020617] border border-blue-500/10 rounded-[4rem] overflow-hidden flex flex-col items-center justify-center text-center shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
        <div class="absolute inset-0 opacity-30 pointer-events-none">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]"></div>
            <i class="fas fa-tower-broadcast absolute -right-10 -top-10 text-[20rem] text-blue-500/5 rotate-12"></i>
        </div>

        <div class="relative z-10 max-w-3xl">
            <div class="w-20 h-20 bg-blue-600/10 text-blue-500 rounded-[2rem] flex items-center justify-center mx-auto mb-12 border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                <i class="fas fa-bolt text-3xl animate-pulse"></i>
            </div>
            
            <h4 class="text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none mb-10">
                Market Opens <br>
                <span class="text-blue-500">Before Elite Kick-Off</span>
            </h4>

            <div class="inline-block px-8 py-3 bg-blue-600/5 border border-blue-500/10 rounded-2xl mb-12">
                <span class="text-[10px] text-blue-400 font-black uppercase tracking-[0.5em] animate-pulse">Stay Tuned Managers</span>
            </div>

            <p class="text-base md:text-xl text-gray-400 font-bold uppercase leading-[1.8] tracking-widest mb-12 italic">
                "Make your <span class="text-white">investment</span> worth the buy and your <span class="text-blue-500">strategy</span> worth the move. The Elite Cup awaits."
            </p>

            <div class="flex flex-col sm:flex-row justify-center gap-6">
                <div class="px-8 py-5 bg-blue-600/10 border border-blue-500/20 rounded-[2rem]">
                    <span class="block text-[9px] text-blue-500 font-black uppercase mb-2 tracking-widest">Buy Protocol</span>
                    <span class="text-sm text-white font-black uppercase italic">Value Driven</span>
                </div>
                <div class="px-8 py-5 bg-white/[0.02] border border-white/5 rounded-[2rem]">
                    <span class="block text-[9px] text-gray-600 font-black uppercase mb-2 tracking-widest">Trade Logic</span>
                    <span class="text-sm text-white font-black uppercase italic">Elite Exchange</span>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-10">
        <div class="p-10 md:p-14 bg-white/[0.01] border border-white/5 rounded-[4rem] group hover:border-blue-500/20 transition-all duration-700">
            <div class="flex items-center gap-6 mb-8">
                <div class="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                    <i class="fas fa-shield-halved text-blue-500 text-lg"></i>
                </div>
                <h5 class="text-2xl font-black text-white uppercase italic tracking-tighter">Verified Franchise</h5>
            </div>
            <p class="text-gray-500 text-xs md:text-sm font-bold uppercase leading-[2.2] tracking-[0.15em] italic">
                Only managers who have secured their <span class="text-white">Elite Status</span> (₦4,000 franchise slot) are cleared to participate in the upcoming market window.
            </p>
        </div>

        <div class="p-10 md:p-14 bg-white/[0.01] border border-white/5 rounded-[4rem] group hover:border-blue-500/20 transition-all duration-700">
            <div class="flex items-center gap-6 mb-8">
                <div class="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                    <i class="fas fa-shuffle text-blue-500 text-lg"></i>
                </div>
                <h5 class="text-2xl font-black text-white uppercase italic tracking-tighter">Trade Protocols</h5>
            </div>
            <p class="text-gray-500 text-xs md:text-sm font-bold uppercase leading-[2.2] tracking-[0.15em] italic">
                Direct player swaps and financial-plus-player deals are permitted. All negotiations must be <span class="text-white underline underline-offset-8 decoration-blue-500">logged by the Elite Board</span> for final authorization.
            </p>
        </div>

        <div class="p-10 md:p-14 bg-blue-600/5 border border-blue-500/10 rounded-[4rem] text-center">
            <i class="fas fa-file-signature text-blue-500 mb-6 text-2xl"></i>
            <h5 class="text-white font-black uppercase italic text-sm mb-4 tracking-[0.3em]">Final Directive</h5>
            <p class="text-[10px] md:text-xs text-blue-400/60 font-black uppercase leading-loose tracking-[0.2em]">
                "Everything regarding the league collectively comes from the Committee."
            </p>
        </div>
    </div>
</div>`,



'Transfer News': `
<div class="animate-in pb-40 px-4 md:px-16 space-y-16">
    <div class="pt-10 flex flex-col gap-6">
        <div class="flex items-center gap-3">
            <div class="h-[2px] w-8 bg-blue-500"></div>
            <span class="text-[9px] text-blue-500 font-black uppercase tracking-[0.6em]">System Protocol</span>
        </div>
        <h3 class="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.85]">
            Transfer <br><span class="text-transparent stroke-blue-500" style="-webkit-text-stroke: 1px #3b82f6;">Intel</span>
        </h3>
    </div>

    <div class="flex flex-col lg:flex-row gap-20">
        
        <div class="lg:w-1/3">
            <div class="relative bg-[#020617] border border-blue-500/10 rounded-[4rem] p-10 md:p-12 shadow-2xl">
                <div class="w-16 h-16 bg-blue-600/10 rounded-3xl flex items-center justify-center mb-10 border border-blue-500/20">
                    <i class="fas fa-handshake text-2xl text-blue-500 animate-pulse"></i>
                </div>

                <h4 class="text-3xl font-black text-white uppercase tracking-tighter italic mb-6">Market <span class="text-blue-500">Status</span></h4>
                
                <div class="inline-block px-5 py-2 bg-zinc-950 border border-yellow-500/20 rounded-xl mb-12">
                    <span class="text-[10px] text-yellow-500 font-black uppercase tracking-widest italic leading-none">Awaiting Elite Cup</span>
                </div>

                <div class="space-y-10">
                    <div class="flex items-start gap-5">
                        <div class="min-w-[4px] h-4 bg-blue-500 rounded-full mt-1"></div>
                        <p class="text-[11px] text-gray-400 font-bold uppercase tracking-widest italic leading-relaxed">
                            Window opens at <span class="text-white underline underline-offset-4 decoration-blue-500">Elite Cup Kick-off</span>.
                        </p>
                    </div>
                    <div class="flex items-start gap-5">
                        <div class="min-w-[4px] h-4 bg-blue-500 rounded-full mt-1"></div>
                        <p class="text-[11px] text-gray-400 font-bold uppercase tracking-widest italic leading-relaxed">
                            Units get <span class="text-white italic">2 Acquisitions</span> per Dept.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:w-2/3 space-y-10">
            <div class="flex justify-between items-center mb-4 px-2">
                <span class="text-[9px] text-blue-400 font-black uppercase tracking-[0.4em]">Official Directives</span>
                <span class="text-[9px] text-gray-800 font-mono uppercase tracking-widest">Auth: Coordinators</span>
            </div>

            <div class="p-10 md:p-14 bg-white/[0.01] border border-white/5 rounded-[4rem] hover:border-blue-500/20 transition-all duration-700">
                <div class="flex items-center gap-6 mb-10">
                    <span class="text-4xl font-black italic text-blue-500/20 font-mono">01</span>
                    <h5 class="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter">Negotiation</h5>
                </div>
                <p class="text-gray-500 text-xs md:text-sm font-bold uppercase leading-[2] tracking-widest italic">
                    Fees must be <span class="text-white">agreed between heads</span>. The <span class="text-blue-500">Elite Board</span> must authorize the movement after notification.
                </p>
            </div>

            <div class="p-10 md:p-14 bg-white/[0.01] border border-white/5 rounded-[4rem] hover:border-blue-500/20 transition-all duration-700">
                <div class="flex items-center gap-6 mb-10">
                    <span class="text-4xl font-black italic text-blue-500/20 font-mono">02</span>
                    <h5 class="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter">Term</h5>
                </div>
                <p class="text-gray-500 text-xs md:text-sm font-bold uppercase leading-[2] tracking-widest italic">
                    Acquisitions are <span class="text-white italic">temporary</span> for Elite Cup only. All units <span class="text-blue-500 underline underline-offset-8">return to original Depts</span> after the Final.
                </p>
            </div>

            <div class="py-20 bg-[#020617] border border-dashed border-blue-500/10 rounded-[4rem] flex flex-col items-center text-center px-10">
                <div class="w-12 h-12 bg-blue-500/5 rounded-full flex items-center justify-center mb-8">
                    <i class="fas fa-satellite-dish text-blue-500/20 text-2xl animate-spin-slow"></i>
                </div>
                <p class="text-gray-700 text-[10px] font-black uppercase tracking-[0.5em] leading-loose">
                    Signal Stable // Waiting for authorized deal logs...
                </p>
            </div>

            <div class="pt-10 text-center">
                <p class="text-[8px] text-gray-800 font-black uppercase tracking-[0.8em]">
                    Security Protocol Active // Authorized by Elite Coordinators
                </p>
            </div>
        </div>
    </div>
</div>`,


    
  'Mikoko Payment': `
<div class="animate-in pb-40 px-6 md:px-16 space-y-16">
    <div class="pt-10 flex flex-col gap-6">
        <div class="flex items-center gap-4">
            <div class="h-[1px] w-12 bg-blue-500"></div>
            <span class="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em]">Sector: FINANCIAL_NODE</span>
        </div>
        <h3 class="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.85]">
            Elite <br><span class="text-transparent stroke-blue-500" style="-webkit-text-stroke: 1px #3b82f6;">Finance</span>
        </h3>
        <p class="text-gray-500 text-[11px] uppercase tracking-[0.3em] font-bold">Status: <span class="text-blue-400 italic">Phase 01 - Foundation</span></p>
    </div>

    <div class="relative p-12 md:p-24 bg-[#020617] border border-blue-500/10 rounded-[4rem] overflow-hidden flex flex-col items-center justify-center text-center shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
        
        <div class="absolute inset-0 opacity-20 pointer-events-none">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_80%)]"></div>
        </div>

        <div class="relative z-10 max-w-2xl">
            <div class="w-24 h-24 bg-blue-600/5 text-blue-500 rounded-[2.5rem] flex items-center justify-center mx-auto mb-12 border border-blue-500/20 shadow-[0_0_60px_rgba(59,130,246,0.1)]">
                <i class="fas fa-hand-holding-heart text-4xl animate-pulse"></i>
            </div>
            
            <h4 class="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase leading-tight mb-8">
                No Fees <br>
                <span class="text-blue-500">Required</span>
            </h4>

            <div class="inline-block px-8 py-3 bg-zinc-950 border border-white/5 rounded-2xl mb-12">
                <span class="text-[10px] text-gray-500 font-black uppercase tracking-[0.5em]">Current Cycle: 2025 FOUNDATION</span>
            </div>

            <p class="text-base md:text-lg text-gray-400 font-bold uppercase leading-[2.2] tracking-widest mb-12 italic">
                As the <span class="text-white">Elite League</span> begins its new form in 2025, the committee has not requested any financial contributions. 
                There are <span class="text-blue-500 underline underline-offset-8 decoration-blue-500/30">no payment channels</span> active at this time.
            </p>

            <div class="p-10 bg-blue-600/5 border border-blue-500/10 rounded-[3rem]">
                <p class="text-[11px] text-blue-400 font-black uppercase tracking-[0.4em] leading-relaxed">
                    Any future player acquisitions (₦4,000) will be handled manually through team-to-team accounts once authorized.
                </p>
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-10">
        <div class="p-10 md:p-14 bg-white/[0.01] border border-white/5 rounded-[4rem] group hover:border-blue-500/20 transition-all duration-700">
            <div class="flex items-center gap-6 mb-8">
                <div class="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                    <i class="fas fa-info-circle"></i>
                </div>
                <h5 class="text-2xl font-black text-white uppercase italic tracking-tighter">Manual Protocol</h5>
            </div>
            <p class="text-gray-500 text-xs md:text-sm font-bold uppercase leading-[2.2] tracking-widest italic">
                The League has seen no reason to request funds in this initial phase. All transactions, should they arise, will remain strictly <span class="text-white">Manager-to-Manager</span> via team accounts.
            </p>
        </div>

        <div class="pt-10 text-center opacity-20">
            <p class="text-[8px] text-gray-800 font-black uppercase tracking-[0.8em]">
                Elite Financial Oversight Node // Authorized 2025
            </p>
        </div>
    </div>
</div>`,



  'Team Lab': `
<div class="animate-in pb-40 px-6 md:px-16 space-y-20">
    <div class="pt-10 flex flex-col gap-6">
        <div class="flex items-center gap-4">
            <div class="h-[1px] w-12 bg-blue-500"></div>
            <span class="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em]">Sector: TACTICAL_DEVELOPMENT</span>
        </div>
        <h3 class="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.85]">
            Team <br><span class="text-transparent stroke-blue-500" style="-webkit-text-stroke: 1px #3b82f6;">Lab</span>
        </h3>
        <p class="text-gray-500 text-[11px] uppercase tracking-[0.3em] font-bold">Status: <span class="text-yellow-500 italic underline underline-offset-4 decoration-yellow-500/20">Under Construction</span></p>
    </div>

    <div class="relative p-12 md:p-24 bg-[#020617] border border-blue-500/10 rounded-[4rem] overflow-hidden flex flex-col items-center justify-center text-center shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
        
        <div class="absolute inset-0 opacity-10 pointer-events-none" 
             style="background-image: linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px); background-size: 40px 40px;">
        </div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_80%)]"></div>

        <div class="relative z-10 max-w-2xl">
            <div class="w-24 h-24 bg-blue-600/5 text-blue-500 rounded-[2.5rem] flex items-center justify-center mx-auto mb-12 border border-blue-500/20 shadow-[0_0_60px_rgba(59,130,246,0.1)]">
                <i class="fas fa-compass-drafting text-4xl animate-spin-slow" style="animation: spin 10s linear infinite;"></i>
            </div>
            
            <h4 class="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none mb-10">
                Elite <br>
                <span class="text-blue-500">Engineering</span>
            </h4>

            <div class="inline-block px-8 py-3 bg-zinc-950 border border-white/5 rounded-2xl mb-12">
                <span class="text-[10px] text-gray-500 font-black uppercase tracking-[0.5em]">System: RE-ARCHITECTING_2025</span>
            </div>

            <p class="text-base md:text-lg text-gray-400 font-bold uppercase leading-[2.2] tracking-widest mb-16 italic">
                The interactive tactical suite is currently being <span class="text-white underline underline-offset-8 decoration-blue-500/30">hand-built</span> by Elite Engineers. Manual board management and formation logic are in the optimization phase.
            </p>

            <div class="p-10 bg-blue-600/5 border border-blue-500/10 rounded-[3rem]">
                <p class="text-[10px] text-blue-400 font-black uppercase tracking-[0.4em] leading-relaxed">
                    Check back after the Elite Cup Protocol Initialization.
                </p>
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-10">
        <div class="p-10 bg-white/[0.01] border border-dashed border-white/5 rounded-[3rem] flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
            <div class="w-16 h-16 rounded-3xl bg-blue-600/10 flex items-center justify-center text-blue-500">
                <i class="fas fa-microchip text-2xl"></i>
            </div>
            <div>
                <p class="text-[9px] text-blue-500 font-black uppercase tracking-[0.4em] mb-2">Pending Module</p>
                <p class="text-xl text-white font-black italic uppercase tracking-tight leading-none">Dynamic 5-11 Man Logic</p>
                <p class="text-[10px] text-gray-600 font-bold uppercase mt-3 tracking-widest">Architectural phase incomplete.</p>
            </div>
        </div>

        <div class="p-10 bg-white/[0.01] border border-dashed border-white/5 rounded-[3rem] flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
            <div class="w-16 h-16 rounded-3xl bg-blue-600/10 flex items-center justify-center text-blue-500">
                <i class="fas fa-share-nodes text-2xl"></i>
            </div>
            <div>
                <p class="text-[9px] text-blue-500 font-black uppercase tracking-[0.4em] mb-2">Pending Module</p>
                <p class="text-xl text-white font-black italic uppercase tracking-tight leading-none">Tactical Export Protocol</p>
                <p class="text-[10px] text-gray-600 font-bold uppercase mt-3 tracking-widest">Synchronizing with Main Node.</p>
            </div>
        </div>
    </div>

    <div class="pt-10 text-center">
        <p class="text-[8px] text-gray-800 font-black uppercase tracking-[0.8em]">
            Elite Engineering Division // Authorized Construction 2025
        </p>
    </div>
</div>`,



    
   'Pure Stream': `
<div class="animate-in pb-40 px-6 md:px-20 space-y-24">
    <div class="pt-16 flex flex-col items-center text-center">
        <div class="flex items-center gap-6 mb-8">
            <div class="h-[1px] w-8 bg-blue-500/30"></div>
            <span class="text-[9px] text-blue-500 font-black uppercase tracking-[0.8em]">Elite_Broadcasting_Service</span>
            <div class="h-[1px] w-8 bg-blue-500/30"></div>
        </div>
        <h3 class="text-7xl md:text-9xl font-black italic uppercase tracking-tighter text-white leading-none">
            PURE <br>
            <span class="text-transparent stroke-blue-500" style="-webkit-text-stroke: 1px #3b82f6;">STREAM</span>
        </h3>
    </div>

    <div class="relative group">
        <div class="absolute -inset-1 bg-blue-500/5 rounded-[5rem] blur-2xl"></div>

        <div class="relative aspect-[9/16] md:aspect-video bg-black border border-white/5 rounded-[4.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.9)]">
            
            <div class="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen bg-[url('https://media.giphy.com/media/oEI9uWUicGLeU/giphy.gif')] bg-cover"></div>
            
            <div class="absolute inset-0 pointer-events-none" 
                 style="background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03)); background-size: 100% 4px, 3px 100%;">
            </div>

            <div class="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <div class="relative mb-12">
                    <div class="w-32 h-32 rounded-full border border-blue-500/10 flex items-center justify-center">
                        <i class="fas fa-wifi text-blue-500/20 text-4xl animate-pulse"></i>
                    </div>
                    <div class="absolute inset-0 animate-spin-slow" style="animation: spin 8s linear infinite;">
                        <div class="w-3 h-3 bg-blue-500 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[0_0_15px_#3b82f6]"></div>
                    </div>
                </div>

                <h4 class="text-2xl font-black text-white uppercase italic tracking-[0.5em] mb-6">Initialising...</h4>
                
                <div class="max-w-xs space-y-6">
                    <p class="text-[10px] text-gray-500 font-bold uppercase leading-[2.5] tracking-[0.3em]">
                        The Elite Media Node is currently <span class="text-blue-500">Scanning for Signal</span>. High-definition match-day downlink is restricted until the 2025 opening ceremony.
                    </p>
                    <div class="h-[1px] w-12 bg-blue-500/20 mx-auto"></div>
                </div>
            </div>

            <div class="absolute top-12 left-12 flex flex-col gap-2">
                <span class="text-[8px] text-blue-500/40 font-mono font-black tracking-widest uppercase">REC [OFF]</span>
                <span class="text-[8px] text-gray-700 font-mono font-black tracking-widest uppercase">4K_ULTRA_HD</span>
            </div>

            <div class="absolute bottom-12 left-12 flex items-center gap-4">
                <div class="w-2 h-2 rounded-full bg-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                <span class="text-[9px] text-gray-500 font-black uppercase tracking-[0.4em]">Uplink: Standing By...</span>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 pt-10">
        <div class="flex flex-col items-center md:items-start gap-4">
            <span class="text-[8px] text-gray-600 font-black uppercase tracking-[0.5em]">Encryption</span>
            <span class="text-xs text-blue-500 font-black uppercase italic tracking-widest">Elite_Level_01</span>
        </div>
        <div class="flex flex-col items-center gap-4">
            <span class="text-[8px] text-gray-600 font-black uppercase tracking-[0.5em]">Coordinates</span>
            <span class="text-xs text-white font-black uppercase italic tracking-widest">Sat_Node: 20.25_N</span>
        </div>
        <div class="flex flex-col items-center md:items-end gap-4">
            <span class="text-[8px] text-gray-600 font-black uppercase tracking-[0.5em]">Status</span>
            <span class="text-xs text-blue-500 font-black uppercase italic tracking-widest animate-pulse underline underline-offset-8">Searching</span>
        </div>
    </div>

    <div class="pt-20 text-center opacity-10">
        <p class="text-[7px] text-white font-black uppercase tracking-[1em]">
            Elite Broadcast Security Protocol // No Signal Detected
        </p>
    </div>
</div>`,



'Messages': `
<div class="animate-in pb-40 px-6 md:px-16 space-y-16">
    <div class="pt-10 flex flex-col gap-6">
        <div class="flex items-center gap-4">
            <div class="h-[1px] w-12 bg-blue-500"></div>
            <span class="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em]">Sector: COMMS_CENTER</span>
        </div>
        <h3 class="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.85]">
            Secure <br><span class="text-transparent stroke-blue-500" style="-webkit-text-stroke: 1px #3b82f6;">Comms</span>
        </h3>
        <p class="text-gray-500 text-[11px] uppercase tracking-[0.3em] font-bold">Status: <span class="text-yellow-500 italic">Establishing Connection...</span></p>
    </div>

    <div class="relative min-h-[500px] bg-[#020617] border border-blue-500/10 rounded-[4rem] overflow-hidden flex flex-col p-8 md:p-16 shadow-2xl">
        
        <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style="background-image: radial-gradient(#3b82f6 1px, transparent 1px); background-size: 20px 20px;"></div>

        <div class="relative z-10 flex justify-between items-center mb-16 border-b border-white/5 pb-8">
            <div class="flex items-center gap-4">
                <div class="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
                <span class="text-[9px] text-gray-500 font-black uppercase tracking-widest">Signal: WEAK_ENCRYPTION</span>
            </div>
            <span class="text-[8px] text-gray-700 font-mono">NODE_771_ALPHA</span>
        </div>

        <div class="flex-1 space-y-12 relative z-10">
            <div class="max-w-md space-y-4">
                <div class="flex items-center gap-3">
                    <span class="text-[8px] text-blue-500 font-black uppercase tracking-widest px-3 py-1 bg-blue-500/5 border border-blue-500/20 rounded-full">System Admin</span>
                    <span class="text-[8px] text-gray-700 font-mono">12:00:00</span>
                </div>
                <div class="p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] rounded-tl-none">
                    <div class="flex gap-4">
                        <div class="h-1 w-8 bg-blue-500/40 rounded-full mt-2"></div>
                        <p class="text-xs text-gray-400 font-bold uppercase leading-loose tracking-widest italic">
                            Comms bridge protocol is currently <span class="text-white">Under Construction</span>. Direct Peer-to-Peer messaging is being architected for the Elite 2025 season.
                        </p>
                    </div>
                </div>
            </div>

            <div class="max-w-md ml-auto space-y-4 opacity-30">
                <div class="flex items-center justify-end gap-3">
                    <span class="text-[8px] text-gray-700 font-mono">12:00:01</span>
                    <span class="text-[8px] text-gray-500 font-black uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full">Member Node</span>
                </div>
                <div class="p-8 bg-blue-500/5 border border-blue-500/10 rounded-[2.5rem] rounded-tr-none blur-[2px]">
                    <p class="text-[10px] text-blue-300 font-bold uppercase tracking-widest">Incoming encrypted stream detected... Data unreadable.</p>
                </div>
            </div>
        </div>

        <div class="mt-auto pt-16">
            <div class="relative p-10 bg-blue-600/5 border border-blue-500/10 rounded-[3rem] text-center overflow-hidden">
                <div class="relative z-10 flex flex-col items-center gap-4">
                    <i class="fas fa-lock text-blue-500 mb-2"></i>
                    <h5 class="text-white font-black uppercase italic text-sm tracking-widest">Next Update Required</h5>
                    <p class="text-[9px] text-blue-400/60 font-black uppercase tracking-[0.4em]">Stay Tuned for Comms v2.0 Initialization</p>
                </div>
                <div class="absolute inset-0 bg-blue-500/5 animate-pulse"></div>
            </div>
        </div>
    </div>

    <div class="pt-10 text-center opacity-20">
        <p class="text-[8px] text-gray-800 font-black uppercase tracking-[0.8em]">
            Elite Secure Uplink // Authorized Personnel Only
        </p>
    </div>
</div>`,
};

/**
 * MIKOKO LEAGUE FULL SYSTEM SCRIPT
 * Version: 7.0 (Franchise Naming Protocol)
 */

// --- 1. GLOBAL DATABASE STATE (8 TEAMS - DEFAULT NIL) ---
let players = JSON.parse(localStorage.getItem('mikoko_players')) || [];
let teams = JSON.parse(localStorage.getItem('mikoko_teams')) || [
    { id: '01A', name: "NIL", members: [] },
    { id: '02B', name: "NIL", members: [] },
    { id: '03C', name: "NIL", members: [] },
    { id: '04D', name: "NIL", members: [] },
    { id: '05E', name: "NIL", members: [] },
    { id: '06I', name: "NIL", members: [] },
    { id: '07M', name: "NIL", members: [] },
    { id: '08R', name: "NIL", members: [] }
];

const MAX_SQUAD_SIZE = 10;
const TOTAL_SLOTS = 80; 
const ADMIN_PASSCODE = "123789";

// --- 2. MASTER UI CONTROLLER ---
function updateView(title) {
    const viewTitle = document.getElementById('viewTitle');
    if (viewTitle) viewTitle.innerText = title;

    const allLinks = document.querySelectorAll('.sidebar-item');
    allLinks.forEach(link => {
        link.classList.remove('active');
        const span = link.querySelector('span');
        if (span && span.innerText.trim() === title) link.classList.add('active');
    });

    const mainDisplay = document.getElementById('mainDisplay');
    if (mainDisplay) {
        mainDisplay.style.opacity = '0';
        
        setTimeout(() => {
            if (title === 'Player Selection' || title === 'Team Selection') {
                renderLeagueSystem(title);
            } else {
                mainDisplay.innerHTML = (typeof contentData !== 'undefined' && contentData[title]) 
                    ? contentData[title] 
                    : `<div class="p-10 text-center"><h2 class="text-white font-black italic">${title}</h2><p class="text-gray-500 text-xs mt-2">DATA NODE OFFLINE</p></div>`;
            }
            
            mainDisplay.style.opacity = '1';
            startSystemSync(); 
        }, 200);
    }

    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (window.innerWidth < 768 && sidebar && !sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.add('-translate-x-full');
        if (overlay) overlay.classList.add('hidden');
    }
}

// --- 3. DATA & SYSTEM SYNC ---
function startSystemSync() {
    const ids = {
        'stat-total-players': players.length,
        'stat-confirmed-players': players.filter(p => p.status === 'Confirmed').length,
        'stat-pending-players': players.filter(p => p.status === 'Pending').length
    };

    Object.entries(ids).forEach(([id, val]) => {
        const el = document.getElementById(id);
        if (el) el.innerText = val;
    });

    const timerElement = document.getElementById('countdownTimer');
    if (timerElement) {
        const targetDate = new Date("Jan 1, 2026 00:00:00").getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);
        timerElement.innerText = `SYNCING: ${d}D ${h}H ${m}M ${s}S`;
    }
}

// --- 4. ADMIN AUTH ---
function openAuthPortal() {
    const portal = document.getElementById('adminAuthPortal');
    const input = document.getElementById('adminPassInput');
    if (!portal) return;
    input.value = "";
    portal.classList.remove('hidden');
    setTimeout(() => {
        portal.classList.remove('opacity-0');
        input.focus();
    }, 10);
}

function closeAuthPortal() {
    const portal = document.getElementById('adminAuthPortal');
    if (portal) {
        portal.classList.add('opacity-0');
        setTimeout(() => portal.classList.add('hidden'), 500);
    }
    updateView('Overview');
}

function verifyAdminAccess() {
    const input = document.getElementById('adminPassInput').value;
    if (input === ADMIN_PASSCODE) {
        const portal = document.getElementById('adminAuthPortal');
        portal.classList.add('opacity-0');
        setTimeout(() => {
            portal.classList.add('hidden');
            executeAdminRender();
        }, 500);
    } else {
        showGlobalAlert("fas fa-exclamation-triangle", "Auth Failed", "Invalid Credentials.");
        closeAuthPortal();
    }
}

// --- 5. RENDER SYSTEM PAGES ---
function renderLeagueSystem(mode) {
    const mainDisplay = document.getElementById('mainDisplay');

    if (mode === 'Team Selection') {
        openAuthPortal();
        return;
    }

 if (mode === 'Team Selection' || mode === 'Player Selection') {
    const isTeam = mode === 'Team Selection';
    const sectorLabel = isTeam ? 'UNIT_ASSIGNMENT' : 'PERSONNEL_REGISTRY';
    const titleText = isTeam ? 'Team Selection' : 'Player Selection';

    mainDisplay.innerHTML = `
        <div class="animate-in pb-60 px-4 md:px-16 space-y-20">
            
            <div class="pt-12 flex flex-col gap-8">
                <div class="flex items-center gap-4">
                    <div class="h-[2px] w-10 bg-blue-500"></div>
                    <span class="text-[9px] text-blue-500 font-black uppercase tracking-[0.6em]">Sector: ${sectorLabel}</span>
                </div>
                <h3 class="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.85]">
                    ${titleText.split(' ')[0]} <br>
                    <span class="text-transparent stroke-blue-500" style="-webkit-text-stroke: 1px #3b82f6;">
                        ${titleText.split(' ')[1]}
                    </span>
                </h3>
            </div>

            <div class="relative p-10 md:p-24 bg-[#020617] border border-blue-500/10 rounded-[4rem] overflow-hidden flex flex-col items-center justify-center text-center shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                
                <div class="absolute inset-0 opacity-20 pointer-events-none">
                    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_80%)]"></div>
                </div>

                <div class="relative z-10 max-w-2xl w-full">
                    <div class="w-20 h-20 bg-blue-600/5 text-blue-500 rounded-[2rem] flex items-center justify-center mx-auto mb-12 border border-blue-500/20 shadow-[0_0_60px_rgba(59,130,246,0.1)]">
                        <i class="fas ${isTeam ? 'fa-users-slash' : 'fa-user-lock'} text-3xl animate-pulse"></i>
                    </div>
                    
                    <h4 class="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase leading-tight mb-10">
                        System <br>
                        <span class="text-blue-500">Standby</span>
                    </h4>

                    <div class="inline-block px-6 py-3 bg-zinc-950 border border-white/5 rounded-2xl mb-12">
                        <span class="text-[9px] text-gray-500 font-black uppercase tracking-[0.4em]">Node: PENDING_APPROVAL</span>
                    </div>

                    <p class="text-sm md:text-lg text-gray-400 font-bold uppercase leading-[2.2] tracking-widest mb-16 italic px-2">
                        This tactical node is currently <span class="text-white">not ready for deployment</span>. 
                        Access remains <span class="text-blue-500 underline underline-offset-8 decoration-blue-500/30">restricted</span> 
                        until coordinator verification.
                    </p>

                    <div class="p-10 bg-blue-600/5 border border-blue-500/10 rounded-[3rem]">
                        <p class="text-[10px] text-blue-400 font-black uppercase tracking-[0.5em] leading-relaxed">
                            Stay tuned for the update.
                        </p>
                    </div>
                </div>
            </div>

            <div class="opacity-10 pointer-events-none select-none px-2 pb-20">
                <div class="flex items-center gap-6 p-8 border border-white/5 rounded-[2.5rem]">
                    <i class="fas fa-satellite-dish animate-bounce text-blue-500"></i>
                    <span class="text-[8px] text-gray-700 font-black uppercase tracking-widest leading-loose">
                        Connection: Refused by Committee Node...
                    </span>
                </div>
            </div>
        </div>`;
}
}

function executeAdminRender() {
    const mainDisplay = document.getElementById('mainDisplay');
    const firstPending = players.find(p => p.status === 'Pending');

    mainDisplay.innerHTML = `
        <div class="space-y-8 animate-in pb-20">
            <div class="bg-red-600/10 border border-red-600/20 p-6 rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-4 backdrop-blur-md">
                <div>
                    <h3 class="text-white font-black uppercase italic">Franchise Admin Terminal</h3>
                    <p class="text-[9px] text-red-500 font-bold uppercase tracking-widest">Elite-8 Control Module</p>
                </div>
                <div class="bg-black/50 px-4 py-3 rounded-xl border border-white/10 flex items-center gap-3">
                    <span class="text-[9px] text-gray-500 uppercase font-black">Next In Queue:</span>
                    <span class="text-xs text-white font-bold italic uppercase">${firstPending ? firstPending.name : 'NO PENDING'}</span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                ${teams.map(t => `
                    <div class="flex flex-col h-[400px] bg-zinc-900/50 border border-white/10 rounded-[2rem] overflow-hidden group hover:border-red-600/30 transition-all">
                        <div class="p-5 pb-2">
                            <div class="flex justify-between items-start">
                                <h4 class="text-white font-black italic uppercase text-sm truncate ${t.name === 'NIL' ? 'text-gray-600' : 'text-white'}">${t.name}</h4>
                                <button onclick="renameTeam('${t.id}')" class="text-[10px] text-red-600 hover:text-white"><i class="fas fa-pen"></i></button>
                            </div>
                            <p class="text-[9px] text-red-600 font-bold uppercase tracking-widest mt-1">${t.members.length}/10 UNITS</p>
                        </div>

                        <div class="flex-1 overflow-y-auto px-5 py-2 custom-scrollbar space-y-2">
                            ${t.members.map(m => `
                                <div class="flex justify-between items-center p-3 bg-white/[0.03] border border-white/5 rounded-xl group/item">
                                    <p class="text-[9px] text-zinc-300 font-mono uppercase font-bold">${m}</p>
                                    <button onclick="firePlayer('${m}', '${t.id}')" class="text-red-600 opacity-0 group-hover/item:opacity-100 transition-all">
                                        <i class="fas fa-trash-alt text-[10px]"></i>
                                    </button>
                                </div>`).join('') || '<div class="h-full flex flex-col items-center justify-center opacity-10 gap-2"><i class="fas fa-shield-blank text-2xl"></i><span class="text-[8px] font-black uppercase italic">Empty Slot</span></div>'}
                        </div>

                        <div class="p-5 pt-2 mt-auto">
                            <button onclick="assignPlayerToTeam(${firstPending ? firstPending.id : null}, '${t.id}')" 
                                class="w-full py-4 rounded-xl text-[9px] font-black uppercase transition-all 
                                ${firstPending && t.members.length < MAX_SQUAD_SIZE ? 'bg-red-600 text-white shadow-lg' : 'bg-white/5 text-gray-600 cursor-not-allowed'}">
                                ${firstPending ? (t.members.length < MAX_SQUAD_SIZE ? 'Assign' : 'Full') : 'Queue Empty'}
                            </button>
                        </div>
                    </div>`).join('')}
            </div>
        </div>`;
}

// --- 6. CORE LOGIC ---
function saveLeagueData() {
    localStorage.setItem('mikoko_players', JSON.stringify(players));
    localStorage.setItem('mikoko_teams', JSON.stringify(teams));
    startSystemSync();
}

function renameTeam(teamId) {
    const team = teams.find(t => t.id === teamId);
    const newName = prompt("ENTER NEW FRANCHISE NAME:", team.name === "NIL" ? "" : team.name);
    
    if (newName && newName.trim() !== "") {
        const oldName = team.name;
        team.name = newName.trim().toUpperCase();
        
        // Update all players currently in this team
        players.forEach(p => {
            if (p.team === oldName) p.team = team.name;
        });

        saveLeagueData();
        executeAdminRender();
        showGlobalAlert("fas fa-id-card", "Franchise Branded", `Team ${teamId} is now ${team.name}`);
    }
}

function registerPlayer() {
    const nameInput = document.getElementById('playerNameInput');
    if (!nameInput || !nameInput.value.trim()) return;

    if (players.length >= TOTAL_SLOTS) {
        showGlobalAlert("fas fa-exclamation-circle", "Network Full", "League capacity has been reached.");
        return;
    }

    players.push({ id: Date.now(), name: nameInput.value.trim(), status: 'Pending', team: 'Unassigned' });
    saveLeagueData();
    showGlobalAlert("fas fa-hourglass-half", "Entry Logged", "Awaiting Admin Assignment.");
    nameInput.value = "";
    renderLeagueSystem('Player Selection'); 
}

function assignPlayerToTeam(playerId, teamId) {
    if (!playerId) return;
    const team = teams.find(t => t.id === teamId);
    const player = players.find(p => p.id === playerId);
    
    if (team.name === "NIL") {
        showGlobalAlert("fas fa-lock", "Access Denied", "Purchase franchise to unlock team assignment.");
        return;
    }

    if (team.members.length >= MAX_SQUAD_SIZE) {
        showGlobalAlert("fas fa-users", "Squad Full", "Max capacity reached.");
        return;
    }

    player.status = 'Confirmed';
    player.team = team.name;
    team.members.push(player.name);
    
    saveLeagueData();
    executeAdminRender();
    showGlobalAlert("fas fa-check-double", "Unit Deployed", `${player.name} joined ${team.name}.`);
}

function firePlayer(playerName, teamId) {
    const team = teams.find(t => t.id === teamId);
    const player = players.find(p => p.name === playerName);
    team.members = team.members.filter(m => m !== playerName);
    if (player) { player.status = 'Pending'; player.team = 'Unassigned'; }
    saveLeagueData();
    executeAdminRender();
}

function showGlobalAlert(icon, title, message) {
    const overlay = document.getElementById('globalAlert');
    if (!overlay) return;
    document.getElementById('alertIcon').innerHTML = `<i class="${icon} text-red-600 text-5xl"></i>`;
    document.getElementById('alertTitle').innerText = title;
    document.getElementById('alertMessage').innerText = message;
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => overlay.classList.add('opacity-0', 'pointer-events-none'), 3000);
}

// --- 7. INITIALIZATION ---
window.onload = () => {
    startSystemSync();
    updateView('Overview');
};
/**
 * MIKOKO LEAGUE - DEDICATED LEADERBOARD ENGINE
 * Handles Expansion and Display for Goals & Assists
 */

// --- 1. GOALS LEADERBOARD FUNCTIONS ---
function toggleFullLeaderboard() {
    const extraRows = document.querySelectorAll('.extra-players');
    const btn = document.getElementById('toggleGoalsBtn');
    
    // Check if currently hidden
    const isHidden = extraRows[0].classList.contains('hidden');
    
    if (isHidden) {
        extraRows.forEach(row => {
            row.classList.remove('hidden');
            row.classList.add('flex'); // Ensure flex layout remains
        });
        btn.innerText = "Collapse Rankings";
    } else {
        extraRows.forEach(row => {
            row.classList.add('hidden');
            row.classList.remove('flex');
        });
        btn.innerText = "View Full Player Stats (Top 10)";
    }
}

// --- 2. ASSISTS LEADERBOARD FUNCTIONS ---
function toggleAssistsLeaderboard() {
    const extraRows = document.querySelectorAll('.extra-assists');
    const btn = document.getElementById('toggleAssistsBtn');
    
    // Check if currently hidden
    const isHidden = extraRows[0].classList.contains('hidden');
    
    if (isHidden) {
        extraRows.forEach(row => {
            row.classList.remove('hidden');
            row.classList.add('flex');
        });
        btn.innerText = "Collapse Rankings";
    } else {
        extraRows.forEach(row => {
            row.classList.add('hidden');
            row.classList.remove('flex');
        });
        btn.innerText = "View Full Playmaker Stats (Top 10)";
    }
}

// --- 3. DATA SYNC (Optional: Syncs names if data exists) ---
function syncLeaderboardData() {
    // If you want these to pull from your player database automatically
    if (typeof players !== 'undefined' && players.length > 0) {
        // This is where you would map your players into the HTML rows
        // If you prefer to keep them static for now, this can stay empty
    }
}



/// for the team lab
// --- TACTICAL LAB ENGINE ---

function initTacticalLab() {
    const bench = document.getElementById('playerBench');
    const matchType = document.getElementById('matchType').value;
    if(!bench) return;

    bench.innerHTML = '';
    // Always provide 12 units for the coach to choose from
    for(let i = 1; i <= 12; i++) {
        const playerDot = document.createElement('div');
        playerDot.id = `tactical-player-${i}`;
        playerDot.draggable = true;
        playerDot.ondragstart = dragPlayer;
        playerDot.className = "w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-[10px] text-white font-black cursor-move border-2 border-white/20 shadow-lg";
        playerDot.innerText = i;
        bench.appendChild(playerDot);
    }
}

function allowDrop(ev) { ev.preventDefault(); }

function dragPlayer(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dropPlayer(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const player = document.getElementById(data);
    const dropZone = document.getElementById('dropZone');
    
    // Calculate position relative to the pitch
    const rect = dropZone.getBoundingClientRect();
    const x = ((ev.clientX - rect.left) / rect.width) * 100;
    const y = ((ev.clientY - rect.top) / rect.height) * 100;

    player.style.position = 'absolute';
    player.style.left = `${x}%`;
    player.style.top = `${y}%`;
    player.style.transform = 'translate(-50%, -50%)';
    
    dropZone.appendChild(player);
}

function applyFormation(type) {
    const players = Array.from(document.querySelectorAll('[id^="tactical-player-"]'));
    const dropZone = document.getElementById('dropZone');
    
    if(type === 'clear') {
        initTacticalLab();
        return;
    }

    // Basic coordinate logic for formations
    const formations = {
        '4-4-2': [
            {t:90, l:50}, // GK
            {t:70, l:20}, {t:70, l:40}, {t:70, l:60}, {t:70, l:80}, // DEF
            {t:40, l:20}, {t:40, l:40}, {t:40, l:60}, {t:40, l:80}, // MID
            {t:15, l:40}, {t:15, l:60} // ATT
        ]
    };

    const coords = formations[type] || [];
    coords.forEach((pos, i) => {
        if(players[i]) {
            players[i].style.position = 'absolute';
            players[i].style.left = `${pos.l}%`;
            players[i].style.top = `${pos.t}%`;
            players[i].style.transform = 'translate(-50%, -50%)';
            dropZone.appendChild(players[i]);
        }
    });
}

function saveTacticalMap() {
    const pitch = document.getElementById('tacticalPitch');
    // Note: requires <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    html2canvas(pitch).then(canvas => {
        const link = document.createElement('a');
        link.download = `Mikoko-Tactics-${Date.now()}.png`;
        link.href = canvas.toDataURL();
        link.click();
        showGlobalAlert("fas fa-file-download", "Tactics Exported", "Saved to your device gallery.");
    });
}

function generateTacticalLink() {
    const teamName = document.getElementById('tacticalTeamName').value || "Unnamed Squad";
    const shareUrl = window.location.href.split('?')[0] + "?view=TeamLab&team=" + btoa(teamName);
    
    navigator.clipboard.writeText(shareUrl);
    showGlobalAlert("fas fa-link", "Link Generated", "Share this link with your squad group.");
}

///// for the upcoming
// --- FIXTURE MODAL ENGINE ---
function openFixtureDetails(id, home, away, time, venue) {
    const modal = document.getElementById('fixtureModal');
    const content = document.getElementById('modalContent');
    
    // Set Modal Data
    document.getElementById('modalTeamName').innerHTML = `${home} <span class="text-red-600">vs</span> ${away}`;
    
    // You can customize this info per ID if you want specific referees/weather
    const detailsHTML = `
        <div class="space-y-4 text-left mt-6">
            <div class="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p class="text-[8px] text-red-600 uppercase font-black mb-1 tracking-widest">Protocol ID</p>
                <p class="text-xs text-white font-bold uppercase">MKK-S03-0${id}</p>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <div class="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p class="text-[8px] text-gray-500 uppercase font-black mb-1 tracking-widest">Venue</p>
                    <p class="text-[10px] text-white font-bold uppercase">${venue}</p>
                </div>
                <div class="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p class="text-[8px] text-gray-500 uppercase font-black mb-1 tracking-widest">Kick-off</p>
                    <p class="text-[10px] text-white font-bold uppercase">${time} WAT</p>
                </div>
            </div>
            <div class="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p class="text-[8px] text-gray-500 uppercase font-black mb-1 tracking-widest">Match Officials</p>
                <p class="text-[10px] text-gray-400 font-bold uppercase">Automated AI System // Ref: ALPHA-0${id}</p>
            </div>
        </div>
    `;

    // Inject and Show
    const detailContainer = document.querySelector('#fixtureModal .space-y-4');
    if(detailContainer) detailContainer.outerHTML = detailsHTML;
    
    modal.classList.remove('pointer-events-none', 'opacity-0');
    content.classList.remove('scale-95');
}

function closeFixtureModal() {
    const modal = document.getElementById('fixtureModal');
    const content = document.getElementById('modalContent');
    modal.classList.add('opacity-0', 'pointer-events-none');
    content.classList.add('scale-95');
}

// --- PUSH NOTIFICATION ENGINE ---
function broadcastPush(home, away) {
    // Show a global alert (You can use your globalAlert ID if it exists)
    const alertBox = document.getElementById('globalAlert');
    const alertTitle = document.getElementById('alertTitle');
    const alertMsg = document.getElementById('alertMessage');

    alertTitle.innerText = "SATELLITE UPLINK ACTIVE";
    alertMsg.innerText = `Push Notification Sent: ${home} vs ${away} is now confirmed for Matchday 01.`;
    
    // Add visual feedback to button
    event.currentTarget.innerHTML = '<i class="fas fa-check"></i> <span>Sent</span>';
    event.currentTarget.classList.add('bg-green-600', 'text-white');

    // Show Alert
    alertBox.classList.remove('opacity-0', 'pointer-events-none');
    
    // Hide after 3 seconds
    setTimeout(() => {
        alertBox.classList.add('opacity-0', 'pointer-events-none');
    }, 3000);
}


/// for the digital clock
/**
 * ELITE LEAGUE CORE TIME ENGINE
 * Synchronizes the Digital Clock in the Command Center
 */
function runEliteClock() {
    const update = () => {
        const clockTarget = document.getElementById('digitalClock');
        
        // If the element doesn't exist (user is on another page), stop trying
        if (!clockTarget) return;

        const now = new Date();
        const timeString = now.toLocaleTimeString('en-GB', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });

        clockTarget.textContent = timeString;
    };

    // Update every second
    setInterval(update, 1000);
    update(); // Initial call
}

// Start the engine
runEliteClock();


/// for the intel and initial button
// UNIQUE DATA FOR EACH MATCH NODE
const eliteMatchIntel = {
    1: { prob: "52%", scout: "CSC-300 testing new formation." },
    2: { prob: "48%", scout: "LAW-100 high pressing anticipated." },
    3: { prob: "50%", scout: "Internal Circuit rivalry; zero margin for error." },
    4: { prob: "65%", scout: "CSC-400 physical dominance predicted." },
    5: { prob: "50%", scout: "Tactical deadlock expected in the LAW node." },
    6: { prob: "55%", scout: "Final matchday 01 calibration match." }
};

/**
 * PROTOCOL: OPEN INTEL MODAL
 * Triggered by the "Intel" button to show match-specific tactical data.
 */
function openFixtureDetails(id, home, away) {
    const modal = document.getElementById('eliteModal');
    const body = document.getElementById('modalBody');
    const title = document.getElementById('modalTitle');
    const intel = eliteMatchIntel[id] || { prob: "??", scout: "No data available." };

    // Inject Match-Specific Header
    title.innerHTML = `${home} <span class="text-blue-500 px-2 italic">v</span> ${away}`;
    
    // Inject Dynamic Tactical Content
    body.innerHTML = `
        <div class="p-8 bg-blue-600/5 border border-blue-500/10 rounded-[2.5rem] text-center shadow-inner">
            <p class="text-[9px] text-blue-500 font-black uppercase tracking-[0.3em] mb-2">Victory Projection</p>
            <p class="text-5xl font-black text-white italic tracking-tighter">${intel.prob}</p>
        </div>
        <div class="p-6 bg-white/[0.02] border border-white/5 rounded-3xl relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-5">
                <i class="fas fa-microchip text-3xl"></i>
            </div>
            <h5 class="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-3 italic">Scouting Report</h5>
            <p class="text-xs text-white font-bold italic leading-relaxed relative z-10">"${intel.scout}"</p>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

/**
 * PROTOCOL: INITIALIZE UPLINK
 * Triggered by the satellite icon to show a system-wide broadcast confirmation.
 */
function broadcastPush(home, away) {
    const btn = event.currentTarget;
    const original = btn.innerHTML;
    const alertBox = document.getElementById('eliteAlert');
    const alertMsg = document.getElementById('alertMessage');
    
    // 1. Enter Loading State
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-sync fa-spin"></i>`;
    
    setTimeout(() => {
        // 2. Show Success on Button
        btn.innerHTML = `<i class="fas fa-check text-green-500"></i>`;
        
        // 3. Trigger the Center Container Alert
        alertMsg.innerText = `Broadcast signal for ${home} vs ${away} has been successfully synchronized with the Elite Network.`;
        alertBox.classList.remove('hidden');
        
        // 4. Reset Button to original state after 2 seconds
        setTimeout(() => {
            btn.innerHTML = original;
            btn.disabled = false;
        }, 2000);
    }, 1000);
}

/**
 * PROTOCOL: CLOSE MODALS & ALERTS
 */
function closeEliteModal() {
    document.getElementById('eliteModal').classList.add('hidden');
}

function closeEliteAlert() {
    document.getElementById('eliteAlert').classList.add('hidden');
}




//// for the live sessions

/**
 * ELITE LEAGUE - SUPREME CONTROLLER
 * Optimized for Global Modals & Cross-Device Hold Logic
 */

// 1. GLOBAL STATE
let eliteLivePackets = [];
let scanTimeout; 

// --- 2. HOLD-TO-AUTHENTICATE LOGIC (For Fingerprint Button) ---
function startFingerprintScan(e) {
    if (e) e.preventDefault(); // Prevents mobile long-press menus
    
    // Add visual "Scanning" effect to the icon
    const icon = document.querySelector('.fa-fingerprint');
    if (icon) icon.style.color = '#f43f5e'; // Rose-500

    scanTimeout = setTimeout(() => {
        openAdminModal();
        cancelFingerprintScan(); // Reset icon color
    }, 1200); // User must hold for 1.2 seconds
}

function cancelFingerprintScan() {
    clearTimeout(scanTimeout);
    const icon = document.querySelector('.fa-fingerprint');
    if (icon) icon.style.color = ''; // Reset to CSS default
}

// --- 3. MASTER VIEW ENGINE (Handles Navigation) ---
function updateView(title) {
    // A. UI Updates (Sidebar & Title)
    const viewTitle = document.getElementById('viewTitle');
    if (viewTitle) viewTitle.innerText = title;

    const allLinks = document.querySelectorAll('.sidebar-item');
    allLinks.forEach(link => {
        link.classList.remove('active');
        const span = link.querySelector('span');
        if (span && span.innerText.trim() === title) link.classList.add('active');
    });

    // B. Main Display Injection
    const mainDisplay = document.getElementById('mainDisplay');
    if (mainDisplay) {
        mainDisplay.style.opacity = '0';
        
        setTimeout(() => {
            if (title === 'Player Selection' || title === 'Team Selection') {
                if (typeof renderLeagueSystem === 'function') renderLeagueSystem(title);
            } else {
                let htmlContent = "";
                // Check contentData (Original) then views (Elite)
                if (typeof contentData !== 'undefined' && contentData[title]) {
                    htmlContent = contentData[title];
                } else if (typeof views !== 'undefined' && views[title]) {
                    htmlContent = views[title];
                } else {
                    htmlContent = `<div class="p-10 text-center"><h2 class="text-white font-black italic">${title}</h2><p class="text-gray-500 text-xs mt-2">DATA NODE OFFLINE</p></div>`;
                }
                mainDisplay.innerHTML = htmlContent;
            }
            
            // C. Auto-Initialize Systems
            if (title === 'LiveSession' || title === 'Live Session') {
                initEliteCountdown();
            }
            if (title === 'News') {
                renderLiveInjection();
            }

            mainDisplay.style.opacity = '1';
            if (typeof startSystemSync === 'function') startSystemSync(); 
        }, 200);
    }

    // D. Mobile Sidebar Auto-Close
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (window.innerWidth < 768 && sidebar && !sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.add('-translate-x-full');
        if (overlay) overlay.classList.add('hidden');
    }
}

// --- 4. MODAL CONTROL (Interacts with index.html) ---
function openAdminModal() {
    const modal = document.getElementById('adminModal');
    if (modal) {
        modal.style.display = 'flex';
        // Auto-focus the input for faster entry
        setTimeout(() => document.getElementById('adminPin')?.focus(), 100);
    }
}

function verifyEliteAccess() {
    const pinField = document.getElementById('adminPin');
    if (pinField && pinField.value === '3478') {
        document.getElementById('adminModal').style.display = 'none';
        document.getElementById('broadcastModal').style.display = 'flex';
        pinField.value = ''; 
    } else {
        alert("ACCESS DENIED: KEY INVALID");
        if(pinField) pinField.value = '';
    }
}

// --- 5. BROADCAST & NEWS ENGINE ---
async function handleElitePublish() {
    const pubBtn = document.getElementById('publishBtn');
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;
    const imageInput = document.getElementById('imageUpload');
    
    if(!content) return alert("DATA PACKET EMPTY: TRANSMISSION ABORTED");

    pubBtn.disabled = true;
    pubBtn.innerHTML = `<i class="fas fa-spinner animate-spin"></i> ENCRYPTING...`;

    let imgSource = '';
    if (imageInput.files && imageInput.files[0]) {
        imgSource = URL.createObjectURL(imageInput.files[0]);
    }

    const packet = {
        id: "EP-" + Math.floor(Math.random() * 9000 + 1000),
        title: title || "AUTHORITY UPDATE",
        body: content,
        img: imgSource,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    eliteLivePackets.unshift(packet);
    if (eliteLivePackets.length > 2) eliteLivePackets.pop();

    setTimeout(() => {
        document.getElementById('broadcastModal').style.display = 'none';
        pubBtn.disabled = false;
        pubBtn.innerHTML = "Deploy Broadcast";
        
        // Clear inputs
        document.getElementById('postTitle').value = '';
        document.getElementById('postContent').value = '';
        if (imageInput) imageInput.value = '';
        
        alert("SIGNAL STABILIZED: BROADCAST LIVE");
    }, 1500);
}

function renderLiveInjection() {
    const injectionZone = document.getElementById('liveInjectionZone');
    if (!injectionZone) return;

    if (eliteLivePackets.length > 0) {
        // Hide the "Waiting for packets" notice if it exists
        const notice = document.getElementById('emptyLiveNotice');
        if (notice) notice.style.display = 'none';

        const postsHTML = eliteLivePackets.map(p => `
            <div class="bg-rose-500/5 border border-rose-500/20 rounded-[3rem] overflow-hidden animate-in slide-in-from-top duration-700 mb-8 shadow-xl">
                <div class="p-8 md:p-12">
                    <div class="flex justify-between items-center mb-6">
                        <h4 class="text-2xl font-black italic text-white uppercase tracking-tighter">${p.title}</h4>
                        <div class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-rose-500 rounded-full animate-ping"></span>
                            <span class="text-[9px] text-rose-500 font-black uppercase tracking-widest">Live Packet</span>
                        </div>
                    </div>
                    <p class="text-gray-400 text-sm font-bold uppercase leading-relaxed mb-6 italic">${p.body}</p>
                    ${p.img ? `<img src="${p.img}" class="w-full rounded-3xl border border-white/5 shadow-2xl mb-6">` : ''}
                    <div class="flex justify-between items-center border-t border-white/5 pt-6 text-[8px] text-gray-600 font-mono uppercase tracking-[0.3em]">
                        <span>ID: ${p.id}</span>
                        <span>${p.timestamp}</span>
                    </div>
                </div>
            </div>
        `).join('');

        // Prepend the stream header
        injectionZone.innerHTML = `
            <div class="flex items-center gap-4 mb-4 opacity-50">
                <span class="text-[10px] text-rose-500 font-black uppercase tracking-[0.4em]">Live Signal Stream</span>
                <div class="h-[1px] flex-1 bg-rose-500/20"></div>
            </div>
            ${postsHTML}
        `;
    }
}

// --- 6. TIMER ---
function initEliteCountdown() {
    const target = new Date();
    target.setHours(24, 0, 0, 0); 

    const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const diff = target - now;
        const timerEl = document.getElementById('timer');

        if (!timerEl) {
            clearInterval(timerInterval);
            return;
        }

        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        timerEl.innerHTML = `${h.toString().padStart(2, '0')} : ${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`;

        if (diff < 0) {
            clearInterval(timerInterval);
            document.getElementById('countdownContainer')?.classList.add('hidden');
            document.getElementById('liveStatus')?.classList.remove('hidden');
        }
    }, 1000);
}
