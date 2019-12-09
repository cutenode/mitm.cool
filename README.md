# mitm.cool

[![Greenkeeper badge](https://badges.greenkeeper.io/cutenode/mitm.cool.svg)](https://greenkeeper.io/)

A very simple Node.js app that I've deployed to Azure without configuring SSL, with the intent to allow the connection to be MTIM'ed (see [Wikipedia](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) to better understand what an MITM attack is) to auth.

## FAQ

### Couldn't this be a static site?

Yes but I wanted to learn how to set up custom domains with AppService apps on Azure. This was a project I'd thought about for a while and found a relatively simple path to do it.

If you're interested in the same, here are the docs I ended up using:

- [Configuring a custom domain name for a web app in Azure App Service using Traffic Manager](https://docs.microsoft.com/en-us/azure/app-service/web-sites-traffic-manager-custom-domain-name?WT.mc_id=mitmcool-github-ticyren)
- [Tutorial: Host your domain in Azure DNS](https://docs.microsoft.com/en-us/azure/dns/dns-delegate-domain-azure-dns?WT.mc_id=mitmcool-github-ticyren)

## Doesn't this tool already exist as neverssl.com?

I didn't know about neverssl when I created this project, but I like this project's name better 😇