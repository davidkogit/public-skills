---
name: project-tracker-master
description: Use this skill whenever a user asks to "Update the project tracker," "Process meeting notes for the tracker," or "Generate a new task list update." It synthesizes raw meeting transcripts with existing project trackers, dynamically adapts to existing columns, generates a strictly formatted .docx tracker using a Node.js script (docx package), and automatically drafts a clean email summary.
---

# Project Tracker Master

## Core Workflow

**1. Analyze & Synthesize**
Cross-reference the new meeting transcript against the existing project tracker. Determine task statuses (Done, In Progress, Blocked/Open) and identify new tasks.

**2. Dynamic Column Mapping**
Adapt to the column structure of the baseline tracker provided by the user.

**3. Setup & Validation**
* Prerequisite: Ensure you initialize the environment by executing `npm install docx` in `/workspace`.
* Generate: Write and execute a Node.js script using the template logic provided in `scripts/TRACKER_TEMPLATE.js`. Adapt the `rowsData` and specific citations to the user's current meeting data.
  * *Expected rowsData structure:*
    ```javascript
    const rowsData = [
        ["Order Export - Reference ID", "Done", "SMCC", "Verified via Postman [1]."],
        ["Order Export - Ship Method", "In Progress", "Joseph", "Querying shipitem based on subsidiary [2]."]
    ];
    ```
* Validate: After script execution, verify the `.docx` file successfully exists at `/workspace/[Project_Name]_Tracker_Updated.docx`.
* Fallback Recovery: If the script encounters an error, attempt to debug the Node.js syntax once. If it fails again, immediately provide a Markdown version of the table in the chat and ask the user if they want you to retry the physical document generation.

**4. Output Summarization**
After generating the document, output a clean, formatted email summary of the updates. STRIP all citation brackets (e.g., [1]) from the final email text so it is clean for copy-pasting.

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
