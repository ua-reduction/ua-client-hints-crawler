## Unveiling the Impact of User-Agent Reduction and Client Hints: A Measurement Study (WPES'23)

This repository contains the code for our paper titled [_Unveiling the Impact of User-Agent Reduction and Client Hints: A Measurement Study_](https://homes.esat.kuleuven.be/~asenol/ua-reduction/user_agent_reduction_wpes_23.pdf).

We presented the first empirical study of the impact of user-agent string reduction and the introduction of high-entropy user-agent client hints in the Chrome browser.

For a more detailed overview please visit [the project's homepage](https://homes.esat.kuleuven.be/~asenol/ua-reduction).

### Crawler
We extended DuckDuckGo’s [Tracker Radar Collector](https://github.com/duckduckgo/tracker-radar-collector) that records certain
JavaScript API accesses, HTTP requests & responses, cookies, and other data related to web measurements. Since TRC only saves a pre-defined list of HTTP headers, we extended its allow-list by adding the ten UA-CH HTTP headers such as Sec-CH-UA-Full-Version-List, Sec-CH-UA-Arch. For both getHighEntropyValues and fingerprinting detection, we override
the relevant object’s getters to intercept the function calls.

To run crawler you can execute this command after installing npm packages by using 

```npm i``` command.

```npm run crawl -- -u 'https://www.twitter.com/login' -o ./data/ -v -f -d "fingerprints,requests,cookies,screenshots,ch_delegation" --reporters 'cli,file' -l ./data/```

### Data
The data from the crawl performed in June'23 is available for download from this [link](xxxxx).

### Analysis
**Code**: https://github.com/ua-reduction/ua-reduction-crawler/tree/main/analysis

The data used in the analysis notebooks can be downloaded also from this [link](xxxxx).
