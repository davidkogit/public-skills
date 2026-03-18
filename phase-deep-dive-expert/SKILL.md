---
name: phase-deep-dive-expert
description: >
  Deep-dives into a single phase of a project plan with expert-level detail. Use when the user wants to expand, drill into, or analyze a specific phase of their project plan. Triggers on phrases like "deep dive into phase", "expand this phase", "drill into phase X", "analyze phase", "break down phase", "detail phase", "phase deep dive", or when the user provides a project plan and wants granular action items for one specific phase. Must be used when users say "deep dive" in context of project phases. Outputs using the same card-based HTML template design as Project Success Planner.
---

# Phase Deep Dive Expert

A companion skill to Project Success Planner that takes an existing project plan and drills into a specific phase with expert-level detail. Outputs using the **same card-based HTML template design**—structured cards with Critical/Important/Nice-to-have priority tiers.

---

## Phase 1: Context Loading

### Step 1.1: Parse Input

Accept project plan in ANY format:
- HTML (Project Success Planner output)
- Markdown
- Plain text / prose
- JSON structure
- Pasted content

Extract:
- Project title and summary
- Phase names and numbers
- Action items per phase with their priority tiers (Critical/Important/Nice-to-have)
- Existing risks and considerations
- Recommended next steps

### Step 1.2: Identify Target Phase

IF the user specified a phase:
- Confirm: "Deep diving into **Phase [X]: [Phase Name]**. Proceed?"
- Proceed upon confirmation

IF the user did NOT specify a phase:
- List all discovered phases with numbers and names
- Ask: "Which phase would you like me to deep dive into? Please specify by number or name."
- Wait for user response before proceeding

### Step 1.3: Determine Domain & Expert Role

Analyze the phase content to determine the appropriate expert persona:

| Phase Type | Expert Persona |
|------------|----------------|
| Frontend/UX Development | Senior Frontend Architect, UX Designer |
| Backend/Infrastructure | Senior DevOps Engineer, Solutions Architect |
| Marketing/Campaign | Digital Marketing Strategist, Growth Hacker |
| Data/Analytics | Data Engineer, BI Analyst |
| Customer/Support | Customer Success Manager, Support Lead |
| Migration/Transition | Migration Specialist, Change Manager |
| Launch/Go-Live | Launch Manager, Release Coordinator |
| Sales/Revenue | Sales Operations Manager, Revenue Strategist |
| Content/Creative | Content Strategist, Creative Director |
| Technical Implementation | Technical Lead, Systems Integrator |

Adopt this persona for the remainder of the session. Your analysis should reflect current best practices, tools, and frameworks relevant to that domain.

---

## Phase 2: Expert Research & Intelligence

### Step 2.1: Domain Research

Using web search, research current best practices for the specific phase type:
- Industry-standard tools and platforms
- Common failure points and mitigation strategies
- Success metrics and KPIs
- Typical time estimates
- Resource allocation patterns

### Step 2.2: Phase-Specific Intelligence Gathering

For each action item in the phase, determine:
- **Sub-tasks**: Granular step-by-step breakdown (3-7 sub-tasks per action item)
- **Dependencies**: Prerequisites that must be completed first
- **Tools/Resources**: Specific software, platforms, documents, or assets needed
- **Acceptance Criteria**: Clear, testable definition of done
- **Time Estimate**: Realistic hours/days based on complexity
- **Suggested Owner**: Role responsible (not specific person names)

### Step 2.3: Risk & Pitfall Analysis

Identify:
- Phase-specific risks (what could go wrong)
- Common pitfalls (where teams typically fail)
- Mitigation strategies
- Warning signs to monitor

---

## Phase 3: Deep Dive Expansion

### Expansion Template

For each action item in the selected phase, expand into this structure:

