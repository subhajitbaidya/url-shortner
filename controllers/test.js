const URL = require("../models/url");



// ^Server Side Rendered Page
async function testServerSideRenderedOutput(req, res) {
  const allUrls = await URL.find({});
  return res.end(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>URL List</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-100 text-gray-900">
      <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4 text-center">URL List</h1>
        <ol class="bg-white shadow-md rounded-lg p-4">
          ${allUrls
            .map(
              (url) =>
                `<li class="border-b last:border-none py-2 flex justify-between">
                  <span class="font-mono text-sm">${url.shortId}</span>
                  <span class="text-blue-500 underline">${url.redirectURL}</span>
                  <span class="text-gray-600">Visits: ${url.visitHistory.length}</span>
                </li>`
            )
            .join("")}
        </ol>
      </div>
    </body>
  </html>
  `);
}

module.exports = {
    testServerSideRenderedOutput,
}
