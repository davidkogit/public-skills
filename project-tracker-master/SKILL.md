---
name: project-tracker-master
description: Use this skill whenever a user asks to "Update the project tracker," "Process meeting notes for the tracker," or "Generate a new task list update." It synthesizes raw meeting transcripts with existing project trackers, dynamically adapts to existing columns, generates a strictly formatted .docx tracker using a Node.js script (docx package), and automatically drafts a clean email summary.
---

# Project Tracker Master

## Core Workflow

**1. Analyze & Synthesize**
Cross-reference the new meeting transcript against the existing project tracker. Determine task statuses (Done, In Progress, Blocked/Open) and identify new tasks.

**CRITICAL: EXHAUSTIVE ROW RETENTION**
You MUST NOT drop, summarize, or truncate existing tasks from the baseline tracker. Every single topic/feature currently tracked must be mapped to the output. If the input has 21 tasks, your output MUST contain all 21 tasks, plus any new ones. Count the rows before generating the script.

**2. Dynamic Column Mapping**
Adapt to the column structure of the baseline tracker provided by the user.

**3. Setup & Validation**
* Prerequisite: Ensure you initialize the environment by executing `npm install docx` in `/workspace`.
* Generate: Write and execute a Node.js script using the template logic provided in `scripts/TRACKER_TEMPLATE.js`. Adapt the `rowsData` and specific citations to the user's current meeting data.
  * *Expected rowsData structure:*
    ```javascript
    const rowsData = [
        ["Order Export - Reference ID", "Done", "IT", "Verified via Postman [1]."],
        ["Order Export - Ship Method", "In Progress", "Joe", "Querying shipitem based on subsidiary [2]."]
    ];
    ```
    **CRITICAL**: You MUST preserve all bracketed citations (e.g., [1], [19]) exactly as written within the 'Action Item / Details' column in the `.docx` document. Do not strip them from the script.

* Validate: After script execution, verify the `.docx` file successfully exists at `/workspace/[Project_Name]_Tracker_Updated.docx`.
* Fallback Recovery: If the script encounters an error, attempt to debug the Node.js syntax once. If it fails again, immediately provide a Markdown version of the table in the chat and ask the user if they want you to retry the physical document generation.

**4. Append Detailed Notes & Citations**
You MUST capture and append the complete "Detailed Notes & Citations" index at the end of the generated `.docx` document. Ensure your Node.js script writes these notes. DO NOT FORGET THIS STEP.

**5. Output Summarization**
After generating the document, output a clean, formatted email summary of the updates. **STRIP all citation brackets (e.g., [1])** from the final email text so it is clean for copy-pasting.

*Expected Email Summary Format:*
Subject: Update: [Project Name] Working Session Summary 

Team,

Please find below a summary of the technical implementations, resolved blockers, and new action items resulting from our latest working session. 

**Key Completions:**
* **[Task Name]:** [Brief resolution details].

**In Progress & Revisions:**
* **[Task Name]:** [Brief update details].

**Open Blockers & Critical Action Items:**
* **[Task Name]:** [Brief blocker details].

### STRICT DATA PRESERVATION CONSTRAINTS
1. **Exhaustive Row Retention**: NO TRUNCATION. If the original tracker has 21 items, the `.docx` MUST contain at least 21 items. Do not skip any rows.
2. **Citation Preservation (Document)**: Bracketed citations MUST remain in the `.docx`.
3. **Citation Stripping (Email Only)**: Remove citations ONLY in the email text you output to the user.
4. **Detailed Notes Section**: ALL detailed notes and citations from the baseline tracker/meeting must be transcribed at the bottom of the `.docx` file.
5. **Status Icons (Document)**: You MUST retain the colored status balls (🟢, 🟡, 🔴) in the `Status` column text when generating the rowsData array.
