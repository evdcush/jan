const path = require("path");
const { readdirSync, lstatSync } = require("fs");
const { app } = require("electron");
const { listModels, listFiles, fileDownloadInfo } = require("@huggingface/hub");

let modelsIterator = undefined;
let currentSearchOwner = undefined;

const ALL_MODELS = [
  {
    id: "llama-2-7b-chat.Q4_K_M.gguf.bin",
    slug: "llama-2-7b-chat.Q4_K_M.gguf.bin",
    name: "Llama 2 7B Chat - GGUF",
    description: "medium, balanced quality - recommended",
    avatarUrl:
      "https://aeiljuispo.cloudimg.io/v7/https://cdn-uploads.huggingface.co/production/uploads/6426d3f3a7723d62b53c259b/tvPikpAzKTKGN5wrpadOJ.jpeg?w=200&h=200&f=face",
    longDescription:
      "GGUF is a new format introduced by the llama.cpp team on August 21st 2023. It is a replacement for GGML, which is no longer supported by llama.cpp. GGUF offers numerous advantages over GGML, such as better tokenisation, and support for special tokens. It is also supports metadata, and is designed to be extensible.",
    technicalDescription:
      'GGML_TYPE_Q4_K - "type-1" 4-bit quantization in super-blocks containing 8 blocks, each block having 32 weights. Scales and mins are quantized with 6 bits. This ends up using 4.5 bpw.',
    author: "The Bloke",
    version: "1.0.0",
    modelUrl: "https://google.com",
    nsfw: false,
    greeting: "Hello there",
    type: "LLM",
    inputs: undefined,
    outputs: undefined,
    createdAt: 0,
    updatedAt: undefined,
    fileName: "llama-2-7b-chat.Q4_K_M.gguf.bin",
    downloadUrl:
      "https://huggingface.co/TheBloke/Llama-2-7b-Chat-GGUF/resolve/main/llama-2-7b-chat.Q4_K_M.gguf",
  },
  {
    id: "llama-2-13b-chat.Q4_K_M.gguf",
    slug: "llama-2-13b-chat.Q4_K_M.gguf",
    name: "Llama 2 13B Chat - GGUF",
    description:
      "medium, balanced quality - not recommended for RAM 16GB and below",
    avatarUrl:
      "https://aeiljuispo.cloudimg.io/v7/https://cdn-uploads.huggingface.co/production/uploads/6426d3f3a7723d62b53c259b/tvPikpAzKTKGN5wrpadOJ.jpeg?w=200&h=200&f=face",
    longDescription:
      "GGUF is a new format introduced by the llama.cpp team on August 21st 2023. It is a replacement for GGML, which is no longer supported by llama.cpp. GGUF offers numerous advantages over GGML, such as better tokenisation, and support for special tokens. It is also supports metadata, and is designed to be extensible.",
    technicalDescription:
      'GGML_TYPE_Q4_K - "type-1" 4-bit quantization in super-blocks containing 8 blocks, each block having 32 weights. Scales and mins are quantized with 6 bits. This ends up using 4.5 bpw.',
    author: "The Bloke",
    version: "1.0.0",
    modelUrl: "https://google.com",
    nsfw: false,
    greeting: "Hello there",
    type: "LLM",
    inputs: undefined,
    outputs: undefined,
    createdAt: 0,
    updatedAt: undefined,
    fileName: "llama-2-13b-chat.Q4_K_M.gguf.bin",
    downloadUrl:
      "https://huggingface.co/TheBloke/Llama-2-13B-chat-GGUF/resolve/main/llama-2-13b-chat.Q4_K_M.gguf",
  },
];

function getDownloadedModels() {
  const userDataPath = app.getPath("userData");

  const allBinariesName = [];
  var files = readdirSync(userDataPath);
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(userDataPath, files[i]);
    var stat = lstatSync(filename);
    if (stat.isDirectory()) {
      // ignore
    } else if (filename.endsWith(".bin")) {
      var binaryName = path.basename(filename);
      allBinariesName.push(binaryName);
    }
  }

  const downloadedModels = ALL_MODELS.map((model) => {
    if (
      model.fileName &&
      allBinariesName
        .map((t) => t.toLowerCase())
        .includes(model.fileName.toLowerCase())
    ) {
      return model;
    }
    return undefined;
  }).filter((m) => m !== undefined);

  return downloadedModels;
}

const getNextModels = async (count) => {
  const models = [];
  let hasMore = true;

  while (models.length < count) {
    const next = await modelsIterator.next();

    // end if we reached the end
    if (next.done) {
      hasMore = false;
      break;
    }

    const model = next.value;
    const files = await listFilesByName(model.name);

    models.push({
      ...model,
      files,
    });
  }

  const result = {
    data: models,
    hasMore,
  };
  return result;
};

const searchModels = async (params) => {
  if (currentSearchOwner === params.search.owner && modelsIterator != null) {
    // paginated search
    console.debug(`Paginated search owner: ${params.search.owner}`);
    const models = await getNextModels(params.limit);
    return models;
  } else {
    // new search
    console.debug(`Init new search owner: ${params.search.owner}`);
    currentSearchOwner = params.search.owner;
    modelsIterator = listModels({
      search: params.search,
      credentials: params.credentials,
    });

    const models = await getNextModels(params.limit);
    return models;
  }
};

const listFilesByName = async (modelName) => {
  const repo = { type: "model", name: modelName };
  const fileDownloadInfoMap = {};
  for await (const file of listFiles({
    repo: repo,
  })) {
    if (file.type === "file" && file.path.endsWith(".bin")) {
      const downloadInfo = await fileDownloadInfo({
        repo: repo,
        path: file.path,
      });
      fileDownloadInfoMap[file.path] = {
        ...file,
        ...downloadInfo,
      };
    }
  }

  return fileDownloadInfoMap;
};

function getAvailableModels() {
  const downloadedModelIds = getDownloadedModels().map((model) => model.id);
  return ALL_MODELS.filter((model) => {
    if (!downloadedModelIds.includes(model.id)) {
      return model;
    }
  });
}

module.exports = {
  getDownloadedModels,
  getAvailableModels,
  searchModels,
};