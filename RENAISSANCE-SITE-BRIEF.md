# Ajoje the Renaissance: Website Brief

Single source of truth for the "RENAISSANCE: Science of Service" manifesto website.
Candidate: Adedeji-Ajoje Daniel (AJOJE), 300L Physics, University of Ibadan, Faculty of Science (FASSA).

---

## 1. Goal

One fast, mobile-first website that presents Ajoje's experience, vision (Welfare, Infrastructure, Empowerment), and a feedback channel for FASSA students. Tone: calm, trustworthy, accountable. Nothing on the site may imply completed work or promises beyond the authority of the office.

Live demo (placeholder colours): https://claude.ai/artifact/6uopmgEhqkHV5apURt23Bh

---

## 2. Image assets

Put all images in an `assets/` folder next to the site. Extensions are not confirmed yet, so use the real extension of each file (jpg, png or webp).

| File name | What it is | Where it is used |
|---|---|---|
| `flyer` | The campaign flyer | **Colour source only.** Pull the main colours and fonts from it to set the site palette. Optionally show it once in the Join section as "Download the flyer". |
| `1` | Photo of Ajoje | Hero portrait, inside the arch frame (top of the page). |
| `2` | Second photo of Ajoje | "Meet Ajoje" section, beside the bio. If it is not a portrait, use it in the Final Message section instead. |

Image rules:
- Resize each photo to about 1200px on the longest side and compress (webp preferred) so the page loads fast on mobile data.
- Always add alt text, e.g. `Portrait of Adedeji-Ajoje Daniel (Ajoje)`.
- Crop portraits to 4:5 so they fit the arch frame; keep the face in the upper half.

Palette to extract from `flyer` (fill in once seen):

| Token | Role | Hex |
|---|---|---|
| `--brand` | Main dark colour (blue band, headers) | TBD |
| `--gold` | Accent (buttons, rules, highlights) | TBD |
| `--bg` | Page background | TBD |
| `--fg` | Body text | TBD |
| `--bg-2` | Alternate section background | TBD |

Current placeholders in the demo: ultramarine `#1C2B78`, gold `#C99A2E`, paper `#F6F7FB`, ink `#121743`. Dark theme variants are also needed.

---

## 3. Links and connect

| Item | Link | Status |
|---|---|---|
| Feedback form (Share your feedback / Share an idea) | https://forms.gle/JWS52jthqaXbS76Y7 | Ready |
| Connect with Renaissance | TBD (WhatsApp channel/group, Instagram, X, or email) | Needed |
| Explore the manifesto | TBD (PDF or manifesto page) | Needed |
| Official social handles | TBD | Needed |
| Contact email | TBD | Optional |

Social and contact block (to complete):

- WhatsApp: TBD
- Instagram: TBD
- X (Twitter): TBD
- Email: TBD

Link rules:
- External links open in a new tab.
- Show email addresses and phone numbers as plain selectable text with a copy button, because `mailto:` and `tel:` links do not always work.
- Until a link exists, show the button as disabled with a small note "Link to be added".

Feedback form to-do: confirm whether the form collects email addresses or other identifying details, then add a short privacy line on the site (what is collected, how responses are used, who can see them). Only reviewed, anonymised summaries should ever be shown publicly.

---

## 4. Site structure (single page, sticky header)

Header: wordmark "Ajoje the Renaissance", links (Meet Ajoje, The Vision, Inside FASSA, Feedback Wall), theme toggle, "Have your say" button.

