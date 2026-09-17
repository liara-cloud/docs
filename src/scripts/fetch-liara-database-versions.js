const fs = require("fs");
const path = require("path");

async function main() {
  try {
    const res = await fetch("https://api.liara.ir/v1/databases/versions", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch database versions: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();

    if (!Array.isArray(data.databases)) {
      throw new Error("Invalid response: databases is not an array");
    }

    const databases = {};

    data.databases.forEach((database) => {
      databases[database.name] = database.labels;
    });

    const dirPath = path.join(process.cwd(), "src", "data");

    const outputPath = path.join(
      dirPath,
      "liara-database-versions.json"
    );

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(
      outputPath,
      JSON.stringify(databases, null, 2)
    );

    console.log(
      "liara-database-versions.json generated successfully!"
    );
  } catch (error) {
    console.error(
      "Error while fetching or writing database versions:",
      error
    );

    process.exit(1);
  }
}

main();