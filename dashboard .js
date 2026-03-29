/**
 * ELITE COMMAND CENTER v2.6
 * Quantum Data Controller
 */

const views = {
    'Overview': `
        <div class="view-active h-full flex flex-col justify-center max-w-2xl">
            <p class="text-blue-500 font-bold tracking-[0.4em] text-[10px] mb-4 uppercase font-mono">Quantum_Uplink_v2.6</p>
            <h1 class="text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-6 italic uppercase">Ready_for<br>Operations.</h1>
            <p class="text-slate-400 text-lg leading-relaxed mb-10 font-light italic">The March 2026 session is active. All nodes across the Faculty of Computing network are reporting 99.8% stability.</p>
            <div class="flex gap-4">
                <button class="px-10 py-4 bg-blue-600 text-white font-bold rounded-full text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-blue-600/30">Force Sync</button>
                <button class="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full text-[10px] uppercase tracking-[0.2em]">Audit Logs</button>
            </div>
        </div>`,

    'Hall of Fame': `
        <div class="view-active">
            <h2 class="text-5xl font-bold text-white italic tracking-tighter mb-10">LEGACY_ARCHIVE</h2>
            <div class="flex gap-6 overflow-x-auto pb-10 no-scrollbar">
                <div class="min-w-[320px] p-10 rounded-[3rem] bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20">
                    <i class="fas fa-crown text-amber-500 text-4xl mb-6"></i>
                    <h4 class="text-2xl font-bold text-white italic uppercase tracking-tighter">CSC_TITANS</h4>
                    <p class="text-slate-500 text-sm mt-2">2025 Undefeated Season MVP.</p>
                </div>
                <div class="min-w-[320px] p-10 rounded-[3rem] bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                    <i class="fas fa-medal text-blue-500 text-4xl mb-6"></i>
                    <h4 class="text-2xl font-bold text-white italic uppercase tracking-tighter">NXXT_PLAYER</h4>
                    <p class="text-slate-500 text-sm mt-2">Historic 42 Goal Payload.</p>
                </div>
            </div>
        </div>`,

    'Records': `
        <div class="view-active">
            <h2 class="text-5xl font-bold text-white italic tracking-tighter mb-8">QUANTUM_METRICS</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="record-row flex justify-between items-center">
                    <span class="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Max Single Match</span>
                    <span class="text-xl font-bold text-blue-400">12 GOALS</span>
                </div>
                <div class="record-row flex justify-between items-center">
                    <span class="text-[10px] font-mono text-slate-500 uppercase tracking-widest">System Latency</span>
                    <span class="text-xl font-bold text-amber-500">12ms</span>
                </div>
            </div>
        </div>`,

    'Database': `
        <div class="view-active h-full flex flex-col">
            <h2 class="text-5xl font-bold text-white italic tracking-tighter mb-8">UPLINK_DB</h2>
            <div class="flex-1 bg-black/40 rounded-[2.5rem] border border-white/5 overflow-y-auto no-scrollbar font-mono text-[11px]">
                <div class="grid grid-cols-4 p-6 border-b border-white/10 text-blue-500 font-black tracking-widest uppercase sticky top-0 bg-[#0a0a0a]">
                    <span>Entry_UUID</span><span>Status</span><span>Region</span><span>Action</span>
                </div>
                <div class="grid grid-cols-4 p-6 border-b border-white/5 hover:bg-white/5">
                    <span>PKT_MAR_29_01</span><span class="text-green-500">VERIFIED</span><span>PORT_HARCOURT</span><span class="text-blue-400 underline cursor-pointer">FETCH</span>
                </div>
            </div>
        </div>`
};

function updateView(viewName) {
    const container = document.getElementById('contentInjection');
    if (!container) return;

    // Update Dock Styling
    document.querySelectorAll('.dock-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-title') === viewName) item.classList.add('active');
    });

    // Animate out
    container.style.opacity = '0';
    container.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        container.innerHTML = views[viewName] || views['Overview'];
        // Animate in
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 250);
}

function startClock() {
    const clock = document.getElementById('digitalClock');
    if (!clock) return;
    setInterval(() => {
        const now = new Date();
        clock.innerText = now.toTimeString().split(' ')[0];
    }, 1000);
}

// 2026 BOOT SEQUENCE
function initDashboard() {
    console.log("Elite Quantum OS: Booting...");
    startClock();
    updateView('Overview');
}

// Ensure the script runs regardless of how it's loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDashboard);
} else {
    initDashboard();
}