1. **Hero**: eyebrow, "Renaissance" headline, "Science of Service", one-line movement statement, two buttons (Explore the Renaissance, Share your perspective), equation line `S = W + I + E`, portrait `1` in arch frame.
2. **Meet Ajoje**: bio, quick facts, photo `2`.
3. **A Journey of Service**: dated timeline plus four themes (Administration, Student Support, Collaboration, Science). Undated roles sit in a separate "dates to confirm" group until verified.
4. **Leadership Begins With Service** (brand colour band): MLK and Mandela quotes, welfare-first statement.
5. **Why Renaissance?**: meaning of the name and commitment.
6. **The Vision**: three pillars (Welfare, Infrastructure, Empowerment) in columns, then three principles (Inclusivity, Open Governance, Accountability).
7. **Inside FASSA**: concern-to-action steps, Know the Office, Periodic Reports, Commitment Tracker with the five labels (Proposed, Under Discussion, In Progress, Completed, Delayed). The tracker example is labelled "Layout example, not a live record".
8. **Feedback Wall**: prompt questions, seven feedback categories, button to the form, "What we hear. What we learn." summary slot (publish only with response count, period covered, and a note that a voluntary survey does not represent every FASSAite).
9. **Join the Renaissance**: Share an idea, Connect with Renaissance, Explore the manifesto.
10. **Final message**: closing letter and signature "AJOJE THE RENAISSANCE ⏳❤️".
11. **Footer**: tagline, nav links, hashtags (#RENAISSANCE #AJOJE #ScienceOfService #FASSA), disclaimer.

---

## 5. Design direction

- **Feel:** printed campaign broadsheet meets physics handout. Calm, credible, fast.
- **Type:** a high-contrast serif for headlines (Bodoni Moda), a clean sans for reading (Hanken Grotesk), a mono face for science and labels (IBM Plex Mono). Swap to match the flyer fonts if they are better.
- **Motif:** the Renaissance arch frames the portrait. Pillars are hairline columns, not boxed cards.
- **Themes:** light and dark, with a toggle. Respect the visitor's system setting.
- **Mobile first:** must work at 400px wide with no sideways scrolling. Many visitors will be on phones with limited data.

### Motion plan (light, not 3D)

- Hero entrance: name, tagline and portrait ease in.
- Scroll reveals: sections and pillars fade up gently.
- Hover and tap touches on buttons and tracker labels.
- One physics touch: a slow gold orbit (atom rings) behind the portrait, drawn on canvas.
- Turn all motion off for visitors who set "reduce motion".
- Skip: spinning 3D models, heavy parallax, video backgrounds.

---

## 6. Content rules (accuracy)

- Confirm dates, official titles, and the full meaning of committee acronyms (NAPS, CBN LT, FLT TDB, TDB) before publishing.
- Show participation, membership and leadership roles exactly as held. Do not imply more.
- Proposed initiatives are proposals, not completed work.
- Open governance means useful, accurate information while protecting confidential material.

---

## 7. Launch checklist

- [ ] Receive `flyer`, `1`, `2` and fill in the palette table
- [ ] Add the real portrait photos
- [ ] Supply Connect and Manifesto links, social handles, contact
- [ ] Confirm the feedback form privacy details and add the privacy line
- [ ] Verify all timeline dates, titles and acronyms
- [ ] Add motion (hero entrance, scroll reveals, orbit)
- [ ] Test on a phone, in light and dark
- [ ] Choose the web address and publish

---

## Appendix: Full source copy

The complete text below is the approved wording for every section.

# RENAISSANCE — SCIENCE OF SERVICE
## AJOJE THE RENAISSANCE ⏳❤️

**A movement for inclusive representation, accountable leadership, and meaningful progress in FASSA.**

---

# 01. MEET AJOJE
## The Journey. The Philosophy. The Renaissance.

### AJOJE THE RENAISSANCE

*A student. A servant. A believer in meaningful progress.*

I am **Adedeji-Ajoje Daniel**, popularly known as **AJOJE**, a 300-level Physics student at the University of Ibadan and a proud member of the Faculty of Science.

My journey through departmental responsibilities, student committees, hall administration, and student-support initiatives has shaped my understanding of leadership. I have come to appreciate the importance of responsibility, teamwork, effective communication, and the need to make students' experiences count.

These experiences have strengthened my conviction that leadership should be more than a position to occupy. It should be an opportunity to serve, identify challenges, pursue practical solutions, and create room for every student to contribute.

For me, the number one priority of every student leader is the **welfare of the people they are serving**. Every other responsibility should be approached with this fundamental principle in mind.

This conviction is at the heart of **RENAISSANCE — Science of Service**.

Renaissance represents my commitment to a FASSA where student welfare receives deliberate attention, infrastructure is taken seriously, empowerment creates opportunities, and every student has a meaningful voice.

**[EXPLORE THE RENAISSANCE]**  
**[SHARE YOUR PERSPECTIVE]**

---

## A Journey of Service

Service is a journey of learning, responsibility, collaboration, and growth. The following experiences have contributed to my development and understanding of leadership.

### Experience and Leadership Timeline

- **2022:** Participant, Queen's Commonwealth Essay Competition (QCEC).
- **2024:** Participant, Climate Science Olympiad.
- **2024–2025:** Assistant General Secretary, NAPS.
- **2024–2025:** Vice-Chairperson, FASSA Freshers' Help Desk Committee.
- **2024–2025:** Member, NAPS Week.
- **2024–2025:** Member, CBN LT Maintenance Committee.
- **2025–2026:** General Secretary, Israel Oludotun Ransome-Kuti Hall.
- **2025–2026:** Co-Chairperson, FASSA Freshers' Help Desk Committee.
- **2026:** Co-Head, Personality Lecture, Kuti Hall Week.
- **Undated / verify:** Member, Kuti @ 70 Publicity Team.
- **Undated / verify:** Member, University of Ibadan Students' Union Freshers' Help Desk Committee.
- **Undated / verify:** Member, Faculty Lecture Theatre (FLT) TDB Committee.
- **Undated / verify:** Member, FASSA Supporters' Committee.

*Note: Confirm the dates, official titles, and full meanings of any committee acronyms before publication. Present participation, membership, and leadership roles accurately and do not imply achievements beyond the responsibilities actually held.*

### Administration and Responsibility

My experience as Assistant General Secretary of NAPS and General Secretary of Ransome-Kuti Hall has exposed me to the importance of documentation, correspondence, coordination, and administrative responsibility.

These experiences have reinforced the value of organised systems, timely communication, and attention to detail in ensuring that responsibilities are handled effectively.

### Student Support and Inclusion

Through my involvement in the FASSA Freshers' Help Desk and other student-support committees, I have seen the importance of helping students navigate information, processes, and the early stages of faculty life.

These experiences have strengthened my belief that representation must be accessible, responsive, and attentive to the needs of students across different levels and departments.

### Collaboration and Community

From publicity teams and student activities to committee assignments and lecture planning, my experiences have taught me that meaningful outcomes depend on teamwork, preparation, and a willingness to take responsibility.

Leadership is rarely a solo effort. It requires bringing people together around a shared purpose.

### Science, Curiosity, and Wider Impact

My participation in the Climate Science Olympiad reflects my interest in science and the application of knowledge to wider societal challenges.

I am also interested in data analysis, marketing, and climate change. These interests reinforce my appreciation for evidence-based thinking, effective communication, and practical approaches to problem-solving.

---

## Leadership Begins With Service

> “Everybody can be great, because everybody can serve.”
>
> — Martin Luther King Jr.

I believe that **the number one priority of every student leader is the welfare of the people they serve**. Leadership must begin with the people, remain accountable to them, and be measured by the effort made to improve their experience.

To me, service is not simply holding a position or occupying a seat at the table. It is listening to concerns, accepting responsibility, working towards practical solutions, and recognising that even the smallest duty deserves to be done excellently.

Nelson Mandela captured this spirit when he declared:

> “I stand here before you not as a prophet but as a humble servant of you, the people.”
>
> — Nelson Mandela, address following his release from prison, 11 February 1990.

These words reflect the kind of leadership I believe in: one grounded in humility, shaped by responsibility, and centred on the people it exists to serve.

My experiences in departmental administration, student committees, hall leadership, and the FASSA Freshers' Help Desk have reinforced my understanding that meaningful service requires listening, collaboration, and accountability.

This is the philosophy behind **RENAISSANCE — Science of Service**: a commitment to putting student welfare first, strengthening inclusivity, pursuing practical improvements, and making the work of student representation more open and accountable.

**Because leadership is not about being above the people. It is about being responsible to them.**

---

## Why Renaissance?

### Not Just a Name. A Renewed Commitment.

A renaissance is a rebirth: a renewal of ideas, a rediscovery of possibilities, and an opportunity to do things better.

For FASSA, Renaissance represents the belief that student leadership can continually improve through purposeful service, inclusive participation, and accountable action.

It is not a claim that everything done before was wrong. Rather, it is a commitment to strengthen what works, confront what needs improvement, and approach familiar responsibilities with renewed purpose.

We envision a faculty where students are not merely recipients of decisions, but active participants in shaping their experience; where welfare is a priority, infrastructure receives sustained attention, and empowerment extends beyond the classroom.

Renaissance is not change for its own sake. It is progress with purpose.

**This is Renaissance. This is Science of Service.**

---

# 02. WHAT AJOJE THE RENAISSANCE REPRESENTS
## The Faculty We Can Build, Together.

I believe a better faculty begins with understanding the people who make it what it is. Every department, every level, and every student contributes to the identity of FASSA.

My vision for Renaissance rests on three interconnected pillars: **Welfare, Infrastructure, and Empowerment**. These pillars are guided by a commitment to inclusivity, accountability, and open governance.

The goal is not to make promises beyond the reach of the office, but to identify real needs, pursue practical solutions with the appropriate stakeholders, and keep students informed about progress.

---

## Pillar One: Welfare
### Every Student Matters.

The primary responsibility of student representation is to pay attention to the wellbeing and legitimate concerns of the people being represented.

I believe welfare must extend across departments, levels, backgrounds, and circumstances. Every FASSAite deserves to be treated with dignity, to know where to take a concern, and to have a fair opportunity to be heard.

### What This Pillar Represents

**Accessible Communication**

Make important faculty information easier to find, understand, and access.

**Responsive Representation**

Create clear channels for raising concerns and tracking appropriate follow-up.

**Inclusive Engagement**

Ensure that feedback is not limited to the most visible or connected students.

**Practical Support**

Help students identify relevant academic, faculty, and university support resources.

**The Principle:** Welfare should be reflected in everyday decisions, not only in occasional gestures.

---

## Pillar Two: Infrastructure
### Better Spaces. Better Learning.

The environment in which students learn matters. Laboratories, lecture rooms, practical facilities, and other learning spaces affect the student experience.

Renaissance recognises that infrastructure challenges require more than complaints or campaign promises. They require documentation, prioritisation, constructive engagement with the relevant authorities, and honest updates.

### What This Pillar Represents

**Identify and Document**

Create a structured way to report facility concerns.

**Prioritise Needs**

Distinguish urgent safety concerns from maintenance and longer-term improvement requests.

**Engage the Right Stakeholders**

Work with the relevant faculty and university authorities responsible for facilities and resources.

**Communicate Progress**

Keep students informed about issues raised, responses received, and next steps.

**The Principle:** Where a problem cannot be solved immediately, students should still be able to understand what is being done about it.

---

## Pillar Three: Empowerment
### Beyond the Classroom.

A faculty experience should help students prepare not only for examinations, but also for the opportunities and challenges that follow university.

My interests in data analysis, marketing, and climate change reinforce my belief in the value of practical knowledge, access to opportunities, and the application of science to real-world problems.

### What This Pillar Represents

**Opportunity Awareness**

Make relevant scholarships, internships, competitions, training programmes, and professional opportunities easier to discover.

**Skills and Career Development**

Advocate for useful workshops, peer learning, and collaborations with relevant professionals and organisations.

**Student-Led Initiatives**

Encourage students with ideas and projects to find collaborators and explore appropriate support.

**Science with Wider Impact**

Create room for conversations about innovation, sustainability, entrepreneurship, and the application of scientific knowledge.

**The Principle:** Empowerment is not simply giving students opportunities; it is helping them discover, access, and make use of them.

---

## The Principles That Connect the Three Pillars

### Inclusivity: A Faculty for Everyone

Every student should have a meaningful opportunity to contribute, irrespective of department, level, background, religion, ethnicity, or personal connections.

Inclusivity means creating opportunities for students to be heard and ensuring that representation is not reserved for a select few.

### Open Governance: Let Students See the Work

FASSAites should have a clearer understanding of the responsibilities of their elected representatives, the work being undertaken, and the progress of important commitments.

Student representation should be understandable to the students it serves.

### Accountability: Make Service Visible

Communicate what has been done, what remains outstanding, and what obstacles exist.

Publish appropriate progress updates and reports while respecting privacy, confidentiality, and institutional rules.

Accountability requires honesty about achievements as well as limitations.

---

## Inside FASSA
### A Clearer View of Student Representation.

Open governance should be more than a statement of intent. It should be reflected in how students understand the work of their association.

**Know the Office**

Explain the responsibilities of the FASSA President, other executives, committees, and representatives.

**From Concern to Action**

Show how a student concern can be submitted, reviewed, referred to the relevant authority, and followed up.

**Commitment Tracker**

Where applicable, display the status of proposed or undertaken commitments using clear labels:

- Proposed
- Under Discussion
- In Progress
- Completed
- Delayed

**Periodic Reports**

Provide accessible summaries of activities, progress, and outstanding responsibilities.

The aim is to build a culture in which students can better understand the work of their representatives and evaluate progress on the basis of clear information.

*Open governance does not mean publishing every internal document. It means giving students useful, accurate information about responsibilities, decisions, progress, and outcomes while protecting confidential information.*

---

# 03. THE RENAISSANCE CONTINUES WITH YOU
## Your Experience. Your Ideas. Our Shared Future.

A vision for FASSA should not be built on assumptions about what students need. It should be informed by their experiences, concerns, and ideas.

Renaissance is an invitation to every FASSAite to share what is working, identify what needs improvement, and suggest practical ways forward.

Whether your concern relates to welfare, infrastructure, academic support, communication, or opportunities for growth, your perspective can help inform the conversation.

**What should FASSA prioritise? What needs to change? What should we preserve and improve?**

Let us start by listening.

---

## The Renaissance Feedback Wall

### Have Your Say.

The Renaissance Feedback Wall is a space for students to share concerns, propose improvements, and contribute ideas about the future of the Faculty of Science.

Every submission can help inform a better understanding of student priorities. Feedback will be reviewed and grouped into themes to identify common concerns and possible areas for action.

### Suggested Feedback Categories

- Student welfare
- Learning facilities and infrastructure
- Academic experience and support
- Information and communication
- Skills, career development, and empowerment
- Inclusivity and representation
- Other concerns or suggestions

**[SHARE YOUR FEEDBACK]**

Feedback form: https://forms.gle/JWS52jthqaXbS76Y7

*Privacy note: Before publishing the form, confirm whether it collects email addresses or other identifying information. Explain how responses will be used and who can access them. Only reviewed, anonymised summaries should be considered for public display.*

### What We Hear. What We Learn.

As responses are collected, this section can share a summary of the themes emerging from student feedback.

Each published summary should state the number of responses received, the period covered, and any relevant limitations. Report findings accurately without implying that a voluntary survey necessarily represents every FASSAite.

The purpose is to listen, learn, and identify areas that deserve further attention.

---

## Join the Renaissance Movement
### A Movement Is Only as Strong as the People Who Shape It.

Renaissance is an invitation to participate in a better conversation about student leadership.

We welcome students who want to share ideas, contribute their skills, identify challenges, support constructive discussions, or help develop practical solutions for the Faculty of Science.

You do not need to hold a position to contribute. You do not need to have all the answers to be part of the conversation.

What matters is a willingness to listen, participate, and contribute meaningfully.

If you believe student representation can be more inclusive, more accountable, and more responsive, there is room for you in this conversation.

**[CONNECT WITH RENAISSANCE]**

**[SHARE AN IDEA]**

**[EXPLORE THE MANIFESTO]**

*Insert the official Renaissance movement contact link and the published manifesto link when available.*

---

## A Final Message from AJOJE

### The Future of FASSA Is a Shared Responsibility.

I believe meaningful progress begins when we listen to one another, take responsibility for the challenges before us, and work together towards practical improvements.

Renaissance represents that belief: a commitment to welfare, infrastructure, empowerment, inclusivity, and accountable service.

This is bigger than a slogan. It is an invitation to think critically about the faculty we have, the faculty we aspire to build, and the role each of us can play in that journey.

Thank you for being part of the conversation.

**With purpose and a commitment to service,**

# AJOJE THE RENAISSANCE ⏳❤️

**RENAISSANCE — SCIENCE OF SERVICE**

---

## Website Footer

**RENAISSANCE — SCIENCE OF SERVICE**

A movement for inclusive representation, accountable leadership, and meaningful progress in the Faculty of Science.

- Meet AJOJE
- The Renaissance Vision
- The Manifesto
- The Feedback Wall
- Connect With Renaissance

**#RENAISSANCE #AJOJE #ScienceOfService #FASSA**

*This website communicates the candidate's experience, vision, and proposals. Proposed initiatives should not be interpreted as completed work or as guarantees of outcomes beyond the authority of the office.*