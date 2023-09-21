## Unveiling the Impact of User-Agent Reduction and Client Hints: A Measurement Study (WPES'23)

This repository contains the code for the paper titled [_Unveiling the Impact of User-Agent Reduction and Client Hints: A Measurement Study_](https://homes.esat.kuleuven.be/~asenol/ua-reduction/user_agent_reduction_wpes_23.pdf (to be presented at [WPES'23](https://www.wpes2023.conf.kth.se/)).

![UA-Reduction](https://github.com/ua-reduction/ua-reduction-crawler/assets/5788790/d0babe35-4540-4202-b13e-1e5d7752467b)

**Background:** Browsers including Chrome recently reduced the user-agent string to make it less identifying. Simultaneously, Chrome introduced several highly
identifying (or high-entropy) the [user-agent client hints (UA-CH)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Client_hints#user-agent_client_hints) to allow access to browser properties that are redacted from the user-agent string. In this empirical study, we attempt to characterize the effects of these major changes through a large-scale web measurement on the top 100K websites. Using an instrumented crawler, we quantify access to high-entropy browser features through UA-CH HTTP headers and the JavaScript API (mainly the [`navigator.userAgentData.getHighEntropyValues`](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/getHighEntropyValues) method). We measure access
delegation to third parties and investigate whether the new client hints are already used by tracking, advertising and browser fingerprinting scripts.

We presented the first empirical study of the impact of user-agent string reduction and the introduction of high-entropy user-agent client hints in the Chrome browser. For a more detailed overview please visit [the project's homepage](https://homes.esat.kuleuven.be/~asenol/ua-reduction).

### Crawler
We extended DuckDuckGo’s [Tracker Radar Collector](https://github.com/duckduckgo/tracker-radar-collector) to record HTTP headers, JavaScript API calls and HTML elements that can be used to access, opt-in or delegate User-Agent Client Hints.

Our main modifications can be found in the following files:
- https://github.com/ua-reduction/ua-reduction-crawler/blob/main/collectors/ClientHintDelegationCollector.js
- https://github.com/ua-reduction/ua-reduction-crawler/blob/main/collectors/FingerprintCollector.js
- https://github.com/ua-reduction/ua-reduction-crawler/blob/main/helpers/fingerprintDetection.js

To run crawler, first clone this repo, install the required npm packages (`npm i`) and run the following command:

```npm run crawl -- -u 'https://www.example.com' -o ./data/ -v -f -d "fingerprints,requests,cookies,screenshots,ch_delegation" --reporters 'cli,file' -l ./data/```

### Data
#### Crawl data
The data from the crawl performed in June'23 is available for download from this [link](xxxxx). For each visited website the crawler produces the following files:
-  screenshot
-  HTML source
-  a JSON file that contains HTTP request and response details, cookies, JavaScript API calls, details of User-Agent Client Hint delegation or opt-in via HTML

#### Auxiliary data
The auxiliary data we use in the analysis includes the following:

- `100k_nyc_all_reqs.csv`: Request and response details extracted from the crawl JSONs.
- `100k_nyc_delegation_df.csv`: Information about websites where User-Agent Client Hints are delegated via HTML, obtained from the crawl JSON files.
- `100k_nyc_leaky_reqs_with_hashes.csv`: Request and response details where high-entropy hints are exfiltrated to a remote servers, created by using 100k_nyc_all_reqs.csv and `leak-detector` code published in this [repo](https://github.com/leaky-forms/leaky-forms/tree/main/leak-detector). This leak detection methodology is based on the approach presented by [Englehardt et al.'s work](https://petsymposium.org/2018/files/papers/issue1/paper42-2018-1-source.pdf).
- `site_rank.txt`: The ranking details associated with each visited website.
- `tracker_category.json`: The categorization of domains (exfiltrating or accesing the User-Agent Client Hints) is established through the usage of [DuckDuckGo's Tracker Radar dataset](https://github.com/duckduckgo/tracker-radar/domains/). Within the specified folders and their corresponding subfolders, all JSON files have been processed to extract information about their categories.
- `tracker_owner.json`: The information about the owner of the tracker domains (exfiltrating or accesing the User-Agent Client Hints) is sourced from the data contained within the provided [DuckDuckGo's Tracker Radar dataset](https://github.com/duckduckgo/tracker-radar/entities/). All JSON files have been parsed, and the displayName information has been extracted.
- `100k_nyc_api_calls.csv`: JavaScript calls and property accesses related to User-Agent Client Hints, including function arguments and return values, extracted from the crawl JSON files.
- `100k_nyc_fp_attempts.csv`: Detailed information about fingerprinting attempts, based on applying heuristics developed by [Iqbal et al](https://arxiv.org/pdf/2008.04480.pdf) to the crawl JSON files.
- `category_domains.json`: The category of the domains (exfiltrating or accesing the User-Agent Client Hints) determined by using [DuckDuckGo's Tracker Radar repository](https://github.com/duckduckgo/tracker-radar/).
- `succeeded_hostnames.txt`: The list of URLs we succesfully visited during the crawl.


### Analysis
**Code**: https://github.com/ua-reduction/ua-reduction-crawler/tree/main/analysis

### Reference
```
@article{
    author    = {Asuman Senol and Gunes Acar},
    title     = {{Unveiling the Impact of User-Agent Reduction and Client Hints: A Measurement Study}},
    booktitle = {Proceedings of the 22nd Workshop on Privacy in the Electronic Society},
    year      = 2023,
    month     = November
}
```
