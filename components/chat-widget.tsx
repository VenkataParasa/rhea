"use client";
import { useState, useRef, useEffect } from "react";

type Message = { role: "bot" | "user"; text: string };

const QUICK_PROMPTS = [
  "What programs are offered?",
  "How do I register?",
  "Testing Center hours?",
  "Rent a space",
];

const BOT_RESPONSES: [RegExp, string][] = [
  [
    /program|degree|course|major|study/i,
    'RHEC offers programs from 10 member institutions — from associate degrees and GED prep to doctoral programs. Visit our <a href="/degrees-programs">Program Finder</a> to filter by subject or institution.',
  ],
  [
    /register|enroll|admission|apply|sign.?up/i,
    'Enrollment is handled directly by each member institution. Visit the <a href="/degrees-programs/member-institutions">Member Institutions</a> page to find the school offering your program, then contact them to apply.',
  ],
  [
    /test|exam|proctoring|ged|certification/i,
    'The RHEC Testing Center offers proctored exams, GED testing, and certification testing. Hours are Mon–Thu 8 AM–7 PM, Fri 8 AM–5 PM. <a href="/testing-center">See full details →</a>',
  ],
  [
    /park|lot|garage|car/i,
    'RHEC has two surface lots (Lot A & B) and access to the adjacent Campbell Court garage. Student parking is available during class hours. <a href="/about#directions">Directions & Parking →</a>',
  ],
  [
    /hour|open|close|schedule|time/i,
    "The building is generally open Mon–Thu 7 AM–9 PM and Fri 7 AM–6 PM. Hours may vary on holidays. Call (540) 767-6000 to confirm.",
  ],
  [
    /rent|space|room|conference|classroom|event/i,
    'RHEC has classrooms, computer labs, and conference rooms available for rent. <a href="/rent-a-space">View spaces and inquire →</a>',
  ],
  [
    /library|book|resource/i,
    'The RHEC Library provides access to research databases, study space, and reference support. <a href="/student-services#library">Library services →</a>',
  ],
  [
    /contact|phone|email|reach|address/i,
    'You can reach RHEC at (540) 767-6000 or visit us at 108 N. Jefferson Street, Roanoke, VA 24016. <a href="/contact">Full contact directory →</a>',
  ],
  [
    /tuition|cost|price|financial|aid|scholarship/i,
    'Tuition and financial aid are managed by each member institution. RHEC Foundation scholarships are available for qualifying students. <a href="/foundation">Learn about scholarships →</a>',
  ],
  [
    /health|nursing|pharmacy|medical|sovah|vcu|acp/i,
    'RHEC hosts several health programs: Radford University nursing, ACP Doctor of Pharmacy, Sovah Radiologic Technology, and VCU Nurse Anesthesia. <a href="/degrees-programs?subject=Health+Sciences">Health Sciences →</a>',
  ],
  [
    /workforce|job|career|osha|training|certificate/i,
    'RHEC and TAP offer workforce development, OSHA safety training, and career readiness programs. <a href="/degrees-programs?subject=Workforce">Workforce Training →</a>',
  ],
  [
    /wifi|internet|computer|lab|tech/i,
    'The RHEC Computer Lab has 25 stations with Windows PCs, printing, and high-speed internet — open to all registered students. <a href="/student-services#computer-lab">Computer Lab →</a>',
  ],
  [
    /hello|hi|hey|good morning|good afternoon/i,
    "Hi there! I'm the RHEC virtual assistant. I can help with programs, enrollment, the testing center, parking, and more. What can I help you with?",
  ],
];

function getBotReply(input: string): string {
  for (const [pattern, reply] of BOT_RESPONSES) {
    if (pattern.test(input)) return reply;
  }
  return 'I\'m not sure about that — our staff can help! Call us at <a href="tel:5407676000">(540) 767-6000</a> or visit the <a href="/contact">Contact page</a> for the full directory.';
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hello! I'm the RHEC virtual assistant. Ask me about programs, the testing center, parking, or anything else about our campus.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [open, messages]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "bot", text: getBotReply(trimmed) }]);
    }, 700 + Math.random() * 400);
  }

  return (
    <div className="chat-root" aria-label="RHEC virtual assistant">
      {/* Collapsed FAB */}
      {!open && (
        <button
          className="chat-fab"
          onClick={() => setOpen(true)}
          aria-label="Open chat assistant"
        >
          <svg
            className="chat-site-icon"
            viewBox="0 0 48 48"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M13 8h20a4 4 0 0 1 4 4v23.5L30.8 30H13a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4Z" fill="currentColor" />
            <rect x="19" y="14" width="5" height="5" transform="rotate(45 21.5 16.5)" fill="#d85747" />
            <rect x="25" y="14" width="5" height="5" transform="rotate(45 27.5 16.5)" fill="#d85747" />
            <rect x="16" y="20" width="5" height="5" transform="rotate(45 18.5 22.5)" fill="#d85747" />
            <rect x="22" y="20" width="5" height="5" transform="rotate(45 24.5 22.5)" fill="#d85747" />
            <rect x="28" y="20" width="5" height="5" transform="rotate(45 30.5 22.5)" fill="#d85747" />
            <rect x="19" y="26" width="5" height="5" transform="rotate(45 21.5 28.5)" fill="#d85747" />
            <rect x="25" y="26" width="5" height="5" transform="rotate(45 27.5 28.5)" fill="#d85747" />
          </svg>
          <span className="chat-fab-label">Ask RHEC</span>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          className="chat-panel"
          role="dialog"
          aria-label="RHEC chat assistant"
        >
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar" aria-hidden>
                R
              </div>
              <div>
                <div className="chat-header-name">RHEC Assistant</div>
              </div>
            </div>
            <button
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 4L4 12M4 4l8 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chat-bubble chat-bubble-${m.role}`}>
                {m.role === "bot" ? (
                  <span dangerouslySetInnerHTML={{ __html: m.text }} />
                ) : (
                  m.text
                )}
              </div>
            ))}
            {typing && (
              <div className="chat-bubble chat-bubble-bot chat-typing">
                <span />
                <span />
                <span />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick prompts */}
          <div className="chat-quick">
            {QUICK_PROMPTS.map((q) => (
              <button
                key={q}
                className="chat-quick-btn"
                onClick={() => send(q)}
              >
                {q}
              </button>
            ))}
          </div>

          <form
            className="chat-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              ref={inputRef}
              className="chat-input"
              type="text"
              placeholder="Ask a question…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Chat message"
            />
            <button
              className="chat-send"
              type="submit"
              aria-label="Send"
              disabled={!input.trim()}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path d="M16 9L2 2l3 7-3 7 14-7z" fill="currentColor" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
