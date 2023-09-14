import pandas as pd

PROCESS_DATA = True

def strip_urldefense(site, verbose=True):
    # Code from Kimberly Ruth
    try:
        if site[:8] == "https://urldefense.com/v3/__https://*22:*5Cn*22__;JSUl!!Mih3wA!HqXAMDSkQvdrWcTh90I9tZY9gxg8le0cI1a4iT8y52wuw96kj4-thh4JBFfs-KEeGhV6w7qDgQQSIoCxgjkL$":
            return site[8:]
        elif site[:7] == "https://urldefense.com/v3/__http://*22:*5Cn*22__;JSUl!!Mih3wA!HqXAMDSkQvdrWcTh90I9tZY9gxg8le0cI1a4iT8y52wuw96kj4-thh4JBFfs-KEeGhV6w7qDgQQSIr_Z7UDe$":
            return site[7:]
        else:
            return site
    except Exception as e:
        # Fail gracefully
        if site == site and verbose: # ignore case where site==NaN
            print(f'WARNING: cannot process site {site}, reason {str(e)}')
        return str(site)

def strip_url_header(url):
    if url[:7] == "http://":
        url = url[7:]
    elif url[:8] == "https://":
        url = url[8:]
    if url[:4] == "www.":
        url = url[4:]
    return url

if PROCESS_DATA:
    original_crux = pd.read_csv("./urls/crux_top_100k_202304_with_rank.csv").sort_values(by='rank')
    original_crux['fqdn'] = original_crux['origin'].map(lambda x: strip_url_header(strip_urldefense(x, verbose=False)))
    new_crux = original_crux.drop_duplicates(subset=['fqdn'], keep='first')
    new_crux.to_csv("./urls/crux_fqdn_top_100k_202304_with_rank.csv", index=False)
    new_crux['origin'].to_csv("./urls/crux_fqdn_top_100k_202304_without_rank.csv", index=False, header=False)
else:
    new_crux = pd.read_csv("crux_fqdn_top_1m_202303_with_rank.csv")

print(f'Number of sites with rank <= 100,000: {len(new_crux[new_crux["rank"] <= 100000])}') # 98,923
print(f'Number of sites with rank <= 500,000: {len(new_crux[new_crux["rank"] <= 500000])}') # 491,172
