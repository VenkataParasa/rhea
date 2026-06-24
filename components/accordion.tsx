'use client';

export function AccordionItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="accordion-item">
      <button
        className="accordion-trigger"
        aria-expanded="false"
        onClick={(e) => {
          const btn = e.currentTarget;
          const expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!expanded));
          const body = btn.nextElementSibling as HTMLElement;
          if (body) body.classList.toggle('open', !expanded);
        }}
      >
        {question}
        <span className="acc-icon" aria-hidden>+</span>
      </button>
      <div className="accordion-body" role="region">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="accordion">
      {items.map((item, i) => (
        <AccordionItem key={i} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
