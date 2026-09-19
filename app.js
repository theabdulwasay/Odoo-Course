// Odoo for Business - Interactive Frontend Application Controller

let currentSessionId = "session-1a";
let currentTab = "tab-lesson";
let activeInterviewCategory = "All";
let areAllAnswersExpanded = false;

// LocalStorage Progress State Keys
const STORAGE_KEY_SESSIONS = "odoo_completed_sessions";
const STORAGE_KEY_LABS = "odoo_completed_labs";
const STORAGE_KEY_QUIZZES = "odoo_quiz_scores";

let completedSessions = JSON.parse(localStorage.getItem(STORAGE_KEY_SESSIONS)) || [];
let completedLabs = JSON.parse(localStorage.getItem(STORAGE_KEY_LABS)) || {};
let quizScores = JSON.parse(localStorage.getItem(STORAGE_KEY_QUIZZES)) || {};

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  renderSidebar();
  renderHomeWeeksGrid();
  updateProgressUI();

  // Keyboard shortcut listener for Ctrl+K
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      openSearchModal();
    }
    if (e.key === "Escape") {
      closeSearchModal();
      closeCertificateModal();
    }
  });
});

// Calculate Overall Course Completion Percentage
function calculateProgress() {
  const totalSessions = 12;
  const completedCount = completedSessions.length;
  return Math.round((completedCount / totalSessions) * 100);
}

function updateProgressUI() {
  const percent = calculateProgress();
  const progressBar = document.getElementById("overallProgressBar");
  const progressText = document.getElementById("overallProgressText");

  if (progressBar && progressText) {
    progressBar.style.width = percent + "%";
    progressText.textContent = percent + "%";
  }

  renderSidebar();
}

// Sidebar Curriculum Navigator
function renderSidebar() {
  const container = document.getElementById("weeksNavContainer");
  if (!container) return;

  container.innerHTML = "";

  ODOO_COURSE_DATA.weeks.forEach((week) => {
    const weekEl = document.createElement("div");
    weekEl.className = "space-y-1";

    const isWeekComplete = week.sessions.every((s) => completedSessions.includes(s.id));

    let sessionsHTML = "";
    week.sessions.forEach((s) => {
      const isDone = completedSessions.includes(s.id);
      const isActive = s.id === currentSessionId && document.getElementById("sessionWorkspace").classList.contains("hidden") === false;

      sessionsHTML += `
        <button onclick="loadSession('${s.id}')"
          class="sidebar-nav-item w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition ${isActive ? "active" : "text-slate-700 font-semibold"}">
          <div class="flex items-center space-x-2 truncate">
            <span class="font-mono font-bold ${isDone ? "text-emerald-600" : "text-slate-400"}">${s.code}</span>
            <span class="truncate">${s.title}</span>
          </div>
          ${isDone ? '<i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-500 shrink-0"></i>' : ''}
        </button>
      `;
    });

    weekEl.innerHTML = `
      <div class="px-2 py-1 flex items-center justify-between text-xs font-bold text-slate-800">
        <span class="truncate">W${week.number}: ${week.theme}</span>
        ${isWeekComplete ? '<span class="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">Done</span>' : ''}
      </div>
      <div class="pl-2 space-y-0.5 border-l-2 border-slate-100 ml-2">
        ${sessionsHTML}
      </div>
    `;

    container.appendChild(weekEl);
  });

  if (window.lucide) lucide.createIcons();
}

