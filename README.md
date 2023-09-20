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
The data includes the following:

- 100k_nyc_all_reqs.csv: Request and response details extracted from the crawl JSONs.
- 100k_nyc_delegation_df.csv: Information about websites where User-Agent Client Hints are delegated via HTML, obtained from the crawl JSON files.
- 100k_nyc_leaky_reqs_with_hashes.csv: Request and response details where high-entropy hints are exfiltrated to a remote servers, created by using 100k_nyc_all_reqs.csv and leakDetector code published in this [repo](https://github.com/leaky-forms/leaky-forms/tree/main/leak-detector). This leak detection methodology is based on the approach presented by [Englehardt et al.'s work](https://petsymposium.org/2018/files/papers/issue1/paper42-2018-1-source.pdf).
- site_rank.txt: The ranking details associated with each visited website.
- tracker_category.json: The category of the domains (exfiltrating or accessing the User-Agent Client Hints) determined by using [DuckDuckGo's Tracker Radar dataset](https://github.com/duckduckgo/tracker-radar/).
- tracker_owner.json: The owner of the domains (exfiltrating or accesing the User-Agent Client Hints) determined by using [DuckDuckGo's Tracker Radar dataset](https://github.com/duckduckgo/tracker-radar/).
- 100k_nyc_api_calls.csv: JavaScript calls and property accesses related to User-Agent Client Hints, including function arguments and return values, extracted from the crawl JSON files.
- 100k_nyc_fp_attempts.csv: Detailed information about fingerprinting attempts, based on applying heuristics developed by [Iqbal et al](https://arxiv.org/pdf/2008.04480.pdf) to the crawl JSON files.
- category_domains.json: The category of the domains (exfiltrating or accesing the User-Agent Client Hints) determined by using [DuckDuckGo's Tracker Radar repository](https://github.com/duckduckgo/tracker-radar/).
- succeeded_hostnames.txt: The list of URLs we succesfully visited during the crawl.


### Analysis
**Code**: https://github.com/ua-reduction/ua-reduction-crawler/tree/main/analysis

The data used in the analysis notebooks can be downloaded also from this [link](xxxxx).
