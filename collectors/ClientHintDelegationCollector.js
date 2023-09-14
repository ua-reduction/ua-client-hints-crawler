const BaseCollector = require("./BaseCollector");

class ClientHintDelegationCollector extends BaseCollector {
    id() {
        return "ch_delegation";
    }

  /**
   * @param {{finalUrl: string, urlFilter?: function(string):boolean, page: any}} options
   */
    async getData({page}) {
        const delegate_ch_on_equiv_attr = await page.evaluate(() => Array.from(document.querySelectorAll("meta[http-equiv='delegate-ch']"), e => (
            {
                value: e.getAttribute('value'),
                content: e.getAttribute('content')
            }
        )));
        const accept_ch_on_equiv_attr = await page.evaluate(() => Array.from(document.querySelectorAll("meta[http-equiv='accept-ch']"), e => (
            {
                value: e.getAttribute('value'),
                content: e.getAttribute('content')
            }
        )));
        const accept_ch_on_name_attr = await page.evaluate(() => Array.from(document.querySelectorAll("meta[name='accept-ch']"), e => (
            {
                value: e.getAttribute('value'),
                content: e.getAttribute('content')
            }
        )));
        const delegate_ch_on_name_attr = await page.evaluate(() => Array.from(document.querySelectorAll("meta[name='delegate-ch']"), e => (
            {
                value: e.getAttribute('value'),
                content: e.getAttribute('content')
            }
        )));
        const frame_allow_attrs = await page.evaluate(() => Array.from(document.querySelectorAll('iframe[allow]')).map(el => (
            {
                src: el.src,
                allow: el.getAttribute('allow'),
            }
        )));
        return {delegate_ch_on_equiv_attr, accept_ch_on_equiv_attr, delegate_ch_on_name_attr, accept_ch_on_name_attr, frame_allow_attrs};
    }
}

module.exports = ClientHintDelegationCollector;
