// 
//  CURSOR
// 
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let cx=0,cy=0,rx=0,ry=0;
document.addEventListener('mousemove', e => { cx=e.clientX; cy=e.clientY; cursor.style.left=cx+'px'; cursor.style.top=cy+'px'; });
(function animRing() {
  rx += (cx-rx)*0.12; ry += (cy-ry)*0.12;
  cursorRing.style.left=rx+'px'; cursorRing.style.top=ry+'px';
  requestAnimationFrame(animRing);
})();
document.addEventListener('mousedown', ()=>{ cursor.style.transform='translate(-50%,-50%) scale(0.6)'; cursorRing.style.transform='translate(-50%,-50%) scale(1.4)'; });
document.addEventListener('mouseup', ()=>{ cursor.style.transform='translate(-50%,-50%) scale(1)'; cursorRing.style.transform='translate(-50%,-50%) scale(1)'; });

// 
//  PARTICLES
// 
const pContainer = document.getElementById('particles');
for (let i=0; i<50; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random()*100+'%';
  p.style.animationDuration = (8+Math.random()*15)+'s';
  p.style.animationDelay = (-Math.random()*20)+'s';
  p.style.width = p.style.height = (1+Math.random()*3)+'px';
  p.style.opacity = Math.random()*0.8;
  pContainer.appendChild(p);
}

// 
//  WORD BANKS
// 
const words = {
  common: `the be to of and a in that have it for not on with he as you do at this but his by from they we say her she or an will my one all would there their what so up out if about who get which go me when make can like time no just him know take people into year your good some could them see other than then now look only come its over think also back after use two how our work first well way even new want because any these give day most us`.split(' '),
  medium: `ability access achieve action active adjust adult agency alert allow amount apply argue assume avoid become benefit build cause change charge choice claim clear close commit complex confirm connect control create decide defend define deliver design detail develop direct discuss domain drive early effort enable engage ensure enter establish exist expect explain extend factor feature field final focus follow formal gather given group guide handle impact import include increase indicate initial insert issue joint keep latest launch layer likely limit manage matter measure method model monitor move network obtain occur offer operate order organize output perform place platform point policy present process produce provide publish reach record reduce relate release remain report represent request resolve result review search sector select serve setup share signal simple source specify stand state status step store study submit support system technical test thing think trace track transform understand update value vary view work write`.split(' '),
  quotes: [
    `the only way to do great work is to love what you do if you havent found it yet keep looking dont settle`,
    `in the middle of difficulty lies opportunity the measure of intelligence is the ability to change`,
    `it does not matter how slowly you go as long as you do not stop persistence is the key to success`,
    `code is like humor when you have to explain it it is not that good simplicity is the soul of efficiency`,
    `first solve the problem then write the code the best code is no code at all less is more in software`,
    `talk is cheap show me the code any fool can write code that a computer can understand`,
    `the most powerful tool we have as developers is automation make things that make things`
  ],
  code: {
    javascript: [
      `const fibonacci = n => n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2);`,
      `function debounce(fn, delay) { let timer; return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); }; }`,
      `const deepClone = obj => JSON.parse(JSON.stringify(obj));`,
      `async function fetchData(url) { try { const res = await fetch(url); return await res.json(); } catch(e) { console.error(e); } }`,
      `const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : cache.set(key, fn(...args)).get(key); }; };`,
      `const flatDeep = arr => arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatDeep(val)) : acc.concat(val), []);`,
      `document.addEventListener('DOMContentLoaded', () => { const btn = document.querySelector('#btn'); btn.addEventListener('click', handleClick); });`
    ],
    python: [
      `def fibonacci(n): return n if n <= 1 else fibonacci(n-1) + fibonacci(n-2)`,
      `squares = [x**2 for x in range(1, 11) if x % 2 == 0]`,
      `with open('file.txt', 'r') as f: data = f.read().splitlines()`,
      `class Stack: def __init__(self): self.items = [] def push(self, item): self.items.append(item) def pop(self): return self.items.pop()`,
      `import json; data = json.loads(open('config.json').read()); print(data.get('name', 'unknown'))`,
      `def decorator(func): def wrapper(*args, **kwargs): print('Before'); result = func(*args, **kwargs); print('After'); return result; return wrapper`,
      `numbers = list(filter(lambda x: x > 0, [-3, -1, 0, 2, 5, 8])); total = sum(numbers)`
    ],
    typescript: [
      `interface User { id: number; name: string; email?: string; } const getUser = async (id: number): Promise<User> => { return fetch('https://typenova-backend-p5hu.onrender.com/api/auth/login'+id).then(r => r.json()); }`,
      `type Result<T, E> = { success: true; data: T } | { success: false; error: E };`,
      `const useLocalStorage = <T>(key: string, initial: T): [T, (val: T) => void] => { const [state, setState] = useState<T>(initial); return [state, setState]; };`,
      `enum Direction { Up = 'UP', Down = 'DOWN', Left = 'LEFT', Right = 'RIGHT' }`,
      `function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U { return { ...obj1, ...obj2 }; }`
    ],
    java: [
      `public class Fibonacci { public static int fib(int n) { return n <= 1 ? n : fib(n-1) + fib(n-2); } }`,
      `List<Integer> squares = IntStream.rangeClosed(1, 10).map(x -> x * x).boxed().collect(Collectors.toList());`,
      `Optional<String> name = Optional.ofNullable(user.getName()).filter(s -> !s.isEmpty());`,
      `public synchronized void increment() { this.count++; }`,
      `Map<String, Integer> wordCount = Arrays.stream(words).collect(Collectors.groupingBy(Function.identity(), Collectors.summingInt(e -> 1)));`
    ],
    csharp: [
      `var fibonacci = Enumerable.Range(0, 10).Aggregate(new List<int>{0,1}, (acc, _) => { acc.Add(acc[^1] + acc[^2]); return acc; });`,
      `public async Task<User> GetUserAsync(int id) { using var client = new HttpClient(); return await client.GetFromJsonAsync<User>($"/api/users/{id}"); }`,
      `record Point(double X, double Y) { public double Distance => Math.Sqrt(X*X + Y*Y); }`,
      `var result = from p in products where p.Price < 100 orderby p.Name select p.Name;`,
      `public static T DeepCopy<T>(T obj) { var json = JsonSerializer.Serialize(obj); return JsonSerializer.Deserialize<T>(json); }`
    ],
    cpp: [
      `int fibonacci(int n) { return n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2); }`,
      `std::vector<int> squares; std::transform(v.begin(), v.end(), std::back_inserter(squares), [](int x) { return x*x; });`,
      `template<typename T> T maxVal(T a, T b) { return (a > b) ? a : b; }`,
      `auto ptr = std::make_unique<MyClass>(42); ptr->doSomething();`,
      `std::unordered_map<std::string, int> freq; for (const auto& w : words) freq[w]++;`
    ],
    rust: [
      `fn fibonacci(n: u64) -> u64 { match n { 0 => 0, 1 => 1, _ => fibonacci(n-1) + fibonacci(n-2) } }`,
      `let squares: Vec<i32> = (1..=10).filter(|x| x % 2 == 0).map(|x| x * x).collect();`,
      `#[derive(Debug, Clone)] struct Point { x: f64, y: f64 }`,
      `let result = std::fs::read_to_string("file.txt").unwrap_or_else(|e| { eprintln!("Error: {}", e); String::new() });`,
      `impl<T: Display> fmt::Display for Wrapper<T> { fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result { write!(f, "{}", self.0) } }`
    ],
    go: [
      `func fibonacci(n int) int { if n <= 1 { return n }; return fibonacci(n-1) + fibonacci(n-2) }`,
      `squares := make([]int, 0); for i := 1; i <= 10; i++ { squares = append(squares, i*i) }`,
      `func fetchData(url string) ([]byte, error) { resp, err := http.Get(url); if err != nil { return nil, err }; defer resp.Body.Close(); return io.ReadAll(resp.Body) }`,
      `type Server struct { host string; port int }; func (s *Server) Start() { log.Printf("Starting on %s:%d", s.host, s.port) }`,
      `ch := make(chan int, 5); go func() { for i := 0; i < 5; i++ { ch <- i * i }; close(ch) }()`
    ],
    kotlin: [
      `fun fibonacci(n: Int): Int = if (n <= 1) n else fibonacci(n-1) + fibonacci(n-2)`,
      `val squares = (1..10).filter { it % 2 == 0 }.map { it * it }`,
      `data class User(val id: Int, val name: String, val email: String? = null)`,
      `val result = runCatching { fetchData(url) }.getOrElse { emptyList() }`,
      `fun <T> List<T>.secondOrNull(): T? = if (size >= 2) this[1] else null`
    ],
    swift: [
      `func fibonacci(_ n: Int) -> Int { return n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2) }`,
      `let squares = (1...10).filter { $0 % 2 == 0 }.map { $0 * $0 }`,
      `struct Point: Codable { let x: Double; let y: Double; var magnitude: Double { sqrt(x*x + y*y) } }`,
      `guard let url = URL(string: urlString) else { return }; URLSession.shared.dataTask(with: url) { data, _, _ in }.resume()`,
      `enum Result<T> { case success(T); case failure(Error) }`
    ]
  }
};

// 
//  STATE
// 
let state = {
  mode: 'speed',
  timeLimit: 15,
  timeLeft: 15,
  started: false,
  finished: false,
  currentText: '',
  typedIndex: 0,
  errors: 0,
  totalKeystrokes: 0,
  correctKeystrokes: 0,
  combo: 0,
  maxCombo: 0,
  wpmHistory: [],
  startTime: null,
  timerInterval: null,
  usePunctuation: false,
  useNumbers: false,
  ghostWpm: 0,
  ghostInterval: null,
  ghostProgress: 0,
  settings: { kb:true, caret:true, chart:true, particles:true, sound:false, errSnd:false, comboSnd:false, strictMode:false, noBack:false, tabRestart:true,
    capitals:false, focusMode:false, hideWpm:false, blindMode:false, wordHighlight:true, showPct:false, fontSize:'md' },
  paused: false,
  pauseStartTime: 0,
  totalPausedMs: 0,
  stopwatchInterval: null,
  stats: { pbWpm:{}, totalTests:0, totalWords:0, accuracies:[], streak:0 }
};

// Load saved stats
try {
  const saved = JSON.parse(localStorage.getItem('tg_stats') || '{}');
  if (saved.pbWpm) state.stats = { ...state.stats, ...saved };
} catch(e){}

// Load saved settings
try {
  const savedSettings = JSON.parse(localStorage.getItem('tg_settings') || '{}');
  state.settings = { ...state.settings, ...savedSettings };
} catch(e){}

// 
//  PAGES
// 
function toggleMobileMenu() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('nav-links').classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('nav-links').classList.remove('open');
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  const btns = ['home','test','games','leaderboard','settings'];
  const idx = btns.indexOf(id);
  if (idx >= 0) document.querySelectorAll('.nav-btn')[idx].classList.add('active');
  if (id === 'leaderboard') buildLeaderboard();
  if (id === 'games') showGameHub();
}

function scrollToModes() {
  showPage('home');
  setTimeout(() => {
    const el = document.getElementById('mode-selection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 50); // Small delay to ensure page is active before scrolling
}

// 
//  KEYBOARD BUILDER
// 
const rows = [
  ['`','1','2','3','4','5','6','7','8','9','0','-','=','⌫'],
  ['TAB','q','w','e','r','t','y','u','i','o','p','[',']','\\'],
  ['CAPS','a','s','d','f','g','h','j','k','l',';',"'",'ENTER'],
  ['SHIFT','z','x','c','v','b','n','m',',','.','/','SHIFT'],
  ['CTRL','ALT','SPACE','ALT','CTRL']
];
function buildKeyboard() {
  const kb = document.getElementById('keyboard');
  kb.innerHTML = '';
  rows.forEach(row => {
    const r = document.createElement('div'); r.className = 'kb-row';
    row.forEach(k => {
      const el = document.createElement('div');
      el.className = 'kb-key';
      if (k === 'SPACE') el.classList.add('kb-space');
      el.textContent = k;
      el.id = 'key-'+k.toLowerCase().replace(/[^a-z0-9]/g,'_');
      r.appendChild(el);
    });
    kb.appendChild(r);
  });
}
buildKeyboard();

function flashKey(char, isWrong) {
  const map = {' ':'space','Enter':'enter','Backspace':'⌫'};
  const k = map[char] || char.toLowerCase();
  const el = document.querySelector(`#keyboard .kb-key`+[...document.querySelectorAll('#keyboard .kb-key')].filter(e=>e.textContent.toLowerCase()===k).map(e=>'').join(''));
  const allKeys = document.querySelectorAll('#keyboard .kb-key');
  allKeys.forEach(key => {
    if (key.textContent.toLowerCase() === k || key.textContent === k) {
      key.classList.add(isWrong ? 'wrong-key' : 'active');
      setTimeout(() => { key.classList.remove('active','wrong-key'); }, isWrong ? 300 : 120);
    }
  });
}

// 
//  TEXT GENERATION
// 
function generateText() {
  if (state.mode === 'aiforge') {
    return state.currentText || 'Click AI Forge to generate custom text.';
  }
  if (state.mode === 'code') {
    const snippets = words.code[selectedCodeLang] || words.code.javascript;
    return snippets[Math.floor(Math.random() * snippets.length)];
  }
  let pool = [...words.common, ...words.medium];
  let count = state.mode === 'words' ? 40 : 80;
  let text = [];
  for (let i=0; i<count; i++) {
    let w = pool[Math.floor(Math.random()*pool.length)];
    if (state.usePunctuation && Math.random() < 0.2) {
      const puncs = [',','.','!','?',';',':'];
      w += puncs[Math.floor(Math.random()*puncs.length)];
    }
    if (state.useNumbers && Math.random() < 0.15) {
      w = Math.floor(Math.random()*1000).toString();
    }
    if (state.settings.capitals && Math.random() < 0.3) {
      w = w.charAt(0).toUpperCase() + w.slice(1);
    }
    text.push(w);
  }
  return text.join(' ');
}

// 
//  RENDER TEXT
// 
function renderText() {
  const disp = document.getElementById('text-display');
  disp.innerHTML = '';
  for (let i=0; i<state.currentText.length; i++) {
    const span = document.createElement('span');
    span.className = 'char ' + (i===0 ? 'current' : 'pending');
    span.textContent = state.currentText[i];
    span.id = 'c'+i;
    disp.appendChild(span);
  }
}

function updateDisplay() {
  // Find current word boundaries for highlight
  let wordStart = 0, wordEnd = state.currentText.length;
  if (state.settings.wordHighlight) {
    let s = state.typedIndex;
    while (s > 0 && state.currentText[s-1] !== ' ') s--;
    let e = state.typedIndex;
    while (e < state.currentText.length && state.currentText[e] !== ' ') e++;
    wordStart = s; wordEnd = e;
  }

  for (let i=0; i<state.currentText.length; i++) {
    const el = document.getElementById('c'+i);
    if (!el) continue;
    const inCurrentWord = state.settings.wordHighlight && i >= wordStart && i < wordEnd;

    if (i < state.typedIndex) {
      if (state.settings.blindMode) {
        el.className = 'char correct'; // blind mode: always show as correct
      } else {
        el.className = 'char '+(state.currentText[i]===state.typed[i] ? 'correct' : 'wrong');
      }
    } else if (i === state.typedIndex) {
      el.className = 'char current';
    } else {
      el.className = 'char pending' + (inCurrentWord ? ' word-hl' : '');
    }
  }
  // Progress
  const pct = (state.typedIndex/state.currentText.length)*100;
  document.getElementById('progress-fill').style.width = pct+'%';
  if (state.settings.showPct) {
    document.getElementById('progress-pct').textContent = Math.round(pct)+'%';
  }
  // Ghost race
  if (state.mode === 'ghost') {
    document.getElementById('you-fill').style.width = Math.min(pct,100)+'%';
  }
}

// 
//  TYPING LOGIC
// 
state.typed = [];

function focusInput() { 
  if (!currentUser) {
    openAuthModal();
    return;
  }
  document.getElementById('typing-input').focus(); 
}

document.getElementById('typing-input').addEventListener('keydown', function(e) {
  if (state.finished) return;
  if (state.paused) { e.preventDefault(); return; } // 🔒 typing locked during pause
  if (e.key === 'Tab') { e.preventDefault(); if(state.settings.tabRestart) resetTest(); return; }

  if (!state.started && e.key !== 'Tab') {
    startTest();
  }

  const box = document.getElementById('typing-box');

  if (e.key === 'Backspace') {
    e.preventDefault();
    if (state.settings.noBack || state.mode === 'precision') {
      showToast(state.mode === 'precision' ? '🎯 No backspace in Precision Mode!' : 'Confidence Mode: No backspace!');
      return;
    }
    if (state.typedIndex > 0) {
      state.typedIndex--;
      state.typed.pop();
      updateDisplay();
      updateLiveStats();
    }
    return;
  }

  if (e.key.length > 1 && e.key !== 'Enter') return;
  if (state.typedIndex >= state.currentText.length) return;

  const expected = state.currentText[state.typedIndex];
  const typed = e.key === 'Enter' ? '\n' : e.key;

  state.totalKeystrokes++;
  flashKey(e.key, typed !== expected);

  if (typed === expected) {
    state.typed.push(typed);
    state.typedIndex++;
    state.correctKeystrokes++;
    state.combo++;
    if (state.combo > state.maxCombo) state.maxCombo = state.combo;
    playKeyClick();
    showCombo(state.combo);
    box.classList.remove('error-flash');
    // Track correct keystroke
    trackKeyStroke(expected.toLowerCase(), true);
  } else {
    if (state.settings.strictMode) {
      box.classList.add('error-flash');
      setTimeout(()=>box.classList.remove('error-flash'),300);
      playErrorSound();
      trackKeyStroke(expected.toLowerCase(), false); // track error even in strict mode
      return;
    }
    state.typed.push(typed);
    state.typedIndex++;
    state.errors++;
    state.combo = 0;
    playErrorSound();
    box.classList.add('error-flash');
    setTimeout(()=>box.classList.remove('error-flash'),200);
    // Track error keystroke
    trackKeyStroke(expected.toLowerCase(), false);
  }

  updateDisplay();
  updateLiveStats();

  if (state.typedIndex >= state.currentText.length) finishTest();
  e.preventDefault();
});

function startTest() {
  if (!currentUser) {
    openAuthModal();
    state.started = false;
    document.getElementById('typing-input').value = '';
    document.getElementById('typing-input').blur();
    return;
  }

  state.started = true;
  state.startTime = Date.now();
  document.getElementById('typing-box').classList.add('focused');

  // Enable pause button now that test is running
  const pauseBtn = document.getElementById('btn-pause');
  if (pauseBtn) {
    pauseBtn.style.opacity = '1';
    pauseBtn.style.pointerEvents = 'auto';
  }

  // Lock timer/mode controls visually
  document.querySelector('.test-controls').classList.add('test-locked');

  // Hide ghost level picker once test running
  const lvlPicker = document.getElementById('ghost-level-picker');
  if (lvlPicker) lvlPicker.style.display = 'none';

  if (state.mode === 'words' || (state.mode === 'aiforge' && afState.timer === 'auto')) {
    // ”” STOPWATCH MODE ””
    startStopwatch();
  } else if (state.mode === 'speed' || state.mode === 'ghost' || state.mode === 'code' || state.mode === 'aiforge' || state.mode === 'precision' || state.mode === 'burst') {
    startTimer();
  }
  if (state.mode === 'ghost') startGhost();
  if (state.settings.chart) {
    document.getElementById('chart-wrap').style.display = 'block';
    initChart();
  }
}

function startTimer() {
  state.timeLeft = state.timeLimit;
  updateTimerRing();
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    updateTimerRing();
    updateLiveStats();
    if (state.timeLeft <= 0) finishTest();
  }, 1000);
}

function startStopwatch() {
  // Reset ring to full 0 stopwatch counts UP, ring fills as progress
  const ring = document.getElementById('timer-ring');
  ring.style.strokeDashoffset = '251'; // start empty
  ring.style.stroke = 'var(--accent)';
  ring.style.transition = 'none';
  document.getElementById('live-timer').textContent = '0.0';
  document.getElementById('live-timer').style.fontSize = '1.3rem';

  state.stopwatchInterval = setInterval(() => {
    if (state.paused) return;
    const elapsed = (Date.now() - state.startTime) / 1000;
    updateStopwatchDisplay(elapsed);
    updateLiveStats();
  }, 100); // 100ms tick for smooth 0.1s display
}

function updateStopwatchDisplay(elapsedSec) {
  const t = document.getElementById('live-timer');
  const ring = document.getElementById('timer-ring');

  // Format: under 60s show "12.3s", over 60s show "1:02"
  let display;
  if (elapsedSec < 60) {
    display = elapsedSec.toFixed(1) + 's';
  } else {
    const m = Math.floor(elapsedSec / 60);
    const s = Math.floor(elapsedSec % 60).toString().padStart(2, '0');
    display = m + ':' + s;
  }
  t.textContent = display;

  // Ring fills as user types more words (progress-based, not time-based)
  const pct = state.currentText.length > 0 ? state.typedIndex / state.currentText.length : 0;
  ring.style.transition = 'stroke-dashoffset 0.1s linear, stroke 0.5s';
  ring.style.strokeDashoffset = 251 * (1 - pct);

  // Color changes based on speed 0 fast=cyan, mid=gold, slow=red
  // Benchmark: ~200 chars/min = 40wpm fast, ~100 chars/min = slow
  const elapsed = state.started ? (Date.now() - state.startTime) / 60000 : 0.001;
  const wpm = state.correctKeystrokes > 0 ? Math.round((state.correctKeystrokes / 5) / Math.max(elapsed, 0.001)) : 0;
  if (wpm >= 50) {
    ring.style.stroke = 'var(--green)';
    t.style.color = 'var(--green)';
  } else if (wpm >= 30) {
    ring.style.stroke = 'var(--gold)';
    t.style.color = 'var(--gold)';
  } else if (wpm > 0) {
    ring.style.stroke = 'var(--red)';
    t.style.color = 'var(--red)';
  } else {
    ring.style.stroke = 'var(--accent)';
    t.style.color = 'var(--accent)';
  }
}

function updateTimerRing() {
  const t = document.getElementById('live-timer');
  const ring = document.getElementById('timer-ring');
  t.textContent = state.timeLeft > 0 ? state.timeLeft : '0';
  if (state.timeLimit > 0) {
    const pct = state.timeLeft / state.timeLimit;
    const circ = 251;
    ring.style.strokeDashoffset = circ*(1-pct);
    ring.style.stroke = pct>0.5 ? 'var(--cyan)' : pct>0.2 ? 'var(--gold)' : 'var(--red)';
    t.style.color = pct>0.5 ? 'var(--cyan)' : pct>0.2 ? 'var(--gold)' : 'var(--red)';
  }
}

function updateLiveStats() {
  const elapsed = state.started ? (Date.now()-state.startTime)/60000 : 0.001;
  const wordsT = state.correctKeystrokes/5;
  const wpm = Math.round(wordsT/Math.max(elapsed,0.001));
  document.getElementById('live-wpm').textContent = (state.started && !state.settings.hideWpm) ? wpm : (state.started ? '0' : 0);
  const acc = state.totalKeystrokes>0 ? Math.round((state.correctKeystrokes/state.totalKeystrokes)*100) : 100;
  document.getElementById('live-acc').textContent = acc+'%';
  document.getElementById('live-errors').textContent = state.settings.blindMode ? '?' : state.errors;
  document.getElementById('live-combo').textContent = state.combo+'x';
  if (state.started) {
    // Word Burst / Quote = stopwatch mode 0 timer display handled by updateStopwatchDisplay, don't overwrite
    if (state.mode !== 'words' && state.mode !== 'aiforge') {
      document.getElementById('live-timer').textContent = state.timeLeft > 0 ? state.timeLeft : '✓';
    }
    updateWpmChart(wpm);
  }
  if (state.mode === 'ghost') {
    document.getElementById('you-wpm-race').textContent = wpm+' wpm';
  }
}

// COMBO
function showCombo(n) {
  if (n > 0 && n % 20 === 0) {
    const el = document.getElementById('combo-indicator');
    const milestones = [[100,'var(--gold)'],[60,'var(--purple)'],[40,'var(--green)'],[20,'var(--cyan)']];
    const match = milestones.find(([m])=>n>=m);
    if (match) {
      el.textContent = n+'x 🔥';
      el.style.color = match[1];
      el.style.opacity = '1';
      setTimeout(()=>el.style.opacity='0',1500);
      showToast(`${n}x Combo! 🔥`);
      playComboSound(n);
    }
  }
}

// WPM CHART
let chartCtx, chartData = [];
function initChart() { chartData = []; drawChart(); }
function updateWpmChart(wpm) {
  chartData.push(wpm);
  if (chartData.length > 60) chartData.shift();
  drawChart();
}
function drawChart() {
  const canvas = document.getElementById('wpm-chart');
  if (!canvas) return;
  canvas.width = canvas.offsetWidth * window.devicePixelRatio;
  canvas.height = 80 * window.devicePixelRatio;
  const ctx = canvas.getContext('2d');
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  const W = canvas.offsetWidth, H = 80;
  ctx.clearRect(0,0,W,H);
  if (chartData.length < 2) return;
  const max = Math.max(...chartData, 10);
  const grad = ctx.createLinearGradient(0,0,0,H);
  grad.addColorStop(0,'rgba(0,212,255,0.3)');
  grad.addColorStop(1,'rgba(0,212,255,0)');
  ctx.beginPath();
  chartData.forEach((v,i) => {
    const x = (i/(chartData.length-1))*W;
    const y = H - (v/max)*(H-10) - 5;
    i===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
  });
  const lastX = W, lastY = H - (chartData[chartData.length-1]/max)*(H-10) - 5;
  ctx.lineTo(lastX, H); ctx.lineTo(0, H);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.beginPath();
  chartData.forEach((v,i) => {
    const x = (i/(chartData.length-1))*W;
    const y = H - (v/max)*(H-10) - 5;
    i===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
  });
  ctx.strokeStyle = 'rgba(0,212,255,0.8)';
  ctx.lineWidth = 2;
  ctx.stroke();
}

// GHOST RACE
// 
//  GHOST RACE ENGINE
// 
const GHOST_OPPONENTS = {
  1: {
    name: 'Rookie', icon: '🐢', level: 'LVL 1',
    wpm: 25, color: '#00ff88',
    fillStyle: 'linear-gradient(90deg, #00aa55, #00ff88)',
    taunts: {
      ahead: ["Hmm... not bad for a beginner.", "Don't celebrate yet!", "I'm just warming up..."],
      behind: ["I... I thought I was faster.", "How?? You're amazing!", "Fine, you win this round."],
      close: ["This is tight!", "Come on legs, MOVE!", "Neck and neck!"]
    }
  },
  2: {
    name: 'Amateur', icon: '🐇', level: 'LVL 2',
    wpm: 45, color: '#88ff44',
    fillStyle: 'linear-gradient(90deg, #55cc22, #88ff44)',
    taunts: {
      ahead: ["Getting nervous?", "My fingers don't get tired.", "Catch me if you can!"],
      behind: ["Wait... what? Slow down!", "Okay okay you're decent.", "Lucky keystroke..."],
      close: ["Oh it's ON now!", "Breathe... focus...", "This isn't over!"]
    }
  },
  3: {
    name: 'Pro', icon: '🦊', level: 'LVL 3',
    wpm: 70, color: '#ffd700',
    fillStyle: 'linear-gradient(90deg, #cc9900, #ffd700)',
    taunts: {
      ahead: ["Impressive... for now.", "I've beaten faster typists.", "My coffee's still hot."],
      behind: ["Huh. Color me surprised.", "You've trained hard. Respect.", "Beat by a human. Again."],
      close: ["Neither of us is going down easy.", "Every millisecond counts!", "Focus. Eyes on the text."]
    }
  },
  4: {
    name: 'Expert', icon: '🐆', level: 'LVL 4',
    wpm: 100, color: '#ff6622',
    fillStyle: 'linear-gradient(90deg, #cc3300, #ff6622)',
    taunts: {
      ahead: ["Your fingers are on FIRE?!", "Impossible... keep it up.", "I'll make you regret that lead."],
      behind: ["Haha. Expected.", "Few make it this far.", "Most quit at 80 WPM."],
      close: ["This is what legends are made of.", "I can feel you slowing down.", "Don't choke now!"]
    }
  },
  5: {
    name: 'Legend', icon: 'O', level: 'LVL 5',
    wpm: 140, color: '#b060ff',
    fillStyle: 'linear-gradient(90deg, #7030cc, #b060ff)',
    taunts: {
      ahead: ["...WHAT?! How are you faster?!", "This cannot be happening.", "You must have hacked this."],
      behind: ["You are in the presence of a god.", "140 WPM and not even trying.", "Mere mortals don't belong here."],
      close: ["The audacity... I respect it.", "You're going to burn out soon.", "NOBODY keeps up with me."]
    }
  }
};

let selectedCodeLang = 'javascript';
let selectedGhostLevel = 1;

function selectGhostLevel(level, el) {
  selectedGhostLevel = level;
  document.querySelectorAll('.ghost-lvl-btn-mini').forEach(b => b.classList.remove('sel'));
  if (el) el.classList.add('sel');

  const opp = GHOST_OPPONENTS[level];
  document.getElementById('ghost-icon').textContent = opp.icon;
  document.getElementById('ghost-name-label').textContent = opp.name;
  const badge = document.getElementById('ghost-level-badge');
  badge.textContent = opp.level;
  badge.style.color = opp.color;

  const ghostFill = document.getElementById('ghost-fill');
  if (ghostFill) { ghostFill.style.background = opp.fillStyle; ghostFill.style.boxShadow = `0 0 10px ${opp.color}`; }

  showToast(`${opp.icon} Opponent: ${opp.name} 0 ~${opp.wpm} WPM`);
}

function startGhost() {
  const opp = GHOST_OPPONENTS[selectedGhostLevel];
  const ghostWpm = opp.wpm;

  // Set ghost racer icon on the fill bar
  document.getElementById('you-fill').setAttribute('data-icon', '🧑');
  document.getElementById('ghost-fill').setAttribute('data-icon', opp.icon);
  document.getElementById('ghost-fill').style.background = opp.fillStyle;
  document.getElementById('ghost-fill').style.boxShadow = `0 0 12px ${opp.color}`;

  state.ghostWpm = ghostWpm;
  document.getElementById('ghost-wpm-race').textContent = ghostWpm + ' wpm';
  document.getElementById('ghost-taunt').textContent = '';
  document.getElementById('ghost-lead-indicator').style.opacity = '0';

  let ghostChars = 0;
  const totalChars = state.currentText.length;
  let tauntCooldown = 0;
  let lastTauntType = '';

  state.ghostInterval = setInterval(() => {
    if (state.paused) return;

    // Move ghost
    ghostChars += (ghostWpm / 60) * (5 / 60) * 10;
    const ghostPct = Math.min((ghostChars / totalChars) * 100, 100);
    document.getElementById('ghost-fill').style.width = ghostPct + '%';
    document.getElementById('ghost-wpm-race').textContent = ghostWpm + ' wpm';

    // Your progress
    const yourPct = (state.typedIndex / totalChars) * 100;

    // Lead/lag indicator
    const diff = yourPct - ghostPct;
    const leadEl = document.getElementById('ghost-lead-indicator');
    leadEl.style.opacity = state.started ? '1' : '0';
    if (Math.abs(diff) < 2) {
      leadEl.textContent = '⚡ NECK AND NECK!';
      leadEl.style.color = 'var(--gold)';
    } else if (diff > 0) {
      leadEl.textContent = `02 YOU'RE AHEAD BY ${diff.toFixed(0)}%`;
      leadEl.style.color = 'var(--green)';
    } else {
      leadEl.textContent = `0 TRAILING BY ${Math.abs(diff).toFixed(0)}%`;
      leadEl.style.color = 'var(--red)';
    }

    // Taunts 0 every ~5 seconds
    tauntCooldown--;
    if (tauntCooldown <= 0 && state.started) {
      tauntCooldown = 50; // 5 seconds at 100ms interval
      let tauntType = diff > 5 ? 'ahead' : diff < -5 ? 'behind' : 'close';
      if (tauntType !== lastTauntType || Math.random() > 0.5) {
        const list = opp.taunts[tauntType];
        const msg = list[Math.floor(Math.random() * list.length)];
        const tauntEl = document.getElementById('ghost-taunt');
        tauntEl.textContent = `${opp.icon} "${msg}"`;
        tauntEl.style.color = tauntType === 'ahead' ? 'var(--text2)' : tauntType === 'behind' ? 'var(--green)' : 'var(--gold)';
        lastTauntType = tauntType;
      }
    }

    if (ghostPct >= 100) clearInterval(state.ghostInterval);
  }, 100);
}

function showGhostResult(yourWpm, ghostWpm) {
  // Called from finishTest when mode === ghost
  const opp = GHOST_OPPONENTS[selectedGhostLevel];
  const diff = yourWpm - ghostWpm;
  const track = document.querySelector('.ghost-track');
  if (!track) return;

  // Remove old banner
  const old = track.querySelector('.ghost-result-banner');
  if (old) old.remove();

  const banner = document.createElement('div');
  banner.className = 'ghost-result-banner';

  if (diff > 5) {
    banner.classList.add('win');
    banner.innerHTML = `🏆 YOU WIN! +${diff} WPM over ${opp.name} ${opp.icon}`;
    if (selectedGhostLevel < 5) banner.innerHTML += ` &nbsp;→&nbsp; Try <strong>Level ${selectedGhostLevel+1}</strong>!`;
  } else if (diff < -5) {
    banner.classList.add('lose');
    banner.innerHTML = `${opp.icon} ${opp.name} wins by ${Math.abs(diff)} WPM. Practice and rematch!`;
  } else {
    banner.classList.add('tie');
    banner.innerHTML = `! SO CLOSE! ${Math.abs(diff) <= 2 ? 'Basically a tie!' : (diff > 0 ? 'You edged it!' : 'Just behind!')}`;
  }

  banner.style.display = 'block';
  track.appendChild(banner);
}

// 
//  FINISH
// 
function finishTest() {
  if (state.finished) return;
  state.finished = true;
  clearInterval(state.timerInterval);
  clearInterval(state.ghostInterval);
  clearInterval(state.stopwatchInterval);
  saveKeyData(); // persist key tracking data

  // Unlock controls + reset pause btn
  const tc2 = document.querySelector('.test-controls');
  if (tc2) tc2.classList.remove('test-locked');
  const pb2 = document.getElementById('btn-pause');
  if (pb2) { pb2.style.opacity='0.4'; pb2.style.pointerEvents='none'; pb2.textContent='⏸ PAUSE'; pb2.style.background='linear-gradient(135deg,#ff3366,#cc1144)'; pb2.style.boxShadow='0 4px 20px rgba(255,51,102,0.4)'; }

  const elapsed = (Date.now()-state.startTime)/60000;
  const elapsedSec = elapsed * 60;
  const wpm = Math.round((state.correctKeystrokes/5)/Math.max(elapsed,0.001));
  const acc = state.totalKeystrokes>0 ? Math.round((state.correctKeystrokes/state.totalKeystrokes)*100) : 100;

  // Save stats
  state.stats.totalTests++;
  state.stats.totalWords += Math.floor(state.typedIndex/5);
  state.stats.accuracies.push(acc);
  if (!state.stats.pbWpm[state.timeLimit] || wpm > state.stats.pbWpm[state.timeLimit]) {
    state.stats.pbWpm[state.timeLimit] = wpm;
  }
  state.stats.streak++;
  saveStats();
  updateStatsBar();

  // Format time display
  let timeDisplay;
  if (elapsedSec < 60) {
    timeDisplay = elapsedSec.toFixed(1) + 's';
  } else {
    const m = Math.floor(elapsedSec / 60);
    const s = (elapsedSec % 60).toFixed(0).padStart(2,'0');
    timeDisplay = m + ':' + s;
  }

  // For Word Burst: time gets colored green/yellow/red
  let timeColor = '';
  let timeVerdict = '';
  if (state.mode === 'words' || state.mode === 'aiforge') {
    if (wpm >= 60) {
      timeColor = 'var(--green)';
      timeVerdict = '⚡ Fast!';
    } else if (wpm >= 35) {
      timeColor = 'var(--gold)';
      timeVerdict = '‘ Average';
    } else {
      timeColor = 'var(--red)';
      timeVerdict = '🐢 Slow';
    }
  }

  // Show result
  const rank = wpm>=120?'S':wpm>=90?'A':wpm>=60?'B':wpm>=40?'C':'D';
  const rankClasses = {S:'rank-s',A:'rank-a',B:'rank-b',C:'rank-c',D:'rank-d'};

  // Dynamic result title based on mode
  const resultTitles = { words:'Word Burst Complete', aiforge:'AI Forge Complete', speed:'Test Complete', ghost:'Race Complete', code:'Code Test Complete', precision:'🎯 Precision Run Complete', burst:'⚡ Speed Burst Complete' };
  document.querySelector('.result-title').textContent = resultTitles[state.mode] || 'Test Complete';

  document.getElementById('res-wpm').textContent = wpm;
  document.getElementById('res-acc').textContent = acc+'%';
  document.getElementById('res-errors').textContent = state.errors;
  document.getElementById('res-chars').textContent = state.typedIndex;

  // Check achievements
  setTimeout(() => checkAchievements(wpm, acc, state.errors, state.maxCombo, state.mode), 1200);

  // Time cell 0 colored for Word Burst
  const timeEl = document.getElementById('res-time');
  const timeLabelEl = document.getElementById('res-time-label');
  timeEl.textContent = timeDisplay;
  if (timeColor) {
    timeEl.style.color = timeColor;
    timeEl.style.textShadow = `0 0 12px ${timeColor}`;
    if (timeLabelEl) timeLabelEl.textContent = timeVerdict;
  } else {
    timeEl.style.color = '';
    timeEl.style.textShadow = '';
    if (timeLabelEl) timeLabelEl.textContent = 'Time';
  }

  document.getElementById('res-combo').textContent = state.maxCombo+'x';
  document.getElementById('res-pb').textContent = (state.stats.pbWpm[state.timeLimit]||0)+' wpm';
  const rankEl = document.getElementById('res-rank');
  rankEl.textContent = rank+' RANK';
  rankEl.className = 'result-rank '+rankClasses[rank];

  // Ghost race result banner
  if (state.mode === 'ghost') {
    showGhostResult(wpm, GHOST_OPPONENTS[selectedGhostLevel].wpm);
  }

  setTimeout(() => document.getElementById('result-overlay').classList.add('show'), 400);
  playTestComplete();
}

function restartFromResult() { closeResult(); resetTest(); }
function closeResult() { document.getElementById('result-overlay').classList.remove('show'); }

// 
//  RESET / NEW TEXT
// 
function resetTest() {
  state.started = false;
  state.finished = false;
  state.paused = false;
  state.pauseStartTime = 0;
  state.totalPausedMs = 0;
  state.typedIndex = 0;
  state.errors = 0;
  state.totalKeystrokes = 0;
  state.correctKeystrokes = 0;
  state.combo = 0;
  state.maxCombo = 0;
  state.typed = [];
  state.wpmHistory = [];
  state.timeLeft = state.timeLimit;
  clearInterval(state.timerInterval);
  clearInterval(state.ghostInterval);
  clearInterval(state.stopwatchInterval);
  state.stopwatchInterval = null;
  state.ghostProgress = 0;

  // Reset pause button
  const pauseBtn = document.getElementById('btn-pause');
  if (pauseBtn) {
    pauseBtn.textContent = '⏸ PAUSE';
    pauseBtn.style.background = 'linear-gradient(135deg, #ff3366, #cc1144)';
    pauseBtn.style.boxShadow = '0 4px 20px rgba(255,51,102,0.4)';
    pauseBtn.style.opacity = '0.4';
    pauseBtn.style.pointerEvents = 'none';
  }

  // Reset typing box appearance
  const typingBox = document.getElementById('typing-box');
  typingBox.style.opacity = '1';
  typingBox.style.filter = 'none';
  const pauseOverlay = document.getElementById('pause-overlay');
  if (pauseOverlay) pauseOverlay.style.display = 'none';

  // Re-enable input in case it was disabled by pause
  const inp = document.getElementById('typing-input');
  inp.removeAttribute('disabled');

  // Unlock timer controls
  const tc = document.querySelector('.test-controls');
  if (tc) tc.classList.remove('test-locked');

  // Show ghost level picker again
  const lvlPicker2 = document.getElementById('ghost-level-picker');
  if (lvlPicker2) lvlPicker2.style.display = 'block';

  document.getElementById('typing-box').classList.remove('focused','error-flash');
  document.getElementById('live-wpm').textContent = '0';
  document.getElementById('live-acc').textContent = '100%';
  document.getElementById('live-errors').textContent = '0';
  document.getElementById('live-combo').textContent = '0x';
  document.getElementById('live-timer').textContent = '0';
  document.getElementById('live-timer').style.fontSize = '';
  document.getElementById('live-timer').style.color = '';
  // Reset label based on current mode
  const timerLbl = document.getElementById('timer-live-label');
  if (timerLbl) timerLbl.textContent = (state.mode === 'words' || state.mode === 'aiforge') ? ' Stopwatch' : 'Timer';
  document.getElementById('progress-fill').style.width = '0%';
  document.getElementById('timer-ring').style.strokeDashoffset = '0';
  document.getElementById('timer-ring').style.stroke = 'var(--accent)';
  document.getElementById('chart-wrap').style.display = 'none';
  if (state.mode === 'ghost') {
    document.getElementById('you-fill').style.width = '0%';
    document.getElementById('ghost-fill').style.width = '0%';
    document.getElementById('you-wpm-race').textContent = '0 wpm';
    document.getElementById('ghost-wpm-race').textContent = GHOST_OPPONENTS[selectedGhostLevel].wpm + ' wpm';
    const tauntEl = document.getElementById('ghost-taunt');
    if (tauntEl) tauntEl.textContent = '';
    const leadEl = document.getElementById('ghost-lead-indicator');
    if (leadEl) { leadEl.textContent = ''; leadEl.style.opacity = '0'; }
    const banner = document.querySelector('.ghost-result-banner');
    if (banner) banner.remove();
  }
  renderText();
  document.getElementById('typing-input').value = '';
  document.getElementById('typing-input').focus();
}

function newText() {
  state.currentText = generateText();
  resetTest();
}

function pauseTest() {
  if (!state.started || state.finished) return;

  if (!state.paused) {
    // 0 PAUSE 0
    state.paused = true;
    state.pauseStartTime = Date.now();
    clearInterval(state.timerInterval);
    clearInterval(state.ghostInterval);

    // Lock typing input
    const inp = document.getElementById('typing-input');
    inp.blur();
    inp.setAttribute('disabled', 'disabled');

    // Update pause button UI
    const pauseBtn = document.getElementById('btn-pause');
    pauseBtn.textContent = '▶ RESUME';
    pauseBtn.style.background = 'linear-gradient(135deg, #00cc66, #00aa44)';
    pauseBtn.style.boxShadow = '0 4px 20px rgba(0,204,102,0.4)';

    // Dim typing box
    document.getElementById('typing-box').style.opacity = '0.45';
    document.getElementById('typing-box').style.filter = 'blur(3px)';

    // Show pause overlay on typing box
    const pauseOverlay = document.getElementById('pause-overlay');
    if (pauseOverlay) pauseOverlay.style.display = 'flex';

    // Pause timer ring animation
    document.getElementById('timer-ring').style.transition = 'none';
    // Also stop stopwatch ticking
    clearInterval(state.stopwatchInterval);

    showToast('⏸ Test Paused 0 press Resume to continue');
  } else {
    // 0 RESUME 0
    state.paused = false;
    state.totalPausedMs += (Date.now() - state.pauseStartTime);
    // Adjust startTime so elapsed calculation stays accurate
    state.startTime += (Date.now() - state.pauseStartTime);

    // Re-enable typing
    const inp = document.getElementById('typing-input');
    inp.removeAttribute('disabled');
    inp.focus();

    // Update pause button UI
    const pauseBtn = document.getElementById('btn-pause');
    pauseBtn.textContent = '⏸ PAUSE';
    pauseBtn.style.background = 'linear-gradient(135deg, #ff3366, #cc1144)';
    pauseBtn.style.boxShadow = '0 4px 20px rgba(255,51,102,0.4)';

    // Restore typing box
    document.getElementById('typing-box').style.opacity = '1';
    document.getElementById('typing-box').style.filter = 'none';

    // Hide pause overlay
    const pauseOverlay = document.getElementById('pause-overlay');
    if (pauseOverlay) pauseOverlay.style.display = 'none';

    // Resume timer
    document.getElementById('timer-ring').style.transition = 'stroke-dashoffset 1s linear, stroke 0.5s';
    if (state.mode === 'words' || (state.mode === 'aiforge' && afState.timer === 'auto')) {
      startStopwatch();
    } else {
      startTimer();
    }
    if (state.mode === 'ghost') startGhost();

    showToast('▶ Test Resumed!');
  }
}

function setMode(mode) {
  if (mode === 'aiforge') { openAiForge(); return; }
  if (mode === 'code') { openCodeLangPicker(); return; }

  state.mode = mode;

  const titles = {
    speed:'⚡ Speed Test', words:'📝 Word Burst', ghost:'! Ghost Race',
    code:'💻 Code Typing', aiforge:'🤖 AI Forge',
    precision:'🎯 Precision Mode 0 No Mistakes Allowed!',
    burst:'⚡ Speed Burst 0 Type FAST!'
  };
  document.getElementById('mode-title').textContent = titles[mode] || '⚡ Speed Test';

  // Precision: show toast
  if (mode === 'precision') {
    showToast('🎯 Precision Mode: No backspace! Every error costs you.');
  }

  // Burst: force 10s then return (setTime→newText handles the rest)
  if (mode === 'burst') {
    showToast('⚡ Speed Burst: 10 seconds of pure adrenaline!');
    state.timeLimit = 10;
    document.querySelectorAll('[id^="btn-"]').forEach(b => {
      if (!b.id.includes('punc') && !b.id.includes('nums')) b.classList.remove('sel');
    });
    document.getElementById('btn-10')?.classList.add('sel');
  }

  const testPage = document.getElementById('page-test');
  testPage.classList.toggle('ghost-active', mode === 'ghost');

  const ghostPanel = document.getElementById('ghost-panel-col');
  if (ghostPanel) ghostPanel.style.removeProperty('display');

  // Always ensure typing col is visible
  const typingCol = document.getElementById('ghost-typing-col');
  if (typingCol) typingCol.style.display = 'block';

  const timeCtrl = document.querySelector('.test-controls');
  timeCtrl.style.display = mode === 'words' ? 'none' : 'flex';

  const timerLabel = document.getElementById('timer-live-label');
  if (timerLabel) timerLabel.textContent = mode === 'words' ? ' Stopwatch' : 'Timer';

  if (mode === 'ghost') {
    setTimeout(() => {
      const defBtn = document.querySelector('.ghost-lvl-btn-mini.sel');
      selectGhostLevel(selectedGhostLevel, defBtn);
    }, 50);
    // Small delay for ghost layout to render before text
    setTimeout(() => newText(), 80);
  } else {
    newText();
  }
}

function setTime(t) {
  // 🔒 Lock during active test
  if (state.started && !state.finished) {
    showToast('T Finish or restart the test first!');
    // Shake the active button visually
    const activeBtn = document.querySelector('.test-controls .ctrl-btn.sel');
    if (activeBtn) {
      activeBtn.style.animation = 'none';
      activeBtn.classList.add('btn-shake');
      setTimeout(() => activeBtn.classList.remove('btn-shake'), 500);
    }
    return;
  }
  state.timeLimit = t;
  document.querySelectorAll('[id^="btn-"]').forEach(b=>{if(b.id.startsWith('btn-') && !b.id.includes('punc') && !b.id.includes('nums')) b.classList.remove('sel')});
  document.getElementById('btn-'+t)?.classList.add('sel');
  resetTest();
}

function togglePunc() {
  if (state.started && !state.finished) { showToast('T Finish or restart first!'); return; }
  state.usePunctuation = !state.usePunctuation;
  document.getElementById('btn-punc').classList.toggle('sel', state.usePunctuation);
  newText();
}
function toggleNums() {
  if (state.started && !state.finished) { showToast('T Finish or restart first!'); return; }
  state.useNumbers = !state.useNumbers;
  document.getElementById('btn-nums').classList.toggle('sel', state.useNumbers);
  newText();
}

// 
//  WORD RAIN GAME
// 
let rainState = { active: false, score: 0, lives: 5, words: [], speed: 0.6, interval: null, difficulty: 'easy', animFrame: null };
const rainCanvas = document.getElementById('word-rain-canvas');
const rainCtx = rainCanvas.getContext('2d');
const rainWords = ['code','fast','type','guru','laser','speed','pixel','flash','cyber','neon','grid','flow','wave','pulse','byte','data','node','loop','sync','hack','rust','void','core','ship','leap','fire','glow','bolt','dash','zoom','ace','pro','max','fly','run','hit','win','aim','top','now'];
const diffSettings = { easy:{speed:0.4,interval:3000}, medium:{speed:0.8,interval:2000}, hard:{speed:1.4,interval:1200} };

function initRainCanvas() {
  resizeRainCanvas();
  rainCtx.clearRect(0,0,rainCanvas.width,rainCanvas.height);
  drawRainBg();
}
function resizeRainCanvas() {
  const c = document.getElementById('word-rain-canvas');
  if (c) { rainCanvas.width = c.offsetWidth || rainCanvas.offsetWidth; rainCanvas.height = c.offsetHeight || 460; }
}

function setRainDiff(d) {
  rainState.difficulty = d;
  document.querySelectorAll('[id^="rain-"]').forEach(b=>{if(b.id.startsWith('rain-')&&['rain-easy','rain-med','rain-hard'].includes(b.id)) b.classList.remove('sel')});
  document.getElementById('rain-'+d)?.classList.add('sel');
  if (d==='med') { document.getElementById('rain-medium')?.classList.add('sel'); document.getElementById('rain-med').classList.add('sel'); }
}

function drawRainBg() {
  rainCtx.fillStyle = 'rgba(6,13,20,0.3)';
  rainCtx.fillRect(0,0,rainCanvas.width,rainCanvas.height);
  // scanlines
  for(let y=0;y<rainCanvas.height;y+=4) {
    rainCtx.fillStyle = 'rgba(0,0,0,0.05)';
    rainCtx.fillRect(0,y,rainCanvas.width,2);
  }
}

function startWordRain() {
  checkAuthAndAction(() => {
    _internal_startWordRain();
  });
}
function _internal_startWordRain() {
  rainState = { active:true, score:0, lives:5, words:[], difficulty:rainState.difficulty, animFrame:null,
    speed: diffSettings[rainState.difficulty].speed, interval: diffSettings[rainState.difficulty].interval };
  document.getElementById('rain-input').disabled = false;
  document.getElementById('rain-input').value = '';
  document.getElementById('rain-input').focus();
  document.getElementById('rain-start-btn').textContent = '0  RUNNING';
  document.getElementById('rain-score').textContent = '0';
  updateRainLives();

  clearInterval(rainState.spawnInterval);
  rainState.spawnInterval = setInterval(spawnRainWord, rainState.interval);
  spawnRainWord();
  animateRain();
}

function spawnRainWord() {
  if (!rainState.active) return;
  const w = rainWords[Math.floor(Math.random()*rainWords.length)];
  rainState.words.push({
    text: w, x: 30+Math.random()*(rainCanvas.width-120),
    y: -30, speed: rainState.speed + Math.random()*0.4,
    hue: Math.random()*60-30
  });
}

function animateRain() {
  if (!rainState.active) return;
  rainCtx.clearRect(0,0,rainCanvas.width,rainCanvas.height);
  drawRainBg();

  // Draw bottom line
  rainCtx.strokeStyle = 'rgba(255,51,102,0.4)';
  rainCtx.lineWidth = 2;
  rainCtx.setLineDash([8,4]);
  rainCtx.beginPath();
  rainCtx.moveTo(0, rainCanvas.height-40);
  rainCtx.lineTo(rainCanvas.width, rainCanvas.height-40);
  rainCtx.stroke();
  rainCtx.setLineDash([]);

  const typed = document.getElementById('rain-input').value.trim().toLowerCase();

  rainState.words.forEach((w,i) => {
    w.y += w.speed;
    const isTarget = typed.length > 0 && w.text.startsWith(typed);
    const isMatch = w.text === typed;

    // Glow
    rainCtx.save();
    rainCtx.shadowColor = isTarget ? '#00d4ff' : 'rgba(0,212,255,0.3)';
    rainCtx.shadowBlur = isTarget ? 20 : 8;

    // Pill bg
    const metrics = rainCtx.measureText(w.text);
    const pw = metrics.width + 24, ph = 36;
    const px = w.x - pw/2, py = w.y - 24;
    rainCtx.fillStyle = isTarget ? 'rgba(0,212,255,0.15)' : 'rgba(10,25,40,0.7)';
    roundRect(rainCtx, px, py, pw, ph, 6);
    rainCtx.fill();
    rainCtx.strokeStyle = isTarget ? 'rgba(0,212,255,0.6)' : 'rgba(0,212,255,0.2)';
    rainCtx.lineWidth = 1;
    roundRect(rainCtx, px, py, pw, ph, 6);
    rainCtx.stroke();

    // Text with typed highlight
    rainCtx.font = `bold 16px "Space Mono", monospace`;
    rainCtx.textAlign = 'center';
    if (isTarget && typed.length > 0) {
      const beforeW = rainCtx.measureText(w.text.slice(0,typed.length)).width;
      const startX = w.x - rainCtx.measureText(w.text).width/2;
      rainCtx.fillStyle = '#00d4ff';
      rainCtx.fillText(w.text.slice(0,typed.length), startX+beforeW/2, w.y);
      rainCtx.fillStyle = '#ffffff80';
      rainCtx.textAlign = 'left';
      rainCtx.fillText(w.text.slice(typed.length), startX+beforeW, w.y);
    } else {
      rainCtx.fillStyle = '#c8e0f0cc';
      rainCtx.fillText(w.text, w.x, w.y);
    }
    rainCtx.restore();

    // Hit ground
    if (w.y > rainCanvas.height - 40) {
      rainState.words.splice(i,1);
      rainState.lives--;
      updateRainLives();
      if (rainState.lives <= 0) endWordRain();
      // Flash red
      rainCtx.fillStyle = 'rgba(255,51,102,0.1)';
      rainCtx.fillRect(0,0,rainCanvas.width,rainCanvas.height);
    }
  });

  rainState.animFrame = requestAnimationFrame(animateRain);
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath(); ctx.moveTo(x+r,y);
  ctx.lineTo(x+w-r,y); ctx.arcTo(x+w,y,x+w,y+r,r);
  ctx.lineTo(x+w,y+h-r); ctx.arcTo(x+w,y+h,x+w-r,y+h,r);
  ctx.lineTo(x+r,y+h); ctx.arcTo(x,y+h,x,y+h-r,r);
  ctx.lineTo(x,y+r); ctx.arcTo(x,y,x+r,y,r); ctx.closePath();
}

function updateRainLives() {
  document.getElementById('rain-lives').textContent = '<3'.repeat(Math.max(0,rainState.lives));
}

document.getElementById('rain-input').addEventListener('keydown', function(e) {
  if (!rainState.active) return;
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    const typed = this.value.trim().toLowerCase();
    const idx = rainState.words.findIndex(w => w.text === typed);
    if (idx !== -1) {
      // Explode!
      explodeWord(rainState.words[idx]);
      rainState.words.splice(idx,1);
      rainState.score += 10 * (rainState.difficulty==='hard'?3:rainState.difficulty==='medium'?2:1);
      document.getElementById('rain-score').textContent = rainState.score;
      this.value = '';
    }
  }
});
document.getElementById('rain-input').addEventListener('input', function() {
  // Real time matching feedback handled in draw loop
});

function explodeWord(w) {
  // Draw burst effect on canvas
  for (let i=0; i<8; i++) {
    setTimeout(()=>{
      rainCtx.save();
      rainCtx.beginPath();
      rainCtx.arc(w.x, w.y, 5+i*8, 0, Math.PI*2);
      rainCtx.strokeStyle = `rgba(0,212,255,${0.8-i*0.1})`;
      rainCtx.lineWidth = 2;
      rainCtx.stroke();
      rainCtx.restore();
    }, i*30);
  }
}

function endWordRain() {
  rainState.active = false;
  clearInterval(rainState.spawnInterval);
  cancelAnimationFrame(rainState.animFrame);
  document.getElementById('rain-input').disabled = true;
  document.getElementById('rain-start-btn').textContent = '▶ START GAME';
  // Draw game over
  rainCtx.fillStyle = 'rgba(2,4,8,0.7)';
  rainCtx.fillRect(0,0,rainCanvas.width,rainCanvas.height);
  rainCtx.font = 'bold 48px "Orbitron", sans-serif';
  rainCtx.fillStyle = '#ff3366';
  rainCtx.textAlign = 'center';
  rainCtx.shadowColor = '#ff3366';
  rainCtx.shadowBlur = 30;
  rainCtx.fillText('GAME OVER', rainCanvas.width/2, rainCanvas.height/2-20);
  rainCtx.font = 'bold 24px "Orbitron", sans-serif';
  rainCtx.fillStyle = '#00d4ff';
  rainCtx.shadowColor = '#00d4ff';
  rainCtx.fillText('Score: '+rainState.score, rainCanvas.width/2, rainCanvas.height/2+30);
  showToast('Game Over! Score: '+rainState.score+' 🎮');
}

// 
//  LEADERBOARD
// 
const lbData = [
  {rank:1,name:'NightOwl',wpm:198,acc:'99.2%',mode:'60s',tag:'legend'},
  {rank:2,name:'SpeedDemon_X',wpm:184,acc:'98.7%',mode:'30s',tag:'pro'},
  {rank:3,name:'TypeMaster',wpm:176,acc:'99.5%',mode:'120s',tag:'legend'},
  {rank:4,name:'CyberFingers',wpm:165,acc:'97.8%',mode:'60s',tag:'pro'},
  {rank:5,name:'KeyboardWizard',wpm:158,acc:'99.1%',mode:'60s',tag:'pro'},
  {rank:6,name:'FastHands99',wpm:152,acc:'98.3%',mode:'30s',tag:''},
  {rank:7,name:'CodeTyper',wpm:147,acc:'97.6%',mode:'60s',tag:''},
  {rank:8,name:'SwiftKeys',wpm:142,acc:'98.9%',mode:'120s',tag:''},
  {rank:9,name:'TurboType',wpm:138,acc:'97.2%',mode:'60s',tag:''},
  {rank:10,name:'YOU',wpm:0,acc:'0',mode:'0',tag:''},
];
function buildLeaderboard() {
  lbData[9].wpm = Math.max(...Object.values(state.stats.pbWpm), 0);
  lbData[9].acc = state.stats.accuracies.length ? Math.round(state.stats.accuracies.reduce((a,b)=>a+b,0)/state.stats.accuracies.length)+'%' : '0';
  const sorted = [...lbData].sort((a,b)=>b.wpm-a.wpm).map((e,i)=>({...e,rank:i+1}));

  const tbody = document.getElementById('lb-body');
  tbody.innerHTML = '';
  sorted.forEach(e => {
    const isYou = e.name==='YOU';
    const rankClass = e.rank===1?'top1':e.rank===2?'top2':e.rank===3?'top3':'';
    const rankIcon = e.rank===1?'🥇':e.rank===2?'🥈':e.rank===3?'🥉':e.rank;
    const tagHtml = e.tag ? `<span class="lb-tag tag-${e.tag}">${e.tag.toUpperCase()}</span>` : '';
    tbody.innerHTML += `
      <tr style="${isYou?'background:rgba(0,212,255,0.05);':''}" >
        <td><span class="lb-rank ${rankClass}">${rankIcon}</span></td>
        <td><span class="lb-name" style="${isYou?'color:var(--cyan);font-weight:700':''}">${isYou?'⟨ '+e.name+' ⟩':e.name}</span> ${tagHtml}</td>
        <td><span class="lb-wpm">${e.wpm||'?'}</span></td>
        <td><span class="lb-acc">${e.acc}</span></td>
        <td style="color:var(--text2);font-size:0.8rem">${e.mode}</td>
        <td style="color:var(--text2);font-size:0.75rem">${e.rank<=3?'S Rank':e.rank<=6?'A Rank':e.rank<=8?'B Rank':'C Rank'}</td>
      </tr>`;
  });

  // Heatmap
  const hm = document.getElementById('heatmap');
  hm.innerHTML = '';
  for (let i=0; i<49; i++) {
    const cell = document.createElement('div');
    cell.className = 'hm-cell';
    const r = Math.random();
    if (r>0.85) cell.classList.add('l4');
    else if (r>0.65) cell.classList.add('l3');
    else if (r>0.4) cell.classList.add('l2');
    else if (r>0.2) cell.classList.add('l1');
    hm.appendChild(cell);
  }
}

// 
//  WEB AUDIO ENGINE
// 
let audioCtx = null;
function getAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}
function playKeyClick() {
  if (!state.settings.sound) return;
  try {
    const ctx = getAudio();
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.04, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.008));
    }
    const src = ctx.createBufferSource();
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    src.buffer = buf;
    src.connect(gain); gain.connect(ctx.destination);
    src.start();
  } catch(e){}
}
function playErrorSound() {
  if (!state.settings.errSnd) return;
  try {
    const ctx = getAudio();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + 0.12);
  } catch(e){}
}
function playComboSound(n) {
  if (!state.settings.comboSnd) return;
  try {
    const ctx = getAudio();
    const freqs = [523, 659, 784, 1047];
    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = f;
      gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.07);
      gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + i * 0.07 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.07 + 0.15);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.07);
      osc.stop(ctx.currentTime + i * 0.07 + 0.15);
    });
  } catch(e){}
}
function playTestComplete() {
  if (!state.settings.sound && !state.settings.comboSnd) return;
  try {
    const ctx = getAudio();
    [[523,0],[659,0.1],[784,0.2],[1047,0.3],[1319,0.45]].forEach(([f,t]) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = f;
      gain.gain.setValueAtTime(0.15, ctx.currentTime + t);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + 0.3);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(ctx.currentTime + t);
      osc.stop(ctx.currentTime + t + 0.3);
    });
  } catch(e){}
}

// 
//  SETTINGS 0 FULLY FUNCTIONAL
// 
function toggleSetting(key) {
  state.settings[key] = !state.settings[key];
  const el = document.getElementById('toggle-' + key);
  if (el) el.classList.toggle('on', state.settings[key]);

  switch(key) {
    case 'particles':
      document.getElementById('particles').style.display = state.settings.particles ? 'block' : 'none';
      showToast(state.settings.particles ? '¨ Particles ON' : '¨ Particles OFF');
      break;
    case 'kb':
      const kbSection = document.getElementById('keyboard');
      const kbTitle = document.getElementById('kb-section-title');
      if (kbSection) kbSection.style.display = state.settings.kb ? 'flex' : 'none';
      if (kbTitle) kbTitle.style.display = state.settings.kb ? 'flex' : 'none';
      showToast(state.settings.kb ? '⌨️ Keyboard Visible' : '⌨️ Keyboard Hidden');
      break;
    case 'chart':
      // Chart visibility is managed at test time, but update if visible
      const cw = document.getElementById('chart-wrap');
      if (cw && cw.style.display !== 'none') {
        if (!state.settings.chart) cw.style.display = 'none';
      }
      showToast(state.settings.chart ? '“Š WPM Chart ON' : '“Š WPM Chart OFF');
      break;
    case 'sound':
      // Init audio context on first enable (requires user gesture)
      if (state.settings.sound) { try { getAudio(); } catch(e){} }
      showToast(state.settings.sound ? '🔼Š Key Sounds ON' : '🔇 Key Sounds OFF');
      if (state.settings.sound) playKeyClick();
      break;
    case 'errSnd':
      showToast(state.settings.errSnd ? '🔼Š Error Sound ON' : '🔇 Error Sound OFF');
      if (state.settings.errSnd) playErrorSound();
      break;
    case 'comboSnd':
      showToast(state.settings.comboSnd ? '🔼Š Combo Sound ON' : '🔇 Combo Sound OFF');
      if (state.settings.comboSnd) playComboSound();
      break;
    case 'strictMode':
      showToast(state.settings.strictMode ? 'š« Strict Mode ON 0 Fix errors!' : '... Strict Mode OFF');
      break;
    case 'noBack':
      showToast(state.settings.noBack ? '’ª Confidence Mode ON 0 No backspace!' : '... Confidence Mode OFF');
      break;
    case 'tabRestart':
      showToast(state.settings.tabRestart ? '⌨️ Tab Restart ON' : '⌨️ Tab Restart OFF');
      break;
    case 'caret':
      showToast(state.settings.caret ? '“ Smooth Caret ON' : '“ Smooth Caret OFF');
      break;
    case 'capitals':
      showToast(state.settings.capitals ? 'Aa Capitals ON 0 Shift required!' : 'aa Capitals OFF');
      if (!state.finished) { state.currentText = generateText(); renderText(); state.typedIndex=0; state.typed=[]; state.errors=0; state.totalKeystrokes=0; state.correctKeystrokes=0; updateDisplay(); }
      break;
    case 'focusMode':
      document.body.classList.toggle('focus-active', state.settings.focusMode);
      const statsBar = document.querySelector('.stats-bar');
      const testHdr = document.querySelector('.test-header');
      const kbWrap = document.getElementById('keyboard');
      const kbTitle2 = document.getElementById('kb-section-title');
      if (statsBar) statsBar.style.opacity = state.settings.focusMode ? '0' : '1';
      if (statsBar) statsBar.style.pointerEvents = state.settings.focusMode ? 'none' : 'auto';
      if (testHdr) testHdr.style.opacity = state.settings.focusMode ? '0.2' : '1';
      if (kbWrap && state.settings.kb) kbWrap.style.opacity = state.settings.focusMode ? '0.15' : '1';
      if (kbTitle2) kbTitle2.style.opacity = state.settings.focusMode ? '0.15' : '1';
      document.querySelectorAll('.live-stat').forEach((el,i)=>{
        if(i<4) el.style.opacity = state.settings.focusMode ? '0.15' : '1';
      });
      showToast(state.settings.focusMode ? '🎯 Focus Mode ON 0 just you and the text' : '🎯 Focus Mode OFF');
      break;
    case 'hideWpm':
      showToast(state.settings.hideWpm ? '‘ WPM Hidden 0 type without pressure!' : '‘ WPM Visible');
      document.getElementById('live-wpm').textContent = state.settings.hideWpm ? '0' : '0';
      break;
    case 'blindMode':
      showToast(state.settings.blindMode ? 'ˆ Blind Mode ON 0 no error highlights!' : 'ˆ Blind Mode OFF');
      updateDisplay();
      break;
    case 'wordHighlight':
      showToast(state.settings.wordHighlight ? '’¡ Word Highlight ON' : '’¡ Word Highlight OFF');
      updateDisplay();
      break;
    case 'showPct':
      document.getElementById('progress-pct').style.display = state.settings.showPct ? 'block' : 'none';
      showToast(state.settings.showPct ? '% Progress shown' : '% Progress hidden');
      break;
  }
  // Persist settings
  try { localStorage.setItem('tg_settings', JSON.stringify(state.settings)); } catch(e) {}
}

// 
//  STATS PERSISTENCE
// 
function saveStats() {
  try { localStorage.setItem('tg_stats', JSON.stringify(state.stats)); } catch(e) {}
}
function updateStatsBar() {
  function setStatVal(id, newVal) {
    const el = document.getElementById(id);
    if (!el) return;
    const prev = el.textContent;
    el.textContent = newVal;
    if (String(prev) !== String(newVal) && prev !== '0' && prev !== '0') {
      el.classList.remove('pop');
      void el.offsetWidth; // reflow to restart animation
      el.classList.add('pop');
      setTimeout(() => el.classList.remove('pop'), 400);
    }
  }

  const pb = Math.max(...Object.values(state.stats.pbWpm), 0);
  setStatVal('pb-wpm', pb || 0);
  setStatVal('total-tests', state.stats.totalTests);
  const avgAcc = state.stats.accuracies.length
    ? Math.round(state.stats.accuracies.reduce((a,b)=>a+b,0)/state.stats.accuracies.length)+'%'
    : '0';
  setStatVal('avg-acc', avgAcc);
  setStatVal('total-words', state.stats.totalWords);
  setStatVal('streak-count', state.stats.streak);
  document.getElementById('pr-15').textContent = state.stats.pbWpm[15] || 0;
  document.getElementById('pr-60').textContent = state.stats.pbWpm[60] || 0;
}
function clearStats() {
  if (!confirm('Reset all stats?')) return;
  state.stats = { pbWpm:{}, totalTests:0, totalWords:0, accuracies:[], streak:0 };
  saveStats(); updateStatsBar();
  showToast('Stats cleared ✓');
}

// 
//  TOAST
// 
function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.getElementById('toast-container').appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

function setFontSize(size, el) {
  state.settings.fontSize = size;
  const box = document.getElementById('typing-box');
  if (box) { box.classList.remove('fs-sm','fs-md','fs-lg','fs-xl'); box.classList.add('fs-'+size); }
  // Also apply to body for inheritance
  document.body.classList.remove('fs-sm','fs-md','fs-lg','fs-xl');
  document.body.classList.add('fs-'+size);
  document.querySelectorAll('.fs-pill').forEach(p => p.classList.remove('sel'));
  if (el) el.classList.add('sel');
  showToast('🔼 Font size: '+{sm:'Small',md:'Medium',lg:'Large',xl:'X-Large'}[size]);
  try { localStorage.setItem('tg_settings', JSON.stringify(state.settings)); } catch(e) {}
}

// 
//  AI FORGE 0 OpenRouter-powered text generator
// 
const AF_SUGGESTIONS = [
  'Biography of Elon Musk','Quantum Physics basics','Ancient Rome history',
  'Climate change science','How the internet works','Story about a lost astronaut',
  'The philosophy of Stoicism','Machine learning explained','The French Revolution',
  'Life under the ocean','A day in medieval England','How black holes form'
];

let afState = {
  words: 150,
  timer: 'auto', // 'auto' = stopwatch, number = countdown seconds
};

function openAiForge() {
  // populate suggestion chips
  const sg = document.getElementById('af-suggestions');
  if (sg && sg.children.length === 0) {
    const picks = AF_SUGGESTIONS.sort(()=>Math.random()-0.5).slice(0,6);
    picks.forEach(s => {
      const chip = document.createElement('div');
      chip.className = 'af-chip';
      chip.textContent = s;
      chip.onclick = () => {
        document.getElementById('af-topic').value = s;
        chip.style.background = 'rgba(0,212,255,0.18)';
        chip.style.color = 'var(--accent)';
      };
      sg.appendChild(chip);
    });
  }
  afShowStep(1);
  document.getElementById('aiforge-overlay').classList.add('show');
  setTimeout(() => document.getElementById('af-topic').focus(), 300);
}

function closeAiForge() {
  document.getElementById('aiforge-overlay').classList.remove('show');
  showPage(lastPage || 'home');
}

function afShowStep(n) {
  document.querySelectorAll('.aiforge-step').forEach(s => s.style.display = 'none');
  const el = document.getElementById('afs-' + n) || document.getElementById('afs-loading');
  if (el) el.style.display = 'block';
}

function afNext(step) {
  if (step === 2) {
    const topic = document.getElementById('af-topic').value.trim();
    if (!topic) {
      document.getElementById('af-topic').style.borderColor = 'var(--red)';
      document.getElementById('af-topic').placeholder = '  Please enter a topic first!';
      setTimeout(() => {
        document.getElementById('af-topic').style.borderColor = 'var(--border)';
        document.getElementById('af-topic').placeholder = 'e.g. the biography of Elon Musk...';
      }, 2000);
      return;
    }
  }
  afShowStep(step);
}

function afBack(step) { afShowStep(step); }

function pickAfWords(n, el) {
  afState.words = n;
  document.querySelectorAll('#af-wc-pills .af-pill').forEach(p => p.classList.remove('sel'));
  el.classList.add('sel');
  document.getElementById('af-custom-words').value = '';
}

function syncAfCustomWords(val) {
  const n = parseInt(val);
  if (n >= 20 && n <= 1000) {
    afState.words = n;
    document.querySelectorAll('#af-wc-pills .af-pill').forEach(p => p.classList.remove('sel'));
  }
}

function pickAfTimer(val, el) {
  afState.timer = val;
  document.querySelectorAll('#afs-3 .af-pill').forEach(p => p.classList.remove('sel'));
  el.classList.add('sel');
}

async function afGenerate() {
  const topic = document.getElementById('af-topic').value.trim();
  if (!topic) { afShowStep(1); return; }

  // OpenRouter API key
  const apiKey = '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';

  // Custom word count from input
  const customW = parseInt(document.getElementById('af-custom-words').value);
  if (customW >= 20 && customW <= 1000) afState.words = customW;

  // Show loading
  afShowStep('loading');
  animateLoadBar();

  const loadMsgs = [
    'AI is crafting your passage...',
    'Researching the topic...',
    'Structuring the text...',
    'Polishing the sentences...',
    'Almost ready...'
  ];
  let msgIdx = 0;
  const msgInterval = setInterval(() => {
    msgIdx = (msgIdx + 1) % loadMsgs.length;
    const el = document.getElementById('af-loading-msg');
    if (el) el.textContent = loadMsgs[msgIdx];
  }, 1800);

  try {
    const prompt = `Write a ${afState.words}-word informative and engaging passage about: "${topic}". Rules: No headers, no bullet points, no markdown, no asterisks, no special symbols. Pure flowing prose only. Begin directly with the content 0 no preamble like "Here is" or "Certainly".`;

    // Try models in order 0 if one fails, try the next
    const MODELS = [
      'openai/gpt-4o-mini',
      'google/gemini-2.0-flash-001',
      'anthropic/claude-3-haiku',
      'mistralai/mistral-7b-instruct:free',
      'meta-llama/llama-3.1-8b-instruct:free',
    ];

    let generatedText = '';
    let lastError = '';

    for (let i = 0; i < MODELS.length; i++) {
      const model = MODELS[i];
      const msgEl = document.getElementById('af-loading-msg');
      if (msgEl) msgEl.textContent = `Trying ${model.split('/')[1].split(':')[0]}...`;

      try {
        const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            'HTTP-Referer': 'https://typingguru.app',
            'X-Title': 'TypingGuru AI Forge'
          },
          body: JSON.stringify({
            model: model,
            max_tokens: 1400,
            temperature: 0.7,
            messages: [
              { role: 'system', content: 'You are a writing assistant. Respond with plain prose only. No markdown, no bullet points, no special characters like *, #, _, `. Just clean flowing sentences.' },
              { role: 'user', content: prompt }
            ]
          })
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          lastError = errData?.error?.message || `HTTP ${res.status}`;
          continue; // try next model
        }

        const data = await res.json();
        const raw = data.choices?.[0]?.message?.content || '';
        if (raw && raw.length > 30) {
          generatedText = raw;
          break; // success!
        }
      } catch (fetchErr) {
        lastError = fetchErr.message;
        continue; // try next model
      }
    }

    clearInterval(msgInterval);

    if (!generatedText) {
      throw new Error(lastError || 'All models failed. Please check your API key balance at openrouter.ai');
    }

    // Clean up
    generatedText = generatedText
      .replace(/#{1,6}\s/g, '')
      .replace(/\*\*/g, '').replace(/\*/g, '')
      .replace(/_{2}/g, '').replace(/_/g, '')
      .replace(/`/g, '')
      .replace(/\n+/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .replace(/^(Here is|Certainly|Sure,|Of course|I'd be happy)[^.!]*[.!]\s*/i, '')
      .trim();

    // If capitals setting is OFF, convert to lowercase (AI text may have mixed case)
    if (!state.settings.capitals) {
      generatedText = generatedText.toLowerCase();
    }

    if (generatedText.length < 30) throw new Error('Response too short 0 please try again');

    closeAiForge();
    launchAiForgeTest(generatedText, topic);

  } catch (err) {
    clearInterval(msgInterval);
    const loadMsg = document.getElementById('af-loading-msg');
    const spinner = document.getElementById('af-loading-spinner');
    const bar = document.getElementById('af-load-bar');
    const errText = err.message || 'Could not generate text.';
    if (spinner) { spinner.style.borderTopColor = 'var(--red)'; spinner.style.animationPlayState = 'paused'; }
    if (bar) bar.style.background = 'var(--red)';
    if (loadMsg) loadMsg.innerHTML = `<span style="color:var(--red)">  ${errText}</span><br><span style="font-size:0.78rem;color:var(--text2);margin-top:6px;display:block;">Retrying in 3 seconds...</span>`;
    setTimeout(() => afShowStep(3), 3000);
  }
}

function animateLoadBar() {
  const bar = document.getElementById('af-load-bar');
  if (!bar) return;
  let pct = 0;
  const iv = setInterval(() => {
    // Simulate progress 0 fast to 80% then slow
    const increment = pct < 40 ? 3 : pct < 70 ? 1.5 : pct < 85 ? 0.4 : 0.1;
    pct = Math.min(pct + increment, 92);
    bar.style.width = pct + '%';
    if (pct >= 92) clearInterval(iv);
  }, 80);
  // Complete bar when test launches
  bar._complete = () => { clearInterval(iv); bar.style.width = '100%'; };
}

function launchAiForgeTest(text, topic) {
  // Set the generated text as current
  state.currentText = text;
  state.mode = 'aiforge';

  // Set timer mode
  if (afState.timer === 'auto') {
    state.timeLimit = 9999; // effectively infinite 0 stopwatch mode
  } else {
    state.timeLimit = afState.timer;
    // Update timer buttons selection
    document.querySelectorAll('[id^="btn-"]').forEach(b => {
      if (b.id.startsWith('btn-') && !b.id.includes('punc') && !b.id.includes('nums')) b.classList.remove('sel');
    });
    const btn = document.getElementById('btn-' + afState.timer);
    if (btn) btn.classList.add('sel');
  }

  // Update UI
  document.getElementById('mode-title').textContent = `🤖 AI Forge 0 ${topic.length > 30 ? topic.slice(0,28)+'' : topic}`;
  // Remove ghost-active so panel hides via CSS
  document.getElementById('page-test').classList.remove('ghost-active');
  const ghostPanelAf = document.getElementById('ghost-panel-col');
  if (ghostPanelAf) ghostPanelAf.style.removeProperty('display');

  // Show/hide timer controls
  const timeCtrl = document.querySelector('.test-controls');
  timeCtrl.style.display = afState.timer === 'auto' ? 'none' : 'flex';

  // Update timer label
  const timerLabel = document.getElementById('timer-live-label');
  if (timerLabel) timerLabel.textContent = afState.timer === 'auto' ? ' Stopwatch' : 'Timer';

  // Reset and render
  state.started = false;
  state.finished = false;
  state.paused = false;
  state.typedIndex = 0;
  state.errors = 0;
  state.totalKeystrokes = 0;
  state.correctKeystrokes = 0;
  state.combo = 0;
  state.maxCombo = 0;
  state.typed = [];
  state.timeLeft = state.timeLimit;
  clearInterval(state.timerInterval);
  clearInterval(state.stopwatchInterval);

  document.getElementById('live-wpm').textContent = '0';
  document.getElementById('live-acc').textContent = '100%';
  document.getElementById('live-errors').textContent = '0';
  document.getElementById('live-combo').textContent = '0x';
  document.getElementById('live-timer').textContent = '0';
  document.getElementById('live-timer').style.fontSize = '';
  document.getElementById('live-timer').style.color = '';
  document.getElementById('progress-fill').style.width = '0%';
  document.getElementById('timer-ring').style.strokeDashoffset = '0';
  document.getElementById('timer-ring').style.stroke = 'var(--accent)';
  document.getElementById('chart-wrap').style.display = 'none';
  document.getElementById('typing-box').classList.remove('focused','error-flash');
  document.getElementById('typing-box').style.opacity = '1';
  document.getElementById('typing-box').style.filter = 'none';

  const pauseBtn = document.getElementById('btn-pause');
  if (pauseBtn) { pauseBtn.style.opacity='0.4'; pauseBtn.style.pointerEvents='none'; pauseBtn.textContent='⏸ PAUSE'; }
  document.querySelector('.test-controls')?.classList.remove('test-locked');

  const pauseOverlay = document.getElementById('pause-overlay');
  if (pauseOverlay) pauseOverlay.style.display = 'none';
  document.getElementById('typing-input').removeAttribute('disabled');

  renderText();
  document.getElementById('typing-input').value = '';

  // Navigate to test page and focus
  showPage('test');
  setTimeout(() => document.getElementById('typing-input').focus(), 100);
  showToast(`🤖 AI generated ${text.split(' ').length} words about "${topic}" 0 start typing!`);
}
// 
//  EXPERIMENT MODE ENGINE
// 

const EXP_CONFIG = {
  reverse:    { title:'🔄 Reverse Typing',  tip:'Type the text BACKWARDS 0 last character first!', icon:'🔄' },
  blind:      { title:'👁️ Blind Mode',       tip:'Text shows 3 sec then fades. Type from memory!', icon:'👁️' },
  onehand:    { title:'✋ One Hand Mode',    tip:'Left hand keys only: Q W E R T A S D F G Z X C V B', icon:'✋' },
  scramble:   { title:'🔀 Scrambled Words',  tip:'Words are shuffled. Type each CORRECT word and press Space.', icon:'🔀' },
  randcase:   { title:'🧠 Random Case',      tip:'Type EXACTLY as shown 0 every capital matters!', icon:'🧠' },
  decay:      { title:'⏱️ Speed Decay',       tip:'Stop for 1 second and text fades! Keep typing fast!', icon:'⏱️' },
  nofeedback: { title:'🔇 No Feedback',      tip:'No highlights shown while typing. Result only at end.', icon:'🔇' },
  hardcore:   { title:'🔥 Hardcore',         tip:'No backspace. Every mistake is permanent. No mercy!', icon:'🔥' },
  targetlock: { title:'🎯 Target Lock',      tip:'Type only the highlighted word, then press Space for next.', icon:'🎯' },
  moving:     { title:'🌀 Moving Text',      tip:'Type the glowing word in the input box below the canvas!', icon:'🌀' },
};

const LEFT_KEYS  = new Set(['q','w','e','r','t','a','s','d','f','g','z','x','c','v','b',' ']);
const RIGHT_KEYS = new Set(['y','u','i','o','p','h','j','k','l','n','m',' ']);

let expState = {
  mode:null, originalText:'', displayText:'', targetText:'',
  typedIndex:0, errors:0, totalKeys:0, correctKeys:0,
  started:false, startTime:null, interval:null, animFrame:null, finished:false,
  hand:'left', decayTimer:null,
  // scramble / targetlock
  words:[], currentWordIdx:0, currentWordTyped:'',
  // moving
  movingWords:[], movingInput:''
};
let expActive = false;
let expMovingHandler = null;

const EXP_TEXTS = [
  'the quick brown fox jumps over the lazy dog',
  'practice makes perfect and consistency builds speed',
  'every keystroke brings you closer to mastery',
  'focus on accuracy first and speed will follow',
  'typing is a skill that improves with daily practice',
];
function getExpText() { return EXP_TEXTS[Math.floor(Math.random()*EXP_TEXTS.length)]; }

// ”” Launch ”””””””””””””””””””””””””””””””””””
function launchExperiment(mode) {
  // clean up previous
  expActive = false;
  if (expState.interval) clearInterval(expState.interval);
  if (expState.animFrame) cancelAnimationFrame(expState.animFrame);
  if (expState.decayTimer) clearTimeout(expState.decayTimer);
  if (expMovingHandler) {
    document.getElementById('exp-input').removeEventListener('input', expMovingHandler);
    expMovingHandler = null;
  }

  const raw = getExpText();
  expState = {
    mode, originalText:raw, displayText:'', targetText:'',
    typedIndex:0, errors:0, totalKeys:0, correctKeys:0,
    started:false, startTime:null, interval:null, animFrame:null, finished:false,
    hand:'left', decayTimer:null,
    words:[], currentWordIdx:0, currentWordTyped:'',
    movingWords:[], movingInput:''
  };

  // Build display and target per mode
  if (mode === 'reverse') {
    expState.displayText = raw;                            // show original
    expState.targetText  = raw.split('').reverse().join(''); // user types reversed
  } else if (mode === 'scramble') {
    expState.words = raw.split(' ');
    expState.displayText = expState.words.map(w=>w.split('').sort(()=>Math.random()-0.5).join('')).join(' ');
    expState.targetText = raw; // validated word by word
  } else if (mode === 'randcase') {
    expState.displayText = raw.split('').map(c=>Math.random()>0.5?c.toUpperCase():c.toLowerCase()).join('');
    expState.targetText  = expState.displayText;
  } else if (mode === 'targetlock') {
    expState.displayText = raw;
    expState.targetText  = raw;
    expState.words = raw.split(' ');
  } else if (mode === 'moving') {
    expState.displayText = raw;
    expState.targetText  = raw;
    expState.words = raw.split(' ');
  } else {
    expState.displayText = raw;
    expState.targetText  = raw;
  }

  // UI
  const cfg = EXP_CONFIG[mode];
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const arena = document.getElementById('page-exp-arena');
  arena.classList.add('active');
  arena.style.display = 'block';
  window.scrollTo({top:0,behavior:'instant'});

  document.getElementById('exp-arena-title').textContent = cfg.title;
  document.getElementById('exp-tip-text').textContent = cfg.tip;
  document.getElementById('exp-result').style.display = 'none';
  document.getElementById('exp-wpm').textContent = '0';
  document.getElementById('exp-acc').textContent = '100%';
  document.getElementById('exp-timer').textContent = '0';
  document.getElementById('exp-errors').textContent = '0';

  const inp = document.getElementById('exp-input');
  inp.disabled = false;
  inp.value = '';
  inp.placeholder = mode === 'moving' ? 'Type the glowing word here...' : 'Start typing...';

  const canvas = document.getElementById('exp-moving-canvas');
  const textBox = document.getElementById('exp-text-box');
  // Show canvas BEFORE initMovingMode so offsetWidth is readable
  if (mode === 'moving') {
    canvas.style.display = 'block';
    textBox.style.display = 'none';
  } else {
    canvas.style.display = 'none';
    textBox.style.display = 'block';
  }
  document.getElementById('exp-onehand-sel').style.display = mode === 'onehand' ? 'flex' : 'none';

  // Render
  if (mode === 'moving') {
    initMovingMode();
  } else if (mode === 'blind') {
    renderExpChars();
    setTimeout(()=>{
      document.getElementById('exp-text-display').style.opacity='0.05';
    }, 3000);
  } else if (mode === 'targetlock') {
    renderTargetLock();
  } else if (mode === 'scramble') {
    renderScramble();
  } else {
    renderExpChars();
  }

  // Start decay immediately for decay mode
  if (mode === 'decay') startDecayWatch();

  expActive = true;
  expState.interval = setInterval(updateExpStats, 250);
  setTimeout(()=>inp.focus(), 80);
}

// ”” Render helpers ”””””””””””””””””””””””””””
function renderExpChars() {
  const disp = document.getElementById('exp-text-display');
  disp.innerHTML = '';
  disp.style.opacity = '1';
  const text = expState.displayText;
  for (let i=0; i<text.length; i++) {
    const s = document.createElement('span');
    s.className = 'ec' + (i===expState.typedIndex ? ' cursor' : ' pending');
    s.textContent = text[i];
    s.id = 'ec'+i;
    disp.appendChild(s);
  }
}

function renderScramble() {
  const disp = document.getElementById('exp-text-display');
  disp.innerHTML = '';
  disp.style.opacity = '1';
  expState.words.forEach((correctWord, wi) => {
    const scrambled = expState.displayText.split(' ')[wi];
    // word span
    const wordSpan = document.createElement('span');
    wordSpan.id = 'exp-word-' + wi;
    wordSpan.style.cssText = wi < expState.currentWordIdx
      ? 'color:var(--accent);opacity:0.5;'
      : wi === expState.currentWordIdx
        ? 'color:#fff;background:rgba(160,32,240,0.15);border-radius:4px;padding:0 4px;'
        : 'color:var(--text2);';
    wordSpan.textContent = scrambled;
    disp.appendChild(wordSpan);
    if (wi < expState.words.length-1) {
      const sp = document.createElement('span'); sp.textContent=' '; sp.style.color='var(--text2)'; disp.appendChild(sp);
    }
  });
}

function renderTargetLock() {
  const disp = document.getElementById('exp-text-display');
  disp.innerHTML = '';
  disp.style.opacity = '1';
  expState.words.forEach((word, wi) => {
    const span = document.createElement('span');
    span.id = 'exp-word-' + wi;
    if (wi < expState.currentWordIdx) {
      span.style.cssText = 'color:var(--accent);opacity:0.5;';
    } else if (wi === expState.currentWordIdx) {
      span.style.cssText = 'color:#fff;background:rgba(160,32,240,0.2);border-radius:4px;padding:2px 6px;box-shadow:0 0 12px rgba(160,32,240,0.4);font-weight:700;';
    } else {
      span.style.cssText = 'color:rgba(255,255,255,0.15);';
    }
    span.textContent = word;
    disp.appendChild(span);
    if (wi < expState.words.length-1) {
      const sp = document.createElement('span'); sp.textContent=' '; sp.style.color='rgba(255,255,255,0.1)'; disp.appendChild(sp);
    }
  });
}

function markExpChar(idx, correct) {
  const s = document.getElementById('ec'+idx);
  if (!s) return;
  s.classList.remove('cursor','pending','correct','wrong');
  s.classList.add(correct ? 'correct' : 'wrong');
}
function moveCursor(idx) {
  document.querySelectorAll('#exp-text-display .cursor').forEach(c=>c.classList.remove('cursor'));
  const s = document.getElementById('ec'+idx);
  if (s) s.classList.add('cursor');
}

// ”” Keydown handler ””””””””””””””””””””””””””
document.getElementById('exp-input').addEventListener('keydown', function(e) {
  if (!expActive || expState.finished) return;
  if (['Tab','Escape','F1','F5','F12'].includes(e.key)) return;

  // Moving mode uses input event 0 don't intercept keys here
  if (expState.mode === 'moving') return;

  // Backspace
  if (e.key === 'Backspace') {
    e.preventDefault();
    if (expState.mode === 'hardcore') { showToast('🔥 No backspace in Hardcore!'); return; }
    if (expState.mode === 'scramble' || expState.mode === 'targetlock') {
      if (expState.currentWordTyped.length > 0) {
        expState.currentWordTyped = expState.currentWordTyped.slice(0,-1);
        this.value = expState.currentWordTyped;
      }
      return;
    }
    if (expState.typedIndex > 0) {
      expState.typedIndex--;
      markExpChar(expState.typedIndex, false);
      // restore to pending
      const s = document.getElementById('ec'+expState.typedIndex);
      if (s) { s.classList.remove('correct','wrong'); s.classList.add('pending'); }
      moveCursor(expState.typedIndex);
    }
    return;
  }

  if (e.key.length > 1) return;
  e.preventDefault();

  const typed = e.key;

  // One-hand check
  if (expState.mode === 'onehand') {
    const allowed = expState.hand === 'left' ? LEFT_KEYS : RIGHT_KEYS;
    if (!allowed.has(typed.toLowerCase())) {
      expState.errors++;
      document.getElementById('exp-text-box').style.borderColor='var(--red)';
      setTimeout(()=>document.getElementById('exp-text-box').style.borderColor='var(--border)',200);
      updateExpStats(); return;
    }
  }

  // Start timer
  if (!expState.started) {
    expState.started = true;
    expState.startTime = Date.now();
  }

  // Decay reset
  if (expState.mode === 'decay') startDecayWatch();

  // ”” SCRAMBLE mode: word-by-word ””
  if (expState.mode === 'scramble') {
    if (typed === ' ') {
      // Check current word
      const correct = expState.words[expState.currentWordIdx];
      if (expState.currentWordTyped.toLowerCase() === correct.toLowerCase()) {
        expState.correctKeys += correct.length;
        expState.totalKeys += correct.length;
        expState.currentWordIdx++;
        expState.currentWordTyped = '';
        this.value = '';
        if (expState.currentWordIdx >= expState.words.length) { finishExperiment(); return; }
        renderScramble();
      } else {
        expState.errors++;
        expState.totalKeys++;
        document.getElementById('exp-text-box').style.borderColor='var(--red)';
        setTimeout(()=>document.getElementById('exp-text-box').style.borderColor='var(--border)',300);
      }
    } else {
      expState.currentWordTyped += typed;
      this.value = expState.currentWordTyped;
    }
    updateExpStats(); return;
  }

  // ”” TARGET LOCK mode: word-by-word ””
  if (expState.mode === 'targetlock') {
    if (typed === ' ') {
      const correct = expState.words[expState.currentWordIdx];
      if (expState.currentWordTyped === correct) {
        expState.correctKeys += correct.length;
        expState.totalKeys += correct.length;
        expState.currentWordIdx++;
        expState.currentWordTyped = '';
        this.value = '';
        if (expState.currentWordIdx >= expState.words.length) { finishExperiment(); return; }
        renderTargetLock();
      } else {
        expState.errors++;
        expState.totalKeys++;
        document.getElementById('exp-text-box').style.borderColor='var(--red)';
        setTimeout(()=>document.getElementById('exp-text-box').style.borderColor='var(--border)',300);
      }
    } else {
      expState.currentWordTyped += typed;
      this.value = expState.currentWordTyped;
      // Live highlight: show typed so far in word span
      const span = document.getElementById('exp-word-'+expState.currentWordIdx);
      if (span) {
        const correct = expState.words[expState.currentWordIdx];
        const ok = correct.startsWith(expState.currentWordTyped);
        span.style.boxShadow = ok ? '0 0 12px rgba(160,32,240,0.4)' : '0 0 12px rgba(255,51,102,0.4)';
        span.style.background = ok ? 'rgba(160,32,240,0.2)' : 'rgba(255,51,102,0.15)';
      }
    }
    updateExpStats(); return;
  }

  // ”” CHAR-BY-CHAR modes ””
  const target = expState.targetText[expState.typedIndex];
  if (target === undefined) return;
  expState.totalKeys++;

  const isCorrect = typed === target;
  if (isCorrect) {
    expState.correctKeys++;
    if (expState.mode !== 'nofeedback') markExpChar(expState.typedIndex, true);
    expState.typedIndex++;
    if (expState.mode !== 'nofeedback') moveCursor(expState.typedIndex);
    if (expState.typedIndex >= expState.targetText.length) { finishExperiment(); return; }
  } else {
    expState.errors++;
    if (expState.mode !== 'nofeedback') {
      markExpChar(expState.typedIndex, false);
      document.getElementById('exp-text-box').style.borderColor='var(--red)';
      setTimeout(()=>document.getElementById('exp-text-box').style.borderColor='var(--border)',150);
    }
    // strictMode for hardcore: don't advance
    if (expState.mode === 'hardcore') {
      updateExpStats(); return;
    }
    // other modes: advance anyway (showing error)
    expState.typedIndex++;
    if (expState.mode !== 'nofeedback') moveCursor(expState.typedIndex);
    if (expState.typedIndex >= expState.targetText.length) { finishExperiment(); return; }
  }

  updateExpStats();
});

// ”” Speed Decay ””””””””””””””””””””””””””””””
function startDecayWatch() {
  clearTimeout(expState.decayTimer);
  const disp = document.getElementById('exp-text-display');
  if (disp) disp.style.opacity = '1';
  expState.decayTimer = setTimeout(()=>{
    if (expState.mode==='decay' && expActive && !expState.finished) {
      const d = document.getElementById('exp-text-display');
      if (d) d.style.opacity = '0.08';
    }
  }, 1000);
}

// ”” One hand selector ””””””””””””””””””””””””
function setExpHand(hand, el) {
  expState.hand = hand;
  document.querySelectorAll('[id^="exp-"][id$="hand"]').forEach(b=>b.classList.remove('sel'));
  el.classList.add('sel');
  const keys = hand==='left' ? 'Q W E R T A S D F G Z X C V B' : 'Y U I O P H J K L N M';
  showToast((hand==='left'?'✋':'!š')+' '+hand+' hand: '+keys);
}

// ”” Moving Text Mode ”””””””””””””””””””””””””
function initMovingMode() {
  const canvas = document.getElementById('exp-moving-canvas');

  // Canvas must be visible before reading offsetWidth
  canvas.style.display = 'block';
  // Use setTimeout to let browser paint first
  setTimeout(() => {
    const W = canvas.offsetWidth || 760;
    const H = 340;
    canvas.width  = W;
    canvas.height = H;

    const ctx = canvas.getContext('2d');
    expState.words = expState.originalText.split(' ');
    expState.currentWordIdx = 0;

    // Spread words across the canvas width with some off-screen
    // Rows: 4 lanes, words distributed evenly
    const lanes = [H*0.22, H*0.40, H*0.60, H*0.78];
    expState.movingWords = expState.words.map((word, i) => ({
      word,
      done: false,
      active: i === 0, // first word active immediately
      x: (i === 0) ? W * 0.65 : W * 0.7 + i * (W * 0.45),
      y: lanes[i % 4],
      vx: -(0.9 + (i % 3) * 0.35),
      phase: i * 0.9,
      color: `hsl(${i * 52 % 360},80%,65%)`
    }));

    // Input handler
    expMovingHandler = function(ev) {
      if (!expActive || expState.finished) return;
      const val = ev.target.value.trim().toLowerCase();
      if (!val) return;
      const activeWord = expState.movingWords.find(w => w.active && !w.done);
      if (!activeWord) return;
      if (!expState.started) { expState.started = true; expState.startTime = Date.now(); }

      if (val === activeWord.word) {
        activeWord.done = true;
        activeWord.active = false;
        expState.correctKeys += activeWord.word.length;
        expState.totalKeys   += activeWord.word.length;
        expState.currentWordIdx++;
        ev.target.value = '';

        const next = expState.movingWords.find(w => !w.done && !w.active);
        if (next) {
          next.active = true;
          const W = document.getElementById('exp-moving-canvas').width;
          if (next.x > W * 0.85) next.x = W * 0.7;
        }

        if (expState.movingWords.every(w => w.done)) {
          finishExperiment(); return;
        }
      }
      updateExpStats();
    };

    // Use 'input' event so keydown preventDefault doesn't block it
    document.getElementById('exp-input').addEventListener('input', expMovingHandler);

    // Also support Space key to submit current word
    const spaceHandler = function(e) {
      if (!expActive || expState.mode !== 'moving') return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        // Simulate input event with current value
        const inp = document.getElementById('exp-input');
        const fakeEv = { target: inp };
        expMovingHandler(fakeEv);
        inp.value = '';
      }
    };
    document.getElementById('exp-input').addEventListener('keydown', spaceHandler);

    document.getElementById('exp-input').focus();

    animateMoving(ctx, canvas, W, H);
  }, 50);
}

function animateMoving(ctx, canvas, W, H) {
  if (!expActive || expState.mode !== 'moving') return;
  const t = Date.now() / 1000;
  W = W || canvas.width;
  H = H || canvas.height;

  ctx.clearRect(0, 0, W, H);

  // Dark bg
  ctx.fillStyle = 'rgba(2,4,14,0.92)';
  ctx.fillRect(0, 0, W, H);

  // Subtle grid lines
  ctx.strokeStyle = 'rgba(255,255,255,0.025)';
  ctx.lineWidth = 1;
  for (let y = 0; y < H; y += 60) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }

  // Find active word
  const activeWord = expState.movingWords.find(w => w.active && !w.done);
  let hint = '';

  expState.movingWords.forEach(w => {
    if (w.done) return;
    // Move
    w.x += w.vx;
    w.y += Math.sin(t * 0.7 + w.phase) * 0.5;
    // Wrap around
    if (w.x < -180) {
      w.x = W + 30;
      w.y = H * (0.15 + Math.random() * 0.7);
    }

    const isActive = w.active;
    const sz = isActive ? 26 : 15;

    ctx.save();
    if (isActive) {
      ctx.shadowColor = w.color;
      ctx.shadowBlur = 22;
    }
    ctx.font = `bold ${sz}px JetBrains Mono, monospace`;
    ctx.fillStyle = isActive ? '#ffffff' : 'rgba(255,255,255,0.22)';
    ctx.fillText(w.word, w.x, w.y);

    if (isActive) {
      const mw = ctx.measureText(w.word).width;
      // Glowing underline
      ctx.strokeStyle = w.color;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(w.x, w.y + 5);
      ctx.lineTo(w.x + mw, w.y + 5);
      ctx.stroke();
      // Pulsing box
      const pulse = (Math.sin(t * 3) + 1) / 2;
      ctx.strokeStyle = w.color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.3 + pulse * 0.3;
      ctx.strokeRect(w.x - 6, w.y - sz - 4, mw + 12, sz + 12);
      ctx.globalAlpha = 1;
      hint = w.word;
    }
    ctx.restore();
  });

  // Bottom hint: which word to type
  if (hint) {
    ctx.save();
    ctx.font = 'bold 13px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.textAlign = 'center';
    ctx.fillText(`Type: "${hint}"`, W / 2, H - 10);
    ctx.textAlign = 'left';
    ctx.restore();
  }

  // All done?
  if (expState.movingWords.every(w => w.done)) { finishExperiment(); return; }

  expState.animFrame = requestAnimationFrame(() => animateMoving(ctx, canvas, W, H));
}

// ”” Stats ””””””””””””””””””””””””””””””””””””
function updateExpStats() {
  if (!expState.started) return;
  const elapsed = (Date.now()-expState.startTime)/60000;
  const wpm = Math.round((expState.correctKeys/5)/Math.max(elapsed,0.001));
  const acc = expState.totalKeys>0 ? Math.round((expState.correctKeys/expState.totalKeys)*100) : 100;
  const secs = Math.floor(elapsed*60);
  document.getElementById('exp-wpm').textContent   = wpm;
  document.getElementById('exp-acc').textContent   = acc+'%';
  document.getElementById('exp-timer').textContent = secs+'s';
  document.getElementById('exp-errors').textContent= expState.errors;
}

// ”” Finish ”””””””””””””””””””””””””””””””””””
function finishExperiment() {
  if (expState.finished) return;
  expState.finished = true;
  expActive = false;
  clearInterval(expState.interval);
  clearTimeout(expState.decayTimer);
  cancelAnimationFrame(expState.animFrame);
  document.getElementById('exp-input').disabled = true;

  const elapsed = expState.startTime ? (Date.now()-expState.startTime)/60000 : 0.001;
  const wpm  = Math.round((expState.correctKeys/5)/Math.max(elapsed,0.001));
  const acc  = expState.totalKeys>0 ? Math.round((expState.correctKeys/expState.totalKeys)*100) : 100;
  const secs = Math.floor(elapsed*60);
  const cfg  = EXP_CONFIG[expState.mode];

  document.getElementById('exp-res-wpm').textContent  = wpm;
  document.getElementById('exp-res-acc').textContent  = acc+'%';
  document.getElementById('exp-res-err').textContent  = expState.errors;
  document.getElementById('exp-res-time').textContent = secs+'s';
  document.getElementById('exp-res-icon').textContent = cfg?.icon||'🧪';
  document.getElementById('exp-res-title').textContent= (cfg?.title||'Experiment')+' 0 Complete!';
  document.getElementById('exp-result').style.display = 'block';
  showToast(`🧪 Done! ${wpm} WPM  ${acc}% accuracy`);
}

function retryExperiment() {
  document.getElementById('exp-input').disabled = false;
  launchExperiment(expState.mode);
}

function exitExperiment() {
  expActive = false;
  clearInterval(expState.interval);
  clearTimeout(expState.decayTimer);
  cancelAnimationFrame(expState.animFrame);
  if (expMovingHandler) {
    document.getElementById('exp-input').removeEventListener('input', expMovingHandler);
    expMovingHandler = null;
  }
  showPage('experiment');
}


// 
//  WEAK KEY TRAINER ENGINE
// 

// Per-key stats: { a: {correct:0, errors:0}, b: {...}, ... }
let keyData = {};

function loadKeyData() {
  try { keyData = JSON.parse(localStorage.getItem('tg_keydata') || '{}'); } catch(e){ keyData = {}; }
}
function saveKeyData() {
  try { localStorage.setItem('tg_keydata', JSON.stringify(keyData)); } catch(e){}
}
function trackKeyStroke(key, correct) {
  if (!key || key.length !== 1 || !/[a-z0-9,.\-;'=\[\]/\\` ]/.test(key)) return;
  if (!keyData[key]) keyData[key] = { correct: 0, errors: 0 };
  if (correct) keyData[key].correct++; else keyData[key].errors++;
  // Save every 20 keystrokes to avoid too frequent writes
  const total = (keyData[key].correct + keyData[key].errors);
  if (total % 20 === 0) saveKeyData();
}
function getKeyAcc(key) {
  const d = keyData[key];
  if (!d || (d.correct + d.errors) === 0) return null;
  return Math.round((d.correct / (d.correct + d.errors)) * 100);
}
function getWeakKeys(threshold = 90) {
  return Object.keys(keyData)
    .filter(k => k !== ' ' && getKeyAcc(k) !== null && getKeyAcc(k) < threshold)
    .sort((a,b) => (getKeyAcc(a)||100) - (getKeyAcc(b)||100));
}
function resetKeyData() {
  if (!confirm('Reset all key tracking data?')) return;
  keyData = {};
  saveKeyData();
  showToast('↺ Key data reset');
  initTrainerPage();
}

// ”” Heatmap keyboard render ””””””””””””””””””
const HM_ROWS = [
  ['`','1','2','3','4','5','6','7','8','9','0','-','=','⌫'],
  ['⇥','q','w','e','r','t','y','u','i','o','p','[',']','\\'],
  ['Caps','a','s','d','f','g','h','j','k','l',';',"'",'↵'],
  ['⇧','z','x','c','v','b','n','m',',','.','/','⇧'],
  ['Ctrl','Alt','SPACE','Alt','Ctrl']
];
const HM_WIDE  = new Set(['⌫','⇥']);
const HM_WIDER = new Set(['Caps']);
const HM_WIDEST= new Set(['⇧']);
const HM_SPACE = new Set(['SPACE']);
const HM_FN    = new Set(['Ctrl','Alt','↵']);

function keyColor(key) {
  const acc = getKeyAcc(key);
  if (acc === null) return { bg:'rgba(255,255,255,0.05)', text:'rgba(255,255,255,0.3)', shadow:'none' };
  if (acc >= 95) return { bg:'rgba(0,200,100,0.25)',  text:'#00ff88', shadow:'0 0 10px rgba(0,200,100,0.3)' };
  if (acc >= 80) return { bg:'rgba(255,220,0,0.2)',   text:'#ffdc00', shadow:'0 0 10px rgba(255,220,0,0.25)' };
  if (acc >= 60) return { bg:'rgba(255,120,0,0.25)',  text:'#ff8800', shadow:'0 0 12px rgba(255,120,0,0.35)' };
  return             { bg:'rgba(255,40,80,0.3)',   text:'#ff3366', shadow:'0 0 14px rgba(255,40,80,0.4)' };
}

function buildHeatmapKeyboard() {
  const wrap = document.getElementById('heatmap-keyboard');
  if (!wrap) return;
  wrap.innerHTML = '';
  HM_ROWS.forEach(row => {
    const rowEl = document.createElement('div');
    rowEl.className = 'hm-row';
    row.forEach(rawKey => {
      const lookupKey = rawKey.toLowerCase();
      const isFn  = HM_FN.has(rawKey);
      const isSpecial = !rawKey.match(/^[a-z0-9,.\-;'=\[\]/\\`]$/i);
      const col = isSpecial ? { bg:'rgba(255,255,255,0.04)', text:'rgba(255,255,255,0.25)', shadow:'none' } : keyColor(lookupKey);
      const acc = isSpecial ? null : getKeyAcc(lookupKey);
      const d = isSpecial ? null : keyData[lookupKey];
      const total = d ? d.correct + d.errors : 0;

      const keyEl = document.createElement('div');
      keyEl.className = 'hm-key' +
        (HM_SPACE.has(rawKey) ? ' hm-space' : HM_WIDEST.has(rawKey) ? ' hm-widest' :
         HM_WIDER.has(rawKey) ? ' hm-wider' : HM_WIDE.has(rawKey) ? ' hm-wide' :
         HM_FN.has(rawKey) ? ' hm-fn' : '');
      keyEl.style.cssText = `background:${col.bg};color:${col.text};box-shadow:${col.shadow};border-color:${col.text}33;`;
      keyEl.innerHTML = rawKey +
        (acc !== null ? `<div class="hm-tooltip">
          <strong style="color:${col.text}">${rawKey.toUpperCase()}</strong><br>
          Accuracy: <strong style="color:${col.text}">${acc}%</strong><br>
          Errors: ${d?.errors||0} / ${total} keystrokes
        </div>` : `<div class="hm-tooltip"><strong>${rawKey}</strong><br><em style="color:var(--text2)">No data yet</em></div>`);
      rowEl.appendChild(keyEl);
    });
    wrap.appendChild(rowEl);
  });
}

function buildWeakKeysList() {
  const list = document.getElementById('weak-keys-list');
  const focusEl = document.getElementById('drill-focus-keys');
  if (!list) return;

  const weak = getWeakKeys(95).slice(0, 12);
  if (weak.length === 0) {
    list.innerHTML = '<div style="text-align:center;padding:20px;color:var(--green);font-size:0.88rem;">🎉 No weak keys found!<br><span style="color:var(--text2);font-size:0.8rem;">Keep typing to build your profile.</span></div>';
    if (focusEl) focusEl.innerHTML = '<span style="font-size:0.78rem;color:var(--text2);">Complete more tests first</span>';
    return;
  }

  list.innerHTML = '';
  weak.slice(0, 8).forEach((key, i) => {
    const acc = getKeyAcc(key) || 0;
    const d = keyData[key];
    const col = acc < 60 ? '#ff3366' : acc < 80 ? '#ff8800' : '#ffdc00';
    const item = document.createElement('div');
    item.className = 'wk-item';
    item.style.borderColor = col + '22';
    item.onclick = () => launchWeakDrill([key]);
    item.innerHTML = `
      <div class="wk-badge" style="background:${col}22;color:${col};border:1px solid ${col}44;">${key.toUpperCase()}</div>
      <div class="wk-bar-wrap">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:0.78rem;color:#fff;font-weight:600;">${acc}% accuracy</span>
          <span style="font-size:0.65rem;color:var(--text2);">${d?.errors||0} errors</span>
        </div>
        <div class="wk-bar-bg"><div class="wk-bar-fill" style="width:${acc}%;background:${col};"></div></div>
      </div>
      <div style="font-size:0.7rem;color:var(--text2);flex-shrink:0;">#${i+1}</div>`;
    list.appendChild(item);
  });

  // Focus keys chips
  if (focusEl) {
    focusEl.innerHTML = weak.slice(0, 5).map(k => {
      const acc = getKeyAcc(k) || 0;
      const col = acc < 60 ? '#ff3366' : acc < 80 ? '#ff8800' : '#ffdc00';
      return `<div style="width:32px;height:32px;border-radius:6px;background:${col}22;border:1px solid ${col}44;color:${col};display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:0.85rem;font-weight:700;cursor:pointer;transition:transform 0.15s;" onclick="launchWeakDrill(['${k}'])" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform=''">${k.toUpperCase()}</div>`;
    }).join('');
  }
}

function buildAccuracyChart() {
  const chart = document.getElementById('key-accuracy-chart');
  if (!chart) return;
  const allKeys = Object.keys(keyData)
    .filter(k => k !== ' ' && (keyData[k].correct + keyData[k].errors) >= 5)
    .sort((a,b) => (getKeyAcc(a)||100) - (getKeyAcc(b)||100))
    .slice(0, 26);

  if (allKeys.length === 0) { chart.innerHTML = '<div style="color:var(--text2);font-size:0.85rem;padding:20px;">No data yet 0 complete typing tests to see your breakdown.</div>'; return; }

  const maxH = 90;
  chart.innerHTML = allKeys.map(key => {
    const acc = getKeyAcc(key) || 0;
    const barH = Math.max(4, Math.round((acc/100)*maxH));
    const col = acc >= 95 ? '#00ff88' : acc >= 80 ? '#ffdc00' : acc >= 60 ? '#ff8800' : '#ff3366';
    return `<div class="acc-bar-item" title="${key.toUpperCase()}: ${acc}%">
      <div style="font-size:0.6rem;color:${col};font-weight:700;">${acc}%</div>
      <div class="acc-bar-fill" style="height:${barH}px;background:${col};opacity:0.8;"></div>
      <div class="acc-bar-label">${key.toUpperCase()}</div>
    </div>`;
  }).join('');
}

function updateTrainerStats() {
  const keys = Object.keys(keyData).filter(k => k !== ' ');
  let totalErr = 0, totalCorrect = 0;
  keys.forEach(k => { totalErr += keyData[k].errors; totalCorrect += keyData[k].correct; });
  const total = totalErr + totalCorrect;
  const acc = total > 0 ? Math.round((totalCorrect/total)*100) : null;
  const weakKeys = getWeakKeys(90);

  const el = id => document.getElementById(id);
  if (el('tr-total-errors'))  el('tr-total-errors').textContent = totalErr;
  if (el('tr-keys-tracked'))  el('tr-keys-tracked').textContent = keys.length;
  if (el('tr-overall-acc'))   el('tr-overall-acc').textContent = acc !== null ? acc+'%' : '0';
  if (el('tr-weak-count'))    el('tr-weak-count').textContent = weakKeys.length;
  if (el('trainer-no-data'))  el('trainer-no-data').style.display = total < 20 ? 'block' : 'none';
}

function initTrainerPage() {
  loadKeyData();
  updateTrainerStats();
  buildHeatmapKeyboard();
  buildWeakKeysList();
  buildAccuracyChart();
}

// ”” Drill generator ””””””””””””””””””””””””””
const DRILL_WORD_BANK = {
  a:['add','all','also','area','away','back','call','fall','flag','glad','have','last','land','mark','name','past','plan','play','save','take'],
  b:['baby','back','bear','best','bike','bird','bold','book','born','boss','both','bout','bring','bull','burn'],
  c:['call','calm','came','card','care','cart','case','cast','cave','cell','chip','city','clam','clay','clip','code'],
  d:['dark','data','date','dead','deal','dear','deep','desk','dial','dice','diet','disk','dock','dome','done','door','down','drag'],
  e:['each','earn','ease','east','edge','else','even','ever','exit','eyes','early','elite','error','event'],
  f:['face','fact','fail','fair','fall','fame','farm','fast','feat','feel','file','fill','film','find','fine','fire','firm','fish','flag'],
  g:['gain','game','gate','gave','gaze','gear','give','glad','glow','goal','gold','gone','good','grab','grew','grid','grow'],
  h:['hack','half','hall','halt','hand','hard','harm','hate','have','head','hear','heat','held','help','here','hide','high','hill','hint'],
  i:['idea','icon','idle','inch','info','into','iron','item','ideal','inner','input','image','index'],
  j:['jack','jail','java','jazz','join','joke','jump','just','junk','jury','judge'],
  k:['keen','keep','kick','kill','kind','king','know','knee','knob','keys'],
  l:['laid','land','lane','last','late','lead','leaf','lean','left','less','life','like','lime','line','link','list','live','load','lock','long','look','loop','lost'],
  m:['made','main','make','many','mark','mass','math','mean','meet','menu','mesh','mind','mine','miss','mode','more','most','move','much'],
  n:['name','near','need','nest','next','nice','node','none','norm','note','null','name','neon','node'],
  o:['only','open','ours','over','ocean','offer','often','order'],
  p:['pack','page','paid','part','pass','path','peak','pick','pile','pipe','plan','play','plot','plug','plus','port','post','push'],
  q:['quiz','quit','query','quick','quite','queen','quote'],
  r:['race','rain','rank','rate','real','rest','rich','ride','rise','risk','road','role','root','rule','rush'],
  s:['safe','said','same','save','scan','seed','self','send','sign','site','size','skip','slow','snap','soft','some','sort','span','spec','spin','spot','star','stay','step','stop','such'],
  t:['take','task','team','tell','test','text','than','that','them','then','this','tile','time','tool','tree','trip','true','type'],
  u:['unit','upon','user','used','undo','ultra','under','until','upper','useful'],
  v:['very','view','vote','void','valve','value','valid','visit','voice','vital'],
  w:['wait','walk','want','warm','warn','wave','week','well','went','were','what','when','wide','will','wind','wire','wish','with','word','work','wrap'],
  x:['next','text','exit','flex','index','pixel','proxy'],
  y:['year','your','yard','yell','yoga'],
  z:['zero','zone','zoom','zinc','zeal'],
  ',':['yes, no,','and, but,','big, small,','fast, slow,'],
  '.':['done. next.','stop. go.','end. start.'],
  ';':['wait; go;','stop; start;'],
};

function generateDrillText(weakKeys) {
  if (!weakKeys || weakKeys.length === 0) weakKeys = getWeakKeys(90).slice(0,5);
  if (weakKeys.length === 0) weakKeys = ['e','r','t','a','s'];

  // Mix words from all weak key banks
  const wordSets = weakKeys.map(k => DRILL_WORD_BANK[k] || []);
  const allWords = [].concat(...wordSets).filter(Boolean);
  if (allWords.length === 0) return `${weakKeys.join(' ')} ${weakKeys.reverse().join(' ')} practice ${weakKeys.join(' ')}`;

  // Shuffle and pick 20 words, heavily weighted on weakest key
  const shuffled = allWords.sort(() => Math.random()-0.5);
  return shuffled.slice(0, 20).join(' ').toLowerCase();
}

function launchWeakDrill(focusKeys) {
  const keys = focusKeys || getWeakKeys(90).slice(0,5);
  if (keys.length === 0) { showToast('🎉 No weak keys! Take a test first.'); return; }
  const text = generateDrillText(keys);
  // Set state and launch test
  state.mode = 'speed';
  state.currentText = text;
  document.getElementById('mode-title').textContent = `🧠 Weak Key Drill 0 ${keys.map(k=>k.toUpperCase()).join(', ')}`;
  const testPage = document.getElementById('page-test');
  testPage.classList.remove('ghost-active');
  const ghostPanel = document.getElementById('ghost-panel-col');
  if (ghostPanel) ghostPanel.style.removeProperty('display');
  document.querySelector('.test-controls').style.display = 'flex';
  document.getElementById('timer-live-label').textContent = 'Timer';
  // Reset
  state.started = false; state.finished = false; state.paused = false;
  state.typedIndex = 0; state.errors = 0; state.totalKeystrokes = 0;
  state.correctKeystrokes = 0; state.combo = 0; state.maxCombo = 0;
  state.typed = []; state.timeLeft = state.timeLimit;
  clearInterval(state.timerInterval); clearInterval(state.stopwatchInterval);
  const pauseBtn = document.getElementById('btn-pause');
  if (pauseBtn) { pauseBtn.style.opacity='0.4'; pauseBtn.style.pointerEvents='none'; pauseBtn.textContent='⏸ PAUSE'; }
  document.querySelector('.test-controls')?.classList.remove('test-locked');
  document.getElementById('live-wpm').textContent='0';
  document.getElementById('live-acc').textContent='100%';
  document.getElementById('live-errors').textContent='0';
  document.getElementById('live-combo').textContent='0x';
  document.getElementById('live-timer').textContent='0';
  document.getElementById('progress-fill').style.width='0%';
  document.getElementById('timer-ring').style.strokeDashoffset='0';
  document.getElementById('chart-wrap').style.display='none';
  document.getElementById('typing-box').style.opacity='1';
  document.getElementById('pause-overlay').style.display='none';
  document.getElementById('typing-input').removeAttribute('disabled');
  renderText();
  document.getElementById('typing-input').value='';
  showPage('test');
  setTimeout(()=>document.getElementById('typing-input').focus(), 80);
  showToast(`🧠 Drill: Focus on ${keys.map(k=>k.toUpperCase()).join(', ')} 0 Type carefully!`);
}

// Load key data on startup
loadKeyData();
// 

const COURSE_TOPICS = [
  // ”” TOPIC 0: HAND POSITIONING (no typing 0 animated guide) ””””””””
  {
    id:0, unit:'Foundation', title:'Hand Positioning & Finger Placement', icon:'0', xp:20,
    desc:'Before you type a single key 0 learn where your hands and fingers go. This is the foundation of everything.',
    tip:'Watch the animation. Your hands should feel relaxed, wrists slightly raised, fingers naturally curved.',
    keyGuide:[], rounds:[], passMark:0, isIntroOnly: true
  },
  // ”” UNIT 1: HOME ROW ”””””””””””””””””””””””””””””””””””””””””””””””
  {
    id:1, unit:'Home Row', title:'F and J 0 Your Anchor Keys', icon:'🎯', xp:30,
    desc:'Every touch typist starts here. F (left index) and J (right index) have bumps 0 feel them!',
    tip:'Close your eyes. Feel the raised bump on F and J. These are your anchor keys 0 always return here.',
    keyGuide:[{finger:'Left Index',key:'F',color:'#00ff88'},{finger:'Right Index',key:'J',color:'#b060ff'}],
    rounds:['jf jf jf fj fj fj jf fj jf fj fj jf fj jf','fjfj jfjf ffjj jjff fj fj fj fj fjfj','jj ff jf fj jjff ffj jfj fjf jf jf jf'],
    passMark:90
  },
  {
    id:2, unit:'Home Row', title:'D and K 0 Middle Fingers', icon:'✋', xp:30,
    desc:'Add D (left middle) and K (right middle) while keeping F and J as anchors.',
    tip:'After pressing D or K, snap your finger straight back to F or J. Do not drift!',
    keyGuide:[{finger:'Left Middle',key:'D',color:'#00ff88'},{finger:'Left Index',key:'F',color:'#00ff88'},{finger:'Right Index',key:'J',color:'#b060ff'},{finger:'Right Middle',key:'K',color:'#b060ff'}],
    rounds:['dk dk kd kd dkfj fjdk dkdk fjfj','fj dk fj dk fd jk dk fj kd jf fd','fjdk dkfj jkdf dfkj fdjk jfkd fdkj'],
    passMark:88
  },
  {
    id:3, unit:'Home Row', title:'S and L 0 Ring Fingers', icon:'💍', xp:35,
    desc:'Stretch your ring fingers to S (left) and L (right). Keep the other fingers on their keys.',
    tip:'Ring fingers feel weaker at first 0 that is normal. Slow and deliberate practice builds the muscle.',
    keyGuide:[{finger:'Left Ring',key:'S'},{finger:'Left Middle',key:'D'},{finger:'Left Index',key:'F'},{finger:'Right Index',key:'J'},{finger:'Right Middle',key:'K'},{finger:'Right Ring',key:'L'}],
    rounds:['sl ls sl ls sdk ldk fjs jkl sdkl jkls','sdf jkl sdf jkl sldk fjks sdfl jkls','flask slid disk jell skill folds doll'],
    passMark:85
  },
  {
    id:4, unit:'Home Row', title:'A and ; 0 Pinky Fingers', icon:'🤙', xp:40,
    desc:'Now the pinkies 0 A (left) and ; (right). These are your weakest fingers, train them patiently.',
    tip:'Pinkies are the hardest to train. Go slow. Accuracy here is more important than speed.',
    keyGuide:[{finger:'Left Pinky',key:'A'},{finger:'Left Ring',key:'S'},{finger:'Left Middle',key:'D'},{finger:'Left Index',key:'F'},{finger:'Right Index',key:'J'},{finger:'Right Middle',key:'K'},{finger:'Right Ring',key:'L'},{finger:'Right Pinky',key:';'}],
    rounds:['a; ;a a; ;a asd ;lk asdf jkl;','add ask sad fall dad glad lad lass all','a sad lad asks; a glad dad falls; shall a lass ask'],
    passMark:82
  },
  {
    id:5, unit:'Home Row', title:'Full Home Row Mastery', icon:'🏠', xp:50,
    desc:'Combine all 8 home row keys: A S D F J K L ; 0 type real words, no peeking!',
    tip:'Look only at the screen. Your fingers know where to go. Trust the muscle memory you have built.',
    keyGuide:[],
    rounds:[
      'flask slid disk jell skill folds doll all fall',
      'a sad lass asks; a glad dad falls; shall a lad ask',
      'add all ask fall glad hall lad lass sad shall skill'
    ],
    passMark:80
  },

  // ”” UNIT 2: TOP ROW ””””””””””””””””””””””””””””””””””””””””””””””””
  {
    id:6, unit:'Top Row', title:'G and H 0 Index Reach Up', icon:'⬆️', xp:40,
    desc:'G is reached by the left index stretching right. H by the right index stretching left.',
    tip:'Both G and H are center keys 0 your index fingers own them. Reach from F and J.',
    keyGuide:[{finger:'Left Index reach',key:'G'},{finger:'Right Index reach',key:'H'}],
    rounds:['gh hg gh hg ghfj hjkl gfhj fghj','had hag gag jug had flag glad sag','high flag glad shed fish half graph'],
    passMark:85
  },
  {
    id:7, unit:'Top Row', title:'R, T, Y, U 0 Index Extensions', icon:'🔼', xp:45,
    desc:'Left index covers R and T. Right index covers Y and U. Reach up from F and J.',
    tip:'R and U are natural reaches. T and Y require a slight stretch 0 practice them separately first.',
    keyGuide:[{finger:'L.Index',key:'R'},{finger:'L.Index stretch',key:'T'},{finger:'R.Index stretch',key:'Y'},{finger:'R.Index',key:'U'}],
    rounds:['rt yu rt yu try rut fur tug yurt','right truth youth ultra tryst ultra','try your truth right trust yurt jury'],
    passMark:82
  },
  {
    id:8, unit:'Top Row', title:'E, I 0 Middle Fingers', icon:'0', xp:40,
    desc:'Left middle finger reaches up to E. Right middle reaches to I.',
    tip:'E is one of the most used letters in English 0 drill it until it feels instant.',
    keyGuide:[{finger:'Left Middle',key:'E'},{finger:'Right Middle',key:'I'}],
    rounds:['ei ie ei ie her hire fire rise tire','ride fire hire tire rise wire bride','inside the fire there is a desire to rise'],
    passMark:82
  },
  {
    id:9, unit:'Top Row', title:'W, O 0 Ring Fingers', icon:'’«', xp:40,
    desc:'Left ring stretches to W. Right ring stretches to O.',
    tip:'Do not lift your hand 0 just reach the ring finger up while the others stay on home row.',
    keyGuide:[{finger:'Left Ring',key:'W'},{finger:'Right Ring',key:'O'}],
    rounds:['wo ow wo ow work flow slow grow show','word flow glow show slow grow widow','work flow order world widow sword hollow'],
    passMark:80
  },
  {
    id:10, unit:'Top Row', title:'Q, P 0 Pinky Extensions', icon:'🤙', xp:50,
    desc:'Q is the left pinky reaching up. P is the right pinky reaching up.',
    tip:'Q is rare but P is common. Focus more time on P. Keep the pinky relaxed 0 do not tense.',
    keyGuide:[{finger:'Left Pinky',key:'Q'},{finger:'Right Pinky',key:'P'}],
    rounds:['qp pq quite prior power rapid proper','quick power proper quit proud prior','the quick proper power of a quiet plan'],
    passMark:78
  },
  {
    id:11, unit:'Top Row', title:'Top Row Combined', icon:'⌨️', xp:60,
    desc:'Type full words and sentences using the entire top row with home row support.',
    tip:'Your eyes should never leave the screen. If you feel lost, reset to home row position first.',
    keyGuide:[],
    rounds:[
      'we type with proper finger placement every day',
      'power through the quiet period to write quickly',
      'the wise guide who wrote quickly produced great work'
    ],
    passMark:75
  },

  // ”” UNIT 3: BOTTOM ROW ”””””””””””””””””””””””””””””””””””””””””””””
  {
    id:12, unit:'Bottom Row', title:'V and M 0 Index Downward', icon:'⬇️', xp:40,
    desc:'Left index reaches down to V. Right index reaches down to M.',
    tip:'Reach down while keeping your wrist stable. The bottom row needs a slight forward wrist movement.',
    keyGuide:[{finger:'Left Index',key:'V'},{finger:'Right Index',key:'M'}],
    rounds:['vm mv vm mv vim move value motive','valve move vim motive vivid marvel','move with vim and valor to motivate'],
    passMark:85
  },
  {
    id:13, unit:'Bottom Row', title:'C and , 0 Middle Fingers', icon:'EARTH', xp:40,
    desc:'Left middle stretches to C. Right middle reaches to , (comma).',
    tip:'The comma is critical for sentence rhythm. Right middle finger, slight downward reach.',
    keyGuide:[{finger:'Left Middle',key:'C'},{finger:'Right Middle',key:','}],
    rounds:['cc ,, cc ,, can code, core, civic, cool,','code, create, collect, circle, correct,','yes, code, create, and collect nice work,'],
    passMark:82
  },
  {
    id:14, unit:'Bottom Row', title:'X, . 0 Ring Fingers', icon:'💎', xp:40,
    desc:'Left ring reaches to X. Right ring reaches to . (period/full stop).',
    tip:'X is rare but the period ends every sentence. Train the period until it is completely automatic.',
    keyGuide:[{finger:'Left Ring',key:'X'},{finger:'Right Ring',key:'.'}],
    rounds:['x. x. x. exact. flex. next. mix. tax.','next flex exit exact. mix. ox. wax.','the next flex is exact. mix and exit.'],
    passMark:80
  },
  {
    id:15, unit:'Bottom Row', title:'Z, / 0 Pinkies Down', icon:'🤌', xp:45,
    desc:'Left pinky stretches to Z. Right pinky reaches to / (slash).',
    tip:'Z is the hardest bottom-row key for the left pinky. Drill it slowly and separately first.',
    keyGuide:[{finger:'Left Pinky',key:'Z'},{finger:'Right Pinky',key:'/'}],
    rounds:['zz // zap zip zone zoom zero buzz','zero zone buzz fizz jazz maze prize','the jazz zone has a fuzzy zero buzz/'],
    passMark:78
  },
  {
    id:16, unit:'Bottom Row', title:'B and N 0 Center Bottom', icon:'🔼', xp:40,
    desc:'B is a left index stretch downward-right. N is a right index stretch downward-left.',
    tip:'B and N sit in the center 0 both use index fingers. They are common letters so drill them well.',
    keyGuide:[{finger:'L.Index stretch',key:'B'},{finger:'R.Index stretch',key:'N'}],
    rounds:['bn nb bn nb brown neon behind nation','begin noble brand noun burn even then','the noble brown banner burns in the night'],
    passMark:82
  },
  {
    id:17, unit:'Bottom Row', title:'Bottom Row Combined', icon:'📉', xp:55,
    desc:'Type words and sentences using all bottom row keys.',
    tip:'Focus on smooth transitions between the bottom row and home row. Do not rush.',
    keyGuide:[],
    rounds:[
      'brave zinc next volume mix box can',
      'combine movement between zones and vaults now',
      'zinc brave next box can combine valve zone mix'
    ],
    passMark:75
  },

  // ”” UNIT 4: CAPITALS & PUNCTUATION ”””””””””””””””””””””””””””””””””
  {
    id:18, unit:'Capitals', title:'Left Shift Key', icon:'⬆️', xp:50,
    desc:'Use LEFT Shift for keys on the RIGHT side of the keyboard (J K L ; Y U I O P etc).',
    tip:'Hold Left Shift with your LEFT pinky. Never use the same-side shift 0 this is a crucial rule.',
    keyGuide:[],
    rounds:[
      'Just Keep Looking. Push Hard. You Lead.',
      'Hello June. Open Please. Young Ideas.',
      'People Often Learn Just How Important Keys Are.'
    ],
    passMark:78
  },
  {
    id:19, unit:'Capitals', title:'Right Shift Key', icon:'⬆️', xp:50,
    desc:'Use RIGHT Shift for keys on the LEFT side (A S D F G Q W E R T etc).',
    tip:'Hold Right Shift with your RIGHT pinky while the left hand presses the capital letter key.',
    keyGuide:[],
    rounds:[
      'Always Start Doing Real Good Work Every Day.',
      'Quit Wasting Effort. Start Forming Great Results.',
      'Actual Strong Discipline Creates Solid Results Fast.'
    ],
    passMark:78
  },
  {
    id:20, unit:'Punctuation', title:'Period, Comma, and Question Mark', icon:'❓', xp:50,
    desc:'Master the most common punctuation: . , ! ? 0 these appear in almost every sentence.',
    tip:'Never pause before punctuation. Treat . and , as regular letters 0 type them without hesitation.',
    keyGuide:[],
    rounds:[
      'hello, world! how are you? i am fine. thanks!',
      'wait, are you sure? yes, i am sure. let us go!',
      'where did it go? here it is! great. all done, yes?'
    ],
    passMark:75
  },
  {
    id:21, unit:'Punctuation', title:'Colon, Semicolon, Apostrophe', icon:'✍️', xp:55,
    desc:"Master : ; ' 0 right pinky territory. These are common in writing and coding.",
    tip:"Semicolons and colons are right pinky keys 0 keep your pinky flexible and relaxed.",
    keyGuide:[],
    rounds:[
      "don't stop; keep going: it's worth it.",
      "it's a great day; let's work: focus now.",
      "she can't quit; he won't stop: it's working."
    ],
    passMark:72
  },

  // ”” UNIT 5: NUMBERS ”””””””””””””””””””””””””””””””””””””””””””””””
  {
    id:22, unit:'Numbers', title:'1 2 3 4 5 0 Left Numbers', icon:'🔢', xp:55,
    desc:'Left hand covers 1 2 3 4 5. Each finger reaches straight up from the top row.',
    tip:'Numbers need a big upward reach. Keep your wrist steady and let only your fingers move.',
    keyGuide:[],
    rounds:[
      '1 2 3 4 5 12 34 15 24 35 123 234 345',
      '11 22 33 44 55 12 21 35 53 42 24 13',
      'room 123, floor 4, gate 5, call 1234 now'
    ],
    passMark:75
  },
  {
    id:23, unit:'Numbers', title:'6 7 8 9 0 0 Right Numbers', icon:'🔢', xp:55,
    desc:'Right hand covers 6 7 8 9 0. Right index takes 6, going across to right pinky for 0.',
    tip:'0 is the right pinky key 0 the longest reach. Do not rush numbers. Accuracy first.',
    keyGuide:[],
    rounds:[
      '6 7 8 9 0 67 78 89 90 06 678 789 890',
      '66 77 88 99 00 67 76 89 98 70 60 80',
      'born in 1990, age 34, code 7890, score 100'
    ],
    passMark:75
  },
  {
    id:24, unit:'Numbers', title:'All Numbers 0 Full Practice', icon:'’¯', xp:65,
    desc:'Mix all 10 number keys together with words.',
    tip:'In real typing, numbers appear mixed with words. Practice switching between them smoothly.',
    keyGuide:[],
    rounds:[
      '1234567890 the year 2024 has 365 days',
      'call 1800 555 0199 or visit room 304 by 5:30',
      'score 100 in 60 seconds at 75 wpm with 98 percent'
    ],
    passMark:70
  },

  // ”” UNIT 6: WORDS & SPEED ”””””””””””””””””””””””””””””””””””””””””
  {
    id:25, unit:'Speed', title:'Top 50 Common Words', icon:'💬', xp:65,
    desc:'These 50 words make up over 50% of all written English. Automate them for a WPM boost.',
    tip:'You should be able to type these words without thinking. Drill until they flow automatically.',
    keyGuide:[],
    rounds:[
      'the be to of and a in that have it for not on with he',
      'as you do at this but his by from they we say her she or',
      'an will my one all would there their what so up out if about who'
    ],
    passMark:65
  },
  {
    id:26, unit:'Speed', title:'Top 50 More Common Words', icon:'🗣️', xp:65,
    desc:'The next batch of essential words 0 get these on autopilot too.',
    tip:'Do not type letter by letter 0 visualize the whole word and type it as one motion.',
    keyGuide:[],
    rounds:[
      'get which go me when make can like time no just him know take people',
      'into year your good some could them see other than then now look only come',
      'its over think also back after use two how our work first well way even new'
    ],
    passMark:65
  },
  {
    id:27, unit:'Speed', title:'Bigrams 0 Common Letter Pairs', icon:'⚡', xp:70,
    desc:'Train the most common 2-letter combinations: TH, HE, IN, ER, AN, RE, ON, EN...',
    tip:'Bigrams are the secret to speed. When your fingers learn pairs, your WPM jumps dramatically.',
    keyGuide:[],
    rounds:[
      'the they then there that this think three',
      'here her have him his help high head heart',
      'in into its if is it ing ion inch inside'
    ],
    passMark:62
  },
  {
    id:28, unit:'Speed', title:'Speed Sentences', icon:'>>', xp:80,
    desc:'Full sentences mixing everything 0 push your speed while staying accurate.',
    tip:'Type at the edge of your comfortable speed. Just outside comfort is where growth happens.',
    keyGuide:[],
    rounds:[
      'the quick brown fox jumps over the lazy dog',
      'pack my box with five dozen liquor jugs',
      'how vexingly quick daft zebras jump in fog'
    ],
    passMark:58
  },

  // ”” UNIT 7: ADVANCED ”””””””””””””””””””””””””””””””””””””””””””””
  {
    id:29, unit:'Advanced', title:'Symbols 0 @, #, $, %', icon:'#️⃣', xp:75,
    desc:'Shift + number keys produce symbols. Train the most common ones used in email and code.',
    tip:'For symbols: hold Shift first, then press the number key. Release Shift immediately after.',
    keyGuide:[],
    rounds:[
      'user@email.com price $99 #tag 50% off today',
      'email me@site.com for $0 or pay 100% later',
      'the #1 deal at $49 saves 25% for you@here.com'
    ],
    passMark:65
  },
  {
    id:30, unit:'Advanced', title:'Brackets and Parentheses', icon:'{}', xp:75,
    desc:'Master () [] {} 0 essential for writing code, math, and formal documents.',
    tip:'( and ) are Shift+9 and Shift+0. [ and ] are right of P. { and } are Shift+[ and Shift+].',
    keyGuide:[],
    rounds:[
      '(hello) [world] {code} (a+b) [1,2,3] {x:1}',
      'function(a, b) { return a + b; } // [done]',
      'if (x > 0) { print(x); } else { skip(); }'
    ],
    passMark:62
  },
  {
    id:31, unit:'Advanced', title:'Full Paragraph 0 Business', icon:'📄', xp:90,
    desc:'Type a full paragraph as it appears in professional writing.',
    tip:'Long texts reveal your weakest keys. Note any hesitations and return to practice those individually.',
    keyGuide:[],
    rounds:[
      'please review the attached document and send your feedback by friday at five pm',
      'we are pleased to inform you that your application has been received and is under review',
      'thank you for your interest in our products we will contact you within three business days'
    ],
    passMark:55
  },
  {
    id:32, unit:'Advanced', title:'Full Paragraph 0 Technical', icon:'💻', xp:90,
    desc:'Technical writing includes code-like patterns, numbers, and special characters.',
    tip:'Technical typing is harder but extremely valuable. Take it slow and build up speed gradually.',
    keyGuide:[],
    rounds:[
      'the server returned error 404 on port 8080 after 30 seconds of timeout',
      'update version 2.1.3 to fix the null pointer exception in module user.auth',
      'run npm install then node index.js to start the server on localhost:3000'
    ],
    passMark:50
  },
  {
    id:33, unit:'Mastery', title:'Touch Typing Final Test', icon:'🏆', xp:150,
    desc:'The ultimate assessment 0 all keys, all skills, no looking at the keyboard!',
    tip:'EYES ON SCREEN ONLY. No glancing at keys. This is the final test of true touch typing mastery.',
    keyGuide:[],
    rounds:[
      'touch typing means typing without looking at the keyboard using all ten fingers correctly',
      'the average typist reaches 40 to 60 words per minute while experts exceed 100 easily',
      'congratulations on completing all lessons you are now a certified touch typing master'
    ],
    passMark:50
  }
];

let courseState = {
  dailyMins: 10,
  completedTopics: [], // array of topic ids completed
  topicScores: {},     // { topicId: { wpm, acc, xp } }
  streak: 0,
  totalXp: 0,
  lastDate: null
};
let currentLesson = null;
let lessonTypingState = {
  started: false, round: 0, text: '', typedIndex: 0,
  errors: 0, totalKeys: 0, correctKeys: 0, startTime: null,
  interval: null, roundResults: []
};

// ”” Load / Save ””””””””””””””””””””””””””””””
function saveCourseState() {
  try { localStorage.setItem('tg_course', JSON.stringify(courseState)); } catch(e){}
}
function loadCourseState() {
  try {
    const s = JSON.parse(localStorage.getItem('tg_course') || 'null');
    if (s) courseState = { ...courseState, ...s };
  } catch(e){}
}

// ”” Page entry ”””””””””””””””””””””””””””””””
function initCoursePage() {
  loadCourseState();
  const hasStarted = localStorage.getItem('tg_course') !== null;
  if (!hasStarted) {
    // First time 0 show setup
    document.getElementById('course-setup').style.display = 'block';
    document.getElementById('course-main').style.display = 'none';
    document.getElementById('course-lesson').style.display = 'none';
  } else {
    // Returning user 0 show main
    document.getElementById('course-setup').style.display = 'none';
    showCourseMain();
  }
}

// ”” Daily target ”””””””””””””””””””””””””””””
let selectedDailyTarget = 10;
function pickDailyTarget(mins, el) {
  selectedDailyTarget = mins;
  document.querySelectorAll('.dt-opt').forEach(o => o.classList.remove('sel'));
  el.classList.add('sel');
}
function startCourse() {
  courseState.dailyMins = selectedDailyTarget;
  courseState.completedTopics = [];
  courseState.topicScores = {};
  courseState.streak = 0;
  courseState.totalXp = 0;
  courseState.lastDate = null;
  saveCourseState();
  showCourseMain();
}
function resetCourse() {
  if (!confirm('Reset all course progress? This cannot be undone.')) return;
  courseState = { dailyMins: 10, completedTopics: [], topicScores: {}, streak: 0, totalXp: 0, lastDate: null };
  saveCourseState();
  document.getElementById('course-setup').style.display = 'block';
  document.getElementById('course-main').style.display = 'none';
  document.getElementById('course-lesson').style.display = 'none';
  showToast('↺ Course reset!');
}

// ”” Course main screen ”””””””””””””””””””””””
function showCourseMain() {
  document.getElementById('course-setup').style.display = 'none';
  document.getElementById('course-main').style.display = 'block';
  document.getElementById('course-lesson').style.display = 'none';

  // Stats
  document.getElementById('course-streak').textContent = (courseState.streak || 0) + ' 🔥';
  document.getElementById('course-xp').textContent = (courseState.totalXp || 0) + ' XP';

  const done = (courseState.completedTopics || []).length;
  const total = COURSE_TOPICS.length;
  const pct = Math.round((done / total) * 100);
  document.getElementById('course-progress-text').textContent = `${done} of ${total} topics completed  ${courseState.dailyMins || 10} min/day goal`;
  document.getElementById('course-overall-pct').textContent = pct + '%';
  document.getElementById('course-overall-bar').style.width = pct + '%';

  buildTopicsGrid();
}

function buildTopicsGrid() {
  const grid = document.getElementById('course-topics-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const completed = courseState.completedTopics || [];

  let lastUnit = null;
  COURSE_TOPICS.forEach((topic, idx) => {
    const isDone = completed.includes(topic.id);
    const isUnlocked = topic.id === 0 || completed.includes(COURSE_TOPICS[idx-1].id);
    const score = (courseState.topicScores || {})[topic.id];

    // Unit header
    if (topic.unit !== lastUnit) {
      lastUnit = topic.unit;
      const unitDone = COURSE_TOPICS.filter(t => t.unit === topic.unit).every(t => completed.includes(t.id));
      const header = document.createElement('div');
      header.style.cssText = `font-family:var(--font-display);font-size:0.7rem;font-weight:700;color:${unitDone?'var(--green)':'var(--accent2)'};letter-spacing:3px;text-transform:uppercase;padding:10px 4px 4px;margin-top:6px;`;
      header.textContent = (unitDone ? '✓ ' : '') + 'UNIT: ' + topic.unit;
      grid.appendChild(header);
    }

    const card = document.createElement('div');
    card.className = `topic-card ${isDone ? 'completed' : isUnlocked ? 'unlocked' : 'locked'}`;
    if (isUnlocked) card.onclick = () => openLesson(topic.id);

    const numClass = isDone ? 'done' : isUnlocked ? 'active-num' : 'locked-num';
    const lockIcon = isDone ? '✓' : isUnlocked ? '▶' : '🔒';
    const scoreHtml = score ? `<span style="font-size:0.7rem;color:var(--accent);margin-left:8px;font-weight:600;">${score.wpm} WPM  ${score.acc}%</span>` : '';

    card.innerHTML = `
      <div class="tc-header">
        <div class="tc-num ${numClass}">${isDone ? '✓' : topic.id}</div>
        <div class="tc-info">
          <div class="tc-title">${topic.icon} ${topic.title}${scoreHtml}</div>
          <div class="tc-desc">${topic.desc}</div>
        </div>
        <div class="tc-right">
          <div class="tc-xp" style="font-size:0.72rem;">${topic.xp} XP</div>
          <div class="tc-lock" style="color:${isDone?'var(--green)':isUnlocked?'var(--accent)':'var(--text2)'};font-size:${isUnlocked&&!isDone?'0.8rem':'0.9rem'}">${lockIcon}</div>
        </div>
      </div>
      ${isDone ? `<div class="tc-bar"><div class="tc-bar-fill" style="width:100%;background:var(--green);"></div></div>` : ''}
    `;
    grid.appendChild(card);
  });
}

// ”” Open a lesson ””””””””””””””””””””””””””””
function openLesson(topicId) {
  // Topic 0 is the animated hand guide 0 no typing
  if (topicId === 0) { openHandGuide(); return; }

  const topic = COURSE_TOPICS.find(t => t.id === topicId);
  if (!topic) return;
  currentLesson = topic;

  document.getElementById('course-setup').style.display = 'none';
  document.getElementById('course-main').style.display = 'none';
  document.getElementById('course-lesson').style.display = 'block';

  document.getElementById('lesson-title').textContent = `${topic.icon} ${topic.title}`;
  document.getElementById('lesson-subtitle').textContent = `Topic ${topic.id} of ${COURSE_TOPICS.length}  ${topic.xp} XP`;

  // Intro
  document.getElementById('lesson-intro-icon').textContent = topic.icon;
  document.getElementById('lesson-intro-heading').textContent = topic.title;
  document.getElementById('lesson-intro-body').textContent = topic.desc;

  // Tip
  if (topic.tip) {
    document.getElementById('lesson-tip-box').style.display = 'block';
    document.getElementById('lesson-tip-text').textContent = topic.tip;
  } else {
    document.getElementById('lesson-tip-box').style.display = 'none';
  }

  // Key guide
  buildLessonKeyGuide(topic);

  // Round dots
  buildRoundDots(topic.rounds.length, 0);

  // Show intro, hide typing/result 0 restore scroll
  const ca2 = document.getElementById('lesson-content-area');
  ca2.style.display = 'block';
  ca2.style.overflowY = 'auto';
  document.getElementById('lesson-intro').style.display = 'block';
  document.getElementById('lesson-typing-panel').style.display = 'none';
  document.getElementById('lesson-result-panel').style.display = 'none';
  
  document.getElementById('lesson-progress-bar').style.width = '0%';

  // Reset lesson state
  lessonTypingState = { started:false, round:0, text:'', typedIndex:0, errors:0, totalKeys:0, correctKeys:0, startTime:null, interval:null, roundResults:[] };
}

function buildLessonKeyGuide(topic) {
  const guide = document.getElementById('lesson-key-guide');
  if (!topic.keyGuide || topic.keyGuide.length === 0) { guide.innerHTML = ''; return; }
  guide.innerHTML = `<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">` +
    topic.keyGuide.map(k => `
      <div style="text-align:center;">
        <div class="kh-key highlight" style="margin-bottom:3px;">${k.key}</div>
        <div style="font-size:0.6rem;color:var(--text2);white-space:nowrap;">${k.finger||''}</div>
      </div>`).join('') + `</div>`;
}

function buildRoundDots(total, current) {
  const dots = document.getElementById('lesson-round-dots');
  dots.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const d = document.createElement('div');
    d.style.cssText = `width:8px;height:8px;border-radius:50%;background:${i < current ? 'var(--green)' : i === current ? 'var(--accent)' : 'rgba(255,255,255,0.15)'};transition:background 0.3s;`;
    dots.appendChild(d);
  }
}

// ”” Begin typing ”””””””””””””””””””””””””””””
function beginLessonTyping() {
  document.getElementById('lesson-intro').style.display = 'none';
  document.getElementById('lesson-result-panel').style.display = 'none';
  // Switch content area to flex so keyboard fills space
  const ca = document.getElementById('lesson-content-area');
  ca.style.display = 'flex';
  ca.style.flexDirection = 'column';
  ca.style.overflow = 'hidden';
  document.getElementById('lesson-typing-panel').style.display = 'flex';
  lessonTypingActive = true;
  startLessonRound(0);
}

function startLessonRound(roundIdx) {
  const topic = currentLesson;
  const text = topic.rounds[roundIdx];
  lessonTypingState.round = roundIdx;
  lessonTypingState.text = text;
  lessonTypingState.typedIndex = 0;
  lessonTypingState.typedChars = [];
  lessonTypingState.errors = 0;
  lessonTypingState.totalKeys = 0;
  lessonTypingState.correctKeys = 0;
  lessonTypingState.started = false;
  lessonTypingState.startTime = null;
  clearInterval(lessonTypingState.interval);

  lessonTypingActive = true;

  document.getElementById('lesson-round-label').textContent = `Round ${roundIdx+1} of ${topic.rounds.length}`;
  buildRoundDots(topic.rounds.length, roundIdx);
  renderLessonText(text, 0, []);
  buildKeyboardHints(text[0]);

  document.getElementById('lesson-wpm-live').textContent = '0';
  document.getElementById('lesson-acc-live').textContent = '100%';
  document.getElementById('lesson-timer-live').textContent = '0s';

  const hint = document.getElementById('lesson-click-hint');
  if (hint) hint.style.display = 'block';

  // Focus hidden input so keyboard events fire reliably
  const inp = document.getElementById('lesson-input');
  if (inp) { inp.value = ''; inp.focus(); }
}

function renderLessonText(text, typedIdx, typed) {
  const display = document.getElementById('lesson-text-display');
  if (!display || !text) return;
  display.innerHTML = '';
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.className = 'lc';
    span.textContent = text[i];
    if (i < typedIdx) {
      span.classList.add(typed[i] === text[i] ? 'correct' : 'wrong');
    } else if (i === typedIdx) {
      span.classList.add('cursor');
    } else {
      span.classList.add('pending');
    }
    display.appendChild(span);
  }
}

function buildKeyboardHints(nextChar) {
  // Clear all highlights
  document.querySelectorAll('.vk.vk-next').forEach(k => k.classList.remove('vk-next'));
  if (!nextChar || !currentLesson) return;

  const ch = nextChar.toLowerCase();
  // Find the key element(s) matching this char
  document.querySelectorAll('#lesson-vkb .vk').forEach(key => {
    const keyVal = (key.dataset.k || '').toLowerCase();
    if (keyVal === ch || (ch === ' ' && keyVal === ' ')) {
      key.classList.add('vk-next');
    }
  });
}

function flashVkKey(char, correct) {
  const ch = typeof char === 'string' ? char.toLowerCase() : '';
  document.querySelectorAll('#lesson-vkb .vk').forEach(key => {
    const keyVal = (key.dataset.k || '').toLowerCase();
    if (keyVal === ch || (ch === ' ' && keyVal === ' ')) {
      const cls = correct ? 'vk-pressed' : 'vk-pressed-wrong';
      key.classList.remove('vk-next');
      key.classList.add(cls);
      setTimeout(() => {
        key.classList.remove(cls);
      }, 160);
    }
  });
}

// ”” Lesson input handler ”””””””””””””””””””””
// ”” Lesson typing 0 document-level keydown (always fires) ””””””””””
let lessonTypingActive = false; // simple flag set when typing panel is shown

document.addEventListener('keydown', function(e) {
  if (!lessonTypingActive) return;
  if (!lessonTypingState.text) return;

  // Ignore modifier-only keys
  if (['Shift','Control','Alt','Meta','CapsLock','Tab','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) return;

  e.preventDefault();
  e.stopPropagation();

  const text = lessonTypingState.text;
  const idx = lessonTypingState.typedIndex;

  if (e.key === 'Backspace') {
    if (idx > 0) {
      lessonTypingState.typedIndex--;
      if (lessonTypingState.typedChars) lessonTypingState.typedChars[idx-1] = undefined;
      renderLessonText(text, lessonTypingState.typedIndex, lessonTypingState.typedChars || []);
      buildKeyboardHints(text[lessonTypingState.typedIndex] || '');
    }
    return;
  }

  if (idx >= text.length) return;

  // Start timer on first key
  if (!lessonTypingState.started) {
    lessonTypingState.started = true;
    lessonTypingState.startTime = Date.now();
    lessonTypingState.interval = setInterval(updateLessonLiveStats, 200);
    const hint = document.getElementById('lesson-click-hint');
    if (hint) hint.style.display = 'none';
  }

  const expected = text[idx];
  const typed = e.key;

  // Only accept single printable chars
  if (typed.length !== 1) return;

  lessonTypingState.totalKeys++;
  if (typed === expected) {
    lessonTypingState.correctKeys++;
    flashVkKey(typed, true);
  } else {
    lessonTypingState.errors++;
    flashVkKey(typed, false);
    // Flash red on text box
    const box = document.getElementById('lesson-text-box');
    if (box) { box.style.borderColor = 'var(--red)'; setTimeout(() => box.style.borderColor = 'var(--border)', 180); }
  }

  if (!lessonTypingState.typedChars) lessonTypingState.typedChars = [];
  lessonTypingState.typedChars[idx] = typed;
  lessonTypingState.typedIndex++;

  buildKeyboardHints(text[lessonTypingState.typedIndex] || '');
  renderLessonText(text, lessonTypingState.typedIndex, lessonTypingState.typedChars);

  // Round complete
  if (lessonTypingState.typedIndex >= text.length) {
    lessonTypingActive = false;
    clearInterval(lessonTypingState.interval);
    const elapsed = (Date.now() - lessonTypingState.startTime) / 60000;
    const wpm = Math.round((lessonTypingState.correctKeys / 5) / Math.max(elapsed, 0.001));
    const acc = lessonTypingState.totalKeys > 0
      ? Math.round((lessonTypingState.correctKeys / lessonTypingState.totalKeys) * 100)
      : 100;

    lessonTypingState.roundResults.push({ wpm, acc });

    const roundsDone = lessonTypingState.roundResults.length;
    const totalRounds = currentLesson.rounds.length;
    document.getElementById('lesson-progress-bar').style.width = (roundsDone / totalRounds * 100) + '%';
    buildRoundDots(totalRounds, roundsDone);

    if (roundsDone < totalRounds) {
      showToast(`✓ Round ${roundsDone} done 0 ${wpm} WPM!`);
      setTimeout(() => startLessonRound(roundsDone), 900);
    } else {
      finishLesson();
    }
  }
}, true);

function updateLessonLiveStats() {
  if (!lessonTypingState.started || !lessonTypingState.startTime) return;
  const elapsed = (Date.now() - lessonTypingState.startTime) / 60000;
  const wpm = Math.round((lessonTypingState.correctKeys / 5) / Math.max(elapsed, 0.001));
  const acc = lessonTypingState.totalKeys > 0
    ? Math.round((lessonTypingState.correctKeys / lessonTypingState.totalKeys) * 100) : 100;
  const secs = Math.floor((Date.now() - lessonTypingState.startTime) / 1000);

  // Header stats
  document.getElementById('lesson-wpm-live').textContent = wpm;
  document.getElementById('lesson-acc-live').textContent = acc + '%';
  document.getElementById('lesson-timer-live').textContent = secs + 's';

  // Stats bar
  const wpmEl = document.getElementById('lsb-wpm');
  const accEl = document.getElementById('lsb-acc');
  const errEl = document.getElementById('lsb-errors');
  const timeEl = document.getElementById('lsb-time');
  const fillEl = document.getElementById('lsb-accuracy-fill');

  if (wpmEl) wpmEl.textContent = wpm;
  if (accEl) accEl.textContent = acc + '%';
  if (errEl) errEl.textContent = lessonTypingState.errors;
  if (timeEl) timeEl.textContent = secs + 's';
  if (fillEl) {
    fillEl.style.width = acc + '%';
    fillEl.style.background = acc >= 90 ? 'var(--green)' : acc >= 70 ? 'var(--gold)' : 'var(--red)';
  }
}

// ”” Finish lesson ””””””””””””””””””””””””””””
function finishLesson() {
  document.getElementById('lesson-typing-panel').style.display = 'none';
  document.getElementById('lesson-result-panel').style.display = 'block';
  // Restore scroll for result panel
  const ca3 = document.getElementById('lesson-content-area');
  ca3.style.display = 'block';
  ca3.style.overflowY = 'auto';
  

  const results = lessonTypingState.roundResults;
  const avgWpm = Math.round(results.reduce((s, r) => s + r.wpm, 0) / results.length);
  const avgAcc = Math.round(results.reduce((s, r) => s + r.acc, 0) / results.length);
  const passed = avgAcc >= currentLesson.passMark;
  const xpEarned = passed ? currentLesson.xp : Math.round(currentLesson.xp * 0.3);

  document.getElementById('lr-wpm').textContent = avgWpm;
  document.getElementById('lr-acc').textContent = avgAcc + '%';
  document.getElementById('lr-xp').textContent = '+' + xpEarned + ' XP';
  document.getElementById('lesson-result-icon').textContent = passed ? '🎉' : '’ª';
  document.getElementById('lesson-result-title').textContent = passed ? 'Lesson Complete!' : 'Keep Practicing!';
  document.getElementById('lesson-result-msg').textContent = passed
    ? `You passed with ${avgAcc}% accuracy. Topic unlocked!`
    : `You need ${currentLesson.passMark}% accuracy to pass. Got ${avgAcc}%. Try again!`;

  const pf = document.getElementById('lr-passfail');
  if (passed) {
    pf.textContent = '✓ PASSED 0 Next topic unlocked!';
    pf.style.cssText = 'background:rgba(0,255,136,0.12);color:var(--green);border:1px solid rgba(0,255,136,0.3);margin-bottom:20px;padding:10px 20px;border-radius:8px;font-size:0.88rem;font-weight:600;display:inline-block;';
    // Save progress
    if (!courseState.completedTopics.includes(currentLesson.id)) {
      courseState.completedTopics.push(currentLesson.id);
    }
    courseState.topicScores[currentLesson.id] = { wpm: avgWpm, acc: avgAcc, xp: xpEarned };
    courseState.totalXp = (courseState.totalXp || 0) + xpEarned;
    // Streak
    const today = new Date().toDateString();
    if (courseState.lastDate !== today) { courseState.streak = (courseState.streak || 0) + 1; courseState.lastDate = today; }
    saveCourseState();
  } else {
    pf.textContent = `0 FAILED 0 Need ${currentLesson.passMark}% accuracy`;
    pf.style.cssText = 'background:rgba(255,51,102,0.1);color:var(--red);border:1px solid rgba(255,51,102,0.3);margin-bottom:20px;padding:10px 20px;border-radius:8px;font-size:0.88rem;font-weight:600;display:inline-block;';
  }

  // Next button
  const nextBtn = document.getElementById('next-lesson-btn');
  const nextTopic = COURSE_TOPICS.find(t => t.id === currentLesson.id + 1);
  if (passed && nextTopic) {
    nextBtn.disabled = false; nextBtn.style.opacity = '1';
    nextBtn.textContent = 'Next Lesson →';
  } else if (!nextTopic && passed) {
    nextBtn.textContent = '🏆 Course Complete!';
  } else {
    nextBtn.disabled = true; nextBtn.style.opacity = '0.4';
    nextBtn.textContent = 'Must Pass First';
  }
}

function retryLesson() {
  if (!currentLesson) return;
  openLesson(currentLesson.id);
  setTimeout(beginLessonTyping, 100);
}

function nextLesson() {
  const next = COURSE_TOPICS.find(t => t.id === currentLesson.id + 1);
  if (next && courseState.completedTopics.includes(currentLesson.id)) {
    openLesson(next.id);
  } else {
    exitLesson();
  }
}

function exitLesson() {
  clearInterval(lessonTypingState.interval);
  lessonTypingActive = false;
  const wrap = document.getElementById('lesson-wrap');
  if (wrap && wrap.classList.contains('lesson-fs')) toggleLessonFS();
  document.getElementById('course-lesson').style.display = 'none';
  showCourseMain();
}

// ”” Lesson Fullscreen ””””””””””””””””””””””””
function toggleLessonFS() {
  const wrap = document.getElementById('lesson-wrap');
  const btn = document.getElementById('lesson-fs-btn');
  const isFs = wrap.classList.contains('lesson-fs');
  if (!isFs) {
    wrap.classList.add('lesson-fs');
    btn.textContent = '✕';
    btn.title = 'Exit Fullscreen (ESC)';
    setTimeout(() => document.getElementById('lesson-input').focus(), 80);
  } else {
    wrap.classList.remove('lesson-fs');
    btn.textContent = '🗖';
    btn.title = 'Fullscreen (F)';
  }
}

// 
//  TOPIC 0 0 HAND POSITIONING ANIMATED GUIDE
// 
const HG_STEPS = [
  {
    title: 'Sit Up Straight & Position Your Chair',
    desc: 'Sit with your back straight, feet flat on the floor. Your elbows should be at roughly 90. Screen at eye level, 50070 cm away.',
    tip: 'Slouching causes fatigue in minutes. Good posture lets you type for hours without pain.',
    draw: 'posture'
  },
  {
    title: 'Wrist Position 0 Float, Don\'t Rest',
    desc: 'Keep your wrists slightly elevated above the keyboard 0 do NOT rest them while typing. Resting while typing causes strain.',
    tip: 'Think of your wrists like a bridge 0 raised, not touching the surface while your fingers move.',
    draw: 'wrist'
  },
  {
    title: 'Finger Curve 0 Natural Arch',
    desc: 'Let your fingers curl naturally 0 like you\'re holding a ball. Don\'t flatten them out or make them too stiff.',
    tip: 'Imagine a small tennis ball in your palm. That natural curve is exactly how your fingers should sit.',
    draw: 'curve'
  },
  {
    title: 'Left Hand 0 Home Row Placement',
    desc: 'Place your LEFT hand fingers: Pinky→A, Ring→S, Middle→D, Index→F. Your thumb hovers near the space bar.',
    tip: 'Feel the bump on F with your left index finger. This is your anchor 0 your hand always returns here.',
    draw: 'left_hand'
  },
  {
    title: 'Right Hand 0 Home Row Placement',
    desc: 'Place your RIGHT hand fingers: Index→J, Middle→K, Ring→L, Pinky→;. Your thumb hovers near the space bar.',
    tip: 'Feel the bump on J with your right index finger. Together, F and J are your two anchor points.',
    draw: 'right_hand'
  },
  {
    title: 'Both Hands 0 Full Home Row Ready',
    desc: 'Both thumbs rest near SPACE. Eyes look at the SCREEN 0 not the keyboard. You are now in touch typing position!',
    tip: 'From now on, every key you press starts from this position and your fingers return here after each keystroke.',
    draw: 'both_hands'
  }
];

let hgCurrentStep = 0;
let hgAnimFrame = null;
let hgAnimT = 0;

function openHandGuide() {
  hgCurrentStep = 0;
  const overlay = document.getElementById('hand-guide-overlay');
  overlay.style.display = 'flex';
  buildHgDots();
  // Resize canvas after layout settles
  setTimeout(() => renderHgStep(0), 60);
}
function closeHandGuide() {
  document.getElementById('hand-guide-overlay').style.display = 'none';
  cancelAnimationFrame(hgAnimFrame);
  // Mark topic 0 complete and save
  if (!courseState.completedTopics.includes(0)) {
    courseState.completedTopics.push(0);
    courseState.totalXp = (courseState.totalXp || 0) + 20;
    saveCourseState();
  }
  showCourseMain();
}
function hgStep(dir) {
  const next = hgCurrentStep + dir;
  if (next < 0) return;
  if (next >= HG_STEPS.length) { closeHandGuide(); return; }
  hgCurrentStep = next;
  renderHgStep(next);
}
// Step facts/highlights shown in right panel
const HG_FACTS = [
  ['“ Screen at eye level','’ Feet flat on floor',' Elbows at 90'],
  ['š« No resting while typing','... Float above keys','’ª Wrists straight, not bent'],
  ['Ž Imagine holding a ball','!2 Fingers naturally curved','EARTH Never flat or stiff'],
  ['“EARTH Pinky → A','’ Ring → S','Ÿ¡ Middle → D','Ÿ Index → F  0ª'],
  ['🔼 Index → J  0ª','Ÿ Middle → K',' Ring → L','🔼´ Pinky → ;'],
  ['‘ Eyes on SCREEN only','🔄 Always return to home row','⚡ You\'re ready to type!']
];

function buildHgDots() {
  const d = document.getElementById('hg-dots');
  if (!d) return;
  d.innerHTML = '';
  HG_STEPS.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.id = 'hgdot-' + i;
    dot.style.cssText = 'width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,0.15);transition:all 0.35s;cursor:pointer;';
    dot.onclick = () => { hgCurrentStep = i; renderHgStep(i); };
    d.appendChild(dot);
  });
}

function renderHgStep(idx) {
  const step = HG_STEPS[idx];
  const total = HG_STEPS.length;

  // Update text
  document.getElementById('hg-step-label').textContent = `Step ${idx+1} of ${total}`;
  document.getElementById('hg-title').textContent = step.title;
  document.getElementById('hg-desc').textContent = step.desc;

  // Progress bar
  const pct = Math.round(((idx+1)/total)*100);
  const bar = document.getElementById('hg-progress-bar');
  if (bar) bar.style.width = pct + '%';

  // Tip
  if (step.tip) {
    document.getElementById('hg-tip').style.display = 'block';
    document.getElementById('hg-tip-text').textContent = step.tip;
  } else {
    document.getElementById('hg-tip').style.display = 'none';
  }

  // Facts
  const factsEl = document.getElementById('hg-facts');
  if (factsEl && HG_FACTS[idx]) {
    factsEl.innerHTML = HG_FACTS[idx].map(f =>
      `<div style="display:flex;align-items:center;gap:8px;padding:7px 12px;margin-bottom:5px;background:rgba(255,255,255,0.03);border-radius:8px;border-left:2px solid rgba(0,212,255,0.3);font-size:0.82rem;color:rgba(255,255,255,0.7);">${f}</div>`
    ).join('');
  }

  // Prev button
  const prev = document.getElementById('hg-prev');
  if (prev) prev.style.opacity = idx === 0 ? '0.3' : '1';

  // Next button
  const next = document.getElementById('hg-next');
  if (next) {
    if (idx === total-1) {
      next.textContent = '✓ I\'m Ready!';
      next.style.background = 'linear-gradient(135deg,var(--green),#00aa55)';
      next.style.boxShadow = '0 4px 20px rgba(0,255,136,0.3)';
    } else {
      next.textContent = 'Next Step →';
      next.style.background = 'linear-gradient(135deg,var(--accent),var(--accent3))';
      next.style.boxShadow = '0 4px 20px rgba(0,212,255,0.3)';
    }
  }

  // Dots
  document.querySelectorAll('[id^="hgdot-"]').forEach((d, i) => {
    d.style.background = i < idx ? 'rgba(0,212,255,0.5)' : i === idx ? 'var(--accent)' : 'rgba(255,255,255,0.12)';
    d.style.width = i === idx ? '20px' : '8px';
    d.style.borderRadius = i === idx ? '4px' : '50%';
    d.style.boxShadow = i === idx ? '0 0 8px var(--accent)' : 'none';
  });

  // Resize canvas to fill the left panel
  cancelAnimationFrame(hgAnimFrame);
  hgAnimT = 0;
  const canvas = document.getElementById('hg-canvas');
  if (canvas) {
    const parent = canvas.parentElement;
    const pw = parent.clientWidth - 40;
    const ph = parent.clientHeight - 40;
    canvas.width = Math.max(pw, 500);
    canvas.height = Math.max(ph, 380);
    canvas.style.width = pw + 'px';
    canvas.style.height = ph + 'px';
  }
  animateHgCanvas(step.draw);
}

function animateHgCanvas(type) {
  const canvas = document.getElementById('hg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;

  hgAnimT += 0.022;
  const t = hgAnimT;
  ctx.clearRect(0, 0, W, H);

  if (type === 'posture') drawPosture(ctx, W, H, t);
  else if (type === 'wrist') drawWrist(ctx, W, H, t);
  else if (type === 'curve') drawCurve(ctx, W, H, t);
  else if (type === 'left_hand') drawHand(ctx, W, H, t, 'left');
  else if (type === 'right_hand') drawHand(ctx, W, H, t, 'right');
  else if (type === 'both_hands') drawBothHands(ctx, W, H, t);

  hgAnimFrame = requestAnimationFrame(() => animateHgCanvas(type));
}

// ”” Drawing helpers ””””””””””””””””””””””””””
function hgGlow(ctx, color, blur) { ctx.shadowColor = color; ctx.shadowBlur = blur; }
function hgNoGlow(ctx) { ctx.shadowBlur = 0; }

function drawPosture(ctx, W, H, t) {
  // Desk
  ctx.fillStyle = 'rgba(0,80,140,0.3)';
  ctx.fillRect(80, H*0.72, W-160, 8);
  ctx.fillStyle = 'rgba(0,80,140,0.15)';
  ctx.fillRect(100, H*0.72+8, W-200, H*0.25);

  // Monitor
  const pulse = Math.sin(t*2)*3;
  ctx.fillStyle = 'rgba(10,30,55,0.9)';
  roundRect(ctx, W/2-90, 20+pulse/2, 180, 110, 8);
  ctx.fillStyle = 'rgba(0,212,255,0.06)';
  roundRect(ctx, W/2-85, 25+pulse/2, 170, 100, 6);
  hgGlow(ctx, '#00d4ff', 8);
  ctx.strokeStyle = 'rgba(0,212,255,0.4)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(W/2-90, 20+pulse/2, 180, 110);
  hgNoGlow(ctx);

  // Screen content lines
  ctx.fillStyle = 'rgba(0,212,255,0.3)';
  for (let i = 0; i < 4; i++) {
    ctx.fillRect(W/2-65, 42+pulse/2+i*18, 60+Math.random()*40, 6);
  }

  // Monitor stand
  ctx.fillStyle = 'rgba(0,212,255,0.2)';
  ctx.fillRect(W/2-5, 132, 10, 30);
  ctx.fillRect(W/2-20, 162, 40, 6);

  // Keyboard on desk
  drawMiniKeyboard(ctx, W/2-100, H*0.72-28, 200, 22);

  // Stick figure sitting
  const sx = W*0.2, sy = H*0.3;
  ctx.strokeStyle = 'rgba(0,212,255,0.7)';
  ctx.lineWidth = 2.5;
  // Head
  hgGlow(ctx, '#00d4ff', 10);
  ctx.beginPath(); ctx.arc(sx, sy, 18, 0, Math.PI*2); ctx.stroke();
  // Body (straight)
  ctx.beginPath(); ctx.moveTo(sx, sy+18); ctx.lineTo(sx, sy+70); ctx.stroke();
  // Arms toward keyboard
  ctx.beginPath(); ctx.moveTo(sx, sy+30); ctx.lineTo(sx+50, sy+55); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(sx, sy+30); ctx.lineTo(sx+60, sy+48); ctx.stroke();
  // Legs
  ctx.beginPath(); ctx.moveTo(sx, sy+70); ctx.lineTo(sx-15, sy+108); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(sx, sy+70); ctx.lineTo(sx+15, sy+108); ctx.stroke();
  hgNoGlow(ctx);

  // Angle annotation
  ctx.strokeStyle = 'rgba(0,255,136,0.5)';
  ctx.lineWidth = 1;
  ctx.setLineDash([4,4]);
  ctx.beginPath(); ctx.moveTo(sx, sy+30); ctx.lineTo(sx+40, sy+30); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(0,255,136,0.8)';
  ctx.font = 'bold 11px monospace';
  ctx.fillText('90', sx+42, sy+34);

  // Label
  label(ctx, W/2+30, H*0.85, 'Screen at eye level', 'rgba(0,212,255,0.7)');
}

function drawWrist(ctx, W, H, t) {
  const cy = H/2+10;
  // Draw two arms/wrists from sides
  const bob = Math.sin(t*1.5)*5;

  // Left arm
  ctx.fillStyle = 'rgba(255,180,120,0.7)';
  roundRect(ctx, 60, cy-15+bob, 160, 30, 15);

  // Right arm
  roundRect(ctx, W-220, cy-15+bob, 160, 30, 15);

  // Keyboard surface
  ctx.fillStyle = 'rgba(20,40,70,0.8)';
  roundRect(ctx, W/2-160, cy+30, 320, 20, 6);
  ctx.strokeStyle = 'rgba(0,212,255,0.3)';
  ctx.lineWidth = 1;
  ctx.strokeRect(W/2-160, cy+30, 320, 20);

  // Wrist gap arrow (showing float)
  const gapY = cy+15+bob;
  const kbY = cy+30;
  hgGlow(ctx, '#00ff88', 8);
  ctx.strokeStyle = 'rgba(0,255,136,0.8)';
  ctx.lineWidth = 2;
  // Left wrist gap
  arrowV(ctx, 220, gapY, kbY, '#00ff88');
  // Right wrist gap
  arrowV(ctx, W-220, gapY, kbY, '#00ff88');
  hgNoGlow(ctx);

  label(ctx, W/2, cy-40+bob, '‘ Wrists float above keyboard while typing', 'rgba(0,255,136,0.9)');
  label(ctx, W/2, kbY+38, 'Keyboard surface', 'rgba(0,212,255,0.6)');

  // Pulsing gap indicator
  const glow = (Math.sin(t*3)+1)/2;
  ctx.fillStyle = `rgba(0,255,136,${0.05+glow*0.1})`;
  ctx.fillRect(W/2-160, gapY, 320, kbY-gapY);
}

function drawCurve(ctx, W, H, t) {
  // Show side profile of curved vs flat finger
  const bob = Math.sin(t*2)*3;
  const cx = W/2;

  // Label
  label(ctx, cx-130, 30, '0 Flat (wrong)', 'rgba(255,51,102,0.8)');
  label(ctx, cx+80, 30, '✓ Curved (correct)', 'rgba(0,255,136,0.8)');

  // Flat finger (wrong) 0 left side
  ctx.fillStyle = 'rgba(255,51,102,0.3)';
  ctx.strokeStyle = 'rgba(255,51,102,0.7)';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(cx-220, H/2-10+bob);
  ctx.lineTo(cx-80, H/2-10+bob);
  ctx.lineTo(cx-75, H/2+10+bob);
  ctx.lineTo(cx-220, H/2+10+bob);
  ctx.closePath();
  ctx.fill(); ctx.stroke();
  // key
  ctx.fillStyle = 'rgba(20,40,70,0.9)';
  roundRect(ctx, cx-90, H/2+10+bob, 20, 12, 3);
  ctx.strokeStyle = 'rgba(255,51,102,0.4)'; ctx.strokeRect(cx-90, H/2+10+bob, 20, 12);

  // Curved finger (correct) 0 right side
  hgGlow(ctx, '#00ff88', 12);
  ctx.strokeStyle = 'rgba(0,255,136,0.8)';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(cx+80, H/2-30+bob);
  ctx.bezierCurveTo(cx+90, H/2-40+bob, cx+160, H/2-38+bob, cx+175, H/2-20+bob);
  ctx.bezierCurveTo(cx+185, H/2-5+bob, cx+175, H/2+8+bob, cx+165, H/2+12+bob);
  ctx.bezierCurveTo(cx+140, H/2+20+bob, cx+95, H/2+18+bob, cx+82, H/2+5+bob);
  ctx.closePath();
  ctx.fillStyle = 'rgba(255,180,120,0.5)'; ctx.fill(); ctx.stroke();
  hgNoGlow(ctx);
  // key
  ctx.fillStyle = 'rgba(20,40,70,0.9)';
  roundRect(ctx, cx+155, H/2+10+bob, 20, 12, 3);
  hgGlow(ctx, '#00ff88', 6);
  ctx.strokeStyle = 'rgba(0,255,136,0.5)'; ctx.strokeRect(cx+155, H/2+10+bob, 20, 12);
  hgNoGlow(ctx);

  // Divider
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 1;
  ctx.setLineDash([6,4]);
  ctx.beginPath(); ctx.moveTo(cx, 20); ctx.lineTo(cx, H-20); ctx.stroke();
  ctx.setLineDash([]);
}

function drawHand(ctx, W, H, t, side) {
  const isLeft = side === 'left';
  const kbW = W * 0.72, kbH = H * 0.1;
  const kbX = W/2 - kbW/2, kbY = H * 0.64;
  drawMiniKeyboard(ctx, kbX, kbY, kbW, kbH);

  const spread = W * 0.095;
  const baseX = isLeft ? W/2 - spread*0.5 : W/2 + spread*0.5;

  const fingers = isLeft
    ? [
        {key:'A', x:baseX - spread*3, col:'#ff6464', f:'Pinky'},
        {key:'S', x:baseX - spread*2, col:'orange',  f:'Ring'},
        {key:'D', x:baseX - spread,   col:'#ffdc00', f:'Middle'},
        {key:'F', x:baseX,            col:'#00dc64', f:'Index', anchor:true}
      ]
    : [
        {key:'J', x:baseX,            col:'#00b4ff', f:'Index', anchor:true},
        {key:'K', x:baseX + spread,   col:'#7850ff', f:'Middle'},
        {key:'L', x:baseX + spread*2, col:'#dc3cdc', f:'Ring'},
        {key:';', x:baseX + spread*3, col:'#ff5050', f:'Pinky'}
      ];

  const fingerH = H * 0.32;
  const fingerW = W * 0.028;

  fingers.forEach((fi, i) => {
    const delay = i * 0.4;
    const bob = Math.sin(t*2 + delay) * 5;
    const glow = fi.anchor ? 18 : 8;
    const ky = kbY;

    // Key highlight on keyboard
    hgGlow(ctx, fi.col, glow + Math.sin(t*2+delay)*4);
    ctx.fillStyle = fi.col + '44';
    ctx.strokeStyle = fi.col;
    ctx.lineWidth = 2.5;
    roundRect(ctx, fi.x - W*0.024, ky + 2, W*0.048, kbH - 4, 5);
    ctx.fill(); ctx.stroke();

    // Finger body
    hgGlow(ctx, fi.col, glow);
    ctx.fillStyle = 'rgba(255,190,135,0.88)';
    ctx.strokeStyle = fi.col;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.ellipse(fi.x, ky - fingerH/2 + bob, fingerW, fingerH/2, 0, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();

    // Knuckle line
    ctx.strokeStyle = 'rgba(200,140,80,0.45)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(fi.x - fingerW*0.7, ky - fingerH*0.18 + bob);
    ctx.lineTo(fi.x + fingerW*0.7, ky - fingerH*0.18 + bob);
    ctx.stroke();

    hgNoGlow(ctx);

    // Anchor dot
    if (fi.anchor) {
      ctx.fillStyle = fi.col;
      ctx.beginPath();
      ctx.ellipse(fi.x, ky + kbH*0.75, 5, 3, 0, 0, Math.PI*2);
      ctx.fill();
    }

    // Labels
    ctx.fillStyle = fi.col;
    ctx.font = `bold ${Math.round(W*0.016)}px Inter, sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText(fi.f, fi.x, ky - fingerH - 14 + bob);
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.font = `bold ${Math.round(W*0.022)}px JetBrains Mono, monospace`;
    ctx.fillText(fi.key, fi.x, ky + kbH*0.65);
    if (fi.anchor) {
      ctx.fillStyle = fi.col;
      ctx.font = `bold ${Math.round(W*0.013)}px Inter, sans-serif`;
      ctx.fillText('ANCHOR 0ª', fi.x, ky + kbH + H*0.06);
    }
  });

  // Palm
  const palmX = isLeft ? W/2 - spread*1.5 : W/2 + spread*1.5;
  ctx.fillStyle = 'rgba(255,190,135,0.25)';
  ctx.strokeStyle = 'rgba(255,190,135,0.35)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(palmX, kbY + kbH*0.4, spread*1.8, kbH*0.9, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Thumb
  const thumbX = isLeft ? kbX + W*0.05 : kbX + kbW - W*0.05;
  ctx.fillStyle = 'rgba(255,190,135,0.5)';
  ctx.beginPath();
  ctx.ellipse(thumbX, kbY + kbH*0.6, W*0.032, kbH*0.55, isLeft ? 0.4 : -0.4, 0, Math.PI*2);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  ctx.font = `${Math.round(W*0.013)}px Inter,sans-serif`;
  ctx.fillText('Thumb → SPACE', thumbX, kbY + kbH*1.8);

  ctx.textAlign = 'left';
}

function drawBothHands(ctx, W, H, t) {
  const kbW = W*0.78, kbH = H*0.1, kbX = W/2-kbW/2, kbY = H*0.62;
  drawMiniKeyboard(ctx, kbX, kbY, kbW, kbH);
  const sp = W*0.088, fH = H*0.28, fW = W*0.025;
  const allFingers = [
    {key:'A',x:W/2-sp*3.5,col:'#ff6464',f:'LP'},
    {key:'S',x:W/2-sp*2.5,col:'orange',f:'LR'},
    {key:'D',x:W/2-sp*1.5,col:'#ffdc00',f:'LM'},
    {key:'F',x:W/2-sp*0.5,col:'#00dc64',f:'LI',anchor:true},
    {key:'J',x:W/2+sp*0.5,col:'#00b4ff',f:'RI',anchor:true},
    {key:'K',x:W/2+sp*1.5,col:'#7850ff',f:'RM'},
    {key:'L',x:W/2+sp*2.5,col:'#dc3cdc',f:'RR'},
    {key:';',x:W/2+sp*3.5,col:'#ff5050',f:'RP'}
  ];
  allFingers.forEach((fi,i) => {
    const bob = Math.sin(t*2+i*0.35)*5;
    hgGlow(ctx, fi.col, fi.anchor?16:6);
    ctx.fillStyle=fi.col+'44'; ctx.strokeStyle=fi.col; ctx.lineWidth=fi.anchor?2.5:1.8;
    roundRect(ctx, fi.x-W*0.022, kbY+2, W*0.044, kbH-4, 4); ctx.fill(); ctx.stroke();
    ctx.fillStyle='rgba(255,190,135,0.9)'; ctx.strokeStyle=fi.col; ctx.lineWidth=fi.anchor?2.5:1.8;
    ctx.beginPath(); ctx.ellipse(fi.x, kbY-fH/2+bob, fW, fH/2, 0, 0, Math.PI*2); ctx.fill(); ctx.stroke();
    hgNoGlow(ctx);
    ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`bold ${Math.round(W*0.02)}px JetBrains Mono,monospace`;
    ctx.textAlign='center'; ctx.fillText(fi.key, fi.x, kbY+kbH*0.65);
    ctx.fillStyle=fi.col; ctx.font=`bold ${Math.round(W*0.014)}px Inter,sans-serif`;
    ctx.fillText(fi.f, fi.x, kbY-fH-10+bob);
  });
  ctx.fillStyle='rgba(255,190,135,0.5)';
  ctx.beginPath(); ctx.ellipse(W/2-sp*0.3, kbY+kbH*0.55, sp*0.6, kbH*0.5, -0.3, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(W/2+sp*0.3, kbY+kbH*0.55, sp*0.6, kbH*0.5, 0.3, 0, Math.PI*2); ctx.fill();
  hgGlow(ctx,'rgba(255,255,255,0.2)',5);
  ctx.strokeStyle='rgba(255,255,255,0.18)'; ctx.lineWidth=1;
  roundRect(ctx, W/2-sp*1.2, kbY+kbH*1.15, sp*2.4, kbH*0.7, 4); ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,0.4)'; ctx.font=`${Math.round(W*0.014)}px monospace`;
  ctx.textAlign='center'; ctx.fillText('SPACE BAR', W/2, kbY+kbH*1.65);
  hgNoGlow(ctx);
  const pulse=(Math.sin(t*2)+1)/2;
  ctx.fillStyle=`rgba(0,255,136,${0.55+pulse*0.45})`;
  ctx.font=`bold ${Math.round(W*0.034)}px Orbitron,sans-serif`;
  ctx.textAlign='center';
  hgGlow(ctx,'#00ff88',18*pulse);
  ctx.fillText('✓ TOUCH TYPING POSITION', W/2, H*0.18);
  hgNoGlow(ctx);
  ctx.strokeStyle='rgba(255,255,255,0.07)'; ctx.lineWidth=1; ctx.setLineDash([5,5]);
  ctx.beginPath(); ctx.moveTo(W/2, kbY-fH-25); ctx.lineTo(W/2, kbY+kbH+15); ctx.stroke();
  ctx.setLineDash([]); ctx.textAlign='left';
}

function drawMiniKeyboard(ctx, x, y, w, h) {
  ctx.fillStyle = 'rgba(15,30,52,0.9)';
  roundRect(ctx, x, y, w, h, 6);
  ctx.fill();
  ctx.strokeStyle = 'rgba(0,212,255,0.2)'; ctx.lineWidth = 1;
  ctx.strokeRect(x, y, w, h);
  // Mini key rows
  const rows = 3, cols = 10, kw = (w-20)/cols, kh = (h-10)/rows;
  for (let r=0;r<rows;r++) for (let c=0;c<cols;c++) {
    ctx.fillStyle = 'rgba(30,55,90,0.8)';
    roundRect(ctx, x+10+c*kw+1, y+5+r*kh+1, kw-2, kh-2, 2);
    ctx.fill();
  }
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.roundRect ? ctx.roundRect(x,y,w,h,r) : ctx.rect(x,y,w,h);
}

function label(ctx, x, y, text, color) {
  ctx.fillStyle = color;
  ctx.font = '11px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(text, x, y);
}

function arrowV(ctx, x, y1, y2, color) {
  ctx.strokeStyle = color; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(x, y1); ctx.lineTo(x, y2); ctx.stroke();
  ctx.fillStyle = color;
  ctx.beginPath(); ctx.moveTo(x-5,y2-8); ctx.lineTo(x+5,y2-8); ctx.lineTo(x,y2); ctx.fill();
}
const CODE_LANGS = [
  { id:'javascript', name:'JavaScript', icon:'Ÿ¨', color:'#f7df1e', snip:'const fn = () => {}' },
  { id:'python',     name:'Python',     icon:'', color:'#3776ab', snip:'def func(): pass' },
  { id:'typescript', name:'TypeScript', icon:'🔼', color:'#3178c6', snip:'const x: string = ""' },
  { id:'java',       name:'Java',       icon:'˜', color:'#ed8b00', snip:'public class Main {}' },
  { id:'csharp',     name:'C#',         icon:'Ÿ', color:'#9b4993', snip:'var x = new Class();' },
  { id:'cpp',        name:'C++',        icon:'', color:'#00599c', snip:'int main() { }' },
  { id:'rust',       name:'Rust',       icon:'', color:'#ce422b', snip:'fn main() { }' },
  { id:'go',         name:'Go',         icon:'1', color:'#00add8', snip:'func main() { }' },
  { id:'kotlin',     name:'Kotlin',     icon:'Ÿª', color:'#7f52ff', snip:'fun main() { }' },
  { id:'swift',      name:'Swift',      icon:'Ž', color:'#f05138', snip:'func greet() { }' },
];

let selectedCodeDifficulty = 'easy';

function openCodeLangPicker() {
  buildCodeLangGrid();
  document.getElementById('code-lang-overlay').classList.add('show');
}

function closeCodeLangPicker() {
  document.getElementById('code-lang-overlay').classList.remove('show');
}

function buildCodeLangGrid() {
  const grid = document.getElementById('code-lang-grid');
  grid.innerHTML = '';
  CODE_LANGS.forEach(lang => {
    const snippets = words.code[lang.id] || [];
    const preview = snippets[0] ? snippets[0].slice(0, 28) + '' : lang.snip;
    const card = document.createElement('div');
    card.className = 'cl-card' + (lang.id === selectedCodeLang ? ' sel' : '');
    card.id = 'cl-' + lang.id;
    card.onclick = () => pickCodeLang(lang.id);
    card.innerHTML = `
      <div class="cl-card-bar" style="background:${lang.color}"></div>
      <div class="cl-card-icon">${lang.icon}</div>
      <div class="cl-card-info">
        <div class="cl-card-name">${lang.name}</div>
        <div class="cl-card-snip">${preview}</div>
      </div>`;
    grid.appendChild(card);
  });
}

function pickCodeLang(id) {
  selectedCodeLang = id;
  document.querySelectorAll('.cl-card').forEach(c => c.classList.remove('sel'));
  const el = document.getElementById('cl-' + id);
  if (el) el.classList.add('sel');
}

function selectCodeDiff(diff, el) {
  selectedCodeDifficulty = diff;
  document.querySelectorAll('.cl-diff-pill').forEach(p => p.classList.remove('sel'));
  el.classList.add('sel');
}

function startCodeMode() {
  closeCodeLangPicker();

  // Apply difficulty 0 easy=1 snippet random, medium=2 joined, hard=3 joined
  const snippets = words.code[selectedCodeLang] || words.code.javascript;
  let text;
  if (selectedCodeDifficulty === 'easy') {
    text = snippets[Math.floor(Math.random() * snippets.length)];
  } else if (selectedCodeDifficulty === 'medium') {
    const s1 = snippets[Math.floor(Math.random() * snippets.length)];
    const s2 = snippets[Math.floor(Math.random() * snippets.length)];
    text = s1 + ' ' + s2;
  } else {
    const picked = [...snippets].sort(() => Math.random() - 0.5).slice(0, 3);
    text = picked.join(' ');
  }

  const lang = CODE_LANGS.find(l => l.id === selectedCodeLang);
  const langName = lang ? lang.name : 'Code';

  // Set state
  state.mode = 'code';
  state.currentText = text;
  const titles = { speed:'⚡ Speed Test', words:'📝 Word Burst', ghost:'! Ghost Race', code:'💻 Code Typing', aiforge:'🤖 AI Forge' };
  document.getElementById('mode-title').textContent = `💻 ${langName} 0 ${selectedCodeDifficulty.charAt(0).toUpperCase()+selectedCodeDifficulty.slice(1)}`;

  const testPage = document.getElementById('page-test');
  testPage.classList.remove('ghost-active');
  const ghostPanel = document.getElementById('ghost-panel-col');
  if (ghostPanel) ghostPanel.style.removeProperty('display');

  const timeCtrl = document.querySelector('.test-controls');
  timeCtrl.style.display = 'flex';
  document.getElementById('timer-live-label').textContent = 'Timer';

  // Reset and go
  state.started = false; state.finished = false; state.paused = false;
  state.typedIndex = 0; state.errors = 0; state.totalKeystrokes = 0;
  state.correctKeystrokes = 0; state.combo = 0; state.maxCombo = 0;
  state.typed = []; state.timeLeft = state.timeLimit;
  clearInterval(state.timerInterval); clearInterval(state.stopwatchInterval);

  const pauseBtn = document.getElementById('btn-pause');
  if (pauseBtn) { pauseBtn.style.opacity='0.4'; pauseBtn.style.pointerEvents='none'; pauseBtn.textContent='⏸ PAUSE'; }
  document.querySelector('.test-controls')?.classList.remove('test-locked');
  document.getElementById('live-wpm').textContent = '0';
  document.getElementById('live-acc').textContent = '100%';
  document.getElementById('live-errors').textContent = '0';
  document.getElementById('live-combo').textContent = '0x';
  document.getElementById('live-timer').textContent = '0';
  document.getElementById('live-timer').style.fontSize = '';
  document.getElementById('live-timer').style.color = '';
  document.getElementById('progress-fill').style.width = '0%';
  document.getElementById('timer-ring').style.strokeDashoffset = '0';
  document.getElementById('timer-ring').style.stroke = 'var(--accent)';
  document.getElementById('chart-wrap').style.display = 'none';
  document.getElementById('typing-box').classList.remove('focused','error-flash');
  document.getElementById('typing-box').style.opacity = '1';
  document.getElementById('typing-box').style.filter = 'none';
  document.getElementById('pause-overlay').style.display = 'none';
  document.getElementById('typing-input').removeAttribute('disabled');

  renderText();
  document.getElementById('typing-input').value = '';

  showPage('test');
  setTimeout(() => document.getElementById('typing-input').focus(), 80);
  showToast(`💻 ${langName} 0 ${selectedCodeDifficulty} mode. Start typing!`);
}

// 
//  NEW MODES: PRECISION + BURST + CUSTOM + ACHIEVEMENTS
// 

// ”” CUSTOM TEST BUILDER ””””””””””””””””””””””
let cbTrimValue = 100;
function openCustomBuilder() {
  document.getElementById('custom-builder-overlay').style.display = 'flex';
  const ta = document.getElementById('custom-text-input');
  ta.value = ''; updateCbCount(); ta.focus();
}
function closeCustomBuilder() {
  document.getElementById('custom-builder-overlay').style.display = 'none';
}
function setCbTrim(val, el) {
  cbTrimValue = val;
  document.querySelectorAll('[id^="cb-trim-"]').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
}
document.getElementById('custom-text-input').addEventListener('input', updateCbCount);
function updateCbCount() {
  const text = document.getElementById('custom-text-input').value;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  document.getElementById('cb-char-count').textContent = text.length + ' characters';
  document.getElementById('cb-word-count').textContent = words + ' words';
}
function launchCustomTest() {
  let text = document.getElementById('custom-text-input').value.trim();
  if (text.length < 10) { showToast('⚠️ Please enter at least 10 characters'); return; }
  if (!document.getElementById('cb-punc').checked) text = text.replace(/[.,!?;:'"()\[\]{}\-]/g,' ').replace(/\s+/g,' ').trim();
  if (!document.getElementById('cb-nums').checked) text = text.replace(/[0-9]/g,' ').replace(/\s+/g,' ').trim();
  if (!document.getElementById('cb-caps').checked) text = text.toLowerCase();
  if (cbTrimValue !== 'none') {
    const ws = text.split(/\s+/);
    if (ws.length > cbTrimValue) text = ws.slice(0, cbTrimValue).join(' ');
  }
  closeCustomBuilder();
  state.mode = 'speed'; state.currentText = text;
  document.getElementById('mode-title').textContent = '🧩 Custom Test';
  const testPage = document.getElementById('page-test');
  testPage.classList.remove('ghost-active');
  const gp = document.getElementById('ghost-panel-col');
  if (gp) gp.style.removeProperty('display');
  document.querySelector('.test-controls').style.display = 'flex';
  state.started=false;state.finished=false;state.paused=false;
  state.typedIndex=0;state.errors=0;state.totalKeystrokes=0;
  state.correctKeystrokes=0;state.combo=0;state.maxCombo=0;
  state.typed=[];state.timeLeft=state.timeLimit;
  clearInterval(state.timerInterval);clearInterval(state.stopwatchInterval);
  const pb=document.getElementById('btn-pause');
  if(pb){pb.style.opacity='0.4';pb.style.pointerEvents='none';pb.textContent='⏸ PAUSE';}
  document.querySelector('.test-controls')?.classList.remove('test-locked');
  document.getElementById('live-wpm').textContent='0';
  document.getElementById('live-acc').textContent='100%';
  document.getElementById('live-errors').textContent='0';
  document.getElementById('live-combo').textContent='0x';
  document.getElementById('live-timer').textContent='0';
  document.getElementById('progress-fill').style.width='0%';
  document.getElementById('chart-wrap').style.display='none';
  document.getElementById('pause-overlay').style.display='none';
  document.getElementById('typing-input').removeAttribute('disabled');
  renderText();
  document.getElementById('typing-input').value='';
  showPage('test');
  setTimeout(()=>document.getElementById('typing-input').focus(),80);
  showToast('🧩 Custom test ready 0 start typing!');
}

// ”” ACHIEVEMENT SYSTEM ”””””””””””””””””””””””
const ACHIEVEMENTS = [
  {id:'wpm50',  icon:'^',title:'Rocket Typist',   desc:'Reached 50 WPM!',         xp:20,  check:(w)=>w>=50},
  {id:'wpm80',  icon:'⚡',title:'Speed Demon',     desc:'Reached 80 WPM!',         xp:40,  check:(w)=>w>=80},
  {id:'wpm100', icon:'’¯',title:'100 WPM Club',    desc:'You typed at 100+ WPM!',  xp:80,  check:(w)=>w>=100},
  {id:'wpm120', icon:'>>',title:'Turbo Typist',    desc:'120 WPM 0 insane!',       xp:120, check:(w)=>w>=120},
  {id:'acc100', icon:'🎯',title:'Accuracy King',   desc:'Perfect 100% accuracy!',  xp:60,  check:(w,a)=>a>=100},
  {id:'acc98',  icon:'Ž0',title:'Sniper Fingers',  desc:'98%+ accuracy run!',      xp:40,  check:(w,a)=>a>=98},
  {id:'noerr',  icon:'¨',title:'No Mistake Run',  desc:'Zero errors in a test!',  xp:50,  check:(w,a,e)=>e===0},
  {id:'streak5',icon:'🔥',title:'On Fire',         desc:'5+ combo streak!',        xp:25,  check:(w,a,e,s)=>s>=5},
  {id:'streak20',icon:'’«',title:'Unstoppable',    desc:'20+ combo streak!',       xp:60,  check:(w,a,e,s)=>s>=20},
  {id:'tests10',icon:'“Š',title:'Dedicated',       desc:'Completed 10 tests!',     xp:30,  check:()=>(state.stats.totalTests||0)>=10},
  {id:'tests50',icon:'🏆',title:'TypeGuru',        desc:'Completed 50 tests!',     xp:100, check:()=>(state.stats.totalTests||0)>=50},
  {id:'words1k',icon:'“š',title:'Word Warrior',    desc:'Typed 1000+ words!',      xp:40,  check:()=>(state.stats.totalWords||0)>=1000},
  {id:'precis', icon:'🎯',title:'Precision Master',desc:'Precision mode 90%+ acc!',xp:50,  check:(w,a,e,s,m)=>m==='precision'&&a>=90},
  {id:'burst',  icon:'*',title:'Burst King',      desc:'Burst mode 80+ WPM!',     xp:60,  check:(w,a,e,s,m)=>m==='burst'&&w>=80},
  {id:'custom', icon:'🧩',title:'Builder',         desc:'Completed custom test!',  xp:30,  check:(w,a,e,s,m)=>m==='speed'&&w>0},
];
let unlockedAchs = {};
function loadAchs(){try{unlockedAchs=JSON.parse(localStorage.getItem('tg_achs')||'{}');}catch(e){}}
function saveAchs(){try{localStorage.setItem('tg_achs',JSON.stringify(unlockedAchs));}catch(e){}}
function checkAchievements(wpm,acc,errors,maxCombo,mode){
  loadAchs();
  const queue=[];
  ACHIEVEMENTS.forEach(ach=>{
    if(unlockedAchs[ach.id])return;
    try{if(ach.check(wpm,acc,errors,maxCombo,mode))queue.push(ach);}catch(e){}
  });
  if(!queue.length)return;
  queue.forEach(ach=>{unlockedAchs[ach.id]=Date.now();});
  saveAchs();
  let delay=0;
  queue.forEach(ach=>{setTimeout(()=>showAchievementPopup(ach),delay);delay+=3500;});
}
function showAchievementPopup(ach){
  const pop=document.getElementById('achievement-popup');
  document.getElementById('ach-icon').textContent=ach.icon;
  document.getElementById('ach-title').textContent=ach.title;
  document.getElementById('ach-desc').textContent=ach.desc;
  document.getElementById('ach-xp').textContent='+'+ach.xp+' XP';
  pop.style.display='block';
  setTimeout(()=>{pop.style.display='none';},3200);
  courseState.totalXp=(courseState.totalXp||0)+ach.xp;
  saveCourseState();
}
loadAchs();

// ”” Hub navigation ””””””””””””””””””””””””””
function showGameHub() {
  document.getElementById('game-hub').style.display = 'block';
  document.querySelectorAll('.game-arena').forEach(a => a.style.display = 'none');
  stopAllGames();
}
function backToHub() {
  stopAllGames();
  showGameHub();
}
function launchGame(id) {
  if (!checkProAccess(id)) return;
  document.getElementById('game-hub').style.display = 'none';
  document.querySelectorAll('.game-arena').forEach(a => a.style.display = 'none');
  const arena = document.getElementById('arena-' + id);
  if (arena) { arena.style.display = 'flex'; window.scrollTo({top:0,behavior:'instant'}); }
  setTimeout(() => resizeArenaCanvas(id), 30);
  if (id === 'wordrain')  { resizeRainCanvas(); }
  if (id === 'bomb')      { initBombCanvas(); }
  if (id === 'warrior')   { initWarriorCanvas(); }
  if (id === 'tsunami')   { initTsunamiCanvas(); }
  if (id === 'spell')     { initSpellCanvas(); }
  if (id === 'hack')      { initHackCanvas(); }
  if (id === 'asteroid')  { initAsteroidCanvas(); }
  if (id === 'virus')     { initVirusCanvas(); }
  if (id === 'rift')      { initRiftCanvas(); }
  if (id === 'neon')      { initNeonCanvas(); }
  if (id === 'zombie')    { initZombieCanvas(); }
  if (id === 'street')    { initStreetCanvas(); }
  if (id === 'space')     { initSpaceCanvas(); }
  if (id === 'sub')       { initSubCanvas(); }
}

function resizeArenaCanvas(gameId) {
  const canvasMap = {
    wordrain:'word-rain-canvas', bomb:'bomb-canvas', warrior:'warrior-canvas',
    tsunami:'tsunami-canvas', spell:'spell-canvas', hack:'hack-canvas',
    asteroid:'asteroid-canvas', virus:'virus-canvas', rift:'rift-canvas', neon:'neon-canvas',
    zombie:'zombie-canvas', street:'street-canvas', space:'space-canvas', sub:'sub-canvas'
  };
  const cId = canvasMap[gameId];
  if (!cId) return;
  const c = document.getElementById(cId);
  if (!c) return;
  // Set canvas pixel dimensions to match CSS layout dimensions
  const rect = c.getBoundingClientRect();
  c.width = Math.round(rect.width);
  c.height = Math.round(rect.height);
}

function toggleArenaFS(arenaId) {
  const arena = document.getElementById(arenaId);
  if (!arena) return;
  const isFs = arena.classList.contains('arena-fs');
  if (!isFs) {
    arena.classList.add('arena-fs');
    arena.querySelector('.arena-fullscreen').textContent = '✕';
    arena.querySelector('.arena-fullscreen').title = 'Exit Fullscreen (ESC)';
    setTimeout(() => {
      const id = arenaId.replace('arena-','');
      resizeArenaCanvas(id);
      // Focus the game input so typing works immediately
      const inp = arena.querySelector('input');
      if (inp && !inp.disabled) inp.focus();
    }, 80);
  } else {
    arena.classList.remove('arena-fs');
    arena.querySelector('.arena-fullscreen').textContent = '🗖';
    arena.querySelector('.arena-fullscreen').title = 'Fullscreen (F)';
    setTimeout(() => {
      const id = arenaId.replace('arena-','');
      resizeArenaCanvas(id);
    }, 80);
  }
}

// Global keydown 0 handle ESC to exit fullscreen, F to enter, block nothing else
document.addEventListener('keydown', e => {
  const fsArena = document.querySelector('.game-arena.arena-fs');

  // Let course typing handler handle all keys except ESC
  if (lessonTypingActive && e.key !== 'Escape') return;

  if (e.key === 'Escape') {
    if (fsArena) {
      e.preventDefault(); e.stopImmediatePropagation();
      toggleArenaFS(fsArena.id); return;
    }
    const lessonWrap = document.getElementById('lesson-wrap');
    if (lessonWrap?.classList.contains('lesson-fs')) {
      e.preventDefault(); toggleLessonFS(); return;
    }
    if (!lessonTypingActive) showPage(lastPage || 'home');
    return;
  }

  if ((e.key === 'f' || e.key === 'F') && !e.ctrlKey && !e.metaKey) {
    const activeArena = document.querySelector('.game-arena[style*="flex"]');
    if (activeArena && document.activeElement?.tagName !== 'INPUT') {
      e.preventDefault();
      toggleArenaFS(activeArena.id);
    }
  }
}, true);
function stopAllGames() {
  rainState.active = false;
  clearInterval(rainState.spawnInterval);
  cancelAnimationFrame(rainState.animFrame);
  bombState.active = false;
  cancelAnimationFrame(bombState.animFrame);
  warriorState.active = false;
  cancelAnimationFrame(warriorState.animFrame);
  tsunamiState.active = false;
  cancelAnimationFrame(tsunamiState.animFrame);
  spellState.active = false;
  cancelAnimationFrame(spellState.animFrame);
  hackState.active = false;
  cancelAnimationFrame(hackState.animFrame);
  asteroidState.active = false;
  cancelAnimationFrame(asteroidState.animFrame);
  virusState.active = false;
  cancelAnimationFrame(virusState.animFrame);
  riftState.active = false;
  cancelAnimationFrame(riftState.animFrame);
  clearInterval(riftState.interval);
  neonState.active = false;
  cancelAnimationFrame(neonState.animFrame);
  if (typeof zombieState !== 'undefined') { zombieState.active=false; cancelAnimationFrame(zombieState.animFrame); }
  if (typeof streetState !== 'undefined') { streetState.active=false; cancelAnimationFrame(streetState.animFrame); }
  if (typeof spaceState  !== 'undefined') { spaceState.active=false;  cancelAnimationFrame(spaceState.animFrame); }
  if (typeof subState    !== 'undefined') { subState.active=false;    cancelAnimationFrame(subState.animFrame); }
}

// ”” Z ZOMBIE ESCAPE ””””””””””””””””””””””””””
let zombieState = {active:false,animFrame:null,playerX:0,zombies:[],dist:0,hp:3,wave:1,speed:2,frameCount:0,wordQueue:[],currentWord:'',typedSoFar:''};
const zombieWords = ['run','fast','flee','dash','bolt','sprint','escape','hurry','move','rush','go','left','right','quick','dodge','hide','climb','jump','vault','duck'];

function initZombieCanvas() {
  const c=document.getElementById('zombie-canvas'); c.width=c.offsetWidth||800; c.height=c.offsetHeight||460;
  const ctx=c.getContext('2d'); ctx.fillStyle='#0a0000'; ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle='rgba(255,0,0,0.4)'; ctx.font='bold 18px monospace'; ctx.textAlign='center';
  ctx.fillText('▶ START to begin your escape!',c.width/2,c.height/2);
}
function startZombieGame() {
  checkAuthAndAction(() => {
    _internal_startZombieGame();
  });
}
function _internal_startZombieGame() {
  zombieState={active:true,animFrame:null,playerX:0,zombies:[{x:-200,y:0,speed:1.2}],dist:0,hp:3,wave:1,speed:2,frameCount:0,currentWord:'',typedSoFar:''};
  document.getElementById('zombie-dist').textContent='0m';
  document.getElementById('zombie-hp').textContent='<3<3<3';
  document.getElementById('zombie-wave-disp').textContent='WAVE 1';
  pickZombieWord();
  const inp=document.getElementById('zombie-input'); inp.disabled=false; inp.value=''; inp.focus();
  animateZombie();
}
function pickZombieWord() {
  zombieState.currentWord=zombieWords[Math.floor(Math.random()*zombieWords.length)];
  zombieState.typedSoFar='';
}
function animateZombie() {
  if(!zombieState.active)return;
  const c=document.getElementById('zombie-canvas'); c.width=c.offsetWidth;
  const ctx=c.getContext('2d'); const W=c.width,H=c.height;
  zombieState.frameCount++;

  // Background 0 city street pseudo-3D
  const sky=ctx.createLinearGradient(0,0,0,H*0.55);
  sky.addColorStop(0,'#0a0000'); sky.addColorStop(1,'#1a0500');
  ctx.fillStyle=sky; ctx.fillRect(0,0,W,H*0.55);
  // Ground
  const gnd=ctx.createLinearGradient(0,H*0.55,0,H);
  gnd.addColorStop(0,'#1a0800'); gnd.addColorStop(1,'#0d0400');
  ctx.fillStyle=gnd; ctx.fillRect(0,H*0.55,W,H*0.45);
  // Road lines
  const scroll=(zombieState.frameCount*zombieState.speed)%80;
  ctx.strokeStyle='rgba(255,100,0,0.15)'; ctx.lineWidth=2;
  for(let x=-scroll;x<W;x+=80){ctx.beginPath();ctx.moveTo(x,H*0.56);ctx.lineTo(x+40,H*0.75);ctx.stroke();}

  // Buildings (scrolling)
  const bScroll=(zombieState.frameCount*zombieState.speed*0.3)%(W/2);
  [0,0.25,0.5,0.75].forEach((pos,i)=>{
    const bx=((pos*W)-bScroll+W)%W;
    const bh=H*(0.2+i*0.08);
    ctx.fillStyle=`rgba(${20+i*5},${5+i*3},${5+i*3},0.9)`;
    ctx.fillRect(bx,H*0.55-bh,W*0.18,bh);
    // Windows
    ctx.fillStyle='rgba(255,150,50,0.15)';
    for(let wy=5;wy<bh-10;wy+=14) for(let wx=5;wx<W*0.18-10;wx+=12)
      if(Math.random()>0.6) ctx.fillRect(bx+wx,H*0.55-bh+wy,8,8);
  });

  // Player (running figure)
  const px=W*0.3, py=H*0.62;
  const legPhase=Math.sin(zombieState.frameCount*0.25)*0.4;
  ctx.save(); ctx.shadowColor='#00ff88'; ctx.shadowBlur=8;
  ctx.strokeStyle='#88ffaa'; ctx.lineWidth=2.5;
  // body
  ctx.beginPath(); ctx.arc(px,py-38,10,0,Math.PI*2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(px,py-28); ctx.lineTo(px,py-10); ctx.stroke();
  // legs
  ctx.beginPath(); ctx.moveTo(px,py-10); ctx.lineTo(px-12+legPhase*15,py+10); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(px,py-10); ctx.lineTo(px+12-legPhase*15,py+10); ctx.stroke();
  // arms
  ctx.beginPath(); ctx.moveTo(px,py-22); ctx.lineTo(px+15,py-14+legPhase*10); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(px,py-22); ctx.lineTo(px-15,py-14-legPhase*10); ctx.stroke();
  ctx.restore();

  // Zombies
  zombieState.zombies.forEach((z,i)=>{
    z.x+=z.speed*(0.5+zombieState.speed*0.1);
    const zx=px-100+z.x*0.8; const zy=H*0.62+z.y;
    const zombiePulse=Math.abs(Math.sin(zombieState.frameCount*0.15))*0.3;
    ctx.save(); ctx.shadowColor='#00ff00'; ctx.shadowBlur=10;
    // Draw zombie as a simple shape
    ctx.fillStyle='#33ff33';
    ctx.beginPath(); ctx.arc(zx, zy-15, 12, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle='#228822';
    ctx.fillRect(zx-8, zy-5, 16, 20);
    // Eyes
    ctx.fillStyle='#ff0000';
    ctx.beginPath(); ctx.arc(zx-4, zy-18, 3, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(zx+4, zy-18, 3, 0, Math.PI*2); ctx.fill();
    ctx.restore();
    // Too close?
    if(zx>px-30){
      zombieState.hp--; zombieState.zombies.splice(i,1);
      document.getElementById('zombie-hp').textContent='<3'.repeat(Math.max(0,zombieState.hp));
      if(zombieState.hp<=0){endZombieGame();return;}
    }
  });

  // Spawn new zombies
  if(zombieState.frameCount%Math.max(90-zombieState.wave*8,30)===0){
    zombieState.zombies.push({x:-200-Math.random()*100,y:(Math.random()-0.5)*30,speed:0.8+zombieState.wave*0.15});
  }

  // Distance
  zombieState.dist+=zombieState.speed*0.08;
  document.getElementById('zombie-dist').textContent=Math.floor(zombieState.dist)+'m';

  // Current word display
  const word=zombieState.currentWord, typed=zombieState.typedSoFar;
  const wx=W*0.5, wy=H*0.2;
  ctx.fillStyle='rgba(0,0,0,0.5)'; ctx.beginPath();
  if(ctx.roundRect)ctx.roundRect(wx-80,wy-28,160,40,8); else ctx.rect(wx-80,wy-28,160,40);
  ctx.fill();
  ctx.font='bold 18px JetBrains Mono,monospace'; ctx.textAlign='left';
  ctx.fillStyle='#00ff88'; ctx.fillText(typed,wx-70,wy);
  ctx.fillStyle='rgba(255,255,255,0.6)'; ctx.fillText(word.slice(typed.length),wx-70+typed.length*11,wy);

  // Wave
  if(zombieState.frameCount%600===0){zombieState.wave++;document.getElementById('zombie-wave-disp').textContent='WAVE '+zombieState.wave;showToast('Z Wave '+zombieState.wave+'!');}

  zombieState.animFrame=requestAnimationFrame(animateZombie);
}
function endZombieGame(){
  zombieState.active=false; document.getElementById('zombie-input').disabled=true;
  const c=document.getElementById('zombie-canvas'),ctx=c.getContext('2d');
  ctx.fillStyle='rgba(0,0,0,0.75)'; ctx.fillRect(0,0,c.width,c.height);
  ctx.font='bold 44px monospace'; ctx.fillStyle='#ff2200'; ctx.textAlign='center';
  ctx.shadowColor='#ff2200'; ctx.shadowBlur=30;
  ctx.fillText('Z CAUGHT!',c.width/2,c.height/2-20);
  ctx.font='bold 22px monospace'; ctx.fillStyle='#ff8800'; ctx.shadowColor='#ff8800';
  ctx.fillText(Math.floor(zombieState.dist)+'m escaped',c.width/2,c.height/2+25);
}
document.getElementById('zombie-input').addEventListener('input',function(){
  if(!zombieState.active)return;
  const val=this.value.toLowerCase();
  const word=zombieState.currentWord;
  if(word.startsWith(val)){zombieState.typedSoFar=val;}
  if(val===word){
    zombieState.speed=Math.min(zombieState.speed+1.5,12);
    pickZombieWord(); this.value='';
  }
});

// ”” 🚗 STREET RACING ””””””””””””””””””””””””””
let streetState={active:false,animFrame:null,speed:0,maxSpeed:0,lap:0,dist:0,nitro:0,nitroActive:false,streak:0,frameCount:0,currentWord:'',typedSoFar:'',particles:[]};
const streetWords=['speed','fast','turbo','boost','power','drive','race','burn','push','floor','shift','gear','nitro','drift','apex','brake','steer','launch','rev','throttle'];

function initStreetCanvas(){
  const c=document.getElementById('street-canvas'); c.width=c.offsetWidth||800; c.height=c.offsetHeight||460;
  const ctx=c.getContext('2d'); ctx.fillStyle='#050010'; ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle='rgba(0,150,255,0.4)'; ctx.font='bold 18px monospace'; ctx.textAlign='center';
  ctx.fillText('▶ START the race!',c.width/2,c.height/2);
}
function startStreetGame() {
  checkAuthAndAction(() => {
    _internal_startStreetGame();
  });
}
function _internal_startStreetGame() {
  streetState={active:true,animFrame:null,speed:0,maxSpeed:0,lap:1,dist:0,nitro:0,nitroActive:false,streak:0,frameCount:0,currentWord:'',typedSoFar:'',particles:[]};
  document.getElementById('street-speed').textContent='0';
  document.getElementById('street-lap').textContent='LAP 1/3';
  document.getElementById('street-nitro-bar').textContent='NITRO: 0‘0‘0‘0‘0‘';
  pickStreetWord();
  const inp=document.getElementById('street-input'); inp.disabled=false; inp.value=''; inp.focus();
  animateStreet();
}
function pickStreetWord(){streetState.currentWord=streetWords[Math.floor(Math.random()*streetWords.length)];streetState.typedSoFar='';}
function animateStreet(){
  if(!streetState.active)return;
  const c=document.getElementById('street-canvas'); c.width=c.offsetWidth;
  const ctx=c.getContext('2d'); const W=c.width,H=c.height;
  streetState.frameCount++;

  // Slow down naturally
  streetState.speed=Math.max(0,streetState.speed-(streetState.nitroActive?0.3:0.8));
  const kmh=Math.round(streetState.speed*12);
  streetState.maxSpeed=Math.max(streetState.maxSpeed,kmh);
  document.getElementById('street-speed').textContent=kmh;

  // Sky
  const sky=ctx.createLinearGradient(0,0,0,H*0.45);
  sky.addColorStop(0,'#020008'); sky.addColorStop(1,'#0a0020');
  ctx.fillStyle=sky; ctx.fillRect(0,0,W,H*0.45);

  // Road perspective
  const scroll=(streetState.frameCount*streetState.speed*1.5)%100;
  const road=ctx.createLinearGradient(0,H*0.45,0,H);
  road.addColorStop(0,'#111'); road.addColorStop(1,'#222');
  ctx.fillStyle=road; ctx.fillRect(0,H*0.45,W,H*0.55);

  // Road lines perspective
  for(let i=0;i<8;i++){
    const t=(i/8+scroll/100)%1;
    const y=H*0.45+t*H*0.55;
    const w=W*(0.1+t*0.8);
    ctx.fillStyle=`rgba(255,255,0,${0.1+t*0.3})`;
    ctx.fillRect(W/2-w/2,y,w,3+t*4);
  }

  // Side barriers with glow
  const barColors=['#ff0055','#0055ff'];
  [0.05,0.95].forEach((x,i)=>{
    ctx.strokeStyle=barColors[i]; ctx.lineWidth=3;
    ctx.shadowColor=barColors[i]; ctx.shadowBlur=10;
    ctx.beginPath(); ctx.moveTo(W*x,H*0.45); ctx.lineTo(W*(i===0?0:1),H); ctx.stroke();
    ctx.shadowBlur=0;
  });

  // Player car (pseudo-3D)
  const carX=W/2, carY=H*0.75;
  ctx.save();
  if(streetState.nitroActive){ctx.shadowColor='#00aaff';ctx.shadowBlur=25;}
  ctx.fillStyle='#cc2200'; ctx.fillRect(carX-22,carY-20,44,40);
  ctx.fillStyle='#ff4400'; ctx.fillRect(carX-18,carY-16,36,28);
  ctx.fillStyle='rgba(0,200,255,0.7)'; ctx.fillRect(carX-14,carY-14,28,12); // windshield
  ctx.fillStyle='#333';
  [[carX-22,carY-22,12,8],[carX+10,carY-22,12,8],[carX-22,carY+16,12,8],[carX+10,carY+16,12,8]].forEach(([x,y,w,h])=>{
    ctx.fillRect(x,y,w,h);
  });
  if(streetState.nitroActive){
    // Nitro flames
    for(let i=0;i<6;i++){
      const fx=carX-16+i*6+Math.random()*4, fy=carY+22+Math.random()*15;
      ctx.fillStyle=`rgba(0,${150+Math.random()*100},255,${0.6+Math.random()*0.4})`;
      ctx.beginPath(); ctx.arc(fx,fy,3+Math.random()*4,0,Math.PI*2); ctx.fill();
    }
  }
  ctx.restore();

  // Opponent cars
  [[W*0.3,H*0.7,'#004400'],[W*0.7,H*0.68,'#440000']].forEach(([ox,oy,col])=>{
    const scroll2=(streetState.frameCount*0.3)%H;
    const ry=(oy+scroll2)%H;
    if(ry>H*0.5&&ry<H*0.9){
      ctx.fillStyle=col; ctx.fillRect(ox-18,ry-16,36,32);
      ctx.fillStyle='#666'; ctx.fillRect(ox-12,ry-12,24,10);
    }
  });

  // Nitro bar
  const nitroFill='0ˆ'.repeat(Math.floor(streetState.nitro/20))+'0‘'.repeat(5-Math.floor(streetState.nitro/20));
  document.getElementById('street-nitro-bar').textContent=`NITRO: ${nitroFill}`;
  if(streetState.nitroActive&&streetState.nitro>0) streetState.nitro=Math.max(0,streetState.nitro-2);

  // Distance / lap
  streetState.dist+=streetState.speed*0.05;
  if(streetState.dist>500*streetState.lap&&streetState.lap<3){
    streetState.lap++; document.getElementById('street-lap').textContent=`LAP ${streetState.lap}/3`;
    showToast(' LAP '+streetState.lap+'!');
  }
  if(streetState.dist>1500){endStreetGame();return;}

  // Word display
  const word=streetState.currentWord, typed=streetState.typedSoFar;
  ctx.fillStyle='rgba(0,0,0,0.55)'; ctx.beginPath();
  if(ctx.roundRect)ctx.roundRect(W/2-90,H*0.15-24,180,38,8); else ctx.rect(W/2-90,H*0.15-24,180,38);
  ctx.fill();
  ctx.font='bold 17px JetBrains Mono,monospace'; ctx.textAlign='left';
  ctx.fillStyle='#00aaff'; ctx.fillText(typed,W/2-80,H*0.15);
  ctx.fillStyle='rgba(255,255,255,0.6)'; ctx.fillText(word.slice(typed.length),W/2-80+typed.length*10.5,H*0.15);

  // Speedometer arc
  ctx.save();
  ctx.beginPath(); ctx.arc(W-60,H-60,40,-Math.PI*0.8,(-Math.PI*0.8)+(kmh/220)*Math.PI*1.6);
  ctx.strokeStyle=kmh>150?'#ff4400':kmh>80?'#ffaa00':'#00aaff';
  ctx.lineWidth=6; ctx.shadowColor=ctx.strokeStyle; ctx.shadowBlur=8; ctx.stroke();
  ctx.fillStyle='#fff'; ctx.font='bold 13px Orbitron,sans-serif'; ctx.textAlign='center';
  ctx.fillText(kmh,W-60,H-55);
  ctx.fillStyle='rgba(255,255,255,0.4)'; ctx.font='8px sans-serif'; ctx.fillText('km/h',W-60,H-43);
  ctx.restore();

  streetState.animFrame=requestAnimationFrame(animateStreet);
}
function endStreetGame(){
  streetState.active=false; document.getElementById('street-input').disabled=true;
  const c=document.getElementById('street-canvas'),ctx=c.getContext('2d');
  ctx.fillStyle='rgba(0,0,0,0.75)'; ctx.fillRect(0,0,c.width,c.height);
  ctx.font='bold 44px monospace'; ctx.fillStyle='#00aaff'; ctx.textAlign='center';
  ctx.shadowColor='#00aaff'; ctx.shadowBlur=30;
  ctx.fillText(' RACE COMPLETE!',c.width/2,c.height/2-20);
  ctx.font='bold 20px monospace'; ctx.fillStyle='#fff'; ctx.shadowBlur=0;
  ctx.fillText('Top Speed: '+streetState.maxSpeed+' km/h',c.width/2,c.height/2+20);
}
document.getElementById('street-input').addEventListener('input',function(){
  if(!streetState.active)return;
  const val=this.value.toLowerCase();
  const word=streetState.currentWord;
  if(word.startsWith(val))streetState.typedSoFar=val;
  if(val===word){
    streetState.speed=Math.min(streetState.speed+4,18);
    streetState.streak++;
    if(streetState.streak>=3&&streetState.nitro<100){
      streetState.nitro=Math.min(100,streetState.nitro+25);
      if(streetState.nitro>=100){streetState.nitroActive=true;showToast('🔥 NITRO BOOST!');}
    }
    if(streetState.nitroActive)streetState.speed=Math.min(streetState.speed+3,22);
    pickStreetWord(); this.value='';
  }
});

// ”” ^ SPACE MISSION ””””””””””””””””””””””””””
let spaceState={active:false,animFrame:null,score:0,shield:100,sector:1,frameCount:0,stars:[],asteroids:[],enemies:[],particles:[],currentCmd:'',cmdActive:false};
const spaceCmds=['BOOST','SHIELD','LASER','DODGE','SCAN','WARP','FIRE','EVADE'];
function initSpaceCanvas(){
  const c=document.getElementById('space-canvas'); c.width=c.offsetWidth||800; c.height=c.offsetHeight||460;
  const ctx=c.getContext('2d'); ctx.fillStyle='#000008'; ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle='rgba(150,100,255,0.5)'; ctx.font='bold 18px monospace'; ctx.textAlign='center';
  ctx.fillText('▶ START mission!',c.width/2,c.height/2);
}
function startSpaceGame() {
  checkAuthAndAction(() => {
    _internal_startSpaceGame();
  });
}
function _internal_startSpaceGame() {
  const c=document.getElementById('space-canvas');
  const stars=Array.from({length:80},()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2,speed:0.5+Math.random()*2}));
  spaceState={active:true,animFrame:null,score:0,shield:100,sector:1,frameCount:0,stars,asteroids:[],enemies:[],particles:[],currentCmd:'',cmdActive:false};
  document.getElementById('space-score').textContent='0';
  document.getElementById('space-shield').textContent='[ 100%';
  document.getElementById('space-wave-disp').textContent='SECTOR 1';
  const inp=document.getElementById('space-input'); inp.disabled=false; inp.value=''; inp.focus();
  spawnSpaceCmd();
  animateSpace();
}
function spawnSpaceCmd(){spaceState.currentCmd=spaceCmds[Math.floor(Math.random()*spaceCmds.length)];}
function animateSpace(){
  if(!spaceState.active)return;
  const c=document.getElementById('space-canvas'); c.width=c.offsetWidth;
  const ctx=c.getContext('2d'); const W=c.width,H=c.height;
  spaceState.frameCount++;
  ctx.fillStyle='#000008'; ctx.fillRect(0,0,W,H);

  // Stars
  spaceState.stars.forEach(s=>{
    s.x-=s.speed; if(s.x<0)s.x=W;
    ctx.fillStyle=`rgba(255,255,255,${0.3+s.r*0.3})`; ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill();
  });

  // Spawn asteroids
  if(spaceState.frameCount%Math.max(80-spaceState.sector*8,25)===0){
    spaceState.asteroids.push({x:W+30,y:30+Math.random()*(H-60),r:15+Math.random()*20,vx:-(2+Math.random()*2),vy:(Math.random()-0.5)*2,rot:0,rotV:0.03-Math.random()*0.06});
  }
  // Spawn enemies
  if(spaceState.frameCount%Math.max(200-spaceState.sector*15,80)===0){
    spaceState.enemies.push({x:W+20,y:50+Math.random()*(H-100),hp:2,speed:1.5+spaceState.sector*0.3});
  }

  // Player ship
  const px=W*0.18, py=H/2;
  ctx.save(); ctx.shadowColor='#8866ff'; ctx.shadowBlur=15;
  ctx.fillStyle='#6644cc'; ctx.beginPath();
  ctx.moveTo(px+30,py); ctx.lineTo(px-20,py-18); ctx.lineTo(px-12,py); ctx.lineTo(px-20,py+18); ctx.closePath(); ctx.fill();
  ctx.fillStyle='#aabbff'; ctx.beginPath();
  ctx.moveTo(px+28,py); ctx.lineTo(px+2,py-8); ctx.lineTo(px+2,py+8); ctx.closePath(); ctx.fill();
  // Engine glow
  const pulse=(Math.sin(spaceState.frameCount*0.3)+1)/2;
  ctx.fillStyle=`rgba(0,${100+pulse*100},255,${0.6+pulse*0.4})`;
  ctx.beginPath(); ctx.ellipse(px-20,py,4,8+pulse*4,0,0,Math.PI*2); ctx.fill();
  ctx.restore();

  // Asteroids
  spaceState.asteroids.forEach((a,i)=>{
    a.x+=a.vx; a.y+=a.vy; a.rot+=a.rotV;
    if(a.x<-50){spaceState.asteroids.splice(i,1);return;}
    ctx.save(); ctx.translate(a.x,a.y); ctx.rotate(a.rot);
    ctx.fillStyle='#554433'; ctx.strokeStyle='#887755'; ctx.lineWidth=1.5;
    ctx.beginPath();
    for(let j=0;j<7;j++){const ang=(j/7)*Math.PI*2,r=a.r*(0.7+Math.random()*0.3);ctx.lineTo(Math.cos(ang)*r,Math.sin(ang)*r);}
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
    // Hit player?
    if(Math.hypot(a.x-px,a.y-py)<a.r+20){
      spaceState.asteroids.splice(i,1); spaceState.shield-=15;
      document.getElementById('space-shield').textContent=`[ ${Math.max(0,spaceState.shield)}%`;
      if(spaceState.shield<=0){endSpaceGame();return;}
    }
  });

  // Enemies
  spaceState.enemies.forEach((e,i)=>{
    e.x-=e.speed;
    if(e.x<-30){spaceState.enemies.splice(i,1);return;}
    ctx.save(); ctx.shadowColor='#ff4400'; ctx.shadowBlur=10;
    ctx.fillStyle='#cc2200'; ctx.beginPath();
    ctx.moveTo(e.x+20,e.y); ctx.lineTo(e.x-10,e.y-14); ctx.lineTo(e.x-10,e.y+14); ctx.closePath(); ctx.fill();
    ctx.restore();
    if(Math.hypot(e.x-px,e.y-py)<28){spaceState.enemies.splice(i,1);spaceState.shield-=20;document.getElementById('space-shield').textContent=`[ ${Math.max(0,spaceState.shield)}%`;if(spaceState.shield<=0){endSpaceGame();return;}}
  });

  // Sector progress
  spaceState.score+=0.05;
  document.getElementById('space-score').textContent=Math.floor(spaceState.score);
  if(Math.floor(spaceState.score)%200===0&&Math.floor(spaceState.score)>0&&spaceState.frameCount%60===0){
    spaceState.sector++; document.getElementById('space-wave-disp').textContent='SECTOR '+spaceState.sector; showToast('^ Sector '+spaceState.sector+'!');
  }

  // Command display
  ctx.fillStyle='rgba(0,0,0,0.55)'; ctx.beginPath();
  if(ctx.roundRect)ctx.roundRect(W/2-80,24,160,40,8); else ctx.rect(W/2-80,24,160,40);
  ctx.fill();
  ctx.font='bold 20px Orbitron,monospace'; ctx.textAlign='center';
  ctx.fillStyle='#aa88ff'; ctx.shadowColor='#aa88ff'; ctx.shadowBlur=8;
  ctx.fillText(spaceState.currentCmd,W/2,52); ctx.shadowBlur=0;
  ctx.fillStyle='rgba(255,255,255,0.4)'; ctx.font='10px sans-serif';
  ctx.fillText('TYPE THIS COMMAND',W/2,70);

  // Shield bar
  const shW=120,shX=10,shY=10;
  ctx.fillStyle='rgba(255,255,255,0.1)'; ctx.fillRect(shX,shY,shW,12);
  const shPct=Math.max(0,spaceState.shield)/100;
  ctx.fillStyle=shPct>0.5?'#00ff88':shPct>0.25?'#ffaa00':'#ff2200';
  ctx.fillRect(shX,shY,shW*shPct,12);
  ctx.fillStyle='rgba(255,255,255,0.6)'; ctx.font='10px sans-serif'; ctx.textAlign='left';
  ctx.fillText('SHIELD',shX,shY+24);

  spaceState.animFrame=requestAnimationFrame(animateSpace);
}
function endSpaceGame(){
  spaceState.active=false; document.getElementById('space-input').disabled=true;
  const c=document.getElementById('space-canvas'),ctx=c.getContext('2d');
  ctx.fillStyle='rgba(0,0,0,0.8)'; ctx.fillRect(0,0,c.width,c.height);
  ctx.font='bold 40px monospace'; ctx.fillStyle='#aa88ff'; ctx.textAlign='center';
  ctx.shadowColor='#aa88ff'; ctx.shadowBlur=30;
  ctx.fillText('! MISSION OVER',c.width/2,c.height/2-20);
  ctx.font='bold 20px monospace'; ctx.fillStyle='#fff'; ctx.shadowBlur=0;
  ctx.fillText('Score: '+Math.floor(spaceState.score),c.width/2,c.height/2+20);
}
document.getElementById('space-input').addEventListener('input',function(){
  if(!spaceState.active)return;
  const val=this.value.toUpperCase().trim();
  if(val===spaceState.currentCmd){
    spaceState.score+=50; document.getElementById('space-score').textContent=Math.floor(spaceState.score);
    if(spaceState.currentCmd==='SHIELD'){spaceState.shield=Math.min(100,spaceState.shield+20);document.getElementById('space-shield').textContent=`[ ${spaceState.shield}%`;}
    if(spaceState.currentCmd==='LASER'){spaceState.asteroids=[]; showToast('⚡ LASER cleared asteroids!');}
    if(spaceState.currentCmd==='BOOST'){spaceState.stars.forEach(s=>s.speed+=1); setTimeout(()=>spaceState.stars.forEach(s=>s.speed=Math.max(0.5,s.speed-1)),2000);}
    spawnSpaceCmd(); this.value='';
  }
});

// ”” ~ DEEP SEA SUB ””””””””””””””””””””””””””
let subState={active:false,animFrame:null,depth:0,hull:100,pressure:0,frameCount:0,creatures:[],bubbles:[],currentCmd:'',particles:[]};
const subCmds=['DIVE','SCAN','REPAIR','EVADE','SURFACE','BOOST','LIGHT','SONAR'];
function initSubCanvas(){
  const c=document.getElementById('sub-canvas'); c.width=c.offsetWidth||800; c.height=c.offsetHeight||460;
  const ctx=c.getContext('2d'); ctx.fillStyle='#000a14'; ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle='rgba(0,150,255,0.4)'; ctx.font='bold 18px monospace'; ctx.textAlign='center';
  ctx.fillText('▶ START dive!',c.width/2,c.height/2);
}
function startSubGame() {
  checkAuthAndAction(() => {
    _internal_startSubGame();
  });
}
function _internal_startSubGame() {
  const c=document.getElementById('sub-canvas');
  const bubbles=Array.from({length:20},()=>({x:Math.random()*c.width,y:c.height+Math.random()*200,r:2+Math.random()*5,speed:0.5+Math.random()*1.5}));
  subState={active:true,animFrame:null,depth:0,hull:100,pressure:0,frameCount:0,creatures:[],bubbles,currentCmd:'',particles:[]};
  document.getElementById('sub-depth').textContent='0m';
  document.getElementById('sub-hull').textContent=' HULL: 100%';
  document.getElementById('sub-pressure').textContent='PRESSURE: LOW';
  spawnSubCmd();
  const inp=document.getElementById('sub-input'); inp.disabled=false; inp.value=''; inp.focus();
  animateSub();
}
function spawnSubCmd(){subState.currentCmd=subCmds[Math.floor(Math.random()*subCmds.length)];}
function animateSub(){
  if(!subState.active)return;
  const c=document.getElementById('sub-canvas'); c.width=c.offsetWidth;
  const ctx=c.getContext('2d'); const W=c.width,H=c.height;
  subState.frameCount++;

  const depthRatio=Math.min(subState.depth/2000,1);
  const r=Math.round(0+depthRatio*2), g=Math.round(20-depthRatio*18), b=Math.round(60-depthRatio*55);
  ctx.fillStyle=`rgb(${r},${g},${b})`; ctx.fillRect(0,0,W,H);

  // Ambient particles
  if(subState.frameCount%4===0) subState.particles.push({x:Math.random()*W,y:Math.random()*H,life:60,r:Math.random()*3,vx:(Math.random()-0.5)*0.3,vy:-0.2-Math.random()*0.5});
  subState.particles=subState.particles.filter(p=>p.life>0);
  subState.particles.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.life--;ctx.fillStyle=`rgba(0,180,255,${p.life/60*0.3})`;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();});

  // Bubbles
  subState.bubbles.forEach(b=>{b.y-=b.speed;if(b.y<0)b.y=H+10;ctx.strokeStyle=`rgba(0,200,255,0.3)`;ctx.lineWidth=1;ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,Math.PI*2);ctx.stroke();});

  // Submarine
  const sx=W*0.25, sy=H/2;
  ctx.save(); ctx.shadowColor='#00aaff'; ctx.shadowBlur=20;
  ctx.fillStyle='#334455'; ctx.beginPath();
  ctx.ellipse(sx,sy,55,22,0,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='#445566'; ctx.fillRect(sx-10,sy-36,18,18);
  ctx.fillStyle='rgba(0,200,255,0.5)'; ctx.fillRect(sx-8,sy-34,14,12);
  // Propeller
  const propSpin=subState.frameCount*0.25;
  ctx.strokeStyle='#667788'; ctx.lineWidth=3;
  [[0.7,0],[0,0.7],[-0.7,0],[0,-0.7]].forEach(([dx,dy])=>{
    const angle=Math.atan2(dy,dx)+propSpin;
    ctx.beginPath(); ctx.moveTo(sx-55,sy); ctx.lineTo(sx-55+Math.cos(angle)*14,sy+Math.sin(angle)*14); ctx.stroke();
  });
  ctx.restore();

  // Sea creatures
  if(subState.frameCount%Math.max(180-subState.depth/100,60)===0){
    const types=['ˆ','','‘','3','ž'];
    subState.creatures.push({x:Math.random()>0.5?-50:W+50,y:50+Math.random()*(H-100),vx:Math.random()>0.5?1.5:-1.5,type:types[Math.floor(Math.random()*types.length)]});
  }
  subState.creatures.forEach((cr,i)=>{
    cr.x+=cr.vx; if(cr.x<-80||cr.x>W+80){subState.creatures.splice(i,1);return;}
    ctx.font='bold 28px sans-serif'; ctx.textAlign='center';
    ctx.shadowColor='rgba(0,150,255,0.5)'; ctx.shadowBlur=8;
    ctx.fillText(cr.type,cr.x,cr.y); ctx.shadowBlur=0;
    if(Math.hypot(cr.x-sx,cr.y-sy)<50){subState.hull-=8;subState.creatures.splice(i,1);document.getElementById('sub-hull').textContent=` HULL: ${Math.max(0,subState.hull)}%`;if(subState.hull<=0){endSubGame();return;}}
  });

  // Depth & pressure
  subState.depth+=0.5;
  subState.pressure=Math.floor(subState.depth/200);
  if(subState.frameCount%120===0&&subState.depth>200){subState.hull=Math.max(0,subState.hull-2);document.getElementById('sub-hull').textContent=` HULL: ${subState.hull}%`;}
  if(subState.hull<=0){endSubGame();return;}
  document.getElementById('sub-depth').textContent=Math.floor(subState.depth)+'m';
  const pLevel=subState.depth<300?'LOW':subState.depth<800?'MEDIUM':'CRITICAL';
  document.getElementById('sub-pressure').textContent=`PRESSURE: ${pLevel}`;

  // Command display
  ctx.fillStyle='rgba(0,0,0,0.55)'; ctx.beginPath();
  if(ctx.roundRect)ctx.roundRect(W/2-80,24,160,40,8); else ctx.rect(W/2-80,24,160,40);
  ctx.fill();
  ctx.font='bold 20px Orbitron,monospace'; ctx.textAlign='center';
  ctx.fillStyle='#00aaff'; ctx.shadowColor='#00aaff'; ctx.shadowBlur=8;
  ctx.fillText(subState.currentCmd,W/2,52); ctx.shadowBlur=0;
  ctx.fillStyle='rgba(255,255,255,0.4)'; ctx.font='10px sans-serif'; ctx.fillText('TYPE THIS COMMAND',W/2,70);

  // Depth indicator
  ctx.fillStyle='rgba(0,100,200,0.3)'; ctx.fillRect(W-20,0,20,H);
  ctx.fillStyle='#00aaff'; ctx.fillRect(W-20,H*(1-depthRatio),20,H*depthRatio);
  ctx.fillStyle='rgba(255,255,255,0.5)'; ctx.font='9px sans-serif'; ctx.textAlign='center';
  ctx.fillText(Math.floor(subState.depth)+'m',W-10,H-5);

  subState.animFrame=requestAnimationFrame(animateSub);
}
function endSubGame(){
  subState.active=false; document.getElementById('sub-input').disabled=true;
  const c=document.getElementById('sub-canvas'),ctx=c.getContext('2d');
  ctx.fillStyle='rgba(0,0,0,0.8)'; ctx.fillRect(0,0,c.width,c.height);
  ctx.font='bold 40px monospace'; ctx.fillStyle='#00aaff'; ctx.textAlign='center';
  ctx.shadowColor='#00aaff'; ctx.shadowBlur=30;
  ctx.fillText('~ HULL BREACH!',c.width/2,c.height/2-20);
  ctx.font='bold 20px monospace'; ctx.fillStyle='#fff'; ctx.shadowBlur=0;
  ctx.fillText('Depth reached: '+Math.floor(subState.depth)+'m',c.width/2,c.height/2+20);
}
document.getElementById('sub-input').addEventListener('input',function(){
  if(!subState.active)return;
  const val=this.value.toUpperCase().trim();
  if(val===subState.currentCmd){
    if(subState.currentCmd==='REPAIR'){subState.hull=Math.min(100,subState.hull+25);document.getElementById('sub-hull').textContent=` HULL: ${subState.hull}%`;}
    if(subState.currentCmd==='DIVE'){subState.depth+=50;document.getElementById('sub-depth').textContent=Math.floor(subState.depth)+'m';}
    if(subState.currentCmd==='SURFACE'){subState.depth=Math.max(0,subState.depth-100);document.getElementById('sub-depth').textContent=Math.floor(subState.depth)+'m';}
    if(subState.currentCmd==='EVADE'){subState.creatures=[];showToast('~ Evaded all creatures!');}
    spawnSubCmd(); this.value='';
    showToast('✓ '+subState.currentCmd);
  }
});
const gameWords = ['fire','storm','blade','nexus','phantom','surge','blaze','cryo','nova','flux',
  'apex','viper','delta','sigma','omega','pulse','echo','cipher','vector','fusion',
  'quasar','nebula','titan','specter','laser','turbo','hyper','nitro','cyber','neon',
  'glitch','pixel','matrix','synth','vapor','chrome','steel','iron','frost','volt'];

// ”” 💣 BOMB DEFUSE ””””””””””””””””””””””””””
let bombState = { active:false, animFrame:null, bombs:[], score:0, level:1, timeLeft:0 };
const bombCodes = ['ALPHA','BRAVO','DELTA','SIGMA','OMEGA','NEXUS','CYBER','BLAZE','NOVA','FLUX',
  'STORM','VIPER','TURBO','HYPER','GHOST','TIGER','EAGLE','LASER','PULSE','PHASE'];

function initBombCanvas() {
  const c = document.getElementById('bomb-canvas');
  c.width = c.offsetWidth; c.height = c.offsetHeight || 460;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#060d14';
  ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle = 'rgba(0,212,255,0.3)';
  ctx.font = 'bold 20px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('Press ▶ START to begin', c.width/2, c.height/2);
}

function startBombGame() {
  checkAuthAndAction(() => {
    _internal_startBombGame();
  });
}
function _internal_startBombGame() {
  bombState = { active:true, animFrame:null, bombs:[], score:0, level:1, timeLeft:0, missCount:0 };
  document.getElementById('bomb-score').textContent = '0';
  document.getElementById('bomb-level-disp').textContent = 'LVL 1';
  const inp = document.getElementById('bomb-input');
  inp.disabled = false; inp.value = ''; inp.focus();
  spawnBomb(); animateBomb();
}

function spawnBomb() {
  if (!bombState.active) return;
  const codes = bombCodes;
  const code = codes[Math.floor(Math.random()*codes.length)];
  const c = document.getElementById('bomb-canvas');
  bombState.bombs.push({
    code, typed: '', x: 80 + Math.random()*(c.width-160), y: 80,
    timeLimit: Math.max(6000 - bombState.level*400, 2500),
    startTime: Date.now(), exploded: false, defused: false
  });
}

function animateBomb() {
  if (!bombState.active) return;
  const c = document.getElementById('bomb-canvas');
  c.width = c.offsetWidth;
  const ctx = c.getContext('2d');
  ctx.clearRect(0,0,c.width,c.height);

  // Bg
  ctx.fillStyle = '#0a0305'; ctx.fillRect(0,0,c.width,c.height);
  // Grid
  for(let x=0;x<c.width;x+=30){ctx.strokeStyle='rgba(255,50,50,0.04)';ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,c.height);ctx.stroke();}
  for(let y=0;y<c.height;y+=30){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(c.width,y);ctx.stroke();}

  const now = Date.now();
  let allDone = true;

  bombState.bombs.forEach((bomb, i) => {
    if (bomb.defused) return;
    const elapsed = now - bomb.startTime;
    const pct = Math.min(elapsed / bomb.timeLimit, 1);
    const timeLeft = Math.max(0, ((bomb.timeLimit - elapsed)/1000)).toFixed(1);

    if (pct >= 1 && !bomb.exploded) {
      bomb.exploded = true; bombState.missCount++;
      if (bombState.missCount >= 3) { endBombGame(); return; }
      bombState.bombs.splice(i, 1);
      setTimeout(spawnBomb, 500);
      return;
    }
    if (!bomb.exploded) allDone = false;

    // Draw bomb body
    ctx.save();
    ctx.shadowColor = pct > 0.7 ? '#ff2200' : '#ff8800'; ctx.shadowBlur = 20;
    ctx.beginPath(); ctx.arc(bomb.x, bomb.y, 36, 0, Math.PI*2);
    ctx.fillStyle = pct > 0.7 ? '#1a0000' : '#0d0800'; ctx.fill();
    ctx.strokeStyle = pct > 0.7 ? '#ff2200' : '#ff8800'; ctx.lineWidth = 2; ctx.stroke();

    // Fuse
    ctx.beginPath(); ctx.moveTo(bomb.x, bomb.y-36);
    const fuseY = bomb.y - 50 - Math.sin(now/200)*4;
    ctx.quadraticCurveTo(bomb.x+10, bomb.y-46, bomb.x+5, fuseY);
    ctx.strokeStyle = '#ffaa00'; ctx.lineWidth = 2; ctx.stroke();

    // Spark on fuse
    if (Math.random() > 0.4) {
      ctx.beginPath(); ctx.arc(bomb.x+5, fuseY, 3, 0, Math.PI*2);
      ctx.fillStyle = '#ffff00'; ctx.fill();
      ctx.shadowColor = '#ffff00'; ctx.shadowBlur = 10; ctx.fill();
    }

    // Timer ring
    ctx.beginPath(); ctx.arc(bomb.x, bomb.y, 42, -Math.PI/2, -Math.PI/2 + (1-pct)*Math.PI*2);
    ctx.strokeStyle = pct > 0.7 ? '#ff2200' : pct > 0.4 ? '#ff8800' : '#00ff88';
    ctx.lineWidth = 4; ctx.stroke();

    // Code text
    ctx.font = 'bold 18px monospace'; ctx.textAlign = 'center';
    ctx.shadowBlur = 0;
    const typed = bomb.typed || '';
    const remaining = bomb.code.slice(typed.length);
    ctx.fillStyle = '#00ff88';
    ctx.fillText(typed, bomb.x - (remaining.length*4.5), bomb.y + 6);
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillText(remaining, bomb.x + (typed.length*4.5), bomb.y + 6);

    // Timer
    ctx.font = 'bold 18px monospace'; ctx.fillStyle = pct>0.7?'#ff4422':'#aaaaaa';
    ctx.fillText(timeLeft+'s', bomb.x, bomb.y + 56);
    ctx.restore();
  });

  bombState.animFrame = requestAnimationFrame(animateBomb);
}

function endBombGame() {
  bombState.active = false;
  document.getElementById('bomb-input').disabled = true;
  showToast('* BOOM! Game Over 0 '+bombState.score+' bombs defused');
  const c = document.getElementById('bomb-canvas'); const ctx = c.getContext('2d');
  ctx.fillStyle = 'rgba(0,0,0,0.7)'; ctx.fillRect(0,0,c.width,c.height);
  ctx.font = 'bold 48px monospace'; ctx.fillStyle = '#ff2200'; ctx.textAlign = 'center';
  ctx.shadowColor = '#ff2200'; ctx.shadowBlur = 30;
  ctx.fillText('* BOOM!', c.width/2, c.height/2-20);
  ctx.font = 'bold 26px monospace'; ctx.fillStyle = '#00d4ff'; ctx.shadowColor='#00d4ff';
  ctx.fillText('Defused: '+bombState.score, c.width/2, c.height/2+30);
}

document.getElementById('bomb-input').addEventListener('input', function() {
  if (!bombState.active || !bombState.bombs.length) return;
  const val = this.value.toUpperCase();
  bombState.bombs.forEach((bomb, i) => {
    if (bomb.defused || bomb.exploded) return;
    if (bomb.code.startsWith(val)) { bomb.typed = val; }
    if (val === bomb.code) {
      bomb.defused = true;
      bombState.score++;
      bombState.level = Math.floor(bombState.score/3)+1;
      document.getElementById('bomb-score').textContent = bombState.score;
      document.getElementById('bomb-level-disp').textContent = 'LVL '+bombState.level;
      bombState.bombs.splice(i,1);
      this.value = '';
      setTimeout(spawnBomb, 300);
    }
  });
  if (!val) bombState.bombs.forEach(b => b.typed = '');
});

// ”” ⚔️ TYPE WARRIOR ””””””””””””””””””””””””””
let warriorState = { active:false, animFrame:null, enemies:[], score:0, hp:3, wave:1, spawnTimer:0 };
function initWarriorCanvas() {
  const c = document.getElementById('warrior-canvas');
  c.width = c.offsetWidth; c.height = c.offsetHeight || 460;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#0a0a05'; ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle = 'rgba(0,212,255,0.3)'; ctx.font = 'bold 20px monospace'; ctx.textAlign='center';
  ctx.fillText('Press ▶ START to begin', c.width/2, c.height/2);
}

function startWarriorGame() {
  checkAuthAndAction(() => {
    _internal_startWarriorGame();
  });
}
function _internal_startWarriorGame() {
  warriorState = { active:true, animFrame:null, enemies:[], score:0, hp:3, wave:1, spawnTimer:0, frameCount:0 };
  document.getElementById('warrior-score').textContent = '0';
  document.getElementById('warrior-hp-display').textContent = '<3<3<3';
  document.getElementById('warrior-wave').textContent = 'WAVE 1';
  const inp = document.getElementById('warrior-input');
  inp.disabled=false; inp.value=''; inp.focus();
  animateWarrior();
}

function spawnWarriorEnemy() {
  const c = document.getElementById('warrior-canvas');
  const word = gameWords[Math.floor(Math.random()*gameWords.length)];
  const speed = 0.3 + warriorState.wave * 0.12;
  warriorState.enemies.push({
    word, typed: '',
    x: c.width + 20,
    y: 60 + Math.random()*(c.height-120),
    speed, color: `hsl(${Math.random()*60+0},90%,55%)`
  });
}

function animateWarrior() {
  if (!warriorState.active) return;
  const c = document.getElementById('warrior-canvas');
  c.width = c.offsetWidth;
  const ctx = c.getContext('2d');
  warriorState.frameCount++;

  // Bg
  ctx.fillStyle = '#0a0a05'; ctx.fillRect(0,0,c.width,c.height);
  // Ground line
  ctx.strokeStyle = 'rgba(255,150,0,0.2)'; ctx.lineWidth=1; ctx.setLineDash([4,4]);
  ctx.beginPath(); ctx.moveTo(0,c.height-20); ctx.lineTo(c.width,c.height-20); ctx.stroke();
  ctx.setLineDash([]);

  // Base (player)
  ctx.save(); ctx.shadowColor='#00d4ff'; ctx.shadowBlur=15;
  ctx.fillStyle='rgba(0,212,255,0.15)'; ctx.strokeStyle='#00d4ff'; ctx.lineWidth=2;
  ctx.beginPath(); ctx.rect(10,20,50,c.height-40); ctx.fill(); ctx.stroke();
  // Draw player tower
  ctx.fillStyle='#00d4ff';
  ctx.beginPath(); ctx.moveTo(35, c.height/2-20); ctx.lineTo(50, c.height/2+10); ctx.lineTo(20, c.height/2+10); ctx.closePath(); ctx.fill();
  ctx.restore();

  // Spawn enemies
  const spawnRate = Math.max(80-warriorState.wave*8, 30);
  if (warriorState.frameCount % spawnRate === 0 && warriorState.enemies.length < 5+warriorState.wave) spawnWarriorEnemy();

  // Move & draw enemies
  const typed = document.getElementById('warrior-input').value.toLowerCase();
  warriorState.enemies.forEach((e, i) => {
    e.x -= e.speed;

    // Glow if being targeted
    const isTarget = typed.length > 0 && e.word.startsWith(typed);
    ctx.save();
    ctx.shadowColor = isTarget ? '#ffff00' : e.color; ctx.shadowBlur = isTarget ? 20 : 8;

    // Enemy body - draw as monster shape
    ctx.fillStyle = e.color || '#ff4444';
    ctx.beginPath();
    ctx.moveTo(e.x, e.y-15);
    ctx.lineTo(e.x+12, e.y+5);
    ctx.lineTo(e.x+8, e.y+15);
    ctx.lineTo(e.x-8, e.y+15);
    ctx.lineTo(e.x-12, e.y+5);
    ctx.closePath();
    ctx.fill();
    // Eyes
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(e.x-4, e.y-5, 3, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(e.x+4, e.y-5, 3, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#000';
    ctx.beginPath(); ctx.arc(e.x-4, e.y-5, 1.5, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(e.x+4, e.y-5, 1.5, 0, Math.PI*2); ctx.fill();
    ctx.restore();

    // Health bar / word
    const barW = e.word.length * 10 + 10;
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.fillRect(e.x-barW/2, e.y-38, barW, 18);
    ctx.font = 'bold 18px monospace'; ctx.textAlign='left';
    const px = e.x - barW/2 + 4;
    ctx.fillStyle = '#00ff88';
    ctx.fillText(e.typed, px, e.y-24);
    ctx.fillStyle = '#ffffff88';
    ctx.fillText(e.word.slice(e.typed.length), px+e.typed.length*7, e.y-24);
    ctx.restore();

    // Reached base
    if (e.x < 65) {
      warriorState.enemies.splice(i,1);
      warriorState.hp--;
      const hpStr = '<3'.repeat(Math.max(0,warriorState.hp));
      document.getElementById('warrior-hp-display').textContent = hpStr || '’';
      if (warriorState.hp <= 0) { endWarriorGame(); return; }
    }
  });

  // Wave complete
  if (warriorState.frameCount > 0 && warriorState.frameCount % 600 === 0) {
    warriorState.wave++; warriorState.frameCount = 0;
    document.getElementById('warrior-wave').textContent = 'WAVE '+warriorState.wave;
    showToast('⚔️ Wave '+warriorState.wave+'!');
  }

  warriorState.animFrame = requestAnimationFrame(animateWarrior);
}

function endWarriorGame() {
  warriorState.active=false;
  document.getElementById('warrior-input').disabled=true;
  showToast('⚔️ Base destroyed! Score: '+warriorState.score);
  const c=document.getElementById('warrior-canvas'); const ctx=c.getContext('2d');
  ctx.fillStyle='rgba(0,0,0,0.75)'; ctx.fillRect(0,0,c.width,c.height);
  ctx.font='bold 40px monospace'; ctx.fillStyle='#ff4422'; ctx.textAlign='center';
  ctx.shadowColor='#ff4422'; ctx.shadowBlur=30;
  ctx.fillText('BASE DESTROYED!', c.width/2, c.height/2-20);
  ctx.font='bold 22px monospace'; ctx.fillStyle='#00d4ff'; ctx.shadowColor='#00d4ff';
  ctx.fillText('Kills: '+warriorState.score, c.width/2, c.height/2+30);
}

document.getElementById('warrior-input').addEventListener('keydown', function(e) {
  if (e.key===' '||e.key==='Enter') { e.preventDefault(); }
});
document.getElementById('warrior-input').addEventListener('input', function() {
  if (!warriorState.active) return;
  const typed = this.value.toLowerCase();
  warriorState.enemies.forEach(e => { e.typed = e.word.startsWith(typed) ? typed : e.typed; });
  const match = warriorState.enemies.find(e => e.word === typed);
  if (match) {
    const i = warriorState.enemies.indexOf(match);
    warriorState.enemies.splice(i,1);
    warriorState.score++;
    document.getElementById('warrior-score').textContent = warriorState.score;
    this.value = '';
    warriorState.enemies.forEach(e => e.typed='');
  }
});

// ”” ~ TSUNAMI RUN ””””””””””””””””””””””””””
let tsunamiState = { active:false, animFrame:null, playerX:0, waveX:0, speed:0, currentWord:'', distance:0 };
const tsunamiWords = [...gameWords];

function initTsunamiCanvas() {
  const c=document.getElementById('tsunami-canvas'); c.width=c.offsetWidth; c.height=480;
  const ctx=c.getContext('2d');
  ctx.fillStyle='#000d1a'; ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle='rgba(0,212,255,0.3)'; ctx.font='bold 18px monospace'; ctx.textAlign='center';
  ctx.fillText('Press ▶ START to begin', c.width/2, c.height/2);
}

function startTsunamiGame() {
  checkAuthAndAction(() => {
    _internal_startTsunamiGame();
  });
}
function _internal_startTsunamiGame() {
  const c=document.getElementById('tsunami-canvas');
  tsunamiState={active:true,animFrame:null,playerX:c.width*0.35,waveX:0,speed:2,currentWord:'',distance:0,frameCount:0,baseSpeed:2};
  document.getElementById('tsunami-dist').textContent='0m';
  document.getElementById('tsunami-wpm-disp').textContent='0 WPM';
  pickTsunamiWord();
  const inp=document.getElementById('tsunami-input');
  inp.disabled=false; inp.value=''; inp.focus();
  animateTsunami();
}

function pickTsunamiWord() {
  tsunamiState.currentWord = tsunamiWords[Math.floor(Math.random()*tsunamiWords.length)];
  tsunamiState.typedSoFar = '';
}

function animateTsunami() {
  if (!tsunamiState.active) return;
  const c=document.getElementById('tsunami-canvas'); c.width=c.offsetWidth;
  const ctx=c.getContext('2d');
  const W=c.width, H=c.height;
  tsunamiState.frameCount++;

  // Wave catches player if speed too low
  tsunamiState.waveX += tsunamiState.speed*0.6;
  tsunamiState.distance += tsunamiState.speed*0.1;
  // Decelerate when not typing
  tsunamiState.speed = Math.max(tsunamiState.baseSpeed, tsunamiState.speed*0.995);

  document.getElementById('tsunami-dist').textContent = Math.floor(tsunamiState.distance)+'m';

  // Sky gradient
  const sky = ctx.createLinearGradient(0,0,0,H*0.7);
  sky.addColorStop(0,'#001428'); sky.addColorStop(1,'#003366');
  ctx.fillStyle=sky; ctx.fillRect(0,0,W,H*0.7);

  // Ground
  const gnd = ctx.createLinearGradient(0,H*0.65,0,H);
  gnd.addColorStop(0,'#1a0d00'); gnd.addColorStop(1,'#0d0700');
  ctx.fillStyle=gnd; ctx.fillRect(0,H*0.65,W,H*0.35);

  // Scrolling road
  for(let i=0;i<W;i+=80){
    const rx = (i - tsunamiState.frameCount*tsunamiState.speed*0.5)%W;
    ctx.fillStyle='rgba(255,200,100,0.15)';
    ctx.fillRect(rx,H*0.68,40,4);
  }

  // WAVE
  ctx.save();
  ctx.shadowColor='#0066ff'; ctx.shadowBlur=40;
  for(let layer=0;layer<3;layer++){
    ctx.beginPath();
    ctx.moveTo(tsunamiState.waveX-W*0.15-layer*15, 0);
    for(let y=0;y<H;y+=8){
      const wx = tsunamiState.waveX - layer*20 + Math.sin(y/20+tsunamiState.frameCount/10)*15;
      ctx.lineTo(wx, y);
    }
    ctx.lineTo(0,H); ctx.lineTo(0,0); ctx.closePath();
    ctx.fillStyle=`rgba(0,${80+layer*30},200,${0.3+layer*0.1})`; ctx.fill();
  }
  ctx.restore();

  // Player (stick figure running)
  const px=tsunamiState.playerX, py=H*0.6;
  ctx.save(); ctx.shadowColor='#ffff00'; ctx.shadowBlur=15;
  ctx.font='bold 28px sans-serif'; ctx.textAlign='center';
  ctx.fillText('ƒ', px, py);
  ctx.restore();

  // Current word prompt
  const inp=document.getElementById('tsunami-input').value;
  const word=tsunamiState.currentWord;
  const typed=tsunamiState.typedSoFar||'';
  ctx.save();
  ctx.fillStyle='rgba(0,0,0,0.6)'; ctx.beginPath();
  ctx.roundRect(px-60,py-60,120,30,6); ctx.fill();
  ctx.font='bold 14px monospace'; ctx.textAlign='left';
  ctx.fillStyle='#00ff88'; ctx.fillText(typed, px-54, py-40);
  ctx.fillStyle='rgba(255,255,255,0.7)'; ctx.fillText(word.slice(typed.length), px-54+typed.length*8.5, py-40);
  ctx.restore();

  // Wave caught player?
  if (tsunamiState.waveX >= tsunamiState.playerX - 20) { endTsunamiGame(); return; }

  tsunamiState.animFrame=requestAnimationFrame(animateTsunami);
}

function endTsunamiGame(){
  tsunamiState.active=false;
  document.getElementById('tsunami-input').disabled=true;
  showToast('~ Wave got you! Distance: '+Math.floor(tsunamiState.distance)+'m');
  const c=document.getElementById('tsunami-canvas'); const ctx=c.getContext('2d');
  ctx.fillStyle='rgba(0,20,60,0.8)'; ctx.fillRect(0,0,c.width,c.height);
  ctx.font='bold 38px monospace'; ctx.fillStyle='#0088ff'; ctx.textAlign='center';
  ctx.shadowColor='#0088ff'; ctx.shadowBlur=30;
  ctx.fillText('~ WIPED OUT!', c.width/2, c.height/2-20);
  ctx.font='bold 22px monospace'; ctx.fillStyle='#00d4ff'; ctx.shadowColor='#00d4ff';
  ctx.fillText(Math.floor(tsunamiState.distance)+'m survived', c.width/2, c.height/2+30);
}

document.getElementById('tsunami-input').addEventListener('input', function(){
  if(!tsunamiState.active) return;
  const val=this.value.toLowerCase();
  const word=tsunamiState.currentWord;
  if(word.startsWith(val)){ tsunamiState.typedSoFar=val; }
  if(val===word){
    tsunamiState.speed=Math.min(tsunamiState.speed+3,18);
    tsunamiState.baseSpeed=Math.min(tsunamiState.baseSpeed+0.15,8);
    pickTsunamiWord();
    this.value='';
  }
});

// ”” 🔮 SPELL CASTER ””””””””””””””””””””””””””
const spells=['ignis','aqua','terra','ventus','fulgor','glacies','umbra','lux','chaos','pax',
  'furia','vitae','mortis','tempus','nexum','arcana','vortex','sanctum','inferno','aurora'];
let spellState={active:false,animFrame:null,enemies:[],score:0,hp:3,wave:1,frameCount:0,particles:[]};

function initSpellCanvas(){
  const c=document.getElementById('spell-canvas'); c.width=c.offsetWidth; c.height=480;
  const ctx=c.getContext('2d');
  const bg=ctx.createRadialGradient(c.width/2,c.height/2,0,c.width/2,c.height/2,c.width/2);
  bg.addColorStop(0,'#0d0020'); bg.addColorStop(1,'#05000f');
  ctx.fillStyle=bg; ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle='rgba(176,96,255,0.4)'; ctx.font='bold 18px monospace'; ctx.textAlign='center';
  ctx.fillText('Press ▶ START to begin', c.width/2, c.height/2);
}

function startSpellGame() {
  checkAuthAndAction(() => {
    _internal_startSpellGame();
  });
}
function _internal_startSpellGame() {
  spellState={active:true,animFrame:null,enemies:[],score:0,hp:3,wave:1,frameCount:0,particles:[]};
  document.getElementById('spell-score').textContent='0';
  document.getElementById('spell-hp-display').textContent='💜💜💜';
  document.getElementById('spell-wave').textContent='WAVE 1';
  const inp=document.getElementById('spell-input');
  inp.disabled=false; inp.value=''; inp.focus();
  animateSpell();
}

function spawnSpellEnemy(){
  const c=document.getElementById('spell-canvas');
  const spell=spells[Math.floor(Math.random()*spells.length)];
  const side=Math.random()>0.5?1:-1;
  spellState.enemies.push({
    spell,typed:'',
    x:side>0?c.width+40:-40,
    y:80+Math.random()*(c.height-160),
    vx:side*(-0.6-spellState.wave*0.1),
    vy:(Math.random()-0.5)*0.4,
    hp:1, color:`hsl(${Math.random()*60+280},80%,55%)`
  });
}

function animateSpell(){
  if(!spellState.active) return;
  const c=document.getElementById('spell-canvas'); c.width=c.offsetWidth;
  const ctx=c.getContext('2d');
  const W=c.width,H=c.height;
  spellState.frameCount++;

  // Bg
  const bg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,W/2);
  bg.addColorStop(0,'#0d0020'); bg.addColorStop(1,'#05000f');
  ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);

  // Stars
  if(spellState.frameCount%3===0){
    spellState.particles=spellState.particles.filter(p=>p.life>0);
    if(spellState.particles.length<60) spellState.particles.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2,life:100+Math.random()*100,maxLife:200,color:`hsl(${Math.random()*60+260},80%,70%)`});
  }
  spellState.particles.forEach(p=>{
    p.life--;
    ctx.globalAlpha=p.life/p.maxLife*0.6;
    ctx.fillStyle=p.color; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
  }); ctx.globalAlpha=1;

  // Wizard (player)
  ctx.save(); ctx.shadowColor='#b060ff'; ctx.shadowBlur=20;
  ctx.font='bold 36px sans-serif'; ctx.textAlign='center';
  ctx.fillText('', W/2, H-30); ctx.restore();

  // Spawn
  const spawnR=Math.max(120-spellState.wave*12,40);
  if(spellState.frameCount%spawnR===0&&spellState.enemies.length<4+spellState.wave) spawnSpellEnemy();

  // Typed word
  const typedNow=document.getElementById('spell-input').value.toLowerCase();

  // Draw enemies
  spellState.enemies.forEach((e,i)=>{
    e.x+=e.vx; e.y+=e.vy;
    const isTarget=typedNow.length>0&&e.spell.startsWith(typedNow);
    ctx.save();
    ctx.shadowColor=isTarget?'#ffff00':e.color; ctx.shadowBlur=isTarget?25:12;
    // Draw spell enemy as orb
    const grad=ctx.createRadialGradient(e.x,e.y,0,e.x,e.y,18);
    grad.addColorStop(0,e.color);
    grad.addColorStop(1,'transparent');
    ctx.fillStyle=grad;
    ctx.beginPath(); ctx.arc(e.x,e.y,18,0,Math.PI*2); ctx.fill();
    ctx.fillStyle=e.color;
    ctx.beginPath(); ctx.arc(e.x,e.y,10,0,Math.PI*2); ctx.fill();
    // Spell word
    const bw=e.spell.length*9+12;
    ctx.fillStyle='rgba(0,0,0,0.65)';
    ctx.beginPath(); if(ctx.roundRect){ctx.roundRect(e.x-bw/2,e.y-44,bw,20,4);}else{ctx.rect(e.x-bw/2,e.y-44,bw,20);} ctx.fill();
    ctx.font='bold 11px monospace'; ctx.textAlign='left';
    ctx.fillStyle='#b060ff'; ctx.fillText(e.typed,e.x-bw/2+4,e.y-28);
    ctx.fillStyle='rgba(255,255,255,0.75)'; ctx.fillText(e.spell.slice(e.typed.length),e.x-bw/2+4+e.typed.length*7,e.y-28);
    ctx.restore();

    // Reached center
    if(Math.abs(e.x-W/2)<50&&Math.abs(e.y-H+50)<80){
      spellState.enemies.splice(i,1);
      spellState.hp--;
      document.getElementById('spell-hp-display').textContent='💜'.repeat(Math.max(0,spellState.hp))||'’”';
      if(spellState.hp<=0){endSpellGame();return;}
    }
  });

  // Wave progress
  if(spellState.frameCount%500===0){
    spellState.wave++; spellState.frameCount=1;
    document.getElementById('spell-wave').textContent='WAVE '+spellState.wave;
    showToast('🔮 Wave '+spellState.wave+' begins!');
  }

  spellState.animFrame=requestAnimationFrame(animateSpell);
}

function endSpellGame(){
  spellState.active=false;
  document.getElementById('spell-input').disabled=true;
  showToast('🔮 Defeated! Mana: '+spellState.score);
  const c=document.getElementById('spell-canvas'); const ctx=c.getContext('2d');
  ctx.fillStyle='rgba(0,0,0,0.75)'; ctx.fillRect(0,0,c.width,c.height);
  ctx.font='bold 38px monospace'; ctx.fillStyle='#b060ff'; ctx.textAlign='center';
  ctx.shadowColor='#b060ff'; ctx.shadowBlur=30;
  ctx.fillText('! SPELL BROKEN!', c.width/2, c.height/2-20);
  ctx.font='bold 22px monospace'; ctx.fillStyle='#00d4ff'; ctx.shadowColor='#00d4ff';
  ctx.fillText('Mana collected: '+spellState.score, c.width/2, c.height/2+30);
}

document.getElementById('spell-input').addEventListener('input', function(){
  if(!spellState.active) return;
  const val=this.value.toLowerCase();
  spellState.enemies.forEach(e=>{ e.typed=e.spell.startsWith(val)?val:e.typed; });
  const match=spellState.enemies.find(e=>e.spell===val);
  if(match){
    spellState.enemies.splice(spellState.enemies.indexOf(match),1);
    spellState.score+=10;
    document.getElementById('spell-score').textContent=spellState.score;
    this.value='';
    spellState.enemies.forEach(e=>e.typed='');
    // Burst particles
    for(let i=0;i<20;i++) spellState.particles.push({x:match.x,y:match.y,r:2+Math.random()*3,life:60,maxLife:60,color:`hsl(${Math.random()*60+260},90%,70%)`});
  }
});

// ”” # CYBER HACK ””””””””””””””””””””””””””
const hackCommands = ['BYPASS','INJECT','DECRYPT','EXPLOIT','OVERRIDE','BREACH','PATCH','EXECUTE','DISABLE','UPLOAD',
  'SCAN','VIRUS','PROXY','TUNNEL','SOCKET','ACCESS','STEALTH','DELETE','FORMAT','REBOOT'];
let hackState = { active:false, animFrame:null, score:0, firewall:100, currentCmd:'', cols:[], frameCount:0 };

function initHackCanvas() {
  const c = document.getElementById('hack-canvas'); c.width = c.offsetWidth; c.height = c.offsetHeight || 460;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#000'; ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle = 'rgba(0,255,136,0.4)'; ctx.font = '16px monospace'; ctx.textAlign='center';
  ctx.fillText('Press ▶ START to begin hacking...', c.width/2, c.height/2);
  // Init matrix columns
  hackState.cols = Array.from({length: Math.floor(c.width/14)}, () => Math.floor(Math.random()*c.height/14));
}

function startHackGame() {
  checkAuthAndAction(() => {
    _internal_startHackGame();
  });
}
function _internal_startHackGame() {
  const c = document.getElementById('hack-canvas'); c.width = c.offsetWidth;
  hackState = { active:true, animFrame:null, score:0, firewall:100, currentCmd:'', cols: Array.from({length: Math.floor(c.width/14)}, () => 0), frameCount:0 };
  pickHackCmd();
  document.getElementById('hack-score').textContent = '0';
  document.getElementById('hack-firewall').textContent = 'FIREWALL: 100%';
  const inp = document.getElementById('hack-input');
  inp.disabled=false; inp.value=''; inp.focus();
  animateHack();
}

function pickHackCmd() {
  hackState.currentCmd = hackCommands[Math.floor(Math.random()*hackCommands.length)];
  hackState.typedCmd = '';
}

function animateHack() {
  if (!hackState.active) return;
  const c = document.getElementById('hack-canvas'); const ctx = c.getContext('2d');
  const W=c.width, H=c.height; hackState.frameCount++;

  // Matrix rain bg
  ctx.fillStyle = 'rgba(0,0,0,0.05)'; ctx.fillRect(0,0,W,H);
  ctx.font = '15px monospace'; ctx.textAlign = 'left';
  hackState.cols.forEach((y, i) => {
    const char = String.fromCharCode(33 + Math.floor(Math.random()*94));
    const x = i*14;
    ctx.fillStyle = y < 2 ? '#ffffff' : `rgba(0,${180+Math.random()*75},${80+Math.floor(Math.random()*60)},${0.7+Math.random()*0.3})`;
    ctx.fillText(char, x, y*14);
    hackState.cols[i] = (y*14 > H && Math.random() > 0.975) ? 0 : y+1;
  });

  // Firewall panel
  const fwY = H-80;
  ctx.fillStyle = 'rgba(0,0,0,0.7)'; ctx.fillRect(20, fwY, W-40, 60);
  ctx.strokeStyle = `rgba(${hackState.firewall<40?255:0},${hackState.firewall>60?255:100},0,0.6)`;
  ctx.lineWidth=1; ctx.strokeRect(20,fwY,W-40,60);

  // Firewall bar
  const fwW = (W-80)*(hackState.firewall/100);
  const fwGrad = ctx.createLinearGradient(40,0,40+fwW,0);
  fwGrad.addColorStop(0,'#ff2200'); fwGrad.addColorStop(1,'#00ff88');
  ctx.fillStyle=fwGrad; ctx.fillRect(40,fwY+10,fwW,12);
  ctx.fillStyle='rgba(255,255,255,0.5)'; ctx.font='11px monospace';
  ctx.fillText('FIREWALL STRENGTH: '+hackState.firewall+'%', 40, fwY+36);

  // Current command to type
  const typed = hackState.typedCmd||'';
  const remaining = hackState.currentCmd.slice(typed.length);
  ctx.font='bold 22px monospace'; ctx.textAlign='center';
  ctx.fillStyle='rgba(0,0,0,0.8)'; ctx.fillRect(W/2-120,fwY-50,240,36);
  ctx.fillStyle='#00ff88'; ctx.fillText(typed, W/2-remaining.length*6.5, fwY-28);
  ctx.fillStyle='rgba(255,255,255,0.6)'; ctx.fillText(remaining, W/2+typed.length*6.5, fwY-28);

  hackState.animFrame = requestAnimationFrame(animateHack);
}

function endHackGame(won) {
  hackState.active = false;
  document.getElementById('hack-input').disabled = true;
  const msg = won ? '# System Breached! '+hackState.score+' commands executed' : '🔒 Firewall held! '+hackState.score+' breaches';
  showToast(msg);
  const c=document.getElementById('hack-canvas'); const ctx=c.getContext('2d');
  ctx.fillStyle='rgba(0,0,0,0.85)'; ctx.fillRect(0,0,c.width,c.height);
  ctx.font='bold 36px monospace'; ctx.textAlign='center';
  ctx.fillStyle=won?'#00ff88':'#ff2200'; ctx.shadowColor=won?'#00ff88':'#ff2200'; ctx.shadowBlur=30;
  ctx.fillText(won?'✓ SYSTEM BREACHED':'0 ACCESS DENIED', c.width/2, c.height/2-20);
  ctx.font='bold 20px monospace'; ctx.fillStyle='#00d4ff'; ctx.shadowColor='#00d4ff';
  ctx.fillText('Commands: '+hackState.score, c.width/2, c.height/2+30);
}

document.getElementById('hack-input').addEventListener('input', function() {
  if (!hackState.active) return;
  const val = this.value.toUpperCase();
  hackState.typedCmd = hackState.currentCmd.startsWith(val) ? val : hackState.typedCmd;
  if (val === hackState.currentCmd) {
    hackState.score++;
    hackState.firewall = Math.max(0, hackState.firewall - 8);
    document.getElementById('hack-score').textContent = hackState.score;
    document.getElementById('hack-firewall').textContent = 'FIREWALL: '+hackState.firewall+'%';
    this.value = '';
    if (hackState.firewall <= 0) { endHackGame(true); return; }
    if (hackState.score >= 20) { endHackGame(true); return; }
    pickHackCmd();
  }
});

// ”” o ASTEROID FIELD ””””””””””””””””””””””
const astCodes = ['AST1','AST2','ROCK','BOLT','NOVA','BURN','DUST','CORE','IRON','SLAB',
  'K2X1','M7N3','P4Q9','R1Z8','W3V5','CRYO','FLUX','VEIN','RIFT','MASS'];
let asteroidState = { active:false, animFrame:null, score:0, asteroids:[], lives:3, frameCount:0, stars:[] };

function initAsteroidCanvas() {
  const c=document.getElementById('asteroid-canvas'); c.width=c.offsetWidth; c.height=460;
  const ctx=c.getContext('2d'); ctx.fillStyle='#000'; ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle='rgba(255,215,0,0.4)'; ctx.font='14px monospace'; ctx.textAlign='center';
  ctx.fillText('Press ▶ START', c.width/2, c.height/2);
}

function startAsteroidGame() {
  checkAuthAndAction(() => {
    _internal_startAsteroidGame();
  });
}
function _internal_startAsteroidGame() {
  const c=document.getElementById('asteroid-canvas'); c.width=c.offsetWidth;
  const stars = Array.from({length:150},()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.5,b:Math.random()}));
  asteroidState={active:true,animFrame:null,score:0,asteroids:[],lives:3,frameCount:0,stars};
  document.getElementById('asteroid-score').textContent='0';
  document.getElementById('asteroid-lives').textContent='EARTHEARTHEARTH';
  const inp=document.getElementById('asteroid-input');
  inp.disabled=false; inp.value=''; inp.focus();
  spawnAsteroid(); animateAsteroid();
}

function spawnAsteroid() {
  if(!asteroidState.active) return;
  const c=document.getElementById('asteroid-canvas');
  const code=astCodes[Math.floor(Math.random()*astCodes.length)];
  const angle=Math.random()*Math.PI*2;
  const speed=0.5+Math.random()*1.2+asteroidState.score*0.03;
  asteroidState.asteroids.push({
    code,typed:'',
    x:Math.random()*c.width, y:-30,
    vx:Math.sin(angle)*speed*0.5, vy:speed,
    size:20+Math.random()*20, rotation:Math.random()*Math.PI*2, rotSpeed:(Math.random()-0.5)*0.05,
    color:`hsl(${30+Math.random()*30},60%,${40+Math.random()*20}%)`
  });
}

function animateAsteroid() {
  if(!asteroidState.active) return;
  const c=document.getElementById('asteroid-canvas'); c.width=c.offsetWidth;
  const ctx=c.getContext('2d'); const W=c.width,H=c.height;
  asteroidState.frameCount++;

  ctx.fillStyle='#000'; ctx.fillRect(0,0,W,H);
  // Stars
  asteroidState.stars.forEach(s=>{
    const twinkle=0.4+0.6*Math.sin(asteroidState.frameCount*0.05+s.b*10);
    ctx.fillStyle=`rgba(255,255,255,${twinkle*0.8})`; ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill();
  });

  // Earth at bottom
  ctx.save(); ctx.shadowColor='#0088ff'; ctx.shadowBlur=20;
  ctx.font='bold 40px sans-serif'; ctx.textAlign='center'; ctx.fillText('EARTH',W/2,H-20); ctx.restore();

  const typedNow=document.getElementById('asteroid-input').value.toUpperCase();
  const spawnRate=Math.max(120-asteroidState.score*5,40);
  if(asteroidState.frameCount%spawnRate===0&&asteroidState.asteroids.length<6) spawnAsteroid();

  asteroidState.asteroids.forEach((a,i)=>{
    a.x+=a.vx; a.y+=a.vy; a.rotation+=a.rotSpeed;
    const isTarget=typedNow.length>0&&a.code.startsWith(typedNow);
    ctx.save();
    ctx.translate(a.x,a.y); ctx.rotate(a.rotation);
    ctx.shadowColor=isTarget?'#ffff00':a.color; ctx.shadowBlur=isTarget?25:10;
    // Draw irregular rock shape
    ctx.beginPath();
    for(let j=0;j<8;j++){
      const ang=j*(Math.PI*2/8); const r=a.size*(0.7+Math.sin(j*3+a.rotation)*0.3);
      j===0?ctx.moveTo(Math.cos(ang)*r,Math.sin(ang)*r):ctx.lineTo(Math.cos(ang)*r,Math.sin(ang)*r);
    }
    ctx.closePath(); ctx.fillStyle=a.color; ctx.fill();
    ctx.strokeStyle=isTarget?'#ffff00':'rgba(255,255,255,0.3)'; ctx.lineWidth=1.5; ctx.stroke();
    ctx.restore();

    // Code label
    ctx.save(); ctx.shadowBlur=0;
    ctx.font='bold 11px monospace'; ctx.textAlign='center';
    ctx.fillStyle='rgba(0,0,0,0.7)'; ctx.fillRect(a.x-24,a.y-a.size-22,48,16);
    ctx.fillStyle='#ffdd88'; ctx.fillText(a.typed,a.x-24+(a.typed.length*3.5),a.y-a.size-10);
    ctx.fillStyle='rgba(255,255,255,0.6)'; ctx.fillText(a.code.slice(a.typed.length),a.x-24+(a.typed.length*7)+(a.typed.length?a.typed.length*3.5:0),a.y-a.size-10);
    ctx.restore();

    if(a.y>H-40){
      asteroidState.asteroids.splice(i,1);
      asteroidState.lives--;
      document.getElementById('asteroid-lives').textContent='EARTH'.repeat(Math.max(0,asteroidState.lives));
      if(asteroidState.lives<=0){endAsteroidGame();return;}
      setTimeout(spawnAsteroid,600);
    }
  });
  asteroidState.animFrame=requestAnimationFrame(animateAsteroid);
}

function endAsteroidGame(){
  asteroidState.active=false;
  document.getElementById('asteroid-input').disabled=true;
  showToast('o Earth destroyed! '+asteroidState.score+' asteroids vaporized');
  const c=document.getElementById('asteroid-canvas'); const ctx=c.getContext('2d');
  ctx.fillStyle='rgba(0,0,0,0.8)'; ctx.fillRect(0,0,c.width,c.height);
  ctx.font='bold 36px monospace'; ctx.fillStyle='#ff4422'; ctx.textAlign='center'; ctx.shadowColor='#ff4422'; ctx.shadowBlur=30;
  ctx.fillText('* EARTH DESTROYED', c.width/2, c.height/2-20);
  ctx.font='bold 20px monospace'; ctx.fillStyle='#ffd700'; ctx.shadowColor='#ffd700';
  ctx.fillText('Destroyed: '+asteroidState.score, c.width/2, c.height/2+30);
}

document.getElementById('asteroid-input').addEventListener('input', function(){
  if(!asteroidState.active) return;
  const val=this.value.toUpperCase();
  asteroidState.asteroids.forEach(a=>{a.typed=a.code.startsWith(val)?val:a.typed;});
  const match=asteroidState.asteroids.find(a=>a.code===val);
  if(match){
    asteroidState.asteroids.splice(asteroidState.asteroids.indexOf(match),1);
    asteroidState.score++;
    document.getElementById('asteroid-score').textContent=asteroidState.score;
    this.value='';
    asteroidState.asteroids.forEach(a=>a.typed='');
    setTimeout(spawnAsteroid,400);
  }
});

// ”” v VIRUS HUNT ””””””””””””””””””””””””””
const dnaCodes=['ATCG','GCTA','TTAA','CGAT','AGTC','TCGA','GCAT','ACGT','TGCA','GATC',
  'CATG','TAGC','CTAG','AGCT','GTAC','TACG','CAGT','GACT','ATGC','TCAG'];
let virusState={active:false,animFrame:null,score:0,viruses:[],infection:0,frameCount:0};

function initVirusCanvas(){
  const c=document.getElementById('virus-canvas'); c.width=c.offsetWidth; c.height=460;
  const ctx=c.getContext('2d'); ctx.fillStyle='#000806'; ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle='rgba(0,255,100,0.4)'; ctx.font='14px monospace'; ctx.textAlign='center';
  ctx.fillText('Press ▶ START', c.width/2, c.height/2);
}

function startVirusGame() {
  checkAuthAndAction(() => {
    _internal_startVirusGame();
  });
}
function _internal_startVirusGame() {
  const c=document.getElementById('virus-canvas'); c.width=c.offsetWidth;
  virusState={active:true,animFrame:null,score:0,viruses:[],infection:0,frameCount:0};
  document.getElementById('virus-score').textContent='0';
  document.getElementById('virus-infection').textContent='INFECTION: 0%';
  for(let i=0;i<3;i++) spawnVirus();
  const inp=document.getElementById('virus-input');
  inp.disabled=false; inp.value=''; inp.focus();
  animateVirus();
}

function spawnVirus(){
  const c=document.getElementById('virus-canvas');
  const code=dnaCodes[Math.floor(Math.random()*dnaCodes.length)];
  virusState.viruses.push({
    code,typed:'',
    x:30+Math.random()*(c.width-60),
    y:30+Math.random()*(c.height-80),
    vx:(Math.random()-0.5)*0.8,
    vy:(Math.random()-0.5)*0.8,
    size:18+Math.random()*12,
    phase:Math.random()*Math.PI*2,
    infecting:false
  });
}

function animateVirus(){
  if(!virusState.active) return;
  const c=document.getElementById('virus-canvas'); c.width=c.offsetWidth;
  const ctx=c.getContext('2d'); const W=c.width,H=c.height;
  virusState.frameCount++;

  ctx.fillStyle='rgba(0,8,6,0.15)'; ctx.fillRect(0,0,W,H);

  // Grid
  for(let x=0;x<W;x+=40){ctx.strokeStyle='rgba(0,80,30,0.08)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
  for(let y=0;y<H;y+=40){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}

  // Spawn more as level increases
  if(virusState.frameCount%Math.max(300-virusState.score*20,80)===0&&virusState.viruses.length<12) spawnVirus();

  // Infection increases over time
  if(virusState.frameCount%120===0){
    virusState.infection=Math.min(100,virusState.infection+virusState.viruses.length*0.5);
    document.getElementById('virus-infection').textContent='INFECTION: '+Math.floor(virusState.infection)+'%';
    if(virusState.infection>=100){endVirusGame();return;}
  }

  const typedNow=document.getElementById('virus-input').value.toUpperCase();

  virusState.viruses.forEach((v,i)=>{
    v.x+=v.vx; v.y+=v.vy; v.phase+=0.05;
    if(v.x<v.size||v.x>W-v.size) v.vx*=-1;
    if(v.y<v.size||v.y>H-v.size-30) v.vy*=-1;

    const isTarget=typedNow.length>0&&v.code.startsWith(typedNow);
    const pulse=1+0.15*Math.sin(v.phase);
    ctx.save();
    ctx.shadowColor=isTarget?'#ffff00':'#00ff66'; ctx.shadowBlur=isTarget?30:15;

    // Virus body
    ctx.beginPath(); ctx.arc(v.x,v.y,v.size*pulse,0,Math.PI*2);
    ctx.fillStyle=isTarget?'rgba(255,255,0,0.2)':'rgba(0,200,80,0.15)'; ctx.fill();
    ctx.strokeStyle=isTarget?'#ffff00':'#00ff66'; ctx.lineWidth=2; ctx.stroke();

    // Spikes
    for(let s=0;s<8;s++){
      const ang=s*(Math.PI/4)+v.phase*0.5;
      ctx.beginPath();
      ctx.moveTo(v.x+Math.cos(ang)*v.size,v.y+Math.sin(ang)*v.size);
      ctx.lineTo(v.x+Math.cos(ang)*(v.size+8),v.y+Math.sin(ang)*(v.size+8));
      ctx.strokeStyle=isTarget?'rgba(255,255,0,0.8)':'rgba(0,255,100,0.6)'; ctx.lineWidth=2; ctx.stroke();
    }

    // DNA code
    ctx.font='bold 10px monospace'; ctx.textAlign='center'; ctx.shadowBlur=0;
    ctx.fillStyle='rgba(0,0,0,0.7)'; ctx.fillRect(v.x-20,v.y-10,40,14);
    ctx.fillStyle='#00ff88'; ctx.fillText(v.code,v.x,v.y+2);
    ctx.restore();
  });

  // Infection bar
  const infW=(W-40)*(virusState.infection/100);
  ctx.fillStyle='rgba(0,0,0,0.6)'; ctx.fillRect(20,H-24,W-40,16);
  ctx.fillStyle=virusState.infection>70?'#ff2200':virusState.infection>40?'#ff8800':'#00ff66';
  ctx.fillRect(20,H-24,infW,16);
  ctx.fillStyle='rgba(255,255,255,0.6)'; ctx.font='10px monospace'; ctx.textAlign='left';
  ctx.fillText('SYSTEM INFECTION: '+Math.floor(virusState.infection)+'%',26,H-12);

  virusState.animFrame=requestAnimationFrame(animateVirus);
}

function endVirusGame(){
  virusState.active=false;
  document.getElementById('virus-input').disabled=true;
  showToast('v System infected! '+virusState.score+' viruses eliminated');
  const c=document.getElementById('virus-canvas'); const ctx=c.getContext('2d');
  ctx.fillStyle='rgba(0,0,0,0.85)'; ctx.fillRect(0,0,c.width,c.height);
  ctx.font='bold 34px monospace'; ctx.fillStyle='#ff2200'; ctx.textAlign='center'; ctx.shadowColor='#ff2200'; ctx.shadowBlur=30;
  ctx.fillText('* SYSTEM INFECTED', c.width/2, c.height/2-20);
  ctx.font='bold 20px monospace'; ctx.fillStyle='#00ff66'; ctx.shadowColor='#00ff66';
  ctx.fillText('Viruses eliminated: '+virusState.score, c.width/2, c.height/2+30);
}

document.getElementById('virus-input').addEventListener('input', function(){
  if(!virusState.active) return;
  const val=this.value.toUpperCase();
  virusState.viruses.forEach(v=>{v.typed=v.code.startsWith(val)?val:v.typed;});
  const match=virusState.viruses.find(v=>v.code===val);
  if(match){
    virusState.viruses.splice(virusState.viruses.indexOf(match),1);
    virusState.score++;
    virusState.infection=Math.max(0,virusState.infection-5);
    document.getElementById('virus-score').textContent=virusState.score;
    document.getElementById('virus-infection').textContent='INFECTION: '+Math.floor(virusState.infection)+'%';
    this.value='';
    virusState.viruses.forEach(v=>v.typed='');
  }
});

// ”” T TIME RIFT ””””””””””””””””””””””””””
const riftWords=['time','flow','mind','word','fast','type','zone','dark','pure','code',
  'star','void','echo','flux','wave','beam','core','fire','soul','loop'];
let riftState={active:false,animFrame:null,score:0,stability:100,currentWord:'',reversed:'',interval:null,particles:[],frameCount:0};

function initRiftCanvas(){
  const c=document.getElementById('rift-canvas'); c.width=c.offsetWidth; c.height=460;
  const ctx=c.getContext('2d');
  const bg=ctx.createRadialGradient(c.width/2,c.height/2,0,c.width/2,c.height/2,c.width/2);
  bg.addColorStop(0,'#0d0020'); bg.addColorStop(1,'#06000f');
  ctx.fillStyle=bg; ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle='rgba(176,96,255,0.4)'; ctx.font='14px monospace'; ctx.textAlign='center';
  ctx.fillText('Press ▶ START', c.width/2, c.height/2);
  document.getElementById('rift-word-display').textContent='';
}

function startRiftGame() {
  checkAuthAndAction(() => {
    _internal_startRiftGame();
  });
}
function _internal_startRiftGame() {
  const c=document.getElementById('rift-canvas'); c.width=c.offsetWidth;
  riftState={active:true,animFrame:null,score:0,stability:100,currentWord:'',reversed:'',interval:null,particles:[],frameCount:0};
  document.getElementById('rift-score').textContent='0';
  document.getElementById('rift-stability').textContent='STABLE: 100%';
  pickRiftWord();
  const inp=document.getElementById('rift-input');
  inp.disabled=false; inp.value=''; inp.focus();
  // Stability decreases over time
  riftState.interval=setInterval(()=>{
    if(!riftState.active)return;
    riftState.stability=Math.max(0,riftState.stability-2);
    document.getElementById('rift-stability').textContent='STABLE: '+riftState.stability+'%';
    if(riftState.stability<=0){endRiftGame();}
  },1500);
  animateRift();
}

function pickRiftWord(){
  riftState.currentWord=riftWords[Math.floor(Math.random()*riftWords.length)];
  riftState.reversed=riftState.currentWord.split('').reverse().join('');
  document.getElementById('rift-word-display').textContent=riftState.reversed.toUpperCase();
  document.getElementById('rift-input').value='';
}

function animateRift(){
  if(!riftState.active) return;
  const c=document.getElementById('rift-canvas'); c.width=c.offsetWidth;
  const ctx=c.getContext('2d'); const W=c.width,H=c.height;
  riftState.frameCount++;

  const bg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,W/2);
  bg.addColorStop(0,`hsl(270,80%,${5+riftState.frameCount%30*0.1}%)`); bg.addColorStop(1,'#06000f');
  ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);

  // Swirling rifts
  const numRifts=Math.ceil((100-riftState.stability)/25)+1;
  for(let r=0;r<numRifts;r++){
    const cx=W*(0.2+r*0.2+0.1*Math.sin(riftState.frameCount*0.02+r)),
          cy=H*(0.3+0.4*Math.cos(riftState.frameCount*0.015+r));
    ctx.save(); ctx.shadowColor='#b060ff'; ctx.shadowBlur=30;
    ctx.strokeStyle=`rgba(176,96,255,${0.3+0.4*Math.sin(riftState.frameCount*0.05+r)})`;
    ctx.lineWidth=2;
    for(let i=0;i<3;i++){
      ctx.beginPath(); ctx.ellipse(cx,cy,30+i*15,15+i*8,riftState.frameCount*0.02+i,0,Math.PI*2); ctx.stroke();
    }
    // Lightning
    if(riftState.frameCount%10===r){
      ctx.strokeStyle='rgba(200,150,255,0.8)'; ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.moveTo(cx,cy);
      let lx=cx,ly=cy;
      for(let s=0;s<6;s++){lx+=Math.random()*20-10;ly+=15;ctx.lineTo(lx,ly);}
      ctx.stroke();
    }
    ctx.restore();
  }

  // Particles
  riftState.particles=riftState.particles.filter(p=>p.life>0);
  riftState.particles.forEach(p=>{
    p.x+=p.vx; p.y+=p.vy; p.life--;
    ctx.fillStyle=`rgba(200,150,255,${p.life/p.maxLife})`; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
  });

  // Stability bar
  const stW=(W-40)*(riftState.stability/100);
  ctx.fillStyle='rgba(0,0,0,0.5)'; ctx.fillRect(20,H-20,W-40,12);
  const stGrad=ctx.createLinearGradient(20,0,20+stW,0);
  stGrad.addColorStop(0,'#ff2200'); stGrad.addColorStop(1,'#b060ff');
  ctx.fillStyle=stGrad; ctx.fillRect(20,H-20,stW,12);

  riftState.animFrame=requestAnimationFrame(animateRift);
}

function endRiftGame(){
  riftState.active=false;
  clearInterval(riftState.interval);
  document.getElementById('rift-input').disabled=true;
  document.getElementById('rift-word-display').textContent='RIFT COLLAPSED';
  showToast('T Time collapsed! '+riftState.score+' rifts sealed');
  const c=document.getElementById('rift-canvas'); const ctx=c.getContext('2d');
  ctx.fillStyle='rgba(0,0,0,0.85)'; ctx.fillRect(0,0,c.width,c.height);
  ctx.font='bold 32px monospace'; ctx.fillStyle='#b060ff'; ctx.textAlign='center'; ctx.shadowColor='#b060ff'; ctx.shadowBlur=30;
  ctx.fillText('T TIME COLLAPSED', c.width/2, c.height/2-20);
  ctx.font='bold 20px monospace'; ctx.fillStyle='#00d4ff'; ctx.shadowColor='#00d4ff';
  ctx.fillText('Rifts sealed: '+riftState.score, c.width/2, c.height/2+30);
}

document.getElementById('rift-input').addEventListener('input', function(){
  if(!riftState.active) return;
  if(this.value.toLowerCase()===riftState.currentWord){
    riftState.score++;
    riftState.stability=Math.min(100,riftState.stability+8);
    document.getElementById('rift-score').textContent=riftState.score;
    document.getElementById('rift-stability').textContent='STABLE: '+riftState.stability+'%';
    // Burst particles
    for(let i=0;i<15;i++) riftState.particles.push({x:200+Math.random()*400,y:200,vx:(Math.random()-0.5)*4,vy:(Math.random()-0.5)*4,r:2,life:40,maxLife:40});
    pickRiftWord();
  }
});

// ”” >> NEON RACER ””””””””””””””””””””””””””
const neonWords=['turbo','boost','nitro','speed','blaze','flash','rapid','hyper','swift','sonic',
  'race','dash','zoom','rush','burn','drift','apex','surge','force','fire'];
let neonState={active:false,animFrame:null,speed:0,dist:0,maxDist:500,lap:1,maxLap:3,frameCount:0,roadOffset:0,currentWord:'',typedWord:'',obstacles:[],particles:[]};

function initNeonCanvas(){
  const c=document.getElementById('neon-canvas'); c.width=c.offsetWidth; c.height=460;
  const ctx=c.getContext('2d');
  ctx.fillStyle='#050005'; ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle='rgba(255,51,102,0.4)'; ctx.font='14px monospace'; ctx.textAlign='center';
  ctx.fillText('Press ▶ START', c.width/2, c.height/2);
}

function startNeonGame() {
  checkAuthAndAction(() => {
    _internal_startNeonGame();
  });
}
function _internal_startNeonGame() {
  const c=document.getElementById('neon-canvas'); c.width=c.offsetWidth;
  neonState={active:true,animFrame:null,speed:0,dist:0,maxDist:500,lap:1,maxLap:3,frameCount:0,roadOffset:0,currentWord:'',typedWord:'',obstacles:[],particles:[]};
  document.getElementById('neon-speed').textContent='0';
  document.getElementById('neon-dist').textContent='0m';
  document.getElementById('neon-lap').textContent='LAP 1/3';
  pickNeonWord();
  const inp=document.getElementById('neon-input');
  inp.disabled=false; inp.value=''; inp.focus();
  animateNeon();
}

function pickNeonWord(){
  neonState.currentWord=neonWords[Math.floor(Math.random()*neonWords.length)];
  neonState.typedWord='';
}

function animateNeon(){
  if(!neonState.active) return;
  const c=document.getElementById('neon-canvas'); c.width=c.offsetWidth;
  const ctx=c.getContext('2d'); const W=c.width,H=c.height;
  neonState.frameCount++;

  // Decelerate
  neonState.speed=Math.max(0,neonState.speed-0.5);
  neonState.dist+=neonState.speed*0.05;
  neonState.roadOffset=(neonState.roadOffset+neonState.speed*0.5)%60;
  document.getElementById('neon-speed').textContent=Math.floor(neonState.speed*2.5);
  document.getElementById('neon-dist').textContent=Math.floor(neonState.dist)+'m';

  // Lap progress
  if(neonState.dist>=neonState.maxDist){
    neonState.dist=0; neonState.lap++;
    if(neonState.lap>neonState.maxLap){endNeonGame(true);return;}
    document.getElementById('neon-lap').textContent='LAP '+neonState.lap+'/3';
    showToast('>> LAP '+neonState.lap+'!');
  }

  // Sky
  const sky=ctx.createLinearGradient(0,0,0,H*0.5);
  sky.addColorStop(0,'#050005'); sky.addColorStop(1,'#1a001a');
  ctx.fillStyle=sky; ctx.fillRect(0,0,W,H*0.5);

  // Neon city silhouette
  ctx.fillStyle='rgba(255,0,100,0.05)';
  for(let b=0;b<W;b+=40){const bh=30+Math.sin(b*0.1)*40;ctx.fillRect(b,H*0.5-bh,35,bh);}

  // Road
  const roadGrad=ctx.createLinearGradient(0,H*0.5,0,H);
  roadGrad.addColorStop(0,'#1a0a1a'); roadGrad.addColorStop(1,'#0d000d');
  ctx.fillStyle=roadGrad; ctx.fillRect(0,H*0.5,W,H*0.5);

  // Road lines (perspective illusion)
  for(let i=0;i<8;i++){
    const y=H*0.5+i*H*0.07+neonState.roadOffset;
    const perspW=50+i*30;
    ctx.fillStyle=`rgba(255,51,102,${0.1+i*0.05})`;
    ctx.fillRect(W/2-perspW/2,y,perspW,4);
  }

  // Side neon lines
  ctx.strokeStyle='rgba(255,51,102,0.6)'; ctx.lineWidth=2;
  ctx.shadowColor='#ff3366'; ctx.shadowBlur=10;
  ctx.beginPath(); ctx.moveTo(W*0.15,H*0.5); ctx.lineTo(W*0.35,H); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(W*0.85,H*0.5); ctx.lineTo(W*0.65,H); ctx.stroke();
  ctx.shadowBlur=0;

  // Car
  const carX=W/2, carY=H-60;
  ctx.save(); ctx.shadowColor='#ff3366'; ctx.shadowBlur=20;
  ctx.font='bold 36px sans-serif'; ctx.textAlign='center'; ctx.fillText('>>',carX,carY); ctx.restore();

  // Speed trail particles
  if(neonState.speed>5){
    neonState.particles.push({x:carX+(Math.random()-0.5)*20,y:carY+10,vx:(Math.random()-0.5)*2,vy:Math.random()*3,life:20,maxLife:20});
  }
  neonState.particles=neonState.particles.filter(p=>p.life>0);
  neonState.particles.forEach(p=>{
    p.x+=p.vx; p.y+=p.vy; p.life--;
    ctx.fillStyle=`rgba(255,51,102,${p.life/p.maxLife*0.7})`; ctx.beginPath(); ctx.arc(p.x,p.y,2,0,Math.PI*2); ctx.fill();
  });

  // Word prompt box
  const word=neonState.currentWord, typed=neonState.typedWord;
  ctx.fillStyle='rgba(0,0,0,0.7)'; ctx.beginPath();
  if(ctx.roundRect)ctx.roundRect(W/2-80,H*0.52,160,32,6);else ctx.rect(W/2-80,H*0.52,160,32);
  ctx.fill();
  ctx.font='bold 14px monospace'; ctx.textAlign='left';
  ctx.fillStyle='#ff3366'; ctx.fillText(typed,W/2-74,H*0.52+22);
  ctx.fillStyle='rgba(255,255,255,0.5)'; ctx.fillText(word.slice(typed.length),W/2-74+typed.length*8.5,H*0.52+22);

  // Lap progress bar
  const lapW=(W-40)*(neonState.dist/neonState.maxDist);
  ctx.fillStyle='rgba(0,0,0,0.5)'; ctx.fillRect(20,H-16,W-40,10);
  const lapGrad=ctx.createLinearGradient(20,0,20+lapW,0);
  lapGrad.addColorStop(0,'#ff0055'); lapGrad.addColorStop(1,'#ff99cc');
  ctx.fillStyle=lapGrad; ctx.fillRect(20,H-16,lapW,10);

  neonState.animFrame=requestAnimationFrame(animateNeon);
}

function endNeonGame(won){
  neonState.active=false;
  document.getElementById('neon-input').disabled=true;
  showToast(won?'>> Race complete! '+Math.floor(neonState.speed*2.5)+' km/h max':'>> Race over!');
  const c=document.getElementById('neon-canvas'); const ctx=c.getContext('2d');
  ctx.fillStyle='rgba(0,0,0,0.85)'; ctx.fillRect(0,0,c.width,c.height);
  ctx.font='bold 36px monospace'; ctx.fillStyle=won?'#ff3366':'#ff8800'; ctx.textAlign='center'; ctx.shadowColor=won?'#ff3366':'#ff8800'; ctx.shadowBlur=30;
  ctx.fillText(won?' FINISH LINE!':'>> RACE OVER', c.width/2, c.height/2-20);
  ctx.font='bold 20px monospace'; ctx.fillStyle='#00d4ff'; ctx.shadowColor='#00d4ff';
  ctx.fillText('Top speed: '+Math.floor(neonState.speed*2.5)+' km/h', c.width/2, c.height/2+30);
}

document.getElementById('neon-input').addEventListener('input', function(){
  if(!neonState.active) return;
  const val=this.value.toLowerCase();
  const word=neonState.currentWord;
  if(word.startsWith(val)) neonState.typedWord=val;
  if(val===word){
    neonState.speed=Math.min(neonState.speed+8,80);
    pickNeonWord();
    this.value='';
  }
});

// ”” Word Rain canvas init ””””””””””””””””””

renderText();
updateStatsBar();

// Apply saved settings on load
(function applySettingsOnLoad() {
  Object.keys(state.settings).forEach(key => {
    const el = document.getElementById('toggle-' + key);
    if (el) el.classList.toggle('on', state.settings[key]);
  });
  // Apply effects
  if (!state.settings.particles) document.getElementById('particles').style.display = 'none';
  if (!state.settings.kb) {
    const kbEl = document.getElementById('keyboard');
    const kbT = document.getElementById('kb-section-title');
    if (kbEl) kbEl.style.display = 'none';
    if (kbT) kbT.style.display = 'none';
  }
  // Apply font size
  if (state.settings.fontSize) {
    document.body.classList.add('fs-' + state.settings.fontSize);
    const box = document.getElementById('typing-box');
    if (box) { box.classList.add('fs-' + state.settings.fontSize); }
    // Mark correct pill
    document.querySelectorAll('.fs-pill').forEach(p => {
      if (p.textContent.toLowerCase().includes(state.settings.fontSize)) p.classList.add('sel');
      else p.classList.remove('sel');
    });
  }
  if (state.settings.showPct) {
    const pp = document.getElementById('progress-pct');
    if (pp) pp.style.display = 'block';
  }
})();
document.getElementById('typing-input').addEventListener('focus', () => {
  document.getElementById('typing-box').classList.add('focused');
});
document.getElementById('typing-input').addEventListener('blur', () => {
  if (!state.started) document.getElementById('typing-box').classList.remove('focused');
});

// ESC to go home is handled in the global keydown capture listener above

// Resize handler
window.addEventListener('resize', () => {
  if (document.getElementById('page-games').classList.contains('active')) resizeRainCanvas();
});

showToast('Welcome to TypingGuru! Press any key to start typing ⚡');

// 
//  THEMES ENGINE 0 10 Themes + Custom Builder
// 

const THEMES = [
  {
    id: 'cyberwave',
    name: 'CyberWave',
    author: 'Default',
    preview: { bg: '#020408', panel: '#0a1520', accent: '#00d4ff', accent3: '#b060ff', text: '#c8e0f0' },
    vars: {
      '--bg':'#020408','--bg2':'#060d14','--bg3':'#0a1520',
      '--panel':'rgba(10,25,40,0.85)','--border':'rgba(0,200,255,0.15)',
      '--accent':'#00d4ff','--accent2':'#00aacc','--accent3':'#b060ff',
      '--cyan':'#00d4ff','--cyan2':'#00aacc',
      '--text':'#c8e0f0','--text2':'#6090aa',
      '--green':'#00ff88','--red':'#ff3366','--gold':'#ffd700','--purple':'#b060ff',
      '--glow':'0 0 20px rgba(0,212,255,0.4)','--glow2':'0 0 40px rgba(0,212,255,0.2)',
      '--font-display':"'Orbitron', sans-serif",'--font-body':"'Rajdhani', sans-serif",
      '--font-mono':"'Space Mono', monospace",
      '--bg-pattern':'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)',
      '--bg-size':'40px 40px','--radius':'12px'
    }
  },
  {
    id: 'bloodmoon',
    name: 'Blood Moon',
    author: 'Dark Red',
    preview: { bg: '#0d0205', panel: '#1a0508', accent: '#ff2244', accent3: '#ff6600', text: '#ffd0d0' },
    vars: {
      '--bg':'#0d0205','--bg2':'#150307','--bg3':'#1a0508',
      '--panel':'rgba(30,5,10,0.9)','--border':'rgba(255,34,68,0.2)',
      '--accent':'#ff2244','--accent2':'#cc1133','--accent3':'#ff6600',
      '--cyan':'#ff2244','--cyan2':'#cc1133',
      '--text':'#ffd0d0','--text2':'#996070',
      '--green':'#ff6600','--red':'#ff0033','--gold':'#ff9900','--purple':'#cc2255',
      '--glow':'0 0 20px rgba(255,34,68,0.5)','--glow2':'0 0 40px rgba(255,34,68,0.2)',
      '--font-display':"'Orbitron', sans-serif",'--font-body':"'Rajdhani', sans-serif",
      '--font-mono':"'Space Mono', monospace",
      '--bg-pattern':'linear-gradient(rgba(255,34,68,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,34,68,0.04) 1px, transparent 1px)',
      '--bg-size':'40px 40px','--radius':'12px'
    }
  },
  {
    id: 'forest',
    name: 'Deep Forest',
    author: 'Nature',
    preview: { bg: '#010a04', panel: '#071408', accent: '#00e664', accent3: '#44bb00', text: '#c0f0d0' },
    vars: {
      '--bg':'#010a04','--bg2':'#040e06','--bg3':'#071408',
      '--panel':'rgba(5,20,8,0.9)','--border':'rgba(0,230,100,0.15)',
      '--accent':'#00e664','--accent2':'#00bb50','--accent3':'#44bb00',
      '--cyan':'#00e664','--cyan2':'#00bb50',
      '--text':'#c0f0d0','--text2':'#508060',
      '--green':'#00ff88','--red':'#ff4422','--gold':'#aaff00','--purple':'#00bb50',
      '--glow':'0 0 20px rgba(0,230,100,0.4)','--glow2':'0 0 40px rgba(0,230,100,0.2)',
      '--font-display':"'Cinzel', serif",'--font-body':"'Rajdhani', sans-serif",
      '--font-mono':"'Fira Code', monospace",
      '--bg-pattern':'linear-gradient(rgba(0,230,100,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,230,100,0.03) 1px, transparent 1px)',
      '--bg-size':'40px 40px','--radius':'8px'
    }
  },
  {
    id: 'royalgold',
    name: 'Royal Gold',
    author: 'Luxury',
    preview: { bg: '#090601', panel: '#1a1200', accent: '#ffd700', accent3: '#ff9900', text: '#fff5cc' },
    vars: {
      '--bg':'#090601','--bg2':'#100900','--bg3':'#1a1200',
      '--panel':'rgba(25,18,0,0.92)','--border':'rgba(255,215,0,0.2)',
      '--accent':'#ffd700','--accent2':'#ccaa00','--accent3':'#ff9900',
      '--cyan':'#ffd700','--cyan2':'#ccaa00',
      '--text':'#fff5cc','--text2':'#998840',
      '--green':'#88ff44','--red':'#ff4422','--gold':'#ffd700','--purple':'#cc8800',
      '--glow':'0 0 25px rgba(255,215,0,0.5)','--glow2':'0 0 50px rgba(255,215,0,0.2)',
      '--font-display':"'Cinzel', serif",'--font-body':"'DM Serif Display', serif",
      '--font-mono':"'Fira Code', monospace",
      '--bg-pattern':'linear-gradient(rgba(255,215,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.03) 1px, transparent 1px)',
      '--bg-size':'60px 60px','--radius':'4px'
    }
  },
  {
    id: 'snowwhite',
    name: 'Snow White',
    author: 'Light',
    preview: { bg: '#f4f6f9', panel: '#ffffff', accent: '#4488ff', accent3: '#8844ff', text: '#1a2030' },
    vars: {
      '--bg':'#f0f2f7','--bg2':'#e8eaf0','--bg3':'#ffffff',
      '--panel':'rgba(255,255,255,0.9)','--border':'rgba(68,136,255,0.2)',
      '--accent':'#4488ff','--accent2':'#2266dd','--accent3':'#8844ff',
      '--cyan':'#4488ff','--cyan2':'#2266dd',
      '--text':'#1a2030','--text2':'#7080a0',
      '--green':'#00bb66','--red':'#ee3355','--gold':'#ffaa00','--purple':'#8844ff',
      '--glow':'0 0 20px rgba(68,136,255,0.3)','--glow2':'0 0 40px rgba(68,136,255,0.15)',
      '--font-display':"'Syne', sans-serif",'--font-body':"'Inter', sans-serif",
      '--font-mono':"'JetBrains Mono', monospace",
      '--bg-pattern':'linear-gradient(rgba(68,136,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(68,136,255,0.04) 1px, transparent 1px)',
      '--bg-size':'30px 30px','--radius':'16px'
    }
  },
  {
    id: 'retro8bit',
    name: 'Retro 8-Bit',
    author: 'Pixel',
    preview: { bg: '#000000', panel: '#001100', accent: '#00ff00', accent3: '#ffff00', text: '#00ff00' },
    vars: {
      '--bg':'#000000','--bg2':'#001100','--bg3':'#002200',
      '--panel':'rgba(0,20,0,0.95)','--border':'rgba(0,255,0,0.3)',
      '--accent':'#00ff00','--accent2':'#00cc00','--accent3':'#ffff00',
      '--cyan':'#00ff00','--cyan2':'#00cc00',
      '--text':'#00ff00','--text2':'#005500',
      '--green':'#00ff00','--red':'#ff0000','--gold':'#ffff00','--purple':'#ff00ff',
      '--glow':'0 0 10px rgba(0,255,0,0.8)','--glow2':'0 0 20px rgba(0,255,0,0.4)',
      '--font-display':"'Press Start 2P', monospace",'--font-body':"'Press Start 2P', monospace",
      '--font-mono':"'Space Mono', monospace",
      '--bg-pattern':'linear-gradient(rgba(0,255,0,0.05) 2px, transparent 2px), linear-gradient(90deg, rgba(0,255,0,0.05) 2px, transparent 2px)',
      '--bg-size':'20px 20px','--radius':'0px'
    }
  },
  {
    id: 'sunset',
    name: 'Synthwave Sunset',
    author: 'Vaporwave',
    preview: { bg: '#0d0020', panel: '#1a0035', accent: '#ff00cc', accent3: '#ff6600', text: '#ffccee' },
    vars: {
      '--bg':'#0d0020','--bg2':'#12002a','--bg3':'#1a0035',
      '--panel':'rgba(30,0,60,0.85)','--border':'rgba(255,0,204,0.2)',
      '--accent':'#ff00cc','--accent2':'#cc0099','--accent3':'#ff6600',
      '--cyan':'#ff00cc','--cyan2':'#cc0099',
      '--text':'#ffccee','--text2':'#996688',
      '--green':'#00ffcc','--red':'#ff3300','--gold':'#ffcc00','--purple':'#cc00ff',
      '--glow':'0 0 25px rgba(255,0,204,0.5)','--glow2':'0 0 50px rgba(255,0,204,0.2)',
      '--font-display':"'Bebas Neue', sans-serif",'--font-body':"'Syne', sans-serif",
      '--font-mono':"'Fira Code', monospace",
      '--bg-pattern':'repeating-linear-gradient(0deg, rgba(255,0,204,0.04), rgba(255,0,204,0.04) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(90deg, rgba(255,102,0,0.04), rgba(255,102,0,0.04) 1px, transparent 1px, transparent 30px)',
      '--bg-size':'30px 30px','--radius':'6px'
    }
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    author: 'Minimal Dark',
    preview: { bg: '#0c0c0e', panel: '#18181c', accent: '#e8e8e8', accent3: '#888888', text: '#e0e0e0' },
    vars: {
      '--bg':'#0c0c0e','--bg2':'#111114','--bg3':'#18181c',
      '--panel':'rgba(24,24,28,0.95)','--border':'rgba(255,255,255,0.08)',
      '--accent':'#e8e8e8','--accent2':'#cccccc','--accent3':'#888888',
      '--cyan':'#e8e8e8','--cyan2':'#cccccc',
      '--text':'#e0e0e0','--text2':'#555560',
      '--green':'#88ff88','--red':'#ff6666','--gold':'#ffdd88','--purple':'#cc88ff',
      '--glow':'0 0 20px rgba(255,255,255,0.15)','--glow2':'0 0 40px rgba(255,255,255,0.05)',
      '--font-display':"'Syne', sans-serif",'--font-body':"'Inter', sans-serif",
      '--font-mono':"'JetBrains Mono', monospace",
      '--bg-pattern':'none','--bg-size':'0','--radius':'6px'
    }
  },
  {
    id: 'sakura',
    name: 'Sakura',
    author: 'Pink Bloom',
    preview: { bg: '#1a0510', panel: '#2d0a1e', accent: '#ff88bb', accent3: '#ff44aa', text: '#ffeef6' },
    vars: {
      '--bg':'#1a0510','--bg2':'#220818','--bg3':'#2d0a1e',
      '--panel':'rgba(45,10,30,0.88)','--border':'rgba(255,136,187,0.2)',
      '--accent':'#ff88bb','--accent2':'#ff5599','--accent3':'#ff44aa',
      '--cyan':'#ff88bb','--cyan2':'#ff5599',
      '--text':'#ffeef6','--text2':'#996688',
      '--green':'#ff88cc','--red':'#ff2266','--gold':'#ffaacc','--purple':'#dd55ff',
      '--glow':'0 0 20px rgba(255,136,187,0.4)','--glow2':'0 0 40px rgba(255,136,187,0.15)',
      '--font-display':"'Cinzel', serif",'--font-body':"'DM Serif Display', serif",
      '--font-mono':"'Fira Code', monospace",
      '--bg-pattern':'radial-gradient(circle, rgba(255,136,187,0.05) 1px, transparent 1px)',
      '--bg-size':'25px 25px','--radius':'20px'
    }
  },
  {
    id: 'arctic',
    name: 'Arctic Ice',
    author: 'Cool Blue',
    preview: { bg: '#f8fbff', panel: '#eef4ff', accent: '#0066ff', accent3: '#0099ff', text: '#0a1a2a' },
    vars: {
      '--bg':'#f0f5ff','--bg2':'#e8f0ff','--bg3':'#ddeeff',
      '--panel':'rgba(220,235,255,0.85)','--border':'rgba(0,102,255,0.15)',
      '--accent':'#0066ff','--accent2':'#0044cc','--accent3':'#0099ff',
      '--cyan':'#0066ff','--cyan2':'#0044cc',
      '--text':'#0a1a2a','--text2':'#5577aa',
      '--green':'#0099aa','--red':'#dd2244','--gold':'#ff8800','--purple':'#6644ff',
      '--glow':'0 0 20px rgba(0,102,255,0.3)','--glow2':'0 0 40px rgba(0,102,255,0.1)',
      '--font-display':"'Syne', sans-serif",'--font-body':"'Inter', sans-serif",
      '--font-mono':"'JetBrains Mono', monospace",
      '--bg-pattern':'linear-gradient(rgba(0,102,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.03) 1px, transparent 1px)',
      '--bg-size':'35px 35px','--radius':'14px'
    }
  }
];

let activeThemeId = 'cyberwave';
let customThemeVars = {};

function buildThemesGrid() {
  const grid = document.getElementById('themes-grid');
  if (!grid) return;
  grid.innerHTML = '';
  THEMES.forEach(t => {
    const p = t.preview;
    const card = document.createElement('div');
    card.className = 'theme-card' + (t.id === activeThemeId ? ' active-theme' : '');
    card.id = 'tc-' + t.id;
    card.onclick = () => applyTheme(t.id);

    // Generate dot pattern for bg
    const patternStyle = t.id === 'retro8bit' ? 'background:repeating-linear-gradient(0deg,rgba(0,255,0,0.1),rgba(0,255,0,0.1) 2px,transparent 2px,transparent 10px);' :
      t.id === 'obsidian' ? 'background:'+p.bg+';' : '';

    card.innerHTML = `
      <div class="theme-preview" style="background:${p.bg}; ${patternStyle}">
        <div class="theme-preview-line" style="top:40%;left:0;right:0;background:${p.accent};opacity:0.15;"></div>
        <div class="theme-preview-text" style="color:${p.accent}; font-family:monospace;">
          ${t.id==='retro8bit'?'> TYPE_FAST':'the quick brown fox jumps'}
        </div>
        <div style="position:absolute;top:36px;left:12px;right:12px;height:2px;border-radius:2px;background:${p.accent};opacity:0.3;"></div>
        <div style="position:absolute;top:46px;left:12px;width:60%;height:2px;border-radius:2px;background:${p.text};opacity:0.12;"></div>
        <div style="position:absolute;top:56px;left:12px;width:40%;height:2px;border-radius:2px;background:${p.text};opacity:0.08;"></div>
        <div class="theme-preview-bar" style="background:${p.panel}; border-top: 1px solid ${p.accent}22;">
          <div class="tpb-dot" style="background:${p.accent};box-shadow:0 0 6px ${p.accent}88;"></div>
          <div class="tpb-dot" style="background:${p.accent3};opacity:0.6;"></div>
          <div class="tpb-dot" style="background:${p.text};opacity:0.3;"></div>
        </div>
      </div>
      <div class="theme-info" style="background:${p.panel}; border:1px solid ${p.accent}33; border-top:none;">
        <div class="theme-name" style="color:${p.accent};">${t.name}</div>
        <div class="theme-author" style="color:${p.text};">${t.author}</div>
      </div>`;
    grid.appendChild(card);
  });
}

function applyTheme(id) {
  const theme = THEMES.find(t => t.id === id);
  if (!theme) return;
  activeThemeId = id;

  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));

  // Update cursor glow color
  const accentRaw = theme.vars['--accent'];
  document.getElementById('cursor').style.background = accentRaw;
  document.getElementById('cursor').style.boxShadow = `0 0 15px ${accentRaw}, 0 0 30px ${accentRaw}44`;

  // Update particle color
  document.querySelectorAll('.particle').forEach(p => p.style.background = accentRaw);

  // Update active theme card
  document.querySelectorAll('.theme-card').forEach(c => c.classList.remove('active-theme'));
  const card = document.getElementById('tc-' + id);
  if (card) card.classList.add('active-theme');

  // Sync custom builder color pickers to match new theme
  const syncMap = {
    'bg': theme.vars['--bg'],
    'panel': (theme.vars['--bg3'] || theme.vars['--bg2']),
    'accent': theme.vars['--accent'],
    'accent3': theme.vars['--accent3'],
    'text': theme.vars['--text'],
    'text2': theme.vars['--text2'],
    'green': theme.vars['--green'],
    'red': theme.vars['--red']
  };
  Object.entries(syncMap).forEach(([key, val]) => {
    const cleanVal = val.startsWith('#') ? val : '#000000';
    const cp = document.getElementById('cp-' + key);
    const sw = document.getElementById('sw-' + key);
    const hx = document.getElementById('hx-' + key);
    if (cp) cp.value = cleanVal;
    if (sw) sw.style.background = cleanVal;
    if (hx) hx.textContent = cleanVal;
  });

  try { localStorage.setItem('tg_theme', id); } catch(e) {}
  showToast(`🎨 Theme: ${theme.name}`);
}

// ””” Custom Builder ”””””””””””””””””””””””””””
const customVars = {
  bg: '#020408', panel: '#0a1928', accent: '#00d4ff', accent3: '#b060ff',
  text: '#c8e0f0', text2: '#6090aa', green: '#00ff88', red: '#ff3366'
};

function updateCustomColor(key, val) {
  customVars[key] = val;
  const sw = document.getElementById('sw-' + key);
  const hx = document.getElementById('hx-' + key);
  if (sw) sw.style.background = val;
  if (hx) hx.textContent = val;

  // Live-apply immediately
  const root = document.documentElement;
  if (key === 'bg') { root.style.setProperty('--bg', val); root.style.setProperty('--bg2', val); }
  if (key === 'panel') root.style.setProperty('--panel', hexToRgba(val, 0.88));
  if (key === 'accent') {
    root.style.setProperty('--accent', val);
    root.style.setProperty('--accent2', shadeColor(val, -20));
    root.style.setProperty('--cyan', val);
    root.style.setProperty('--cyan2', shadeColor(val, -20));
    root.style.setProperty('--glow', `0 0 20px ${hexToRgba(val, 0.4)}`);
    document.getElementById('cursor').style.background = val;
    document.getElementById('cursor').style.boxShadow = `0 0 15px ${val}, 0 0 30px ${hexToRgba(val,0.4)}`;
  }
  if (key === 'accent3') { root.style.setProperty('--accent3', val); root.style.setProperty('--purple', val); }
  if (key === 'text') root.style.setProperty('--text', val);
  if (key === 'text2') root.style.setProperty('--text2', val);
  if (key === 'green') root.style.setProperty('--green', val);
  if (key === 'red') root.style.setProperty('--red', val);

  // Update border color based on accent
  if (key === 'accent') root.style.setProperty('--border', hexToRgba(val, 0.18));

  updateBuilderPreview();
  activeThemeId = 'custom';
  document.querySelectorAll('.theme-card').forEach(c => c.classList.remove('active-theme'));
}

function pickFont(type, family, el) {
  const root = document.documentElement;
  const key = type === 'display' ? '--font-display' : type === 'body' ? '--font-body' : '--font-mono';
  root.style.setProperty(key, family);
  // Update button body font live
  if (type === 'body') document.body.style.fontFamily = family;
  // Deselect siblings
  const container = document.getElementById('fp-' + type);
  if (container) container.querySelectorAll('.font-pill').forEach(p => p.classList.remove('sel'));
  el.classList.add('sel');
  updateBuilderPreview();
  activeThemeId = 'custom';
  showToast('🔼 Font updated');
}

function pickRadius(val, el) {
  document.documentElement.style.setProperty('--radius', val);
  el.closest('div').querySelectorAll('.font-pill').forEach(p => p.classList.remove('sel'));
  el.classList.add('sel');
  activeThemeId = 'custom';
}

function pickPattern(type, el) {
  const patterns = {
    grid: { pat: 'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)', sz: '40px 40px' },
    dots: { pat: 'radial-gradient(circle, rgba(0,212,255,0.15) 1px, transparent 1px)', sz: '25px 25px' },
    diagonal: { pat: 'repeating-linear-gradient(45deg, rgba(0,212,255,0.03), rgba(0,212,255,0.03) 1px, transparent 1px, transparent 20px)', sz: '20px 20px' },
    none: { pat: 'none', sz: '0' }
  };
  const p = patterns[type] || patterns.none;
  // Use accent color in pattern
  const accent = customVars.accent || '#00d4ff';
  const patColored = p.pat.replace(/rgba\(0,212,255/g, hexToRgba(accent, 1).replace('1)', '').replace('rgba(','rgba(').split(',').slice(0,3).join(','));
  document.documentElement.style.setProperty('--bg-pattern', p.pat);
  document.documentElement.style.setProperty('--bg-size', p.sz);
  el.closest('div').querySelectorAll('.font-pill').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
  activeThemeId = 'custom';
}

function updateBuilderPreview() {
  const correctEl = document.getElementById('bp-prev-correct');
  if (correctEl) correctEl.style.color = customVars.accent || 'var(--accent)';
}

function applyCustomTheme() {
  showToast('✧ Custom theme applied!');
  activeThemeId = 'custom';
  document.querySelectorAll('.theme-card').forEach(c => c.classList.remove('active-theme'));
}

function saveCustomTheme() {
  try {
    localStorage.setItem('tg_custom_theme', JSON.stringify({
      vars: {
        '--bg': customVars.bg,
        '--bg2': customVars.bg,
        '--bg3': customVars.panel,
        '--panel': hexToRgba(customVars.panel, 0.88),
        '--border': hexToRgba(customVars.accent, 0.18),
        '--accent': customVars.accent,
        '--accent2': shadeColor(customVars.accent, -20),
        '--accent3': customVars.accent3,
        '--cyan': customVars.accent,
        '--cyan2': shadeColor(customVars.accent, -20),
        '--text': customVars.text,
        '--text2': customVars.text2,
        '--green': customVars.green,
        '--red': customVars.red,
        '--glow': `0 0 20px ${hexToRgba(customVars.accent, 0.4)}`,
        '--glow2': `0 0 40px ${hexToRgba(customVars.accent, 0.2)}`,
      }
    }));
    showToast('💾 Custom theme saved!');
  } catch(e) { showToast('Save failed'); }
}

function resetToDefault() {
  applyTheme('cyberwave');
  // Reset custom builder pickers
  Object.assign(customVars, { bg:'#020408', panel:'#0a1928', accent:'#00d4ff', accent3:'#b060ff', text:'#c8e0f0', text2:'#6090aa', green:'#00ff88', red:'#ff3366' });
  Object.entries(customVars).forEach(([key, val]) => {
    const cp = document.getElementById('cp-' + key);
    const sw = document.getElementById('sw-' + key);
    const hx = document.getElementById('hx-' + key);
    if (cp) cp.value = val;
    if (sw) sw.style.background = val;
    if (hx) hx.textContent = val;
  });
  showToast('↺ Reset to default theme');
}

function randomizeTheme() {
  const randomHex = () => '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
  const randomDark = () => {
    const r = Math.floor(Math.random()*40);
    const g = Math.floor(Math.random()*40);
    const b = Math.floor(Math.random()*40);
    return '#' + [r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('');
  };
  const randomBright = () => {
    const hue = Math.floor(Math.random()*360);
    return hslToHex(hue, 80+Math.random()*20, 50+Math.random()*20);
  };

  customVars.bg = randomDark();
  customVars.accent = randomBright();
  customVars.accent3 = randomBright();
  customVars.text = '#e8e8e8';
  customVars.text2 = '#888888';

  Object.entries(customVars).forEach(([key, val]) => {
    updateCustomColor(key, val);
    const cp = document.getElementById('cp-' + key);
    if (cp) cp.value = val;
  });
  showToast('🎲 Randomized theme!');
}

// ””” Utilities ””””””””””””””””””””””””””””””””
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}
function shadeColor(hex, pct) {
  const n = parseInt(hex.slice(1),16);
  const r = Math.min(255,Math.max(0,((n>>16)&0xff)+pct));
  const g = Math.min(255,Math.max(0,((n>>8)&0xff)+pct));
  const b = Math.min(255,Math.max(0,(n&0xff)+pct));
  return '#'+[r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('');
}
function hslToHex(h, s, l) {
  s /= 100; l /= 100;
  const a = s * Math.min(l, 1-l);
  const f = n => { const k=(n+h/30)%12; return l-a*Math.max(Math.min(k-3,9-k,1),-1); };
  return '#' + [f(0),f(8),f(4)].map(x=>Math.round(x*255).toString(16).padStart(2,'0')).join('');
}

// ””” Init themes on settings page open ””””””””
// Patch: rebuild theme grid whenever settings page is shown
let lastPage = 'home';
window.showPage = function(id) {
  const currentPage = document.querySelector('.page.active')?.id?.replace('page-', '') || 'home';
  if (currentPage !== id) lastPage = currentPage;
  if (typeof closeMobileMenu === 'function') closeMobileMenu();
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const pageEl = document.getElementById('page-' + id);
  if (pageEl) pageEl.classList.add('active');
  const btns = ['home','test','games','leaderboard','settings'];
  const idx = btns.indexOf(id);
  if (idx >= 0) document.querySelectorAll('.nav-btn')[idx].classList.add('active');
  if (id === 'leaderboard') buildLeaderboard();
  if (id === 'games') showGameHub();
  if (id === 'settings') setTimeout(buildThemesGrid, 60);
  if (id === 'course') initCoursePage();
  if (id === 'trainer') initTrainerPage();
  if (id === 'experiment') {
    document.getElementById('page-exp-arena').style.display = 'none';
    expActive = false;
    clearInterval(expState?.interval);
    cancelAnimationFrame(expState?.animFrame);
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
  window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Load saved theme on startup
  (function loadSavedTheme() {
  try {
    const saved = localStorage.getItem('tg_theme');
    if (saved && THEMES.find(t => t.id === saved)) applyTheme(saved);
    else {
      const custom = JSON.parse(localStorage.getItem('tg_custom_theme') || 'null');
      if (custom && custom.vars) {
        const root = document.documentElement;
        Object.entries(custom.vars).forEach(([k,v]) => root.style.setProperty(k,v));
        activeThemeId = 'custom';
      }
    }
    if (typeof lucide !== 'undefined') lucide.createIcons();
  } catch(e) {}
  })();

// AUTH FUNCTIONS
let currentUser = null;
let currentAuthTab = 'login';

function openAuthModal() {
  document.getElementById('auth-modal').classList.add('active');
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.remove('active');
}

function switchAuthTab(tab) {
  currentAuthTab = tab;
  document.getElementById('tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('tab-signup').classList.toggle('active', tab === 'signup');
  document.getElementById('signup-fields').style.display = tab === 'signup' ? 'block' : 'none';
  document.getElementById('auth-submit-text').textContent = tab === 'login' ? 'Login' : 'Sign Up';
}

function checkAuthAndAction(callback) {
  if (currentUser) {
    callback();
  } else {
    openAuthModal();
    window.pendingAction = callback;
  }
}

async function handleAuth(e) {
  e.preventDefault();
  const username = document.getElementById('auth-username').value;
  const email = document.getElementById('auth-email').value;
  const password = document.getElementById('auth-password').value;
  
  const endpoint = currentAuthTab === 'login' ? '/api/auth/login' : '/api/auth/register';
  const body = currentAuthTab === 'login' ? { email, password } : { username, email, password };

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    
    const data = await res.json();
    if (data.success) {
      currentUser = data.user;
      localStorage.setItem('tg_token', data.token);
      updateAuthUI();
      closeAuthModal();
      if (window.pendingAction) {
        window.pendingAction();
        window.pendingAction = null;
      }
      showToast('Welcome, ' + currentUser.username + '!', 'success');
    } else {
      showToast(data.message || 'Authentication failed', 'error');
    }
  } catch (err) {
    showToast('Server Error. Please try again later.', 'error');
  }
}

function updateAuthUI() {
  const authNav = document.getElementById('auth-nav-btn');
  if (currentUser) {
    const upgradeBtn = currentUser.plan === 'basic' ? 
      `<button class="nav-btn" onclick="openPlansModal()" style="background:linear-gradient(90deg, #ffd700, #ff8800); color:#000; font-weight:800; border:none;"><i data-lucide="zap"></i> UPGRADE</button>` : 
      `<button class="nav-btn" style="background:rgba(0,212,255,0.1); color:var(--accent); border:1px solid var(--accent); cursor:default;"><i data-lucide="shield-check"></i> PRO GURU</button>`;
    
    authNav.innerHTML = `
      ${upgradeBtn}
      <button class="nav-btn btn-primary" onclick="logout()"><i data-lucide="log-out"></i> Logout (${currentUser.username})</button>
    `;
  } else {
    authNav.innerHTML = `<button class="nav-btn btn-primary" onclick="openAuthModal()"><i data-lucide="user"></i> Login</button>`;
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function logout() {
  currentUser = null;
  localStorage.removeItem('tg_token');
  updateAuthUI();
  showToast('Logged out successfully', 'info');
}

// Check for token on load
async function checkCurrent() {
  const token = localStorage.getItem('tg_token');
  if (!token) return;
  try {
    const res = await fetch('https://typenova-backend-p5hu.onrender.com/api/auth/login', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await res.json();
    if (data.success) {
      currentUser = data.user;
      updateAuthUI();
    }
  } catch (e) {}
}
checkCurrent();


// LOGOUT MODAL FUNCTIONS
function openLogoutModal() {
  document.getElementById('logout-modal').classList.add('active');
}

function closeLogoutModal() {
  document.getElementById('logout-modal').classList.remove('active');
}

function confirmLogout() {
  currentUser = null;
  localStorage.removeItem('tg_token');
  updateAuthUI();
  closeLogoutModal();
  showToast('Logged out successfully', 'info');
}

// Override original logout
function logout() {
  openLogoutModal();
}


// PLANS MODAL FUNCTIONS
function openPlansModal() {
  document.getElementById('plans-modal').classList.add('active');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closePlansModal() {
  document.getElementById('plans-modal').classList.remove('active');
}

async function handleUpgrade() {
  const btn = document.querySelector('.plan-btn.pro-btn');
  btn.innerHTML = '🎉 Activating PRO...';
  btn.disabled = true;
  
  try {
    const res = await fetch('https://typenova-backend-p5hu.onrender.com/api/auth/login', {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${localStorage.getItem('tg_token')}`,
        'Content-Type': 'application/json'
      }
    });
    
    const data = await res.json();
    if (data.success) {
      currentUser.plan = 'pro';
      localStorage.setItem('tg_user', JSON.stringify(currentUser));
      updateAuthUI();
      closePlansModal();
      showToast('🎉 CONGRATULATIONS! You are now a PRO GURU! 👑', 'success');
      
      launchConfetti();
    } else {
      showToast('Upgrade failed. Please try again.', 'error');
      btn.innerHTML = 'Upgrade to Pro';
      btn.disabled = false;
    }
  } catch(e) {
    showToast('Upgrade failed. Please try again.', 'error');
    btn.innerHTML = 'Upgrade to Pro';
    btn.disabled = false;
  }
}

function launchConfetti() {
  const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ff9f43'];
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}vw;
      top: -10px;
      animation: confetti-fall ${2 + Math.random() * 2}s linear forwards;
      z-index: 10000;
      border-radius: 50%;
    `;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }
  
  if (!document.getElementById('confetti-style')) {
    const style = document.createElement('style');
    style.id = 'confetti-style';
    style.textContent = `
      @keyframes confetti-fall {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
}


// PRO ACCESS SYSTEM
const PRO_FEATURES = {
  'aiforge': { name: 'AI Forge', icon: '🤖' },
  'ghost': { name: 'Ghost Race', icon: '!' },
  'code': { name: 'Code Typing', icon: '💻' },
  'trainer': { name: 'Weak Key Trainer', icon: '🧠' },
  'precision': { name: 'Precision Mode', icon: '🎯' },
  'burst': { name: 'Speed Burst', icon: '⚡' },
  'course': { name: 'TypeMaster Course', icon: '🎓' },
  'experiment': { name: 'Experiment Mode', icon: '🧪' },
  'hack': { name: 'Cyber Hack', icon: '#' },
  'asteroid': { name: 'Asteroid Field', icon: 'o' },
  'virus': { name: 'Virus Hunt', icon: 'v' },
  'rift': { name: 'Time Rift', icon: 'T' },
  'neon': { name: 'Neon Racer', icon: '>>' },
  'zombie': { name: 'Zombie Escape', icon: 'Z' },
  'street': { name: 'Street Racing', icon: '🚗' },
  'space': { name: 'Space Mission', icon: '^' },
  'sub': { name: 'Deep Sea Sub', icon: '~' }
};

function isProUser() {
  return currentUser && currentUser.plan === 'pro';
}

function checkProAccess(feature) {
  if (isProUser()) return true;
  showProLockModal(feature);
  return false;
}

function checkProAccessAndNavigate(feature, navigateFn) {
  if (isProUser()) {
    navigateFn();
  } else {
    showProLockModal(feature);
  }
}

function showProLockModal(feature) {
  const modal = document.getElementById('pro-lock-modal');
  const featureData = PRO_FEATURES[feature] || { name: 'This Feature', icon: '🔒' };
  
  document.getElementById('pro-lock-icon').textContent = featureData.icon;
  document.getElementById('pro-lock-name').textContent = featureData.name;
  document.getElementById('pro-lock-feature-desc').textContent = `${featureData.name} is available exclusively for PRO GURU members.`;
  
  modal.classList.add('active');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeProLockModal() {
  document.getElementById('pro-lock-modal').classList.remove('active');
}

function goToUpgradeFromLock() {
  closeProLockModal();
  openPlansModal();
}

