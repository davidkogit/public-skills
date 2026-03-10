---
name: project-tracker-master
description: Use this skill whenever a user asks to "Update the project tracker," "Process meeting notes for the tracker," or "Generate a new task list update." It synthesizes raw meeting transcripts with existing project trackers, dynamically adapts to existing columns, generates a strictly formatted .docx tracker using a Node.js script (docx package), and automatically drafts a clean email summary.
---

# Project Tracker Master

Your objective is to synthesize new meeting updates into an existing project tracker, generate a perfectly formatted `.docx` file using Node.js, and output an email summary.

## Core Workflow

**1. Analyze & Synthesize**
Cross-reference the new meeting transcript against the existing project tracker. Determine task statuses (Done, In Progress, Blocked/Open) and identify new tasks.

**2. Dynamic Column Mapping**
Adapt to the column structure of the baseline tracker provided by the user.

**3. Setup & Validation**
*   **Prerequisite:** Ensure you initialize the environment by executing `npm install docx` in `/workspace`.
*   **Generate:** Write and execute a Node.js script to create the document.
*   **Validate:** After script execution, verify the `.docx` file successfully exists at `/workspace/<Project_Name>_Tracker_Updated.docx`.
*   **Fallback Recovery:** If the script encounters an error, attempt to debug the Node.js syntax once. If it fails again, immediately provide a Markdown version of the table in the chat and ask the user if they want you to retry the physical document generation.

**4. Strict Formatting Rules**
Your Node.js generation script MUST apply these exact styles:
*   **Font:** Arial, Size 11 (22 DXA).
*   **Margins:** 0.75" (1080 DXA).
*   **Status Indicators:** TextRuns with colored circles: 🟢 (Done/Ready), 🟡 (In Progress/Pending), 🔴 (Blocked/Open).
*   **Shading:** Apply a light grey highlight (`#F2F2F2`) to the entire row of completed ("Done") tasks.
*   **Detailed Notes & Citations:** Append a "Detailed Notes & Citations" section at the bottom. Number them sequentially (e.g., [1], [2]). Inside the tracker table's "Details", include the corresponding bracket `[X]`.

**5. Output Summarization**
After generating the document, output a clean, formatted email summary of the updates separated by "Key Completions," "In Progress / Revisions," and "Open Blockers". **CRITICAL:** Strip all `[1]`, `[2]` citation brackets from the final email text so it is clean for copy-pasting.

## Node.js `docx` Boilerplate
Use this template to structure your script, ensuring properties align with the styling rules:

```javascript
const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType, HeadingLevel } = require('docx');

// Helper for borders
const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };

// Helper array for Status Cell data
function getStatusSymbol(statusText) {
    if (statusText.includes("Done")) return { symbol: "🟢 ", color: "228B22" };
    if (statusText.includes("Blocked") || statusText.includes("Open")) return { symbol: "🔴 ", color: "DC143C" };
    return { symbol: "🟡 ", color: "DAA520" }; 
}

const doc = new Document({
    sections: [{
        properties: {
            page: { margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } } // 0.75 inches
        },
        children: [
            new Paragraph({
                children: [new TextRun({ text: "Project Tracker Update", font: "Arial", size: 28, bold: true })],
                spacing: { after: 240 }
            }),
            // Insert Table logic here
            // Insert Detailed Notes loop here
        ]
    }]
});

Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync("/workspace/Tracker_Updated.docx", buffer);
    console.log("SUCCESS");
}).catch(err => {
    console.error("ERROR:", err);
});