```
ACTION ITEM: [Original Name]
Priority: [Critical/Important/Nice-to-have]

SUB-TASKS:
1. [Specific sub-task with clear deliverable]
2. [Specific sub-task with clear deliverable]
3. [Specific sub-task with clear deliverable]
...

DEPENDENCIES:
- [Prerequisite 1]
- [Prerequisite 2]

TOOLS & RESOURCES:
- [Tool/Platform 1] - [Purpose]
- [Document/Asset 2] - [Purpose]

ACCEPTANCE CRITERIA:
□ [Testable criterion 1]
□ [Testable criterion 2]
□ [Testable criterion 3]

TIME ESTIMATE:
[Hours/Days] - [Rationale]

SUGGESTED OWNER:
[Role Title]
```

---

## Phase 4: HTML Template Output

### Required Output Format

Generate a complete HTML document using this exact structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    [Full CSS styles from Project Success Planner template - SEE STYLE BLOCK BELOW]
    <title>Phase Deep Dive: [Phase Name]</title>
</head>
<body>
    <div class="document">
        <header>
            <div class="header-content">
                <div class="brand">Phase Deep Dive Expert</div>
                <h1>PHASE DEEP DIVE: [Phase Name]</h1>
                <p class="project-subtitle">[Phase objective restated from original plan]</p>
            </div>
        </header>

        <main>
            <!-- Context Section -->
            <section class="phases-overview">
                <div class="section-label">Phase Context</div>
                <div class="context-card">
                    <p><strong>Original Phase:</strong> Phase [X] of [Total]</p>
                    <p><strong>Expert Role:</strong> [Domain Expert Persona]</p>
                    <p><strong>Focus Area:</strong> [Phase type/domain]</p>
                </div>
            </section>

            <!-- Expanded Action Items -->
            <section class="action-items">
                <div class="section-label">Expanded Action Items</div>
                
                [REPEAT FOR EACH ACTION ITEM:]
                <div class="phase-block">
                    <div class="phase-block-header">
                        <span class="phase-block-number">[Item #]</span>
                        <h2 class="phase-block-title">[Action Item Name]</h2>
                    </div>
                    
                    <!-- Critical Tasks -->
                    <div class="priority-group priority-critical">
                        <div class="priority-label">Critical Sub-Tasks</div>
                        <ul class="task-list">
                            <li>[Sub-task 1] - [Time estimate]</li>
                            <li>[Sub-task 2] - [Time estimate]</li>
                            <li>[Sub-task 3] - [Time estimate]</li>
                        </ul>
                    </div>
                    
                    <!-- Important Tasks -->
                    <div class="priority-group priority-important">
                        <div class="priority-label">Dependencies & Tools</div>
                        <ul class="task-list">
                            <li><strong>Depends on:</strong> [Dependency 1], [Dependency 2]</li>
                            <li><strong>Tools:</strong> [Tool 1], [Tool 2]</li>
                            <li><strong>Owner:</strong> [Role Title]</li>
                        </ul>
                    </div>
                    
                    <!-- Nice-to-have -->
                    <div class="priority-group priority-nice">
                        <div class="priority-label">Acceptance Criteria</div>
                        <ul class="task-list">
                            <li>□ [Criterion 1]</li>
                            <li>□ [Criterion 2]</li>
                            <li>□ [Criterion 3]</li>
                        </ul>
                    </div>
                </div>
                [END REPEAT]
            </section>

            <!-- Phase-Specific Intelligence -->
            <section class="risks-section">
                <h2 class="risks-title">
                    <span class="risk-icon">⚡</span>
                    Phase-Specific Intelligence
                </h2>
                
                <h3 style="margin: 1.5rem 0 0.75rem; color: var(--critical);">Risks & Pitfalls</h3>
                <ul class="risks-list">
                    <li><span class="risk-category">[Risk Category]:</span> [Description and mitigation]</li>
                    <li><span class="risk-category">[Pitfall]:</span> [How to avoid]</li>
                </ul>
                
                <h3 style="margin: 1.5rem 0 0.75rem; color: var(--important);">Execution Sequence</h3>
                <div style="background: rgba(0,0,0,0.02); padding: 1rem; border-left: 3px solid var(--important);">
                    <p><strong>Recommended Order:</strong></p>
                    <ol style="margin: 0.5rem 0 0 1.5rem;">
                        <li>[Action Item 1] → [Action Item 2] → [Action Item 3]</li>
                    </ol>
                    <p style="margin-top: 0.75rem;"><strong>Why this order:</strong> [Rationale]</p>
                </div>
                
                <h3 style="margin: 1.5rem 0 0.75rem; color: var(--nice);">Quick Wins</h3>
                <ul class="risks-list" style="--nice: #2d6a4f;">
                    <li style="border-left: 3px solid var(--nice); padding-left: 1rem;">[High-impact, low-effort item 1]</li>
                    <li style="border-left: 3px solid var(--nice); padding-left: 1rem;">[High-impact, low-effort item 2]</li>
                </ul>
                
                <h3 style="margin: 1.5rem 0 0.75rem; color: var(--ink);">Success Metrics</h3>
                <ul style="list-style: disc; margin-left: 1.5rem;">
                    <li>[Metric 1 with target value]</li>
                    <li>[Metric 2 with target value]</li>
                    <li>[Metric 3 with target value]</li>
                </ul>
            </section>
        </main>

        <!-- Recommended Next Step -->
        <section class="next-step">
            <div class="next-step-label">Phase Completion Criteria</div>
            <div class="next-step-action">[Primary deliverable that marks phase completion]</div>
            <p class="next-step-why">
                <strong>Before moving to next phase:</strong> [What must be verified/delivered]
            </p>
        </section>

        <footer>
            <div class="footer-brand">PHASE DEEP DIVE EXPERT</div>
            <div>Generated [DATE]</div>
        </footer>
    </div>
</body>
</html>
```

---

## Template Reference

A complete HTML template is available at `templates/deep-dive-template.html`. When generating output:

1. Read the template file for exact CSS and structure
2. Replace placeholders with generated content
3. Key style elements:

**Color Variables:**
```css
:root {
    --ink: #1a1a2e;
    --paper: #faf9f7;
    --accent-gold: #c9a227;
    --accent-copper: #b87333;
    --critical: #c41e3a;
    --important: #e07c24;
    --nice: #2d6a4f;
    --muted: #6b7280;
    --card-bg: #ffffff;
    --border: #e5e2dd;
}
```

**Priority Styling:**
- Critical: Red (#c41e3a) - Left border, bullet points
- Important: Orange (#e07c24) - Left border, bullet points  
- Nice-to-have: Green (#2d6a4f) - Left border, bullet points

**Typography:**
- Headers: Cormorant Garamond (serif)
- Body/Labels: DM Sans (sans-serif)
- Code/Numbers: JetBrains Mono (monospace)

---

## Execution Rules

1. **Always ask which phase** if user doesn't specify
2. **Always adopt expert persona** matching the phase domain
3. **Always use web search** for current best practices and tools
4. **Always output HTML** - never plain chat text for the final deliverable
5. **Always include all sections**: Context, Expanded Items, Intelligence, Completion Criteria
6. **Always preserve original action items** - expand them, don't replace them
7. **Always include time estimates** with rationale
8. **Always include suggested owners** by role title
9. **Always include execution sequence** with rationale
10. **Always include quick wins** for immediate momentum

---

## Example Invocation

**User:** "Here's my project plan. Deep dive into Phase 2."

**Expected Flow:**
1. Parse plan, extract Phase 2 details
2. Identify Phase 2 as "Beta Campaign Preparation" (marketing domain)
3. Adopt Digital Marketing Strategist persona
4. Research current beta testing best practices
5. Expand each action item with sub-tasks, dependencies, tools, criteria
6. Output complete HTML using card-based template

---

## Quality Standards

- Sub-tasks must be actionable and specific (not vague statements)
- Time estimates must be realistic and justified
- Acceptance criteria must be testable (pass/fail)
- Dependencies must be explicit (what blocks what)
- Tools must be specific products/platforms (not generic descriptions)
- Risks must include mitigation strategies
- Quick wins must be genuinely high-impact/low-effort
