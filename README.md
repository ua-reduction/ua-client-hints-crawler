## Unveiling the Impact of User-Agent Reduction and Client Hints: A Measurement Study (WPES'23)

This repository contains the code for our paper titled [_Unveiling the Impact of User-Agent Reduction and Client Hints: A Measurement Study_](https://homes.esat.kuleuven.be/~asenol/ua-reduction/user_agent_reduction_wpes_23.pdf).

We presented the first empirical study of the impact of user-agent string reduction and the introduction of high-entropy user-agent client hints in the Chrome browser.

For a more detailed overview please visit [the project's homepage](https://homes.esat.kuleuven.be/~asenol/ua-reduction).

### Crawler

**Code**: https://github.com/ua-reduction/ua-reduction-crawler

We extended DuckDuckGo’s [Tracker Radar Collector](https://github.com/duckduckgo/tracker-radar-collector) that records certain
JavaScript API accesses, HTTP requests & responses, cookies, and other data related to web measurements. Since TRC only saves a pre-defined list of HTTP headers, we extended its allow-list by adding the ten UA-CH HTTP headers such as Sec-CH-UA-Full-Version-List, Sec-CH-UA-Arch. For both getHighEntropyValues and fingerprinting detection, we override
the relevant object’s getters to intercept the function calls.

### Data
The data from ten crawls performed in June'23 is available for download from this [link](xxxxx).

### Analysis
**Code**: https://github.com/asumansenol/ua-reduction/notebooks

You can find the Jupyter notebooks, pickles and CSVs that are used in the [analysis folder](https://github.com/asumansenol/ua-reduction/notebooks).

# UA reduction
UA Freeze/redaction + User Agent Client Hints
### Information about the spec

- **Spec Title**: User-Agent Client Hints
- **Spec URL**: https://wicg.github.io/ua-client-hints/
- **GitHub repository**: https://github.com/WICG/ua-client-hints
- **Delegation**: https://github.com/WICG/client-hints-infrastructure/tree/main#cross-origin-hint-delegation
- **Infrastructure/mechanisms**: https://github.com/WICG/client-hints-infrastructure#readme
- **UA Reduction Trial**: https://developer.chrome.com/blog/user-agent-reduction-deprecation-trial/
- **Migrate-to-ua-ch**: https://web.dev/migrate-to-ua-ch/
- 
### Demo page
- https://user-agent-client-hints.glitch.me/

## Standard discussions:
- WebKit: https://github.com/WebKit/standards-positions/issues/70
- Mozilla: https://mozilla.github.io/standards-positions/#ua-client-hints
