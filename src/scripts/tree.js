import fs from "fs";
import path from "path";

const ignore = ["node_modules", ".git", "dist", "build", ".astro", ".vscode", "public"];

function getTree(dir, prefix = "") {
    let output = "";

    const files = fs
        .readdirSync(dir)
        .filter(file => !ignore.includes(file));

    files.forEach((file, index) => {
        const fullPath = path.join(dir, file);
        const isLast = index === files.length - 1;
        const connector = isLast ? "└── " : "├── ";

        const line = prefix + connector + file;
        console.log(line);

        output += line + "\n";

        if (fs.statSync(fullPath).isDirectory()) {
            const newPrefix = prefix + (isLast ? "    " : "│   ");
            output += getTree(fullPath, newPrefix);
        }
    });

    return output;
}

const projectPath = process.argv[2] || process.cwd();
const outputFile = "tree.txt";

console.log(projectPath);

let result = projectPath + "\n";
result += getTree(projectPath);

fs.writeFileSync(outputFile, result);

console.log(`\nArborescence enregistrée dans ${outputFile}`);