// Render Home Grid Cards
function renderHomeWeeksGrid() {
  const grid = document.getElementById("homeWeeksGrid");
  if (!grid) return;

  grid.innerHTML = "";

  ODOO_COURSE_DATA.weeks.forEach((week) => {
    const isWeekDone = week.sessions.every((s) => completedSessions.includes(s.id));

    const card = document.createElement("div");
    card.className = "bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition space-y-3";

    let sessionButtons = "";
    week.sessions.forEach((s) => {
      const isDone = completedSessions.includes(s.id);
      sessionButtons += `
        <button onclick="loadSession('${s.id}')"
          class="flex-1 flex items-center justify-between p-2.5 bg-slate-50 hover:bg-purple-50 hover:border-purple-200 border rounded-xl text-xs text-left transition">
          <div class="flex items-center space-x-2">
            <span class="font-bold text-odoo-purple font-mono">${s.code}</span>
            <span class="font-semibold text-slate-800 truncate">${s.title}</span>
          </div>
          ${isDone ? '<i data-lucide="check" class="w-4 h-4 text-emerald-600"></i>' : '<i data-lucide="arrow-right" class="w-3.5 h-3.5 text-slate-400"></i>'}
        </button>
      `;
    });

    card.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold px-2.5 py-1 bg-purple-100 text-purple-800 rounded-lg">Week ${week.number}</span>
        <span class="text-xs text-slate-500 font-semibold">${week.hours} Training Hours</span>
      </div>
      <h4 class="font-bold text-slate-900 text-base">${week.theme}</h4>
      <p class="text-xs text-slate-600 leading-relaxed font-medium">${week.summary}</p>
      
      <div class="flex flex-wrap gap-1 pt-1">
        ${week.appsCovered.map(app => `<span class="px-2 py-0.5 bg-teal-50 text-teal-800 border border-teal-200 rounded text-[10px] font-bold">${app}</span>`).join('')}
      </div>

      <div class="border-t border-slate-100 pt-3 flex flex-col space-y-2">
        ${sessionButtons}
      </div>
    `;

    grid.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

// Navigation Screen Handlers
function showHomeScreen() {
  hideAllScreens();
  document.getElementById("homeScreen").classList.remove("hidden");
  renderSidebar();
}

function showInterviewPortal() {
  hideAllScreens();
  document.getElementById("interviewPortalScreen").classList.remove("hidden");
  renderInterviewCategories();
  renderInterviewQuestions();
  renderSidebar();
}

function showBlueprintScreen() {
  hideAllScreens();
  document.getElementById("blueprintScreen").classList.remove("hidden");
  renderBlueprintPhases();
  renderSidebar();
}

function showTemplatesScreen() {
  hideAllScreens();
  document.getElementById("templatesScreen").classList.remove("hidden");
  renderConsultantTemplates();
  renderSidebar();
}

function showFinalExam() {
  hideAllScreens();
  document.getElementById("finalExamScreen").classList.remove("hidden");
  renderSidebar();
}

function hideAllScreens() {
  document.getElementById("homeScreen").classList.add("hidden");
  document.getElementById("sessionWorkspace").classList.add("hidden");
  document.getElementById("interviewPortalScreen").classList.add("hidden");
  document.getElementById("blueprintScreen").classList.add("hidden");
  document.getElementById("templatesScreen").classList.add("hidden");
  document.getElementById("finalExamScreen").classList.add("hidden");
}

// Load Specific Session into Workspace View
function loadSession(sessionId) {
  currentSessionId = sessionId;

  let targetSession = null;
  let targetWeek = null;

  ODOO_COURSE_DATA.weeks.forEach((w) => {
    w.sessions.forEach((s) => {
      if (s.id === sessionId) {
        targetSession = s;
        targetWeek = w;
      }
    });
  });

  if (!targetSession) return;

  hideAllScreens();
  document.getElementById("sessionWorkspace").classList.remove("hidden");

  document.getElementById("sessionCodeBadge").textContent = `Session ${targetSession.code}`;
  document.getElementById("sessionDurationBadge").textContent = targetSession.duration;
  document.getElementById("sessionTitle").textContent = targetSession.title;

  const badgesContainer = document.getElementById("sessionAppsBadges");
  badgesContainer.innerHTML = targetWeek.appsCovered
    .map((app) => `<span class="px-2.5 py-0.5 bg-teal-50 text-teal-800 border border-teal-200 rounded-lg text-xs font-bold">${app}</span>`)
    .join("");

  updateCompleteButtonState();

  const objList = document.getElementById("sessionObjectivesList");
  objList.innerHTML = targetSession.objectives.map((o) => `<li>${o}</li>`).join("");

  document.getElementById("sessionContentBody").innerHTML = targetSession.content;

  renderLabTab(targetSession);
  renderQuizTab(targetSession);
  renderCheckpointTab(targetWeek);

  switchTab("tab-lesson");

  renderSidebar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Update Mark Complete Button
function updateCompleteButtonState() {
  const btn = document.getElementById("toggleCompleteBtn");
  const btnText = document.getElementById("completeBtnText");

  const isDone = completedSessions.includes(currentSessionId);

  if (isDone) {
    btn.className = "px-4 py-1.5 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow transition flex items-center space-x-1.5 hover:bg-emerald-700";
    btnText.textContent = "Session Completed ✓";
  } else {
    btn.className = "px-4 py-1.5 border border-slate-300 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 rounded-xl text-xs font-bold transition flex items-center space-x-1.5";
    btnText.textContent = "Mark Session Complete";
  }
}

// Toggle Session Completed State
function toggleCurrentSessionComplete() {
  const index = completedSessions.indexOf(currentSessionId);
  if (index > -1) {
    completedSessions.splice(index, 1);
  } else {
    completedSessions.push(currentSessionId);
  }

  localStorage.setItem(STORAGE_KEY_SESSIONS, JSON.stringify(completedSessions));
  updateCompleteButtonState();
  updateProgressUI();
}

// Tab Switching
function switchTab(tabId) {
  currentTab = tabId;

  const tabs = ["tab-lesson", "tab-lab", "tab-quiz", "tab-checkpoint"];
  tabs.forEach((t) => {
    const btn = document.getElementById(`tabBtn-${t.replace("tab-", "")}`);
    const content = document.getElementById(`tabContent-${t.replace("tab-", "")}`);

    if (t === tabId) {
      if (btn) btn.classList.add("active");
      if (content) content.classList.remove("hidden");
    } else {
      if (btn) btn.classList.remove("active");
      if (content) content.classList.add("hidden");
    }
  });
}

// Render Lab Tab
function renderLabTab(session) {
  const lab = session.labExercise;
  document.getElementById("labTitle").textContent = lab.title;

  const container = document.getElementById("labInstructionsList");
  container.innerHTML = "";

  const sessionLabState = completedLabs[session.id] || [];

  lab.instructions.forEach((inst, i) => {
    const isChecked = sessionLabState.includes(i);
    const item = document.createElement("label");
    item.className = `flex items-start space-x-3 p-3.5 rounded-xl border transition cursor-pointer ${isChecked ? "bg-emerald-50/70 border-emerald-200 text-emerald-950" : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"}`;

    item.innerHTML = `
      <input type="checkbox" ${isChecked ? "checked" : ""} onchange="toggleLabStep('${session.id}', ${i})"
        class="mt-1 w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500">
      <span class="text-xs leading-relaxed font-semibold ${isChecked ? "line-through text-slate-500" : ""}">${inst}</span>
    `;

    container.appendChild(item);
  });
}

function toggleLabStep(sessionId, index) {
  if (!completedLabs[sessionId]) {
    completedLabs[sessionId] = [];
  }

  const list = completedLabs[sessionId];
  const pos = list.indexOf(index);
  if (pos > -1) {
    list.splice(pos, 1);
  } else {
    list.push(index);
  }

  localStorage.setItem(STORAGE_KEY_LABS, JSON.stringify(completedLabs));
  
  let targetSession = null;
  ODOO_COURSE_DATA.weeks.forEach((w) => w.sessions.forEach((s) => { if (s.id === sessionId) targetSession = s; }));
  if (targetSession) renderLabTab(targetSession);
}

// Render Quiz Tab
function renderQuizTab(session) {
  const quiz = session.quiz;
  const container = document.getElementById("quizContainer");
  const scoreBadge = document.getElementById("quizScoreBadge");
  const scoreText = document.getElementById("quizScoreText");

  container.innerHTML = "";

  const savedScore = quizScores[session.id];
  if (savedScore !== undefined) {
    scoreBadge.classList.remove("hidden");
    scoreText.textContent = `${savedScore}/${quiz.length}`;
  } else {
    scoreBadge.classList.add("hidden");
  }

  quiz.forEach((q, qIndex) => {
    const qBox = document.createElement("div");
    qBox.className = "border rounded-2xl p-5 bg-slate-50 space-y-3";

    let optionsHTML = "";
    q.options.forEach((opt, optIndex) => {
      optionsHTML += `
        <button onclick="submitQuizAnswer('${session.id}', ${qIndex}, ${optIndex}, ${q.correctIndex})"
          id="quizOpt-${qIndex}-${optIndex}"
          class="quiz-option w-full text-left p-3 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 font-semibold hover:border-indigo-400 transition">
          ${opt}
        </button>
      `;
    });

    qBox.innerHTML = `
      <h4 class="font-extrabold text-slate-900 text-sm flex items-start space-x-2">
        <span class="text-indigo-600">Q${qIndex + 1}.</span>
        <span>${q.question}</span>
      </h4>
      <div class="space-y-2 pl-4">
        ${optionsHTML}
      </div>
      <div id="quizExplain-${qIndex}" class="hidden p-3 rounded-xl text-xs leading-relaxed mt-2"></div>
    `;

    container.appendChild(qBox);
  });
}

function submitQuizAnswer(sessionId, questionIndex, selectedIndex, correctIndex) {
  const isCorrect = selectedIndex === correctIndex;

  let targetSession = null;
  ODOO_COURSE_DATA.weeks.forEach((w) => w.sessions.forEach((s) => { if (s.id === sessionId) targetSession = s; }));
  if (!targetSession) return;

  const explanationBox = document.getElementById(`quizExplain-${questionIndex}`);
  const explanationText = targetSession.quiz[questionIndex].explanation;

  targetSession.quiz[questionIndex].options.forEach((_, optIdx) => {
    const btn = document.getElementById(`quizOpt-${questionIndex}-${optIdx}`);
    if (btn) {
      btn.disabled = true;
      if (optIdx === correctIndex) {
        btn.className = "quiz-option correct w-full text-left p-3 rounded-xl border text-xs font-bold";
      } else if (optIdx === selectedIndex && !isCorrect) {
        btn.className = "quiz-option incorrect w-full text-left p-3 rounded-xl border text-xs font-bold";
      }
    }
  });

  if (explanationBox) {
    explanationBox.classList.remove("hidden");
    if (isCorrect) {
      explanationBox.className = "p-3.5 rounded-xl text-xs leading-relaxed mt-2 bg-emerald-100 text-emerald-950 border border-emerald-300 font-bold";
      explanationBox.innerHTML = `<strong>Correct! ✓</strong> ${explanationText}`;
    } else {
      explanationBox.className = "p-3.5 rounded-xl text-xs leading-relaxed mt-2 bg-red-100 text-red-950 border border-red-300 font-bold";
      explanationBox.innerHTML = `<strong>Incorrect.</strong> ${explanationText}`;
    }
  }

  if (isCorrect) {
    quizScores[sessionId] = (quizScores[sessionId] || 0) + 1;
    localStorage.setItem(STORAGE_KEY_QUIZZES, JSON.stringify(quizScores));
  }
}

// Render Checkpoint Tab
function renderCheckpointTab(week) {
  const cp = week.checkpoint;
  document.getElementById("checkpointTitle").textContent = `${week.theme} - Checkpoint`;
  document.getElementById("checkpointDescription").textContent = cp.description;

  const list = document.getElementById("checkpointDeliverablesList");
  list.innerHTML = cp.deliverables.map((d) => `<li class="leading-relaxed font-semibold">${d}</li>`).join("");
}

// INTERVIEW PORTAL RENDER LOGIC
function renderInterviewCategories() {
  const container = document.getElementById("interviewCategories");
  if (!container) return;

  const categories = ["All", "Architecture & Hosting", "Purchasing & Inventory", "Accounting & Finance", "Manufacturing & MRP", "Studio & Customization"];

  container.innerHTML = categories
    .map(
      (cat) => `
      <button onclick="setInterviewCategory('${cat}')"
        class="px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition border ${activeInterviewCategory === cat ? "bg-indigo-600 text-white border-indigo-600 shadow-xs" : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50"}">
        ${cat}
      </button>
    `
    )
    .join("");
}

function setInterviewCategory(cat) {
  activeInterviewCategory = cat;
  renderInterviewCategories();
  renderInterviewQuestions();
}

function renderInterviewQuestions() {
  const container = document.getElementById("interviewQuestionsList");
  if (!container) return;

  container.innerHTML = "";

  const filtered = activeInterviewCategory === "All"
    ? ODOO_COURSE_DATA.interviewQuestions
    : ODOO_COURSE_DATA.interviewQuestions.filter((q) => q.category === activeInterviewCategory);

  filtered.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "qa-card bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3";

    const isExpanded = areAllAnswersExpanded;

    card.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="px-2.5 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-md font-bold text-[10px] uppercase tracking-wider">${item.category}</span>
        <button onclick="toggleQAAnswer(${index})" class="text-xs text-indigo-600 hover:text-indigo-800 font-bold flex items-center space-x-1">
          <span id="qaBtnText-${index}">${isExpanded ? "Hide Answer" : "Reveal Answer"}</span>
          <i data-lucide="chevron-down" id="qaIcon-${index}" class="w-4 h-4" style="${isExpanded ? 'transform: rotate(180deg)' : ''}"></i>
        </button>
      </div>

      <h4 class="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">Q: ${item.q}</h4>

      <div id="qaAnswerBox-${index}" class="${isExpanded ? "" : "hidden"} space-y-3 pt-2 border-t border-slate-100">
        <div class="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-xl text-xs leading-relaxed text-indigo-950">
          <strong class="text-indigo-900 font-extrabold block mb-1">Answer (English):</strong>
          ${item.ansEnglish}
        </div>
        <div class="p-3.5 bg-purple-50/70 border border-purple-200 rounded-xl text-xs leading-relaxed text-purple-950">
          <strong class="text-purple-900 font-extrabold block mb-1">Roman Urdu Summary:</strong>
          ${item.ansUrdu}
        </div>
        <div class="p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl text-xs leading-relaxed text-amber-950">
          <strong class="text-amber-900 font-extrabold block mb-1">Real-World Case Example:</strong>
          ${item.example}
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

function toggleQAAnswer(index) {
  const box = document.getElementById(`qaAnswerBox-${index}`);
  const text = document.getElementById(`qaBtnText-${index}`);
  const icon = document.getElementById(`qaIcon-${index}`);

  if (box) {
    const isHidden = box.classList.contains("hidden");
    if (isHidden) {
      box.classList.remove("hidden");
      if (text) text.textContent = "Hide Answer";
      if (icon) icon.style.transform = "rotate(180deg)";
    } else {
      box.classList.add("hidden");
      if (text) text.textContent = "Reveal Answer";
      if (icon) icon.style.transform = "rotate(0deg)";
    }
  }
}

function toggleExpandAllInterviewAnswers() {
  areAllAnswersExpanded = !areAllAnswersExpanded;
  const btnText = document.getElementById("expandAllBtnText");

  if (btnText) {
    btnText.textContent = areAllAnswersExpanded ? "Hide All Answers" : "Show All 50+ Answers";
  }

  renderInterviewQuestions();
}

// RENDER CONSULTANT TEMPLATES
function renderConsultantTemplates() {
  const container = document.getElementById("templatesContainer");
  if (!container) return;

  container.innerHTML = "";

  ODOO_COURSE_DATA.clientTemplates.forEach((tmpl) => {
    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3";

    card.innerHTML = `
      <div class="flex items-center justify-between border-b pb-3">
        <div>
          <span class="px-2 py-0.5 bg-amber-100 text-amber-900 rounded text-[10px] font-bold uppercase">${tmpl.category}</span>
          <h4 class="font-extrabold text-slate-900 text-base mt-1">${tmpl.title}</h4>
        </div>
        <button onclick="copyTemplateText('${tmpl.id}')"
          class="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition flex items-center space-x-1.5">
          <i data-lucide="copy" class="w-3.5 h-3.5"></i>
          <span id="copyBtnText-${tmpl.id}">Copy Template</span>
        </button>
      </div>

      <div class="bg-slate-900 text-slate-100 p-4 rounded-xl overflow-x-auto text-xs font-mono leading-relaxed">
        <pre id="templateContent-${tmpl.id}">${tmpl.content}</pre>
      </div>
    `;

    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

function copyTemplateText(tmplId) {
  const pre = document.getElementById(`templateContent-${tmplId}`);
  const btnText = document.getElementById(`copyBtnText-${tmplId}`);

  if (pre) {
    navigator.clipboard.writeText(pre.textContent).then(() => {
      if (btnText) {
        btnText.textContent = "Copied! ✓";
        setTimeout(() => { btnText.textContent = "Copy Template"; }, 2000);
      }
    });
  }
}

// RENDER BLUEPRINT PHASES
function renderBlueprintPhases() {
  const container = document.getElementById("blueprintPhasesContainer");
  if (!container) return;

  container.innerHTML = "";

  ODOO_COURSE_DATA.implementationBlueprint.steps.forEach((step, i) => {
    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3";

    card.innerHTML = `
      <div class="flex items-center space-x-2">
        <span class="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">${i + 1}</span>
        <span class="text-xs font-bold px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-md">${step.phase}</span>
      </div>
      <h4 class="font-extrabold text-slate-900 text-base">${step.title}</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 leading-relaxed font-medium">
          <strong class="text-slate-900 font-extrabold block mb-1">English Framework:</strong>
          ${step.english}
        </div>
        <div class="p-3.5 bg-teal-50/60 rounded-xl border border-teal-200 text-teal-950 leading-relaxed font-medium">
          <strong class="text-teal-900 font-extrabold block mb-1">Roman Urdu Blueprint:</strong>
          ${step.urdu}
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

// SEARCH MODAL LOGIC
function openSearchModal() {
  document.getElementById("searchModal").classList.remove("hidden");
  const input = document.getElementById("searchInput");
  if (input) {
    input.value = "";
    input.focus();
  }
  handleSearch("");
}

function closeSearchModal() {
  document.getElementById("searchModal").classList.add("hidden");
}

function handleSearch(query) {
  const container = document.getElementById("searchResults");
  if (!container) return;

  const q = query.trim().toLowerCase();

  if (q.length < 2) {
    container.innerHTML = `<div class="text-center text-xs text-slate-400 py-8">Type at least 2 characters to search across all sessions and interview questions...</div>`;
    return;
  }

  const results = [];

  ODOO_COURSE_DATA.weeks.forEach((w) => {
    w.sessions.forEach((s) => {
      if (s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q)) {
        results.push({ type: "Session", title: `${s.code}: ${s.title}`, target: s.id, category: `Week ${w.number}` });
      }
    });
  });

  ODOO_COURSE_DATA.interviewQuestions.forEach((iq) => {
    if (iq.q.toLowerCase().includes(q) || iq.ansEnglish.toLowerCase().includes(q) || iq.ansUrdu.toLowerCase().includes(q)) {
      results.push({ type: "Interview Q&A", title: iq.q, target: "interview", category: iq.category });
    }
  });

  ODOO_COURSE_DATA.clientTemplates.forEach((tmpl) => {
    if (tmpl.title.toLowerCase().includes(q) || tmpl.content.toLowerCase().includes(q)) {
      results.push({ type: "Template", title: tmpl.title, target: "templates", category: tmpl.category });
    }
  });

  if (results.length === 0) {
    container.innerHTML = `<div class="text-center text-xs text-slate-500 py-8">No matching Odoo topics found for "${query}".</div>`;
    return;
  }

  container.innerHTML = results
    .map(
      (r) => `
      <div onclick="selectSearchResult('${r.target}')"
        class="p-3 hover:bg-purple-50 cursor-pointer rounded-xl transition flex items-center justify-between">
        <div>
          <div class="flex items-center space-x-2">
            <span class="font-mono font-bold text-[10px] px-2 py-0.5 bg-purple-100 text-purple-800 rounded">${r.type}</span>
            <span class="text-xs font-bold text-slate-900">${r.title}</span>
          </div>
          <div class="text-[11px] text-slate-500 mt-1">${r.category}</div>
        </div>
        <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400"></i>
      </div>
    `
    )
    .join("");

  if (window.lucide) lucide.createIcons();
}

function selectSearchResult(target) {
  closeSearchModal();
  if (target === "interview") {
    showInterviewPortal();
  } else if (target === "templates") {
    showTemplatesScreen();
  } else {
    loadSession(target);
  }
}

// CERTIFICATE MODAL LOGIC
function openCertificateModal() {
  document.getElementById("certModal").classList.remove("hidden");
}

function closeCertificateModal() {
  document.getElementById("certModal").classList.add("hidden");
}

// RESET ALL PROGRESS
function resetAllProgress() {
  if (confirm("Are you sure you want to reset all your course progress, lab checks, and quiz scores?")) {
    localStorage.removeItem(STORAGE_KEY_SESSIONS);
    localStorage.removeItem(STORAGE_KEY_LABS);
    localStorage.removeItem(STORAGE_KEY_QUIZZES);

    completedSessions = [];
    completedLabs = {};
    quizScores = {};

    updateProgressUI();
    renderHomeWeeksGrid();
    showHomeScreen();
  }
}
