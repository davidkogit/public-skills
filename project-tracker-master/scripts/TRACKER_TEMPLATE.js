const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType, HeadingLevel, PageBreak } = require('docx');

// Helper for borders
const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };

// Helper for Status Cell data (RAG formatting)
function createStatusRun(statusText) {
    let color = "000000";
    if (statusText.includes("Done") || statusText.includes("Ready")) color = "228B22";
    else if (statusText.includes("Pending") || statusText.includes("In Progress")) color = "DAA520";
    else if (statusText.includes("Blocked") || statusText.includes("Open")) color = "DC143C";

    const symbol = (statusText.includes("Done") || statusText.includes("Ready")) ? "🟢 " : ((statusText.includes("Blocked") || statusText.includes("Open")) ? "🔴 " : "🟡 ");

    return [
        new TextRun({ text: symbol, font: "Segoe UI Emoji", size: 22 }),
        new TextRun({ text: statusText, font: "Arial", size: 22, bold: true, color: color })
    ];
}

// Helper for creating cells
function createCell(text, bold = false, width, isStatus = false, isDoneStatusRow = false) {
    let children = [];
    if (isStatus) {
        children = createStatusRun(text);
    } else {
        children = [new TextRun({ text, bold, font: "Arial", size: 22 })];
    }
    
    return new TableCell({
        borders,
        width: { size: width, type: WidthType.DXA },
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        shading: isDoneStatusRow ? { fill: "F2F2F2", type: ShadingType.CLEAR } : undefined,
        children: [new Paragraph({ children })]
    });
}

// Adjust column measurements as needed based on tracker
const tableWidth = 10080;
const w1 = 2016; 
const w2 = 1512; 
const w3 = 1512; 
const w4 = 5040;

// INJECT GENERATED DATA HERE
const rowsData = [
    ["Example Topic", "Done", "Owner Name", "Details go here [1]."]
];

const tableRows = [];
tableRows.push(new TableRow({
    children: [
        createCell("Topic / Feature", true, w1),
        createCell("Status", true, w2),
        createCell("Owner(s)", true, w3),
        createCell("Action Item / Details", true, w4)
    ]
}));

rowsData.forEach(r => {
    const isDone = r[1].includes("Done") || r[1].includes("Ready");
    tableRows.push(new TableRow({
        children: [
            createCell(r[0], true, w1, false, isDone),
            createCell(r[1], false, w2, true, isDone),
            createCell(r[2], false, w3, false, isDone),
            createCell(r[3], false, w4, false, isDone)
        ]
    }));
});

// Helper for appended Detailed Notes
function createNote(text) {
    return new Paragraph({ 
        children: [new TextRun({ text: text, font: "Arial", size: 22 })],
        spacing: { after: 120 } 
    });
}

// INJECT DETAILED NOTES ARRAY HERE
const detailedNotes = [
    "[1] Order Export Field Mapping: The orderReferenceID field in Intershop maps directly to NetSuite's otherrefnum (PO #).",
    "[2] Order Export Ship Method: Ship Method custom (custbody_shipmethod) and native (shipmethod) endpoints remain fluid."
];

const noteParagraphs = detailedNotes.map(note => createNote(note));

const doc = new Document({
    sections: [{
        properties: {
            page: {
                size: { width: 12240, height: 15840 },
                margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } 
            }
        },
        children: [
            new Paragraph({
                children: [new TextRun({ text: "Project Tracker Update", font: "Arial", size: 28, color: "005BBB", bold: true })],
                spacing: { after: 160 }
            }),
            new Table({
                width: { size: tableWidth, type: WidthType.DXA },
                columnWidths: [w1, w2, w3, w4],
                rows: tableRows
            }),
            new Paragraph({ children: [new PageBreak()] }),
            new Paragraph({
                heading: HeadingLevel.HEADING_2,
                children: [new TextRun({ text: "Detailed Notes & Citations", font: "Arial", size: 26, color: "005BBB", bold: true })],
                spacing: { before: 240, after: 240 }
            }),
            ...noteParagraphs
        ]
    }]
});

Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync("/workspace/Project_Tracker_Updated.docx", buffer);
    console.log("SUCCESS");
});
