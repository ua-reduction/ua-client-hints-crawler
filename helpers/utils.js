/**
 * @param {puppeteer.Page} page
 * @param {(arg0: string) => void} log
 */
async function acceptAllCookies(page, log = null) {
    const cookieAccepted = await page.evaluate(() => {
        let clicked = false;
        [...getCandidates(document)].forEach(candidate => {
            candidate.click();
            clicked = true;
        });
        return clicked;
    });
    log('Cookie accepted: ' + cookieAccepted);
}

module.exports = {
    acceptAllCookies
};