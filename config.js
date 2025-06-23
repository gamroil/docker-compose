"use strict";
module.exports = {
    apiKey: undefined,
    torznab: [
            "http://192.168.50.4:9696/1/api?apikey={redacted}"
    ],
    sonarr: [],
    radarr: [],
    host: "0.0.0.0",
    port: 2468,
    notificationWebhookUrls: [],
    torrentClients: [
      "qbittorrent:http://admin:{redacted}@192.168.50.4:8080"
    ],
    useClientTorrents: true,
    delay: 30,
    dataDirs: [],
    linkCategory: "cross-seed-link",
    linkDirs: [
            "/downloads/linked"
    ],
    linkType: "hardlink",
    flatLinking: false,
    matchMode: "flexible",
    skipRecheck: true,
    autoResumeMaxDownload: 52428800,
    ignoreNonRelevantFilesToResume: false,
    maxDataDepth: 2,
    torrentDir: null,
    outputDir: null,
    includeSingleEpisodes: false,
    seasonFromEpisodes: 1,
    fuzzySizeThreshold: 0.02,
    excludeOlder: true,
    excludeRecentSearch: "3 days",
    action: "inject",
    duplicateCategories: false,
    rssCadence: "30 minutes",
    searchCadence: "1 day",
    snatchTimeout: "30 seconds",
    searchTimeout: "2 minutes",
    searchLimit: 400,
    blockList: [],
};
